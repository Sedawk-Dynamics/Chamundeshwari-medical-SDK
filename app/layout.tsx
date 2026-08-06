import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

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
  title:
    'MRL Advanced MEDI Systems | Chamundeshwari Medical Systems Pvt. Ltd.',
  description:
    'Chamundeshwari Medical Systems Pvt. Ltd. — supplying, servicing and renting world-class ICU, NICU and OT equipment across India. Over 30 years of experience in critical-care medical equipment.',
  keywords:
    'Chamundeshwari Medical Systems, MRL Advanced MEDI Systems, refurbished medical equipment, ventilator, patient monitor, anesthesia machine, defibrillator, ICU NICU OT equipment, medical equipment rental, biomedical calibration',
  authors: [{ name: 'Chamundeshwari Medical Systems Pvt. Ltd.' }],
  creator: 'Chamundeshwari Medical Systems Pvt. Ltd.',
  metadataBase: new URL('https://www.meqube.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.meqube.com',
    siteName: 'Chamundeshwari Medical Systems Pvt. Ltd.',
    title: 'MRL Advanced MEDI Systems | Chamundeshwari Medical Systems Pvt. Ltd.',
    description:
      'Supplying, servicing and renting world-class ICU, NICU and OT equipment across India.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chamundeshwari Medical Systems Pvt. Ltd. | MRL Advanced MEDI Systems',
    description:
      'Supplying, servicing and renting world-class ICU, NICU and OT equipment across India.',
  },
  icons: {
    // MRL Advanced MEDI Systems lockup, generated from /images/mrl-logo.png
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
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
    <html lang="en" className="bg-background">
      <body
        className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
