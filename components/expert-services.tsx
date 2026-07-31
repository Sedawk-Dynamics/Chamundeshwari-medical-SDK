'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const boxes = [
  {
    image: '/images/meqube/capital-purchase.png',
    title: 'Capital Purchasing',
    body: 'Purchase New or Refurbished medical equipment',
  },
  {
    image: '/images/meqube/increase-efficiency.png',
    title: '10X Increase Efficiency',
    body: 'Our quality repair services increase the efficiency by 10X',
  },
  {
    image: '/images/meqube/inventory-management.png',
    title: 'Inventory Management',
    body: 'We maintain a wide range of inventory',
  },
  {
    image: '/images/meqube/contract-service.png',
    title: 'Contract Services',
    body: 'Our customized contract services fits your hospital needs',
  },
  {
    image: '/images/meqube/customer-service.png',
    title: 'Customer Services',
    body: 'Our customers are satisfied though open communication of issue resolution.',
  },
  {
    image: '/images/meqube/standard-warranty.png',
    title: 'Warranty',
    body: 'We provide a standard warranty of 1 year with machine.',
  },
]

export function ExpertServices() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="py-24 bg-white" aria-label="Why work with Chamundeshwari Medical Systems">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading row */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-display font-bold text-[#1b3a8a] leading-tight text-balance"
          >
            Expert services for a wide range of medical devices
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:justify-self-end"
          >
            <Button
              onClick={() => scrollTo('#contact')}
              className="group bg-[#2dc5a2] hover:bg-[#1a9e84] text-white px-8 py-4 rounded-full text-base font-semibold hover:shadow-lg hover:shadow-[#2dc5a2]/30 hover:-translate-y-0.5 transition-all h-auto"
            >
              Contact us
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        {/* Six boxes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {boxes.map((box, i) => (
            <motion.article
              key={box.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group bg-[#f4f7fb] rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-[#1b3a8a]/10 transition-all hover:-translate-y-1.5"
            >
              <div className="relative h-48 overflow-hidden bg-white">
                <Image
                  src={box.image}
                  alt={box.title}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-7 pt-5">
                <h3 className="font-display font-bold text-[#1b3a8a] text-lg mb-2">
                  {box.title}
                </h3>
                <p className="text-slate-600 text-[0.95rem] leading-relaxed">{box.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
