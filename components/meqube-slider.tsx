'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone } from 'lucide-react'

interface Slide {
  image: string
  alt: string
  eyebrow?: string
  title?: string
  lines?: string[]
}

const slides: Slide[] = [
  {
    image: '/images/meqube/slider1.jpg',
    alt: 'Pre-owned medical equipment by Meqube',
    eyebrow: 'Pre-owned',
    title: 'Medical Equipment',
  },
  {
    image: '/images/meqube/slider2.jpg',
    alt: 'Meqube repair, contract, rental, calibration and training services',
    lines: [
      'Repair Services',
      'Contract Services',
      'Rental Services',
      'Calibration Services',
      'Biomedical Training Program',
    ],
  },
]

export function MequbeSlider() {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), [])

  useEffect(() => {
    const timer = setInterval(next, 7000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[index]

  return (
    <section
      id="meqube-range"
      className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#0d1f52]"
      aria-label="Meqube equipment and services"
      aria-roledescription="carousel"
    >
      {/* Slide backgrounds */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.image}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover opacity-35"
            priority
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f52]/95 via-[#1b3a8a]/80 to-[#0d1f52]/50" />

      {/* Floating gradient orbs */}
      <div
        className="absolute top-20 right-[10%] w-96 h-96 rounded-full bg-[#2dc5a2]/10 blur-3xl float-slow pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-[5%] w-72 h-72 rounded-full bg-[#1b3a8a]/20 blur-3xl float-medium pointer-events-none"
        aria-hidden="true"
      />

      {/* ECG line decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 opacity-10 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M0 48 L200 48 L240 48 L260 8 L280 88 L300 28 L320 68 L340 48 L600 48 L640 48 L660 8 L680 88 L700 28 L720 68 L740 48 L1000 48 L1040 48 L1060 8 L1080 88 L1100 28 L1120 68 L1140 48 L1440 48"
            stroke="#2dc5a2"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 lg:py-24 w-full">
        <div className="max-w-3xl min-h-[17rem] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {slide.eyebrow && (
                <p className="text-2xl md:text-4xl font-display text-white/90 mb-1">
                  {slide.eyebrow}
                </p>
              )}
              {slide.title && (
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white leading-tight text-balance">
                  {slide.title}
                </h1>
              )}
              {slide.lines && (
                <h1 className="text-2xl md:text-4xl lg:text-[2.75rem] font-display font-medium text-white uppercase leading-snug">
                  {slide.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h1>
              )}
            </motion.div>
          </AnimatePresence>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <a
              href="tel:+918220618897"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 rounded-full text-base font-semibold backdrop-blur-sm transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </motion.div>
        </div>

        {/* Slide dots */}
        <div className="flex gap-2 mt-12" role="tablist" aria-label="Hero slides">
          {slides.map((s, i) => (
            <button
              key={s.image}
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-10 bg-[#2dc5a2]' : 'w-4 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
