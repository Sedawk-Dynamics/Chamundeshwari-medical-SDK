'use client'

import { motion } from 'framer-motion'
import { Building2, Award, Wrench, Clock } from 'lucide-react'

const items = [
  {
    icon: Building2,
    title: 'Hospitals Served',
    value: '200+',
    sub: 'Across Karnataka & India',
  },
  {
    icon: Award,
    title: 'Years of Excellence',
    value: '10+',
    sub: 'In medical equipment',
  },
  {
    icon: Wrench,
    title: 'Equipment Serviced',
    value: '5000+',
    sub: 'Successful service calls',
  },
  {
    icon: Clock,
    title: 'Response Time',
    value: '<4 hrs',
    sub: 'Average support response',
  },
]

export function TrustBar() {
  return (
    <section
      aria-label="Trust statistics"
      className="relative bg-white border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center gap-4 px-6 py-8 group hover:bg-[#e8f9f6] transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1b3a8a]/8 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1b3a8a] transition-colors">
                <item.icon className="w-5 h-5 text-[#1b3a8a] group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-[#1b3a8a]">
                  {item.value}
                </p>
                <p className="text-sm font-semibold text-slate-700">
                  {item.title}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
