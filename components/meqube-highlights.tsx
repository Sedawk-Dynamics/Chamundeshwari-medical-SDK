'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const cards = [
  {
    image: '/images/meqube/meqube-360.jpg',
    title: 'MRL ADVANCED MEDICAL 360',
    body:
      "MRL Advanced Medical Systems Pvt. Ltd. specializes in international trading of refurbished medical equipment's. In addition, we offer service and maintenance of medical equipment's at high quality standard.",
  },
  {
    image: '/images/meqube/professionally-qualified.jpg',
    title: 'PROFESSIONALLY QUALIFIED',
    body:
      'Our highly trained and certified team is flexible to address the asset management needs of healthcare providers from all domains.',
  },
  {
    image: '/images/meqube/unbeatable-price.jpg',
    title: 'UNBEATABLE PRICE',
    body:
      'We offer you the best equipment at unbeatable price. Customer satisfaction is our prime motto and we always strive to achieve it.',
  },
]

export function MequbeHighlights() {
  return (
    <section id="meqube-360" className="py-24 bg-[#f4f7fb]" aria-label="Company highlights">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Three highlight cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#1b3a8a]/10 transition-all hover:-translate-y-1.5"
            >
              <div className="relative h-52 overflow-hidden bg-[#f4f7fb]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display font-bold text-[#1b3a8a] text-lg tracking-wide mb-3">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-[0.95rem] leading-relaxed">{card.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
