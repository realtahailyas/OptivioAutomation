export default function sitemap() {
  return [
    {
      url: 'https://optivioautomation.com',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ]
}
