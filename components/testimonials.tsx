'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Dr. Rajesh Kumar',
    designation: 'Head of Critical Care',
    company: 'Fortis Hospitals, Bangalore',
    initials: 'RK',
    stars: 5,
    quote:
      'MRL Advanced MEDI Systems has been an exceptional partner for our ICU. Their ventilators and patient monitors are of the highest quality, and their after-sales support is truly outstanding. Whenever we have had a critical equipment issue, their engineers have responded within hours — day or night. I highly recommend them to any hospital serious about patient outcomes.',
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    designation: 'Neonatologist & NICU In-charge',
    company: 'Cloudnine Hospital, Bangalore',
    initials: 'PS',
    stars: 5,
    quote:
      'Equipping a NICU requires absolute precision and reliability. The incubators and neonatal ventilators supplied by MRL have performed flawlessly since installation. What impressed us most was their team\'s deep clinical knowledge — they understood our specific requirements and helped us select exactly the right configurations. An invaluable partner for our neonatal unit.',
  },
  {
    id: 3,
    name: 'Mr. Suresh Naik',
    designation: 'Hospital Administrator',
    company: 'Sparsh Hospital, Bangalore',
    initials: 'SN',
    stars: 5,
    quote:
      'We chose MRL Advanced MEDI Systems for their transparent pricing and comprehensive AMC packages. Their rental model was perfect when we were scaling our OT capacity — we got top-tier equipment without the capital expenditure. The team is professional, punctual and incredibly responsive. We have now expanded our partnership to cover our entire biomedical fleet.',
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((a) => (a + 1) % testimonials.length)

  return (
    <section
      className="py-24 bg-[#f4f7fb]"
      aria-label="Client testimonials"
    >
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
              Client Stories
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
            Trusted by Leading Healthcare Institutions
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100"
            >
              {/* Quote icon */}
              <div className="w-12 h-12 rounded-xl bg-[#e8f9f6] flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-[#2dc5a2]" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6" aria-label={`${testimonials[active].stars} out of 5 stars`}>
                {Array.from({ length: testimonials[active].stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-700 text-lg leading-relaxed mb-8 italic">
                &ldquo;{testimonials[active].quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1b3a8a] flex items-center justify-center text-white font-bold font-display text-sm flex-shrink-0">
                  {testimonials[active].initials}
                </div>
                <div>
                  <p className="font-display font-bold text-[#1b3a8a]">
                    {testimonials[active].name}
                  </p>
                  <p className="text-slate-500 text-sm">
                    {testimonials[active].designation} &middot;{' '}
                    {testimonials[active].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all ${i === active
                      ? 'w-8 h-2 bg-[#1b3a8a]'
                      : 'w-2 h-2 bg-gray-300 hover:bg-[#1b3a8a]/40'
                    }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-slate-600 hover:bg-[#1b3a8a] hover:border-[#1b3a8a] hover:text-white transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-slate-600 hover:bg-[#1b3a8a] hover:border-[#1b3a8a] hover:text-white transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
