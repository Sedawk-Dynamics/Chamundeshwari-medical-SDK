'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { ArrowRight, ShieldCheck, Truck, HeartPulse, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const badges = [
  { icon: ShieldCheck, text: 'ISO Certified Quality' },
  { icon: Truck, text: 'Pan-India Delivery' },
  { icon: HeartPulse, text: '24/7 Service Support' },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

type Slide =
  | {
      id: string
      type: 'hero'
      image: string
    }
  | {
      id: string
      type: 'simple'
      image: string
      eyebrow?: string
      title?: string
      lines?: string[]
    }

const slides: Slide[] = [
  {
    id: 'critical-care',
    type: 'hero',
    image: '/images/hero-icu.png',
  },
  {
    id: 'pre-owned',
    type: 'simple',
    image: '/images/meqube/slider1.jpg',
    eyebrow: 'Pre-owned',
    title: 'Medical Equipment',
  },
  {
    id: 'services',
    type: 'simple',
    image: '/images/meqube/slider2.jpg',
    lines: [
      'Repair Services',
      'Contract Services',
      'Rental Services',
      'Calibration Services',
      'Biomedical Training Program',
    ],
  },
]

export function Hero() {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), [])

  useEffect(() => {
    const timer = setInterval(next, 7000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[index]

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0d1f52]"
      aria-label="Hero section"
      aria-roledescription="carousel"
    >
      {/* Background image with overlay — crossfades per slide */}
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
            alt=""
            fill
            className={slide.type === 'hero' ? 'object-cover opacity-55' : 'object-cover opacity-60'}
            priority
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f52]/85 via-[#1b3a8a]/55 to-[#0d1f52]/35" />

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

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-24 lg:py-32 w-full">
        <AnimatePresence mode="wait">
          {slide.type === 'hero' ? (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              {/* Pill badge */}
              <motion.div
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="inline-flex items-center gap-2 bg-[#2dc5a2]/15 border border-[#2dc5a2]/30 text-[#4dd4b5] text-sm font-medium px-4 py-1.5 rounded-full mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#2dc5a2] animate-pulse" />
                Advancing Healthcare, Enhancing Lives
              </motion.div>

              {/* Headline */}
              <motion.h1
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight text-balance mb-6"
              >
                Premium Medical{' '}
                <span className="text-[#2dc5a2]">Equipment</span> for{' '}
                Critical Care
              </motion.h1>

              {/* Sub-headline */}
              <motion.p
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-lg md:text-xl text-blue-100/80 leading-relaxed mb-10 max-w-2xl"
              >
                MRL Advanced Medi Systems supplies, services and rents top-grade ICU,
                NICU and OT equipment to hospitals and clinics across India — ensuring
                the highest standard of patient care.
              </motion.p>

              {/* CTAs */}
              <motion.div
                custom={3}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="flex flex-col sm:flex-row gap-4 mb-16"
              >
                <Button
                  onClick={() => scrollTo('#equipment')}
                  className="group bg-[#2dc5a2] hover:bg-[#1a9e84] text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:shadow-xl hover:shadow-[#2dc5a2]/30 hover:-translate-y-0.5 h-auto"
                >
                  Explore Equipment
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  onClick={() => scrollTo('#contact')}
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 rounded-full text-base font-semibold backdrop-blur-sm h-auto bg-transparent"
                >
                  Request a Demo
                </Button>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                custom={4}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-4"
              >
                {badges.map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-white/90"
                  >
                    <Icon className="w-4 h-4 text-[#2dc5a2]" />
                    {text}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl min-h-[17rem] flex flex-col justify-center"
            >
              {slide.eyebrow && (
                <p className="text-2xl md:text-4xl font-display text-white/90 mb-1">
                  {slide.eyebrow}
                </p>
              )}
              {slide.title && (
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white leading-tight text-balance">
                  {slide.title}
                </h2>
              )}
              {slide.lines && (
                <h2 className="text-2xl md:text-4xl lg:text-[2.75rem] font-display font-medium text-white uppercase leading-snug">
                  {slide.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h2>
              )}

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <a
                  href="tel:+918970300900"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 rounded-full text-base font-semibold backdrop-blur-sm transition-all hover:-translate-y-0.5 w-fit"
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Slide dots */}
        <div className="flex gap-2 mt-12" role="tablist" aria-label="Hero slides">
          {slides.map((s, i) => (
            <button
              key={s.id}
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs"
        aria-hidden="true"
      >
        <span>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
