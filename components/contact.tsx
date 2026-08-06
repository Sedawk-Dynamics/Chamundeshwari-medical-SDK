'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Download,
  Loader2,
  FileCheck2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { submitToWeb3Forms } from '@/lib/web3forms'

const BROCHURE_URL = '/brochure/MRL-Advanced-Medi-Systems-Company-Profile.pdf'
const BROCHURE_FILENAME = 'MRL-Advanced-Medi-Systems-Company-Profile.pdf'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

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

type FormState = 'idle' | 'submitting' | 'success'
type DownloadState = 'idle' | 'submitting' | 'done'

export function Contact() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [downloadState, setDownloadState] = useState<DownloadState>('idle')
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    organisation: '',
    message: '',
  })

  /**
   * The brochure is gated behind the contact details: name, phone and a valid
   * email must be filled in before the file is handed over. The message field
   * is not required — someone may only want the brochure.
   */
  const handleBrochureDownload = async () => {
    const missing: string[] = []
    if (form.name.trim().length < 2) missing.push('full name')
    if (form.phone.trim().length < 8) missing.push('phone number')
    if (!EMAIL_RE.test(form.email.trim())) missing.push('email address')

    if (missing.length > 0) {
      setError(`Please fill in your ${formatList(missing)} above to download the brochure.`)
      document.getElementById(missing[0] === 'full name' ? 'name' : missing[0] === 'phone number' ? 'phone' : 'email')?.focus()
      return
    }

    setDownloadState('submitting')
    setError('')

    try {
      await submitToWeb3Forms({
        subject: `Brochure download — ${form.name}${form.organisation ? ` (${form.organisation})` : ''}`,
        fields: {
          'Full Name': form.name,
          Phone: form.phone,
          Email: form.email,
          Organisation: form.organisation || '—',
          Message: form.message || '—',
          Source: 'Company brochure download',
        },
      })

      const link = document.createElement('a')
      link.href = BROCHURE_URL
      link.download = BROCHURE_FILENAME
      document.body.appendChild(link)
      link.click()
      link.remove()

      setDownloadState('done')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setDownloadState('idle')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    setError('')

    try {
      await submitToWeb3Forms({
        subject: `Quote request — ${form.name}${form.organisation ? ` (${form.organisation})` : ''}`,
        fields: {
          'Full Name': form.name,
          Phone: form.phone,
          Email: form.email || '—',
          Organisation: form.organisation || '—',
          Message: form.message,
          Source: 'Contact form — Request a Quote or Product Demo',
        },
      })
      setFormState('success')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setFormState('idle')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  return (
    <section id="contact" className="py-24 bg-[#f4f7fb]" aria-label="Contact MRL Advanced Medi Systems">
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
                title="MRL Advanced Medi Systems location"
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

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
              {formState === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center gap-4"
                >
                  <div className="w-20 h-20 rounded-full bg-[#e8f9f6] flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-[#2dc5a2]" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-[#1b3a8a]">
                    Message Received!
                  </h3>
                  <p className="text-slate-500 text-sm max-w-xs">
                    Thank you for reaching out. Our team will contact you within 4 business hours.
                  </p>
                  <Button
                    onClick={() => { setFormState('idle'); setDownloadState('idle'); setError(''); setForm({ name: '', phone: '', email: '', organisation: '', message: '' }) }}
                    variant="outline"
                    className="mt-2 border-[#1b3a8a] text-[#1b3a8a] hover:bg-[#1b3a8a] hover:text-white rounded-full"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="font-display font-bold text-[#1b3a8a] text-xl mb-6">
                    Send Us a Message
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Full Name <span className="text-rose-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Dr. Rajesh Kumar"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2dc5a2]/50 focus:border-[#2dc5a2] transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Phone Number <span className="text-rose-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2dc5a2]/50 focus:border-[#2dc5a2] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@hospital.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2dc5a2]/50 focus:border-[#2dc5a2] transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="organisation" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Hospital / Organisation
                      </label>
                      <input
                        id="organisation"
                        name="organisation"
                        type="text"
                        value={form.organisation}
                        onChange={handleChange}
                        placeholder="Fortis Hospitals"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2dc5a2]/50 focus:border-[#2dc5a2] transition-all"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Message / Equipment Required <span className="text-rose-500" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Please describe the equipment you need, quantity, purchase/rental preference, and any specific requirements..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2dc5a2]/50 focus:border-[#2dc5a2] transition-all resize-none"
                    />
                  </div>

                  {error && (
                    <p
                      role="alert"
                      className="mb-4 flex items-start gap-2 text-sm text-rose-600 bg-rose-50 border border-rose-100 rounded-xl px-3 py-2"
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{error}</span>
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full bg-[#1b3a8a] hover:bg-[#0d2260] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#1b3a8a]/25 transition-all h-auto disabled:opacity-70"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {/* Brochure download — unlocked once the details above are filled in */}
                  <div className="mt-6 pt-6 border-t border-dashed border-gray-200">
                    {downloadState === 'done' ? (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start gap-3 bg-[#e8f9f6] border border-[#2dc5a2]/30 rounded-xl px-4 py-3"
                      >
                        <FileCheck2 className="w-5 h-5 text-[#2dc5a2] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-[#1b3a8a]">
                            Your brochure download has started
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5">
                            Didn&apos;t get it?{' '}
                            <a
                              href={BROCHURE_URL}
                              download={BROCHURE_FILENAME}
                              className="font-semibold text-[#2dc5a2] hover:text-[#22a888] underline underline-offset-2"
                            >
                              Download again
                            </a>
                          </p>
                        </div>
                      </motion.div>
                    ) : (
                      <>
                        <p className="text-xs text-slate-500 mb-3">
                          Want our full company profile? Fill in your name, phone and email above,
                          then download the brochure instantly.
                        </p>
                        <Button
                          type="button"
                          onClick={handleBrochureDownload}
                          disabled={downloadState === 'submitting'}
                          className="w-full bg-white border-2 border-[#2dc5a2] text-[#1b3a8a] hover:bg-[#2dc5a2] hover:text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all h-auto disabled:opacity-70"
                        >
                          {downloadState === 'submitting' ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Preparing your brochure...
                            </>
                          ) : (
                            <>
                              <Download className="w-4 h-4" />
                              Download Company Brochure (PDF)
                            </>
                          )}
                        </Button>
                      </>
                    )}
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/** "name", "name and phone", "name, phone and email" */
function formatList(items: string[]): string {
  if (items.length === 1) return items[0]
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`
}
