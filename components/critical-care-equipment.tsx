'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Tag, Wrench, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  EQUIPMENT_FILTER_EVENT,
  equipmentCatalogue,
  equipmentGroups,
  type EquipmentFilterDetail,
  type EquipmentGroup,
} from '@/lib/equipment-catalogue'

type Tab = EquipmentGroup | 'all'

const badgeColors: Record<string, string> = {
  Sale: 'bg-[#e8f0ff] text-[#1b3a8a]',
  Rental: 'bg-[#e8f9f6] text-[#1a9e84]',
  AMC: 'bg-amber-50 text-amber-700',
  Repair: 'bg-rose-50 text-rose-600',
}

const badgeIcons: Record<string, React.ElementType> = {
  Sale: Tag,
  Rental: RotateCcw,
  AMC: Wrench,
  Repair: Wrench,
}

export function CriticalCareEquipment() {
  const [activeTab, setActiveTab] = useState<Tab>('all')
  const [spotlight, setSpotlight] = useState<string | null>(null)

  // The header Product dropdown targets a specific card: switch to its tab,
  // then scroll it into view and briefly ring it so it is easy to spot.
  useEffect(() => {
    const onFilter = (event: Event) => {
      const { group, slug } = (event as CustomEvent<EquipmentFilterDetail>).detail
      setActiveTab(group)
      setSpotlight(slug)

      // Wait for the filtered grid to commit before scrolling to the card.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document
            .getElementById(`equipment-${slug}`)
            ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        })
      })
    }

    window.addEventListener(EQUIPMENT_FILTER_EVENT, onFilter)
    return () => window.removeEventListener(EQUIPMENT_FILTER_EVENT, onFilter)
  }, [])

  useEffect(() => {
    if (!spotlight) return
    const timer = setTimeout(() => setSpotlight(null), 2200)
    return () => clearTimeout(timer)
  }, [spotlight])

  const filtered =
    activeTab === 'all'
      ? equipmentCatalogue
      : equipmentCatalogue.filter((item) => item.group === activeTab)

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="equipment"
      className="py-24 bg-[#f4f7fb] scroll-mt-24"
      aria-label="Products and Services"
    >
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
              Products &amp; Services
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
            Equipment Built for Critical Care
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-slate-500 max-w-2xl mx-auto text-[0.95rem]"
          >
            From ICU ventilators to neonatal incubators and surgical tables — we
            offer, service and rent a comprehensive range of hospital-grade
            equipment.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
          role="tablist"
          aria-label="Filter products by category"
        >
          {equipmentGroups.map((tab) => (
            <button
              key={tab.key}
              role="tab"
              aria-selected={activeTab === tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeTab === tab.key
                  ? 'bg-[#1b3a8a] text-white shadow-md shadow-[#1b3a8a]/25'
                  : 'bg-white text-slate-600 border border-gray-200 hover:border-[#1b3a8a]/30 hover:text-[#1b3a8a]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Equipment grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.map((item, i) => (
              <motion.article
                key={item.slug}
                id={`equipment-${item.slug}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i, 8) * 0.06, duration: 0.45 }}
                className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#1b3a8a]/10 transition-all hover:-translate-y-1.5 scroll-mt-28 flex flex-col ${
                  spotlight === item.slug
                    ? 'border-2 border-[#2dc5a2] shadow-lg shadow-[#2dc5a2]/25'
                    : 'border border-gray-100'
                }`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-[#f4f7fb]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b3a8a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {item.badges.map((badge) => {
                      const BadgeIcon = badgeIcons[badge] || Tag
                      return (
                        <span
                          key={badge}
                          className={`inline-flex items-center gap-1 text-[0.7rem] font-semibold px-2 py-0.5 rounded-full ${
                            badgeColors[badge] || 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          <BadgeIcon className="w-2.5 h-2.5" />
                          {badge}
                        </span>
                      )
                    })}
                  </div>

                  <h3 className="font-display font-bold text-[#1b3a8a] text-[0.95rem] leading-snug mb-2 group-hover:text-[#2dc5a2] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2">
                    {item.desc}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1 mb-4 flex-1" role="list">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-slate-600">
                        <span className="w-1 h-1 rounded-full bg-[#2dc5a2] flex-shrink-0" />
                        {h}
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
          <p className="text-slate-500 mb-4 text-sm">
            Don&apos;t see what you need? We source and procure any medical equipment on request.
          </p>
          <Button
            onClick={() => scrollTo('#contact')}
            className="bg-[#2dc5a2] hover:bg-[#1a9e84] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#2dc5a2]/30 hover:-translate-y-0.5 transition-all h-auto"
          >
            Request Custom Equipment
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
