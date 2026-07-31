'use client'

import { motion } from 'framer-motion'
import { Phone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CtaBanner() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      className="relative py-20 overflow-hidden"
      aria-label="Call to action"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #1b3a8a 0%, #0d2260 50%, #1a9e84 100%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 50%, #2dc5a2 0%, transparent 60%), radial-gradient(circle at 70% 50%, #ffffff 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#4dd4b5] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#2dc5a2] animate-pulse" />
            24/7 Emergency Equipment Support Available
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white text-balance mb-6">
            Ready to Upgrade Your Hospital&apos;s Critical-Care Equipment?
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
            Talk to our medical equipment specialists today. Get a free consultation,
            personalised quote and equipment demonstration at your facility.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollTo('#contact')}
              className="group bg-[#2dc5a2] hover:bg-[#1a9e84] text-white px-8 py-4 rounded-full text-base font-semibold hover:shadow-xl hover:shadow-[#2dc5a2]/30 hover:-translate-y-0.5 transition-all h-auto"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <a
              href="tel:+918970300900"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-base font-semibold backdrop-blur-sm transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              +91 8970 300 900
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
