'use client'

import { motion } from 'framer-motion'
import { meqube } from '@/lib/meqube-data'

const { boxes } = meqube.services

export function Services() {
  return (
    <section id="services" className="py-24 bg-white" aria-label="Our services">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-0.5 bg-[#2dc5a2]" />
            <span className="text-[#2dc5a2] text-sm font-semibold uppercase tracking-widest">
              Services
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
            <span className="text-[#2dc5a2]">MRL ADVANCED MEDICAL SYSTEMS PVT. LTD.</span>
            <br />
            provides a wide range of services
          </motion.h2>
        </div>

        {/* Service text boxes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {boxes
            .filter((box) => box.body)
            .map((box, i) => (
              <motion.article
                key={box.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group bg-[#f4f7fb] rounded-3xl p-8 border border-gray-100 hover:bg-[#1b3a8a] hover:shadow-xl hover:shadow-[#1b3a8a]/15 transition-all hover:-translate-y-1.5"
              >
                <h3 className="font-display font-bold text-[#1b3a8a] group-hover:text-white text-base tracking-wide mb-3 transition-colors">
                  {box.title}
                </h3>
                <p className="text-slate-600 group-hover:text-white/80 text-[0.95rem] leading-relaxed transition-colors">
                  {box.body}
                </p>
              </motion.article>
            ))}
        </div>
      </div>
    </section>
  )
}
