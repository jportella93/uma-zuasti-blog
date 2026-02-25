# AGENTS.md

## Cursor Cloud specific instructions

This is a **Gatsby v2** static site for "Uma Zuasti" (psychology & dance therapy). There is no backend, no database, and no Docker.

### Node version

The project requires **Node.js v20.18.0** (see `.nvmrc`). Use `nvm use` in the workspace root to activate it.

### Key commands

| Task | Command |
|------|---------|
| Install deps | `npm ci --no-audit --no-fund` |
| Dev server | `npm run develop` (runs on port 8000) |
| Production build | `npm run build` |
| Format (Prettier) | `npm run format` |
| Format check | `npx prettier --check "{gatsby-*.js,src/**/*.js}"` |

### Gotchas

- **`NODE_OPTIONS=--openssl-legacy-provider`** is already wired into the `develop` and `build` scripts in `package.json`. If you invoke `gatsby` directly, you must set this env var yourself.
- The `npm run develop` script runs `rimraf .cache public` before starting Gatsby, so the first start takes ~30-60 s for image processing. Subsequent hot-reloads are fast.
- There is **no test suite** — `npm test` is a no-op (`exit 1`).
- Prettier reports style issues on the existing codebase; this is the repo's current state and not a breakage.
