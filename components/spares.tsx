'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { meqube } from '@/lib/meqube-data'

const { intro, categories, tableHeader, tableRows } = meqube.spares

export function Spares() {
  const handleDownload = async () => {
    const XLSX = await import('xlsx')
    const worksheet = XLSX.utils.aoa_to_sheet([
      [...tableHeader],
      ...tableRows.map((row) => [...row]),
    ])
    worksheet['!cols'] = tableHeader.map(() => ({ wch: 24 }))
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Spare Parts Inventory')
    XLSX.writeFile(workbook, 'Chamundeshwari-Spare-Parts-Inventory.xlsx')
  }

  return (
    <section id="spares" className="py-24 bg-white" aria-label="Spare parts">
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
              Spares
            </span>
            <span className="w-8 h-0.5 bg-[#2dc5a2]" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="text-xl md:text-2xl font-display text-[#1b3a8a] leading-relaxed text-balance max-w-4xl mx-auto"
          >
            {intro}
          </motion.p>
        </div>

        {/* Spare categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
          {categories.map((cat, i) => (
            <motion.article
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
              className="group bg-[#f4f7fb] rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-[#1b3a8a]/10 transition-all hover:-translate-y-1.5"
            >
              <div className="relative h-40 overflow-hidden bg-white">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-4 py-4 text-center">
                <h3 className="font-display font-bold text-[#1b3a8a] text-[0.8rem] uppercase tracking-wide">
                  {cat.name}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Spare parts inventory — download only, no on-page table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[#f4f7fb] rounded-2xl border border-gray-200 px-6 py-8 sm:px-10 sm:py-10">
            <div>
              <h3 className="text-2xl font-display font-bold text-[#1b3a8a]">
                Spare Parts Inventory
              </h3>
              <p className="text-slate-500 text-sm mt-1.5 max-w-lg">
                Browse our full stock of makes, models and part numbers, or download the
                complete inventory as an Excel file for offline reference.
              </p>
            </div>
            <button
              onClick={handleDownload}
              className="inline-flex items-center justify-center gap-2 bg-[#2dc5a2] hover:bg-[#1a9e84] text-white px-6 py-3 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-[#2dc5a2]/30 hover:-translate-y-0.5 transition-all flex-shrink-0"
            >
              <Download className="w-4 h-4" />
              Download Excel
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
