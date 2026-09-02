import Link from 'next/link'
import { ChevronRight, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { BRAND_NAME, CONTACT, LEGAL_NAME, SITE_URL } from '@/lib/site'
import {
  legalDocuments,
  type LegalBlock,
  type LegalDocument,
} from '@/lib/legal-content'

/** Two-digit section number, e.g. 1 → "01". */
const pad = (n: number) => String(n).padStart(2, '0')

function ContactCard({ hours }: { hours?: boolean }) {
  return (
    <div className="mt-6 rounded-2xl border border-[#dbe6f7] bg-[#f4f7fb] p-6 md:p-7">
      <p className="font-display font-bold text-[#1b3a8a] text-lg">
        {BRAND_NAME}
      </p>
      <p className="text-sm text-slate-600 mt-1">
        Operating under:{' '}
        <span className="font-semibold text-slate-700">{LEGAL_NAME}</span>
      </p>

      <div className="mt-5 grid sm:grid-cols-2 gap-4 text-sm">
        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 text-[#2dc5a2] flex-shrink-0 mt-1" />
          <span className="text-slate-600 leading-relaxed">
            NO-274, 8th Main, BEML Layout, Thubarahalli, Whitefield,
            <br />
            Bangalore – 560066, Karnataka, India
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href={`tel:${CONTACT.phone}`}
            className="flex items-start gap-3 text-slate-600 hover:text-[#1b3a8a] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#2dc5a2] flex-shrink-0 mt-0.5" />
            <span>
              <span className="block text-xs uppercase tracking-wide text-slate-400">
                Phone / WhatsApp
              </span>
              +91 8970 300 900
            </span>
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-start gap-3 text-slate-600 hover:text-[#1b3a8a] transition-colors break-all"
          >
            <Mail className="w-4 h-4 text-[#2dc5a2] flex-shrink-0 mt-0.5" />
            <span>
              <span className="block text-xs uppercase tracking-wide text-slate-400">
                Email
              </span>
              {CONTACT.email}
            </span>
          </a>
        </div>
      </div>

      {hours && (
        <div className="mt-5 pt-5 border-t border-[#dbe6f7] flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
          <span className="flex items-center gap-2 text-slate-600">
            <Clock className="w-4 h-4 text-[#2dc5a2]" />
            Monday – Saturday, 9:00 AM – 6:30 PM
          </span>
          <span className="text-slate-600">
            Emergency Service:{' '}
            <span className="font-semibold text-[#1a9e84]">24/7</span>
          </span>
        </div>
      )}

      <p className="mt-5 text-sm text-slate-500">
        Website:{' '}
        <Link href="/" className="text-[#1b3a8a] font-medium hover:underline">
          mrlmedisystems.com
        </Link>
      </p>
    </div>
  )
}

function ContactCompact() {
  return (
    <div className="mt-5 flex flex-col sm:flex-row gap-3">
      <a
        href={`mailto:${CONTACT.email}`}
        className="flex-1 flex items-center gap-3 rounded-xl border border-[#dbe6f7] bg-white px-5 py-4 hover:border-[#2dc5a2] transition-colors"
      >
        <Mail className="w-5 h-5 text-[#2dc5a2] flex-shrink-0" />
        <span className="min-w-0">
          <span className="block text-xs uppercase tracking-wide text-slate-400">
            Email
          </span>
          <span className="text-sm font-medium text-[#1b3a8a] break-all">
            {CONTACT.email}
          </span>
        </span>
      </a>
      <a
        href={`tel:${CONTACT.phone}`}
        className="flex-1 flex items-center gap-3 rounded-xl border border-[#dbe6f7] bg-white px-5 py-4 hover:border-[#2dc5a2] transition-colors"
      >
        <Phone className="w-5 h-5 text-[#2dc5a2] flex-shrink-0" />
        <span>
          <span className="block text-xs uppercase tracking-wide text-slate-400">
            Phone / WhatsApp
          </span>
          <span className="text-sm font-medium text-[#1b3a8a]">
            +91 8970 300 900
          </span>
        </span>
      </a>
    </div>
  )
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case 'p':
      return (
        <p className="text-slate-600 leading-relaxed mb-4">{block.text}</p>
      )
    case 'ul':
      return (
        <ul className="mb-5 grid gap-2.5" role="list">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2dc5a2] flex-shrink-0 mt-2" />
              <span className="text-slate-600 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'contact':
      return <ContactCard hours={block.hours} />
    case 'contact-compact':
      return <ContactCompact />
  }
}

export function LegalPage({ doc }: { doc: LegalDocument }) {
  const pageUrl = `${SITE_URL}/${doc.slug}`
  const others = legalDocuments.filter((other) => other.slug !== doc.slug)

  // Breadcrumb rich result — lets Google show "Home › Privacy Policy".
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${doc.title} | ${BRAND_NAME}`,
        description: doc.metaDescription,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-IN',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: doc.title, item: pageUrl },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      <main>
        {/* Page header */}
        <section className="bg-[#0d2260] text-white" aria-label={doc.title}>
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-20">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-sm text-white/50 mb-6"
            >
              <Link href="/" className="hover:text-[#2dc5a2] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white/80">{doc.title}</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-0.5 bg-[#2dc5a2]" />
              <span className="text-[#2dc5a2] text-sm font-semibold uppercase tracking-widest">
                Legal
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight text-balance max-w-3xl">
              {doc.title}
            </h1>

            <p className="mt-4 text-white/60 max-w-2xl leading-relaxed">
              {doc.summary}
            </p>

            <p className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70">
              <span className="uppercase tracking-wide text-xs text-[#2dc5a2] font-semibold">
                Effective Date
              </span>
              {doc.effectiveDate}
            </p>
          </div>
        </section>

        {/* Body */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 grid lg:grid-cols-[16rem_1fr] gap-10 lg:gap-14">
            {/* Table of contents */}
            {/* Desktop only — on mobile a 20-entry list would push the document
                itself most of a screen down. */}
            <aside className="hidden lg:block lg:sticky lg:top-28 lg:self-start">
              <p className="font-display font-bold text-[#1b3a8a] text-sm uppercase tracking-widest mb-4">
                On This Page
              </p>
              <ol
                className="lg:max-h-[65vh] lg:overflow-y-auto pr-1 space-y-1 border-l border-gray-200"
                role="list"
              >
                {doc.sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="flex gap-2.5 -ml-px border-l border-transparent hover:border-[#2dc5a2] pl-4 py-1.5 text-sm text-slate-500 hover:text-[#1b3a8a] transition-colors"
                    >
                      <span className="text-[#2dc5a2] font-semibold tabular-nums">
                        {pad(index + 1)}
                      </span>
                      <span>{section.heading}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </aside>

            {/* Document */}
            <article className="max-w-3xl">
              <div className="rounded-2xl border border-[#dbe6f7] bg-[#f4f7fb] p-6 md:p-8 mb-12 [&>p:last-child]:mb-0">
                {doc.intro.map((block, index) => (
                  <Block key={index} block={block} />
                ))}
              </div>

              {doc.sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 mb-11 last:mb-0"
                >
                  <h2 className="flex items-baseline gap-3 text-xl md:text-2xl font-display font-bold text-[#1b3a8a] mb-4">
                    <span className="text-[#2dc5a2] text-base tabular-nums">
                      {pad(index + 1)}
                    </span>
                    <span className="text-balance">{section.heading}</span>
                  </h2>
                  {section.blocks.map((block, blockIndex) => (
                    <Block key={blockIndex} block={block} />
                  ))}
                </section>
              ))}
            </article>
          </div>
        </div>

        {/* Other policies */}
        <section className="bg-[#f4f7fb] border-t border-gray-100" aria-label="Other policies">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
            <h2 className="font-display font-bold text-[#1b3a8a] text-lg mb-6">
              Other Policies
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {others.map((other) => (
                <Link
                  key={other.slug}
                  href={`/${other.slug}`}
                  className="group rounded-2xl border border-[#dbe6f7] bg-white p-6 hover:border-[#2dc5a2] hover:shadow-lg hover:shadow-[#1b3a8a]/5 transition-all"
                >
                  <p className="font-display font-bold text-[#1b3a8a] group-hover:text-[#1a9e84] transition-colors">
                    {other.title}
                  </p>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    {other.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2dc5a2]">
                    Read policy
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
