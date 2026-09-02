import type { MetadataRoute } from 'next'
import { legalDocuments } from '@/lib/legal-content'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  // The marketing site is a single page — its section links (#about, #rental, …)
  // are anchors on that same URL, so they are deliberately not listed. The
  // policy pages below are real routes and do belong here.
  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...legalDocuments.map((doc) => ({
      url: `${SITE_URL}/${doc.slug}`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
  ]
}
