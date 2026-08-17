import type { MetadataRoute } from 'next'
import { BRAND_NAME, LEGAL_NAME, SITE_DESCRIPTION } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${BRAND_NAME} — ${LEGAL_NAME}`,
    short_name: 'MRL Medi Systems',
    description: SITE_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1b3a8a',
    icons: [
      { src: '/favicon-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/favicon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/favicon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
