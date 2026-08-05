'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
import { productCategories } from '@/lib/meqube-data'

// lucide-react dropped brand glyphs, so the social marks are inlined here.
function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Product', href: '#equipment' },
  { label: 'Services', href: '#services' },
  { label: 'Rental', href: '#rental' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { label: 'Twitter', href: 'https://twitter.com', icon: TwitterIcon },
  { label: 'Facebook', href: 'https://facebook.com', icon: FacebookIcon },
  { label: 'Instagram', href: 'https://instagram.com', icon: InstagramIcon },
]

export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0d1f52] text-white" aria-label="Site footer">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/mrl-logo.png"
              alt="MRL Advanced Medi Systems"
              width={577}
              height={327}
              className="h-16 w-auto object-contain brightness-0 invert mb-5"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              MRL Advanced Medical Systems Pvt. Ltd. — supplying, servicing and renting
              world-class ICU, NICU and OT equipment across India.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-2 text-white/70">
                <MapPin className="w-4 h-4 text-[#2dc5a2] flex-shrink-0 mt-0.5" />
                <span className="whitespace-pre-line">
                  {'NO-274, 8th Main\nBEML Layout, Thubarahalli\nWhitefield, Bangalore – 560066\nKarnataka, India'}
                </span>
              </div>
              <a
                href="mailto:support@mrlmedisystems.com"
                className="flex items-center gap-2 text-white/70 hover:text-[#2dc5a2] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#2dc5a2] flex-shrink-0" />
                support@mrlmedisystems.com
              </a>
              <a
                href="tel:+918970300900"
                className="flex items-center gap-2 text-white/70 hover:text-[#2dc5a2] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#2dc5a2] flex-shrink-0" />
                +91 8970 300 900
              </a>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5" role="list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/60 hover:text-[#2dc5a2] text-sm transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Product categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-5">
              Product
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-2 gap-x-4" role="list">
              {productCategories.map((cat) => (
                <li key={cat.slug} className="flex items-start gap-2 text-white/60 text-sm">
                  <span className="w-1 h-1 rounded-full bg-[#2dc5a2] mt-2 flex-shrink-0" />
                  <button
                    onClick={() => scrollTo('#equipment')}
                    className="text-left hover:text-[#2dc5a2] transition-colors uppercase text-xs tracking-wide"
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact hours, registered company & social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-5">
              Contact Hours
            </h3>
            <div className="space-y-3 text-sm text-white/60 mb-8">
              <div className="flex justify-between gap-3">
                <span>Mon – Sat</span>
                <span className="text-white/80 text-right">9:00 AM to 6:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Emergency</span>
                <span className="text-[#2dc5a2] font-semibold">24/7</span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 p-5 bg-white/5 mb-8">
              <p className="text-[#2dc5a2] text-xs font-semibold uppercase tracking-wide mb-2">
                Registered Company
              </p>
              <p className="text-white font-display font-bold text-sm">
                MRL Advanced Medical Systems Pvt. Ltd.
              </p>
              <p className="text-white/50 text-xs mt-1">CIN: U46497KA2026PTC223877</p>
            </div>

            <h3 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-4">
              Follow Us
            </h3>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/70 hover:bg-[#2dc5a2] hover:border-[#2dc5a2] hover:text-white transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} MRL Advanced Medical Systems Pvt. Ltd. – All
            rights Reserved
          </p>
          <p>
            Designed by{' '}
            <a
              href="https://webel.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2dc5a2] transition-colors"
            >
              Webelio
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
