'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CalendarClock, CalendarRange, CheckCircle2 } from 'lucide-react'
import { meqube } from '@/lib/meqube-data'

const { intro, terms, benefits, groups } = meqube.rental

const termIcons = [CalendarClock, CalendarRange]

export function Rental() {
  return (
    <section id="rental" className="py-24 bg-[#f4f7fb]" aria-label="Equipment rental">
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
              Rental
            </span>
            <span className="w-8 h-0.5 bg-[#2dc5a2]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-2"
          >
            {intro.map((line) => (
              <p
                key={line}
                className="text-xl md:text-2xl font-display text-[#1b3a8a] leading-relaxed text-balance"
              >
                {line}
              </p>
            ))}
          </motion.div>
        </div>

        {/* Short / long term */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
          {terms.map((term, i) => {
            const Icon = termIcons[i] ?? CalendarClock
            return (
              <motion.div
                key={term}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 bg-white rounded-2xl border border-gray-100 px-6 py-5 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e8f9f6] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-[#2dc5a2]" />
                </div>
                <p className="font-display font-bold text-[#1b3a8a] tracking-wide">{term}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Rental benefits */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-display font-bold text-[#1b3a8a] text-center mb-8"
          >
            RENTAL BENEIFTS
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={`${benefit}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-[#2dc5a2] flex-shrink-0 mt-0.5" />
                <p className="text-slate-600 text-sm leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Rental categories */}
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-display font-bold text-[#1b3a8a] text-center mb-10"
        >
          RENTAL CATAGORIES
        </motion.h3>

        <div className="space-y-12">
          {groups.map((group) => (
            <div key={group.title}>
              <motion.h4
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-[#2dc5a2] mb-6"
              >
                <span className="w-8 h-0.5 bg-[#2dc5a2]" />
                {group.title}
              </motion.h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {group.items.map((item, i) => (
                  <motion.article
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: (i % 5) * 0.07 }}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-[#1b3a8a]/10 transition-all hover:-translate-y-1.5"
                  >
                    <div className="relative h-40 overflow-hidden bg-white">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="px-4 py-4 text-center">
                      <h5 className="font-display font-bold text-[#1b3a8a] text-[0.8rem] uppercase tracking-wide">
                        {item.name}
                      </h5>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
