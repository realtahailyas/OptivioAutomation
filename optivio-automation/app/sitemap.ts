import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://optivioautomation.com'

  const blogPosts = [
    'how-much-do-missed-calls-cost-your-dental-practice',
    'ai-receptionist-vs-human-receptionist-real-cost-comparison',
    'why-hvac-companies-are-switching-to-ai-phone-answering',
    'what-is-an-ai-voice-agent-complete-guide-for-service-businesses',
  ]

  const blogRoutes = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogRoutes,
  ]
}
