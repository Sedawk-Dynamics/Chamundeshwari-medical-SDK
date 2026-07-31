'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Heart, Lightbulb, Users, ShieldCheck } from 'lucide-react'

const cards = [
  {
    icon: Target,
    color: '#1b3a8a',
    bg: '#e8f0ff',
    label: 'Our Mission',
    heading: 'Equip Every Caregiver for Excellence',
    body:
      'To provide healthcare institutions across India with reliable, cutting-edge medical equipment — enabling clinicians to deliver the highest standard of patient care without compromise.',
  },
  {
    icon: Eye,
    color: '#2dc5a2',
    bg: '#e8f9f6',
    label: 'Our Vision',
    heading: 'A Healthier India Through Better Equipment',
    body:
      'To become India\'s most trusted name in critical-care equipment solutions — transforming every ICU, NICU and Operating Theatre into a world-class environment where lives are saved and improved.',
  },
]

const values = [
  {
    icon: Heart,
    title: 'Patient-First',
    body: 'Every product and decision is guided by its impact on patient safety and recovery outcomes.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    body: 'We deliver what we promise — transparent pricing, authentic products and honest service.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    body: 'We continually update our catalogue with the latest advances in medical technology.',
  },
  {
    icon: Users,
    title: 'Partnership',
    body: 'We build long-term relationships with hospitals, acting as an extension of their biomedical team.',
  },
]

export function MissionVision() {
  return (
    <section
      id="mission-vision"
      className="py-24 bg-white"
      aria-label="Mission, Vision and Values"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-0.5 bg-[#2dc5a2]" />
            <span className="text-[#2dc5a2] text-sm font-semibold uppercase tracking-widest">
              What Drives Us
            </span>
            <span className="w-8 h-0.5 bg-[#2dc5a2]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-3xl md:text-4xl font-display font-bold text-[#1b3a8a] text-balance"
          >
            Mission, Vision & Values
          </motion.h2>
        </div>

        {/* Mission & Vision cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {cards.map((card, i) => (
            <motion.article
              key={card.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative rounded-3xl border border-gray-100 bg-white p-10 shadow-sm hover:shadow-xl hover:shadow-[#1b3a8a]/8 transition-all hover:-translate-y-1 overflow-hidden"
            >
              {/* Subtle background orb */}
              <div
                className="absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ background: card.color }}
                aria-hidden="true"
              />
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: card.bg }}
              >
                <card.icon className="w-7 h-7" style={{ color: card.color }} />
              </div>
              <span
                className="text-xs font-semibold uppercase tracking-widest mb-2 block"
                style={{ color: card.color }}
              >
                {card.label}
              </span>
              <h3 className="text-xl font-display font-bold text-[#1b3a8a] mb-4 text-balance">
                {card.heading}
              </h3>
              <p className="text-slate-600 leading-relaxed text-[0.95rem]">{card.body}</p>
            </motion.article>
          ))}
        </div>

        {/* Values grid */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-display font-bold text-[#1b3a8a] text-center mb-10"
          >
            Our Core Values
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-[#f4f7fb] rounded-2xl p-6 hover:bg-[#1b3a8a] transition-all hover:shadow-lg hover:-translate-y-1 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e8f9f6] group-hover:bg-[#2dc5a2]/20 flex items-center justify-center mb-4 transition-colors">
                  <val.icon className="w-6 h-6 text-[#2dc5a2]" />
                </div>
                <h4 className="font-display font-bold text-[#1b3a8a] group-hover:text-white mb-2 transition-colors">
                  {val.title}
                </h4>
                <p className="text-slate-500 group-hover:text-white/80 text-sm leading-relaxed transition-colors">
                  {val.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
