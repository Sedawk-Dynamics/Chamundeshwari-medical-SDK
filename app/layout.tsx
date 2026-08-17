import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import {
  BRAND_NAME,
  CIN,
  CONTACT,
  LEGAL_NAME,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
  SOCIAL_PROFILES,
  VERIFICATION,
} from '@/lib/site'

// Build the verification block from whatever tokens are filled in.
// Anything left blank in lib/site.ts is omitted rather than rendered empty.
const verificationOther: Record<string, string> = {}
if (VERIFICATION.bing) verificationOther['msvalidate.01'] = VERIFICATION.bing
if (VERIFICATION.facebookDomain) {
  verificationOther['facebook-domain-verification'] = VERIFICATION.facebookDomain
}

const verification: Metadata['verification'] | undefined =
  VERIFICATION.google || Object.keys(verificationOther).length > 0
    ? {
        ...(VERIFICATION.google ? { google: VERIFICATION.google } : {}),
        ...(Object.keys(verificationOther).length > 0
          ? { other: verificationOther }
          : {}),
      }
    : undefined

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s | ${BRAND_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: BRAND_NAME,
  keywords: [
    'medical equipment supplier Bangalore',
    'ICU equipment Bangalore',
    'NICU equipment supplier India',
    'OT equipment supplier',
    'ventilator supplier Bangalore',
    'patient monitor supplier',
    'anesthesia machine dealer',
    'defibrillator supplier India',
    'medical equipment rental Bangalore',
    'refurbished medical equipment India',
    'biomedical calibration services',
    'medical equipment AMC Bangalore',
    'Chamundeshwari Medical Systems',
    'MRL Advanced MEDI Systems',
  ],
  authors: [{ name: LEGAL_NAME, url: SITE_URL }],
  creator: LEGAL_NAME,
  publisher: LEGAL_NAME,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  category: 'Medical Equipment',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: LEGAL_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mrlmedisystems',
    creator: '@mrlmedisystems',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  verification,
  manifest: '/manifest.webmanifest',
  icons: {
    // MRL Advanced MEDI Systems lockup, generated from /images/mrl-logo.png.
    // Google indexes the 48x48 multiple for search results — keep it square.
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: [{ url: '/favicon.ico' }],
    apple: [{ url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

// Structured data — lets Google show the business name, logo, address and
// phone as a knowledge panel / rich result instead of a plain blue link.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: BRAND_NAME,
      legalName: LEGAL_NAME,
      alternateName: LEGAL_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon-512x512.png`,
        width: 512,
        height: 512,
      },
      image: `${SITE_URL}/favicon-512x512.png`,
      description: SITE_DESCRIPTION,
      identifier: CIN,
      email: CONTACT.email,
      telephone: CONTACT.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: CONTACT.street,
        addressLocality: CONTACT.city,
        addressRegion: CONTACT.region,
        postalCode: CONTACT.postalCode,
        addressCountry: CONTACT.country,
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: CONTACT.phone,
          email: CONTACT.email,
          contactType: 'customer service',
          areaServed: 'IN',
          availableLanguage: ['en', 'hi', 'kn'],
        },
      ],
      sameAs: SOCIAL_PROFILES,
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#localbusiness`,
      name: BRAND_NAME,
      parentOrganization: { '@id': `${SITE_URL}/#organization` },
      url: SITE_URL,
      image: `${SITE_URL}/favicon-512x512.png`,
      description: SITE_DESCRIPTION,
      telephone: CONTACT.phone,
      email: CONTACT.email,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: CONTACT.street,
        addressLocality: CONTACT.city,
        addressRegion: CONTACT.region,
        postalCode: CONTACT.postalCode,
        addressCountry: CONTACT.country,
      },
      areaServed: { '@type': 'Country', name: 'India' },
      knowsAbout: [
        'ICU medical equipment',
        'NICU medical equipment',
        'Operation theater equipment',
        'Ventilators',
        'Patient monitors',
        'Anesthesia machines',
        'Defibrillators',
        'Medical equipment rental',
        'Biomedical calibration',
      ],
      sameAs: SOCIAL_PROFILES,
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: BRAND_NAME,
      description: SITE_DESCRIPTION,
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en-IN',
    },
  ],
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1b3a8a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
