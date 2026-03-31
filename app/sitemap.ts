import { MetadataRoute } from 'next'
import { getAllProjectSlugs } from '@/lib/projects-data'

const baseUrl = 'https://www.lesavoirfaireswiss.ch'

export default function sitemap(): MetadataRoute.Sitemap {
  // Get all project slugs
  const projectSlugs = getAllProjectSlugs()

  // Define service slugs
  const serviceSlugs = ['peinture', 'platrerie', 'isolation', 'recyclage']

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]

  // Service pages
  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Project pages
  const projectPages: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${baseUrl}/projets/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...staticPages,
    ...servicePages,
    ...projectPages,
  ]
}
