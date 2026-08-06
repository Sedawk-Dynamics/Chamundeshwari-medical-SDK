'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  BadgeCheck,
  Headphones,
  Package,
  BarChart3,
  Zap,
  HandCoins,
} from 'lucide-react'

const reasons = [
  {
    icon: BadgeCheck,
    title: 'Authorised & Certified',
    body: 'We are authorised dealers of globally recognised medical equipment brands, ensuring every product meets stringent quality standards.',
  },
  {
    icon: Headphones,
    title: '24/7 Biomedical Support',
    body: 'Our factory-trained engineers are available around the clock for emergency servicing, calibration and preventive maintenance.',
  },
  {
    icon: Package,
    title: 'End-to-End Solutions',
    body: 'From procurement, installation and staff training to AMC and end-of-life disposal — we manage the entire equipment lifecycle.',
  },
  {
    icon: BarChart3,
    title: 'Flexible Commercial Models',
    body: 'Buy, rent or lease — choose the model that fits your budget and operational needs, with no hidden charges or lock-ins.',
  },
  {
    icon: Zap,
    title: 'Rapid Delivery & Setup',
    body: 'We deliver, install and commission equipment quickly, minimising downtime and ensuring your facility is always ready for patients.',
  },
  {
    icon: HandCoins,
    title: 'Competitive & Transparent Pricing',
    body: 'Our pricing is straightforward and competitive. We work within your budget without compromising equipment quality or support.',
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-white" aria-label="Why choose MRL Advanced MEDI Systems">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#1b3a8a]/15">
              <Image
                src="/images/hero-icu.png"
                alt="Premium ICU setup by MRL Advanced MEDI Systems"
                width={640}
                height={480}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1b3a8a]/40 to-transparent" />
            </div>

            {/* Quote overlay */}
            <motion.blockquote
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute bottom-6 left-6 right-6 glass-navy rounded-2xl p-5"
            >
              <p className="text-white/90 text-sm leading-relaxed italic mb-3">
                &ldquo;Our goal is simple: ensure no hospital ever has to compromise patient care
                because of an equipment failure. We are committed to being there whenever and
                wherever we are needed.&rdquo;
              </p>
              <footer className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#2dc5a2] flex items-center justify-center text-white text-xs font-bold">
                  M
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">Madhu Sudhan Guni (IIMB Alumnus)</p>
                  <p className="text-white/60 text-xs">Founder & CEO, MRL Advanced MEDI Systems</p>
                </div>
              </footer>
            </motion.blockquote>
          </motion.div>

          {/* Right: content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-10 h-0.5 bg-[#2dc5a2]" />
              <span className="text-[#2dc5a2] text-sm font-semibold uppercase tracking-widest">
                Why Choose Us
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05, duration: 0.6 }}
              className="text-3xl md:text-4xl font-display font-bold text-[#1b3a8a] text-balance mb-4"
            >
              Your Trusted Partner in Critical-Care Equipment
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-slate-600 leading-relaxed mb-10"
            >
              With over 30 years of experience in the healthcare industry, MRL Advanced MEDI Systems
              is the partner hospitals and clinicians turn to when quality, reliability and
              responsiveness matter most.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, i) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09, duration: 0.5 }}
                  className="group flex gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#e8f9f6] group-hover:bg-[#2dc5a2] flex items-center justify-center flex-shrink-0 transition-colors mt-0.5">
                    <reason.icon className="w-5 h-5 text-[#2dc5a2] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#1b3a8a] text-sm mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{reason.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
