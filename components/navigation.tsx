'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, Menu, X, ChevronDown } from 'lucide-react'
import {
  EQUIPMENT_FILTER_EVENT,
  navProductLinks,
  type EquipmentFilterDetail,
  type NavProductLink,
} from '@/lib/equipment-catalogue'

const navLinks: {
  label: string
  href: string
  children?: NavProductLink[]
}[] = [
  { label: 'Home', href: '#home' },
  // Dropdown entries come from lib/equipment-catalogue.ts — the same source as
  // the "Equipment Built for Critical Care" section, so the two stay in sync.
  { label: 'Product', href: '#equipment', children: navProductLinks },
  { label: 'Services', href: '#services' },
  { label: 'Rental', href: '#rental' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileProductOpen, setMobileProductOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    setMobileProductOpen(false)
    setActiveDropdown(null)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // Product dropdown: let the Products & Services section filter to the chosen
  // category and scroll the matching card into view.
  const handleProductClick = (product: NavProductLink) => {
    setMobileOpen(false)
    setMobileProductOpen(false)
    setActiveDropdown(null)

    const detail: EquipmentFilterDetail = {
      group: product.group,
      slug: product.slug,
    }
    window.dispatchEvent(
      new CustomEvent<EquipmentFilterDetail>(EQUIPMENT_FILTER_EVENT, { detail })
    )
  }

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden md:flex items-center justify-end gap-6 bg-[#0d2260] text-white text-sm px-8 py-2">
        <a
          href="mailto:support@mrlmedisystems.com"
          className="flex items-center gap-1.5 hover:text-[#2dc5a2] transition-colors"
        >
          <Mail className="w-3.5 h-3.5" />
          support@mrlmedisystems.com
        </a>
        <a
          href="tel:+918970300900"
          className="flex items-center gap-1.5 hover:text-[#2dc5a2] transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          +91 8970 300 900
        </a>
      </div>

      {/* Main nav */}
      <motion.header
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-navy/10'
            : 'bg-white'
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3 focus-visible:outline-none"
            aria-label="MRL Advanced Medi Systems — go to top"
          >
            <Image
              src="/images/mrl-logo.png"
              alt="MRL Advanced Medi Systems — Chamundeshwari Medical Systems Pvt. Ltd."
              width={577}
              height={327}
              className="h-16 w-auto object-contain"
              priority
            />
          </button>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map((link) =>
              link.children ? (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-[0.9rem] font-medium text-[#1b3a8a] hover:text-[#2dc5a2] transition-colors rounded-lg hover:bg-[#e8f9f6]"
                    aria-expanded={activeDropdown === link.label}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.ul
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[34rem] grid grid-cols-2 gap-x-2 bg-white rounded-xl shadow-xl shadow-navy/10 border border-gray-100 overflow-hidden z-50 p-2"
                        role="menu"
                      >
                        {link.children.map((child) => (
                          <li key={child.slug} role="none">
                            <button
                              role="menuitem"
                              onClick={() => handleProductClick(child)}
                              className="w-full text-left px-3 py-2 text-sm text-slate-700 rounded-lg hover:bg-[#e8f9f6] hover:text-[#1b3a8a] transition-colors uppercase tracking-wide text-[0.72rem] font-semibold"
                            >
                              {child.label}
                            </button>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="px-4 py-2 text-[0.9rem] font-medium text-[#1b3a8a] hover:text-[#2dc5a2] transition-colors rounded-lg hover:bg-[#e8f9f6]"
                  >
                    {link.label}
                  </button>
                </li>
              )
            )}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+918970300900"
              className="inline-flex items-center gap-2 bg-[#1b3a8a] hover:bg-[#0d2260] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-[#1b3a8a]/30 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 text-[#1b3a8a] rounded-lg hover:bg-[#e8f9f6]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="px-4 py-4 flex flex-col gap-1 max-h-[70vh] overflow-y-auto">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.label}>
                      <button
                        onClick={() => setMobileProductOpen(!mobileProductOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 text-[#1b3a8a] font-medium rounded-lg hover:bg-[#e8f9f6] transition-colors"
                        aria-expanded={mobileProductOpen}
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${mobileProductOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileProductOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-3"
                            role="list"
                          >
                            {link.children.map((child) => (
                              <li key={child.slug}>
                                <button
                                  onClick={() => handleProductClick(child)}
                                  className="w-full text-left px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-wide text-slate-600 rounded-lg hover:bg-[#e8f9f6] hover:text-[#1b3a8a] transition-colors"
                                >
                                  {child.label}
                                </button>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      key={link.label}
                      onClick={() => handleNavClick(link.href)}
                      className="text-left px-4 py-3 text-[#1b3a8a] font-medium rounded-lg hover:bg-[#e8f9f6] hover:text-[#2dc5a2] transition-colors"
                    >
                      {link.label}
                    </button>
                  )
                )}
                <a
                  href="tel:+918220618897"
                  className="mt-2 inline-flex items-center justify-center gap-2 bg-[#1b3a8a] hover:bg-[#0d2260] text-white py-3 rounded-full font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
                <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2 text-sm text-slate-600">
                  <a href="mailto:support@mrlmedisystems.com" className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#2dc5a2]" /> support@mrlmedisystems.com
                  </a>
                  <a href="tel:+918970300900" className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#2dc5a2]" /> +91 8970 300 900
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
