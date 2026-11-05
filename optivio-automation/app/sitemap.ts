import { MetadataRoute } from 'next'
import { APPS } from '@/lib/site'
import { getAllBlogPosts } from '@/lib/blog-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://optivioautomation.com'
  const now = new Date()
  const entry = (
    path: string,
    priority: number,
    changeFrequency: 'weekly' | 'monthly' | 'yearly'
  ) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  })

  return [
    entry('', 1, 'weekly'),
    entry('/apps', 0.9, 'monthly'),
    ...APPS.map((a) => entry(`/apps/${a.slug}`, 0.8, 'monthly')),
    entry('/ai-voice-agent', 0.8, 'monthly'),
    entry('/publishing', 0.8, 'weekly'),
    entry('/books', 0.6, 'weekly'),
    entry('/automation', 0.8, 'monthly'),
    entry('/about', 0.7, 'monthly'),
    entry('/blog', 0.7, 'weekly'),
    ...getAllBlogPosts().map((p) => entry(`/blog/${p.slug}`, 0.6, 'monthly')),
    entry('/privacy', 0.3, 'yearly'),
    entry('/terms', 0.3, 'yearly'),
    entry('/gdpr', 0.3, 'yearly'),
    entry('/optivia-privacy', 0.3, 'yearly'),
    entry('/games/brick-breaker-power-rush/privacy', 0.3, 'yearly'),
    entry('/games/brick-breaker-power-rush/data-deletion', 0.3, 'yearly'),
  ]
}
