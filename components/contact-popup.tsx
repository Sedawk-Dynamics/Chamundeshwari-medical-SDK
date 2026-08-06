'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
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
const POPUP_DELAY_MS = 1200

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

export function ContactPopup() {
  const [open, setOpen] = useState(false)
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

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), POPUP_DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  // Lock body scroll while modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  const handleBrochureDownload = async () => {
    const missing: string[] = []
    if (form.name.trim().length < 2) missing.push('full name')
    if (form.phone.trim().length < 8) missing.push('phone number')
    if (!EMAIL_RE.test(form.email.trim())) missing.push('email address')

    if (missing.length > 0) {
      setError(`Please fill in your ${formatList(missing)} above to download the brochure.`)
      document
        .getElementById(
          missing[0] === 'full name' ? 'popup-name' : missing[0] === 'phone number' ? 'popup-phone' : 'popup-email'
        )
        ?.focus()
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
          Source: 'Company brochure download (popup)',
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
          Source: 'Contact form popup — Request a Quote or Product Demo',
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

  const inputClass =
    'w-full px-3 py-2 rounded-xl border border-gray-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2dc5a2]/50 focus:border-[#2dc5a2] transition-all bg-white'

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="popup-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />

          {/* Dialog */}
          <motion.div
            key="popup-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Contact MRL Advanced MEDI Systems"
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#f4f7fb] rounded-2xl sm:rounded-3xl shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={close}
                aria-label="Close contact form"
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-500 hover:text-[#1b3a8a] hover:border-[#1b3a8a] transition-colors shadow-sm"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-4 sm:p-5 md:p-6">
                {/* Header */}
                <div className="text-center mb-3 sm:mb-5">
                  <div className="inline-flex items-center gap-3 mb-2">
                    <span className="w-6 h-0.5 bg-[#2dc5a2]" />
                    <span className="text-[#2dc5a2] text-xs font-semibold uppercase tracking-widest">
                      Get In Touch
                    </span>
                    <span className="w-6 h-0.5 bg-[#2dc5a2]" />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-[#1b3a8a] text-balance">
                    Request a Quote or Product Demo
                  </h2>
                  <p className="mt-1 text-slate-500 text-xs sm:text-sm max-w-md mx-auto">
                    Our team will get back to you within 4 hours on business days.
                  </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
                  {/* Contact info — hidden on mobile to save space */}
                  <div className="hidden lg:block lg:col-span-2 space-y-4">
                    {contactDetails.map((detail) => (
                      <div key={detail.label} className="flex gap-3 group">
                        <div className="w-10 h-10 rounded-xl bg-[#e8f9f6] flex items-center justify-center flex-shrink-0 group-hover:bg-[#2dc5a2] transition-colors mt-0.5">
                          <detail.icon className="w-4 h-4 text-[#2dc5a2] group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#1b3a8a] uppercase tracking-wide mb-0.5">
                            {detail.label}
                          </p>
                          {detail.href ? (
                            <a
                              href={detail.href}
                              className="text-slate-700 hover:text-[#1b3a8a] text-xs transition-colors"
                            >
                              {detail.value}
                            </a>
                          ) : (
                            <p className="text-slate-700 text-xs whitespace-pre-line">{detail.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Form */}
                  <div className="col-span-full lg:col-span-3">
                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                      {formState === 'success' ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="flex flex-col items-center justify-center py-10 text-center gap-3"
                        >
                          <div className="w-16 h-16 rounded-full bg-[#e8f9f6] flex items-center justify-center">
                            <CheckCircle2 className="w-8 h-8 text-[#2dc5a2]" />
                          </div>
                          <h3 className="text-lg font-display font-bold text-[#1b3a8a]">
                            Message Received!
                          </h3>
                          <p className="text-slate-500 text-sm max-w-xs">
                            Thank you for reaching out. Our team will contact you within 4 business hours.
                          </p>
                          <div className="flex gap-3 mt-2">
                            <Button
                              onClick={() => {
                                setFormState('idle')
                                setDownloadState('idle')
                                setError('')
                                setForm({ name: '', phone: '', email: '', organisation: '', message: '' })
                              }}
                              variant="outline"
                              className="border-[#1b3a8a] text-[#1b3a8a] hover:bg-[#1b3a8a] hover:text-white rounded-full text-sm"
                            >
                              Send Another
                            </Button>
                            <Button
                              onClick={close}
                              className="bg-[#2dc5a2] hover:bg-[#22a888] text-white rounded-full text-sm"
                            >
                              Close
                            </Button>
                          </div>
                        </motion.div>
                      ) : (
                        <form onSubmit={handleSubmit} noValidate>
                          <h3 className="font-display font-bold text-[#1b3a8a] text-base mb-4">
                            Send Us a Message
                          </h3>
                          <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2 sm:mb-3">
                            <div>
                              <label htmlFor="popup-name" className="block text-xs font-semibold text-slate-700 mb-1">
                                Full Name <span className="text-rose-500" aria-hidden="true">*</span>
                              </label>
                              <input
                                id="popup-name"
                                name="name"
                                type="text"
                                required
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Dr. Rajesh Kumar"
                                className={inputClass}
                              />
                            </div>
                            <div>
                              <label htmlFor="popup-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                                Phone Number <span className="text-rose-500" aria-hidden="true">*</span>
                              </label>
                              <input
                                id="popup-phone"
                                name="phone"
                                type="tel"
                                required
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="+91 98765 43210"
                                className={inputClass}
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2 sm:mb-3">
                            <div>
                              <label htmlFor="popup-email" className="block text-xs font-semibold text-slate-700 mb-1">
                                Email Address
                              </label>
                              <input
                                id="popup-email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="you@hospital.com"
                                className={inputClass}
                              />
                            </div>
                            <div>
                              <label htmlFor="popup-organisation" className="block text-xs font-semibold text-slate-700 mb-1">
                                Hospital / Organisation
                              </label>
                              <input
                                id="popup-organisation"
                                name="organisation"
                                type="text"
                                value={form.organisation}
                                onChange={handleChange}
                                placeholder="Fortis Hospitals"
                                className={inputClass}
                              />
                            </div>
                          </div>

                          <div className="mb-3">
                            <label htmlFor="popup-message" className="block text-xs font-semibold text-slate-700 mb-1">
                              Message / Equipment Required <span className="text-rose-500" aria-hidden="true">*</span>
                            </label>
                            <textarea
                              id="popup-message"
                              name="message"
                              required
                              rows={2}
                              value={form.message}
                              onChange={handleChange}
                              placeholder="Please describe the equipment you need, quantity, purchase/rental preference, and any specific requirements..."
                              className={`${inputClass} resize-none`}
                            />
                          </div>

                          {error && (
                            <p
                              role="alert"
                              className="mb-3 flex items-start gap-2 text-xs text-rose-600 bg-rose-50 border border-rose-100 rounded-xl px-3 py-2"
                            >
                              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                              <span>{error}</span>
                            </p>
                          )}

                          <Button
                            type="submit"
                            disabled={formState === 'submitting'}
                            className="w-full bg-[#1b3a8a] hover:bg-[#0d2260] text-white py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#1b3a8a]/25 transition-all h-auto disabled:opacity-70 text-sm"
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

                          {/* Brochure download */}
                          <div className="mt-4 pt-4 border-t border-dashed border-gray-200">
                            {downloadState === 'done' ? (
                              <motion.div
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-start gap-3 bg-[#e8f9f6] border border-[#2dc5a2]/30 rounded-xl px-3 py-2"
                              >
                                <FileCheck2 className="w-4 h-4 text-[#2dc5a2] flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="text-xs font-semibold text-[#1b3a8a]">
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
                                <p className="text-xs text-slate-500 mb-2">
                                  Want our full company profile? Fill in your name, phone and email above, then download instantly.
                                </p>
                                <Button
                                  type="button"
                                  onClick={handleBrochureDownload}
                                  disabled={downloadState === 'submitting'}
                                  className="w-full bg-white border-2 border-[#2dc5a2] text-[#1b3a8a] hover:bg-[#2dc5a2] hover:text-white py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all h-auto disabled:opacity-70 text-sm"
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
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function formatList(items: string[]): string {
  if (items.length === 1) return items[0]
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`
}
