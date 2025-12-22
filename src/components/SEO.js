import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Helmet from 'react-helmet'

function withSiteUrl(siteUrl, maybePathOrUrl) {
  if (!maybePathOrUrl) return null
  if (/^https?:\/\//i.test(maybePathOrUrl)) return maybePathOrUrl
  const normalizedSiteUrl = siteUrl?.replace(/\/+$/, '') || ''
  const normalizedPath = String(maybePathOrUrl).startsWith('/')
    ? maybePathOrUrl
    : `/${maybePathOrUrl}`
  return `${normalizedSiteUrl}${normalizedPath}`
}

function stripHtml(html) {
  if (!html) return ''
  return String(html).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
}

/**
 * Central SEO component.
 * - Keeps titles/descriptions consistent across pages
 * - Adds canonical + OpenGraph/Twitter cards
 * - Adds Schema.org JSON-LD for Organization + (Article / Workshop)
 *
 * Note: we keep JSON-LD minimal because workshop dates/places are often free-form strings.
 */
const SEO = ({
  title,
  description,
  pathname,
  image,
  type = 'website', // 'website' | 'article' | 'workshop'
  publishedTime,
  modifiedTime,
  noindex = false,
}) => {
  const data = useStaticQuery(graphql`
    query SeoDefaultsQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
          language
          author
          organization {
            name
            email
            phone
            areaServed
          }
        }
      }
    }
  `)

  const meta = data?.site?.siteMetadata || {}
  const siteUrl = meta.siteUrl || ''

  const resolvedTitle = title ? `${title} | ${meta.title}` : meta.title
  const resolvedDescription = (description || meta.description || '').trim()
  const canonical = withSiteUrl(siteUrl, pathname) || siteUrl
  const ogImage = withSiteUrl(siteUrl, image)

  const orgName = meta?.organization?.name || meta.title

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: orgName,
    url: siteUrl,
    email: meta?.organization?.email,
    telephone: meta?.organization?.phone,
    areaServed: meta?.organization?.areaServed,
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: siteUrl,
    name: meta.title,
    inLanguage: meta.language || 'es',
  }

  const jsonLd = [organizationJsonLd, websiteJsonLd]

  if (type === 'article') {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: title,
      description: resolvedDescription,
      mainEntityOfPage: canonical,
      url: canonical,
      image: ogImage ? [ogImage] : undefined,
      author: meta.author
        ? { '@type': 'Person', name: meta.author }
        : undefined,
      publisher: { '@type': 'Organization', name: orgName, url: siteUrl },
      datePublished: publishedTime,
      dateModified: modifiedTime || publishedTime,
      inLanguage: meta.language || 'es',
    })
  }

  if (type === 'workshop') {
    // We use a conservative schema shape so we don’t lie about structured fields we can’t guarantee.
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: title,
      description: stripHtml(resolvedDescription),
      url: canonical,
      organizer: { '@type': 'Organization', name: orgName, url: siteUrl },
      image: ogImage ? [ogImage] : undefined,
      inLanguage: meta.language || 'es',
    })
  }

  return (
    <Helmet
      htmlAttributes={{ lang: meta.language || 'es' }}
      title={resolvedTitle}
      link={[{ rel: 'canonical', href: canonical }]}
      meta={[
        { name: 'description', content: resolvedDescription },
        { property: 'og:title', content: resolvedTitle },
        { property: 'og:description', content: resolvedDescription },
        { property: 'og:type', content: type === 'article' ? 'article' : 'website' },
        { property: 'og:url', content: canonical },
        ...(ogImage ? [{ property: 'og:image', content: ogImage }] : []),
        { name: 'twitter:card', content: ogImage ? 'summary_large_image' : 'summary' },
        { name: 'twitter:title', content: resolvedTitle },
        { name: 'twitter:description', content: resolvedDescription },
        ...(ogImage ? [{ name: 'twitter:image', content: ogImage }] : []),
        ...(noindex ? [{ name: 'robots', content: 'noindex, nofollow' }] : []),
      ].filter(Boolean)}
    >
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}

export default SEO

