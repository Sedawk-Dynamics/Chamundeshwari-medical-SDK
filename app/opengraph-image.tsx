import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { BRAND_NAME, LEGAL_NAME } from '@/lib/site'

// Rendered once at build time into a real 1200x630 PNG, so social previews
// (WhatsApp, LinkedIn, X, Facebook) show a branded card instead of nothing.
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = `${BRAND_NAME} — ${LEGAL_NAME}`

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), 'public/images/mrl-logo.png'))
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #ffffff 0%, #f4f7fb 55%, #e8f9f6 100%)',
          fontFamily: 'sans-serif',
          padding: '64px 80px',
        }}
      >
        <img src={logoSrc} width={620} height={326} alt="" style={{ objectFit: 'contain' }} />
        <div
          style={{
            display: 'flex',
            marginTop: 28,
            fontSize: 34,
            fontWeight: 700,
            color: '#1b3a8a',
            textAlign: 'center',
          }}
        >
          ICU · NICU · OT Medical Equipment
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 14,
            fontSize: 26,
            color: '#475569',
            textAlign: 'center',
          }}
        >
          Sales · Service · Rental — Bangalore, India
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 34,
            padding: '10px 30px',
            borderRadius: 999,
            background: '#2dc5a2',
            color: '#ffffff',
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          30+ Years in Critical Care
        </div>
      </div>
    ),
    size,
  )
}
