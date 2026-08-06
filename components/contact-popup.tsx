'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { submitToWeb3Forms } from '@/lib/web3forms'

const POPUP_DELAY_MS = 1200

type FormState = 'idle' | 'submitting' | 'success'

export function ContactPopup() {
  const [open, setOpen] = useState(false)
  const [formState, setFormState] = useState<FormState>('idle')
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

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const inputClass =
    'w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2dc5a2]/50 focus:border-[#2dc5a2] transition-all bg-white'

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
            aria-label="Send us a message"
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
              {/* Close button */}
              <button
                onClick={close}
                aria-label="Close contact form"
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-slate-500 hover:text-[#1b3a8a] hover:bg-gray-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-6 sm:p-8">
                {formState === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-8 text-center gap-3"
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
                    <h3 className="font-display font-bold text-[#1b3a8a] text-xl mb-1">
                      Send Us a Message
                    </h3>
                    <p className="text-slate-500 text-sm mb-5">
                      Our team will get back to you within 4 hours on business days.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 mb-3">
                      <div>
                        <label htmlFor="popup-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
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
                        <label htmlFor="popup-phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
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

                    <div className="grid sm:grid-cols-2 gap-3 mb-3">
                      <div>
                        <label htmlFor="popup-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
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
                        <label htmlFor="popup-organisation" className="block text-xs font-semibold text-slate-700 mb-1.5">
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

                    <div className="mb-4">
                      <label htmlFor="popup-message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Message / Equipment Required <span className="text-rose-500" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="popup-message"
                        name="message"
                        required
                        rows={3}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Please describe the equipment you need, quantity, purchase/rental preference, and any specific requirements..."
                        className={`${inputClass} resize-none`}
                      />
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
