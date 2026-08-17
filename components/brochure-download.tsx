'use client'

import { useState } from 'react'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BrochureModal } from '@/components/brochure-modal'

/**
 * Brochure banner in the contact section — the button opens the same modal the
 * page-load popup uses.
 */
export function BrochureDownload() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="bg-white rounded-3xl p-6 md:p-7 shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center gap-5">
        <div className="flex items-start gap-3 flex-1">
          <div className="w-11 h-11 rounded-xl bg-[#e8f9f6] flex items-center justify-center flex-shrink-0">
            <Download className="w-5 h-5 text-[#2dc5a2]" />
          </div>
          <div>
            <h3 className="font-display font-bold text-[#1b3a8a] text-lg leading-snug">
              Download Our Company Brochure
            </h3>
            <p className="text-slate-500 text-sm mt-0.5">
              Full product range, service capability and certifications.
            </p>
          </div>
        </div>

        <Button
          type="button"
          onClick={() => setOpen(true)}
          className="bg-[#2dc5a2] hover:bg-[#22a888] text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all h-auto flex-shrink-0 w-full sm:w-auto hover:shadow-lg hover:shadow-[#2dc5a2]/25"
        >
          <Download className="w-4 h-4" />
          Download
        </Button>
      </div>

      <BrochureModal
        open={open}
        onClose={() => setOpen(false)}
        source="Company brochure download — contact section"
      />
    </>
  )
}
