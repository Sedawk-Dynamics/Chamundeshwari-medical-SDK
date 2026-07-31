'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const highlights = [
  'Authorized dealer of leading global medical brands',
  'Specialized in ICU, NICU and OT critical care equipment',
  'End-to-end support: Sales, Rental & AMC Services',
  'Factory-trained biomedical engineers on call',
  'Serving government hospitals, private chains & nursing homes',
]

export function About() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="about" className="py-24 bg-[#f4f7fb]" aria-label="About MRL Advanced Medi Systems">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-10 h-0.5 bg-[#2dc5a2]" />
          <span className="text-[#2dc5a2] text-sm font-semibold uppercase tracking-widest">
            About Us
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-3xl md:text-4xl font-display font-bold text-[#1b3a8a] leading-tight text-balance mb-6"
            >
              Delivering World-Class Medical Equipment to Bangalore and Beyond
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-slate-600 leading-relaxed mb-4"
            >
              MRL Advanced Medi Systems, operating under Chamundeshwari Medical
              Systems Pvt. Ltd., is a premier healthcare equipment company
              headquartered in Whitefield, Bangalore. We supply, service and rent
              advanced medical devices to hospitals, nursing homes, clinics and
              individual care centres across Karnataka and pan-India.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-slate-600 leading-relaxed mb-8"
            >
              Our focus is on critical-care environments — ICU, NICU and Operating
              Theatres — where every piece of equipment must perform flawlessly.
              We combine deep domain knowledge with responsive after-sales support
              to become a trusted partner for clinicians across the country.
            </motion.p>

            {/* Highlights list */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3 mb-10"
              role="list"
            >
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#2dc5a2] mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <Button
                onClick={() => scrollTo('#contact')}
                className="bg-[#1b3a8a] hover:bg-[#0d2260] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#1b3a8a]/25 hover:-translate-y-0.5 transition-all h-auto"
              >
                Talk to Our Team
              </Button>
            </motion.div>
          </div>

          {/* Right: image + floating card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#1b3a8a]/15">
              <Image
                src="/images/about-team.png"
                alt="MRL Advanced Medi Systems team"
                width={640}
                height={480}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b3a8a]/30 to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-gray-100"
            >
              <div className="w-14 h-14 rounded-xl bg-[#e8f9f6] flex items-center justify-center">
                <span className="text-2xl font-display font-bold text-[#2dc5a2]">30+</span>
              </div>
              <div>
                <p className="text-[#1b3a8a] font-bold font-display text-base">Years Experience</p>
                <p className="text-slate-500 text-xs mt-0.5">In critical care equipment</p>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -top-4 -right-4 bg-[#1b3a8a] text-white rounded-2xl shadow-xl px-4 py-3"
            >
              <p className="text-xs font-medium opacity-80">Registered</p>
              <p className="text-sm font-bold font-display leading-snug">
                Chamundeshwari Medical Private Limited
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
