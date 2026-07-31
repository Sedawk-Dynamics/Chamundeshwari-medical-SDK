'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { productCategories } from '@/lib/meqube-data'

export function Products() {
  const [active, setActive] = useState(productCategories[0].slug)

  const category =
    productCategories.find((c) => c.slug === active) ?? productCategories[0]

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="products" className="py-24 bg-[#f4f7fb]" aria-label="Products">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-0.5 bg-[#2dc5a2]" />
            <span className="text-[#2dc5a2] text-sm font-semibold uppercase tracking-widest">
              Product
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
            Refurbished Medical Equipment
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-slate-500 max-w-2xl mx-auto text-[0.95rem]"
          >
            Chamundeshwari Medical Systems Pvt. Ltd. specializes in international trading of refurbished
            medical equipment&apos;s. Browse our range across{' '}
            {productCategories.length} equipment categories.
          </motion.p>
        </div>

        {/* Category tabs */}
        <div
          className="flex flex-wrap gap-2 justify-center mb-12"
          role="tablist"
          aria-label="Product categories"
        >
          {productCategories.map((cat) => (
            <button
              key={cat.slug}
              role="tab"
              aria-selected={active === cat.slug}
              onClick={() => setActive(cat.slug)}
              className={`px-4 py-2 rounded-full text-[0.78rem] font-semibold uppercase tracking-wide transition-all ${
                active === cat.slug
                  ? 'bg-[#1b3a8a] text-white shadow-md shadow-[#1b3a8a]/25'
                  : 'bg-white text-slate-600 border border-gray-200 hover:border-[#1b3a8a]/30 hover:text-[#1b3a8a]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Model grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={category.slug}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {category.items.map((item, i) => (
              <motion.article
                key={`${category.slug}-${item.name}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i, 8) * 0.05, duration: 0.4 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#1b3a8a]/10 transition-all hover:-translate-y-1.5 border border-gray-100 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden bg-white">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-5 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 pt-2 flex-1 flex flex-col">
                  <h3 className="font-display font-bold text-[#1b3a8a] text-base leading-snug mb-3 group-hover:text-[#2dc5a2] transition-colors">
                    {item.name}
                  </h3>
                  <ul className="space-y-2 mb-5 flex-1" role="list">
                    {item.specs.map((spec, si) => (
                      <li
                        key={si}
                        className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2dc5a2] flex-shrink-0 mt-1.5" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => scrollTo('#contact')}
                    className="group/btn flex items-center gap-1 text-[#1b3a8a] text-xs font-semibold hover:text-[#2dc5a2] transition-colors self-start"
                  >
                    Enquire Now
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-14"
        >
          <Button
            onClick={() => scrollTo('#contact')}
            className="bg-[#2dc5a2] hover:bg-[#1a9e84] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#2dc5a2]/30 hover:-translate-y-0.5 transition-all h-auto"
          >
            Request a Quote
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
