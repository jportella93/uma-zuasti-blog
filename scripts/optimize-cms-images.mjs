import fs from 'node:fs/promises'
import path from 'node:path'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

let sharp
try {
  sharp = require('sharp')
} catch (e) {
  // This repo uses Gatsby v2 and doesn't necessarily depend on `sharp` directly.
  // Gatsby bundles it via `gatsby-plugin-sharp`, so fall back to that copy.
  sharp = require('gatsby-plugin-sharp/node_modules/sharp')
}

const argv = new Set(process.argv.slice(2))

const getArgValue = (name, fallback) => {
  const prefix = `${name}=`
  for (const arg of process.argv.slice(2)) {
    if (arg.startsWith(prefix)) return arg.slice(prefix.length)
  }
  return fallback
}

const DRY_RUN = argv.has('--dry-run')
const VERBOSE = argv.has('--verbose')

const MAX_WIDTH = Number(getArgValue('--max-width', '2400'))
const JPEG_QUALITY = Number(getArgValue('--jpeg-quality', '80'))
const WEBP_QUALITY = Number(getArgValue('--webp-quality', '80'))
const MIN_BYTES = Number(getArgValue('--min-bytes', String(450 * 1024)))

const BASE_DIR = path.resolve(process.cwd(), 'static', 'img')
const SUPPORTED_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp'])

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      yield* walk(fullPath)
    } else if (entry.isFile()) {
      yield fullPath
    }
  }
}

const formatBytes = bytes => {
  if (!Number.isFinite(bytes)) return String(bytes)
  const units = ['B', 'KB', 'MB', 'GB']
  let v = bytes
  let i = 0
  while (v >= 1024 && i < units.length - 1) {
    v /= 1024
    i += 1
  }
  return `${v.toFixed(i === 0 ? 0 : 1)} ${units[i]}`
}

async function optimizeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  if (!SUPPORTED_EXTS.has(ext)) return { status: 'skipped' }

  const beforeStat = await fs.stat(filePath)
  const beforeSize = beforeStat.size

  const image = sharp(filePath, { failOnError: false }).rotate()
  const meta = await image.metadata()

  // If metadata is missing, don't touch the file.
  if (!meta || !meta.format) return { status: 'skipped' }

  const shouldResize = Number.isFinite(meta.width) && meta.width > MAX_WIDTH

  // Fast-path: if it's already small enough and not oversized, skip re-encoding work.
  if (!shouldResize && beforeSize < MIN_BYTES) {
    return { status: 'unchanged', beforeSize, afterSize: beforeSize, meta }
  }

  let pipeline = image
  if (shouldResize) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true })
  }

  // Re-encode in-place (same extension), focusing on size reduction.
  // We intentionally do NOT change formats here to avoid URL changes and keep risk low.
  if (ext === '.jpg' || ext === '.jpeg') {
    pipeline = pipeline.jpeg({
      quality: JPEG_QUALITY,
      progressive: true,
      mozjpeg: true,
    })
  } else if (ext === '.png') {
    pipeline = pipeline.png({
      compressionLevel: 9,
      adaptiveFiltering: true,
    })
  } else if (ext === '.webp') {
    pipeline = pipeline.webp({
      quality: WEBP_QUALITY,
    })
  }

  const afterBuffer = await pipeline.toBuffer()
  const afterSize = afterBuffer.length

  // Only replace when we resized, or when we get a meaningful win.
  const meaningfulWin = afterSize < beforeSize * 0.95
  if (!shouldResize && !meaningfulWin) {
    return { status: 'unchanged', beforeSize, afterSize, meta }
  }

  if (DRY_RUN) {
    return { status: 'would_update', beforeSize, afterSize, meta, resized: shouldResize }
  }

  const tmpPath = `${filePath}.tmp`
  await fs.writeFile(tmpPath, afterBuffer)
  await fs.rename(tmpPath, filePath)

  return { status: 'updated', beforeSize, afterSize, meta, resized: shouldResize }
}

async function main() {
  const startedAt = Date.now()
  let scanned = 0
  let updated = 0
  let unchanged = 0
  let skipped = 0
  let failed = 0
  let bytesSaved = 0

  try {
    await fs.access(BASE_DIR)
  } catch (e) {
    console.error(`Missing directory: ${BASE_DIR}`)
    process.exitCode = 1
    return
  }

  for await (const filePath of walk(BASE_DIR)) {
    scanned += 1
    try {
      const res = await optimizeFile(filePath)
      if (res.status === 'updated') {
        updated += 1
        bytesSaved += (res.beforeSize || 0) - (res.afterSize || 0)
        if (VERBOSE) {
          console.log(
            `updated: ${path.relative(process.cwd(), filePath)} ` +
              `(${formatBytes(res.beforeSize)} → ${formatBytes(res.afterSize)})`
          )
        }
      } else if (res.status === 'would_update') {
        updated += 1
        bytesSaved += (res.beforeSize || 0) - (res.afterSize || 0)
        console.log(
          `would update: ${path.relative(process.cwd(), filePath)} ` +
            `(${formatBytes(res.beforeSize)} → ${formatBytes(res.afterSize)})`
        )
      } else if (res.status === 'unchanged') {
        unchanged += 1
      } else {
        skipped += 1
      }
    } catch (e) {
      failed += 1
      console.warn(`failed: ${path.relative(process.cwd(), filePath)} (${e?.message || e})`)
    }
  }

  const elapsedMs = Date.now() - startedAt
  console.log(
    [
      `CMS image optimization ${DRY_RUN ? '(dry-run)' : ''}`.trim(),
      `scanned=${scanned}`,
      `updated=${updated}`,
      `unchanged=${unchanged}`,
      `skipped=${skipped}`,
      `failed=${failed}`,
      `saved=${formatBytes(bytesSaved)}`,
      `time=${(elapsedMs / 1000).toFixed(1)}s`,
    ].join(' | ')
  )

  if (failed > 0) process.exitCode = 1
}

main()
