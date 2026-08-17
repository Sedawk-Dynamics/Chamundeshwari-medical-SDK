'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { BrochureDownload } from '@/components/brochure-download'

/**
 * Quote / demo enquiries are handled by the MRL CRM form. Submissions land
 * directly in the CRM as leads — nothing is posted from this page, so the
 * iframe is the single source of truth for that data.
 */
const CRM_FORM_URL = 'https://crm.mrlmedisystems.com/forms/wtl/27abedb60c041c58384ff01e7b3c0894'

const contactDetails = [
  {
    icon: MapPin,
    label: 'Office Address',
    value:
      'NO-274, 8th Main, BEML Layout, Thubarahalli, Whitefield, Bangalore – 560066, Karnataka, India',
  },
  {
    icon: Phone,
    label: 'Phone & WhatsApp',
    value: '+91 8970 300 900',
    href: 'tel:+918970300900',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'support@mrlmedisystems.com',
    href: 'mailto:support@mrlmedisystems.com',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon – Sat: 9:00 AM – 6:30 PM\n24/7 Emergency Service Available',
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#f4f7fb]" aria-label="Contact MRL Advanced MEDI Systems">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-0.5 bg-[#2dc5a2]" />
            <span className="text-[#2dc5a2] text-sm font-semibold uppercase tracking-widest">
              Get In Touch
            </span>
            <span className="w-8 h-0.5 bg-[#2dc5a2]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="text-3xl md:text-4xl font-display font-bold text-[#1b3a8a] text-balance"
          >
            Request a Quote or Product Demo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-slate-500 max-w-xl mx-auto text-[0.95rem]"
          >
            Our team will get back to you within 4 hours on business days. For urgent equipment
            support, call us directly — we are available 24/7.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactDetails.map((detail) => (
              <div key={detail.label} className="flex gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-[#e8f9f6] flex items-center justify-center flex-shrink-0 group-hover:bg-[#2dc5a2] transition-colors mt-0.5">
                  <detail.icon className="w-5 h-5 text-[#2dc5a2] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1b3a8a] uppercase tracking-wide mb-1">
                    {detail.label}
                  </p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="text-slate-700 hover:text-[#1b3a8a] text-sm transition-colors"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-slate-700 text-sm whitespace-pre-line">{detail.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map embed — links through to the office address on Google Maps */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Whitefield+Spaces+Pvt.+Ltd.%2C+8th+Main+Rd%2C+BEML+Layout+6th+Stage%2C+BEML+Layout%2C+Brookefield%2C+Bengaluru%2C+Karnataka+560066"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block rounded-2xl overflow-hidden border border-gray-200 h-52 relative group"
              aria-label="Open Whitefield Spaces Pvt. Ltd., BEML Layout, Brookefield, Bengaluru location on Google Maps"
            >
              <iframe
                title="MRL Advanced MEDI Systems location"
                src="https://www.google.com/maps?q=Whitefield+Spaces+Pvt.+Ltd.%2C+8th+Main+Rd%2C+BEML+Layout+6th+Stage%2C+BEML+Layout%2C+Brookefield%2C+Bengaluru%2C+Karnataka+560066&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: 'none' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-hidden="true"
              />
              <span className="absolute inset-0 bg-[#1b3a8a]/0 group-hover:bg-[#1b3a8a]/10 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[#1b3a8a] text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                  Open in Google Maps
                </span>
              </span>
            </a>
          </motion.div>

          {/* CRM enquiry form + gated brochure */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="bg-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="font-display font-bold text-[#1b3a8a] text-xl mb-1">
                Send Us a Message
              </h3>
              <p className="text-slate-500 text-sm mb-5">
                Fill in the form below and your enquiry reaches our team instantly.
              </p>

              <div className="rounded-2xl overflow-hidden border border-gray-100 bg-white">
                <iframe
                  title="Request a quote or product demo"
                  src={CRM_FORM_URL}
                  loading="lazy"
                  /* Sized to the CRM form's actual content — labels wrap on
                     narrow screens, so mobile gets a little extra room. */
                  className="w-full h-[620px] sm:h-[560px] block border-0"
                  sandbox="allow-top-navigation allow-forms allow-scripts allow-same-origin allow-popups"
                  allowFullScreen
                />
              </div>

              <p className="mt-4 text-xs text-slate-400 text-center">
                Form not loading?{' '}
                <a
                  href={CRM_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#2dc5a2] hover:text-[#22a888] underline underline-offset-2"
                >
                  Open it in a new tab
                </a>{' '}
                or call us on{' '}
                <a href="tel:+918970300900" className="font-semibold text-[#1b3a8a]">
                  +91 8970 300 900
                </a>
                .
              </p>
            </div>

            {/* Brochure download — its own component; opens a modal that
                collects contact details before releasing the PDF. */}
            <BrochureDownload />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
