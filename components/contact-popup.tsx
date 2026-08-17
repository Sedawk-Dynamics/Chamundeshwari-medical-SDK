'use client'

import { useEffect, useState } from 'react'
import { BrochureModal } from '@/components/brochure-modal'

const POPUP_DELAY_MS = 1200

/**
 * Greets visitors shortly after the page loads with the brochure download —
 * the same modal the contact section's download banner opens.
 */
export function ContactPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), POPUP_DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  return (
    <BrochureModal
      open={open}
      onClose={() => setOpen(false)}
      source="Company brochure download — welcome popup"
    />
  )
}
