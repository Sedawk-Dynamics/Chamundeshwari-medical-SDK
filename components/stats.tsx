'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface Stat {
  value: number
  suffix: string
  label: string
  sub: string
}

const stats: Stat[] = [
  { value: 200, suffix: '+', label: 'Hospitals & Clinics', sub: 'Served across India' },
  { value: 5000, suffix: '+', label: 'Equipment Serviced', sub: 'Successful service calls' },
  { value: 10, suffix: '+', label: 'Years of Excellence', sub: 'In critical-care equipment' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', sub: 'Based on post-service surveys' },
  { value: 4, suffix: ' hrs', label: 'Avg. Response Time', sub: 'For emergency service calls' },
  { value: 3, suffix: '', label: 'Core Verticals', sub: 'ICU, NICU & OT' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      aria-label="Company statistics"
    >
      {/* Navy gradient background */}
      <div className="absolute inset-0 bg-[#0d2260]" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, #2dc5a2 0%, transparent 50%), radial-gradient(circle at 80% 50%, #1b3a8a 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />
      {/* ECG pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 200" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0 100 L300 100 L320 100 L340 20 L360 180 L380 60 L400 140 L420 100 L720 100 L740 100 L760 20 L780 180 L800 60 L820 140 L840 100 L1140 100 L1160 100 L1180 20 L1200 180 L1220 60 L1240 140 L1260 100 L1440 100"
            stroke="#2dc5a2"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-[#2dc5a2]" />
            <span className="text-[#2dc5a2] text-sm font-semibold uppercase tracking-widest">
              Our Impact
            </span>
            <span className="w-8 h-0.5 bg-[#2dc5a2]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white text-balance">
            Numbers That Reflect Our Commitment
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10 rounded-3xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-white/5 hover:bg-white/10 transition-colors p-8 text-center flex flex-col items-center gap-2"
            >
              <p className="text-3xl md:text-4xl font-display font-bold text-[#2dc5a2]">
                <Counter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-white font-semibold text-sm">{stat.label}</p>
              <p className="text-white/50 text-xs">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
