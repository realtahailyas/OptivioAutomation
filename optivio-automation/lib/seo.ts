import type { Metadata } from 'next'
import { SITE_URL } from './site'

export function buildMetadata(opts: {
  title: string
  description: string
  path: string
  absoluteTitle?: boolean
}): Metadata {
  const url = `${SITE_URL}${opts.path}`
  const fullTitle = opts.absoluteTitle ? opts.title : `${opts.title} | Optivio Automation`
  const image = { url: '/og-image.png', width: 1200, height: 630, alt: 'Optivio Automation' }
  return {
    title: opts.absoluteTitle ? { absolute: opts.title } : opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: 'Optivio Automation',
      title: fullTitle,
      description: opts.description,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: opts.description,
      images: [image.url],
    },
  }
}

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  }
}
