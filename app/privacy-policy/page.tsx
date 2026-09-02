import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { getLegalDocument } from '@/lib/legal-content'

const doc = getLegalDocument('privacy-policy')!

export const metadata: Metadata = {
  title: doc.metaTitle,
  description: doc.metaDescription,
  alternates: { canonical: `/${doc.slug}` },
  openGraph: {
    type: 'article',
    url: `/${doc.slug}`,
    title: doc.metaTitle,
    description: doc.metaDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: doc.metaTitle,
    description: doc.metaDescription,
  },
}

export default function PrivacyPolicyPage() {
  return <LegalPage doc={doc} />
}
