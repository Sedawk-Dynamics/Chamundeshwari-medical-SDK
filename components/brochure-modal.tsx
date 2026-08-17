'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, Loader2, FileCheck2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { submitToWeb3Forms } from '@/lib/web3forms'

export const BROCHURE_URL = '/brochure/MRL-Advanced-Medi-Systems-Company-Profile.pdf'
export const BROCHURE_FILENAME = 'MRL-Advanced-Medi-Systems-Company-Profile.pdf'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

type State = 'idle' | 'submitting' | 'done'

type Props = {
  open: boolean
  onClose: () => void
  /** Tags the submission so brochure leads can be told apart by entry point. */
  source: string
}

/**
 * Contact details are collected before the brochure PDF is handed over. Used
 * both by the download banner in the contact section and by the popup that
 * greets visitors on page load.
 */
export function BrochureModal({ open, onClose, source }: Props) {
  const [state, setState] = useState<State>('idle')
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', phone: '', email: '', organisation: '' })
  // Hidden from humans; only bots fill it in. See submitToWeb3Forms.
  const [botcheck, setBotcheck] = useState('')

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const startDownload = () => {
    const link = document.createElement('a')
    link.href = BROCHURE_URL
    link.download = BROCHURE_FILENAME
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const missing: string[] = []
    if (form.name.trim().length < 2) missing.push('full name')
    if (form.phone.trim().length < 8) missing.push('phone number')
    if (!EMAIL_RE.test(form.email.trim())) missing.push('email address')

    if (missing.length > 0) {
      setError(`Please fill in your ${formatList(missing)} to download the brochure.`)
      document
        .getElementById(
          missing[0] === 'full name'
            ? 'brochure-name'
            : missing[0] === 'phone number'
              ? 'brochure-phone'
              : 'brochure-email'
        )
        ?.focus()
      return
    }

    setState('submitting')
    setError('')

    try {
      await submitToWeb3Forms({
        subject: `Brochure download — ${form.name}${form.organisation ? ` (${form.organisation})` : ''}`,
        replyTo: form.email.trim(),
        botcheck,
        fields: {
          'Full Name': form.name.trim(),
          Phone: form.phone.trim(),
          Email: form.email.trim(),
          Organisation: form.organisation.trim() || '—',
          Source: source,
          'Submitted At': new Date().toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            dateStyle: 'medium',
            timeStyle: 'short',
          }),
        },
      })

      startDownload()
      setState('done')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setState('idle')
    }
  }

  const inputClass =
    'w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2dc5a2]/50 focus:border-[#2dc5a2] transition-all bg-white'

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="brochure-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Dialog */}
          <motion.div
            key="brochure-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Download our company brochure"
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full max-w-lg bg-white rounded-3xl shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                aria-label="Close brochure download form"
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-slate-500 hover:text-[#1b3a8a] hover:bg-gray-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-6 sm:p-8">
                {state === 'done' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-8 text-center gap-3"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#e8f9f6] flex items-center justify-center">
                      <FileCheck2 className="w-8 h-8 text-[#2dc5a2]" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-[#1b3a8a]">
                      Your download has started
                    </h3>
                    <p className="text-slate-500 text-sm max-w-xs">
                      Thank you, {form.name.split(' ')[0]}. Didn&apos;t get the file? Use the button
                      below to download it again.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-2 justify-center">
                      <Button
                        onClick={startDownload}
                        variant="outline"
                        className="border-[#1b3a8a] text-[#1b3a8a] hover:bg-[#1b3a8a] hover:text-white rounded-full text-sm"
                      >
                        Download Again
                      </Button>
                      <Button
                        onClick={onClose}
                        className="bg-[#2dc5a2] hover:bg-[#22a888] text-white rounded-full text-sm"
                      >
                        Close
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <h3 className="font-display font-bold text-[#1b3a8a] text-xl mb-1 pr-10">
                      Download Our Company Brochure
                    </h3>
                    <p className="text-slate-500 text-sm mb-5">
                      Share your details and the PDF downloads instantly.
                    </p>

                    {/* Honeypot — hidden from people and screen readers, so
                        anything that fills it in is a bot. */}
                    <input
                      type="checkbox"
                      name="botcheck"
                      checked={Boolean(botcheck)}
                      onChange={(e) => setBotcheck(e.target.checked ? 'bot' : '')}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />

                    <div className="grid sm:grid-cols-2 gap-3 mb-3">
                      <div>
                        <label
                          htmlFor="brochure-name"
                          className="block text-xs font-semibold text-slate-700 mb-1.5"
                        >
                          Full Name <span className="text-rose-500" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="brochure-name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Dr. Rajesh Kumar"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="brochure-phone"
                          className="block text-xs font-semibold text-slate-700 mb-1.5"
                        >
                          Phone Number <span className="text-rose-500" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="brochure-phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3 mb-5">
                      <div>
                        <label
                          htmlFor="brochure-email"
                          className="block text-xs font-semibold text-slate-700 mb-1.5"
                        >
                          Email Address <span className="text-rose-500" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="brochure-email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@hospital.com"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="brochure-organisation"
                          className="block text-xs font-semibold text-slate-700 mb-1.5"
                        >
                          Hospital / Organisation
                        </label>
                        <input
                          id="brochure-organisation"
                          name="organisation"
                          type="text"
                          value={form.organisation}
                          onChange={handleChange}
                          placeholder="Fortis Hospitals"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {error && (
                      <p
                        role="alert"
                        className="mb-4 flex items-start gap-2 text-xs text-rose-600 bg-rose-50 border border-rose-100 rounded-xl px-3 py-2"
                      >
                        <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>{error}</span>
                      </p>
                    )}

                    <Button
                      type="submit"
                      disabled={state === 'submitting'}
                      className="w-full bg-[#1b3a8a] hover:bg-[#0d2260] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#1b3a8a]/25 transition-all h-auto disabled:opacity-70"
                    >
                      {state === 'submitting' ? (
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
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

/** "name", "name and phone", "name, phone and email" */
function formatList(items: string[]): string {
  if (items.length === 1) return items[0]
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`
}
