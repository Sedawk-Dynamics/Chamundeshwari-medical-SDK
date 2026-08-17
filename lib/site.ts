/**
 * Single source of truth for site-wide SEO metadata.
 * Change SITE_URL here and robots.txt, sitemap.xml, canonical tags,
 * Open Graph and JSON-LD all follow automatically.
 */

export const SITE_URL = 'https://mrlmedisystems.com'

export const LEGAL_NAME = 'Chamundeshwari Medical Systems Pvt. Ltd.'
export const BRAND_NAME = 'MRL Advanced MEDI Systems'
export const CIN = 'U46497KA2026PTC223877'

export const SITE_TITLE = `${BRAND_NAME} | ICU, NICU & OT Medical Equipment in Bangalore`

export const SITE_DESCRIPTION =
  'Chamundeshwari Medical Systems Pvt. Ltd. (MRL Advanced MEDI Systems) supplies, services and rents ICU, NICU and OT medical equipment across India — ventilators, patient monitors, anesthesia machines and defibrillators. Based in Whitefield, Bangalore.'

export const CONTACT = {
  phone: '+918970300900',
  phoneDisplay: '+91 89703 00900',
  email: 'support@mrlmedisystems.com',
  street: 'NO-274, 8th Main, BEML Layout, Thubarahalli, Whitefield',
  city: 'Bengaluru',
  region: 'Karnataka',
  postalCode: '560066',
  country: 'IN',
} as const

/**
 * Site-verification meta tags. Paste ONLY the token (the `content="..."` value),
 * not the whole <meta> tag — layout.tsx builds the tag around it.
 * Any field left as '' is skipped entirely, so no empty meta tag is emitted.
 *
 *   Google Search Console → Settings → Ownership verification → HTML tag
 *     <meta name="google-site-verification" content="PASTE_THIS_PART" />
 *   Bing Webmaster Tools → HTML meta tag
 *     <meta name="msvalidate.01" content="PASTE_THIS_PART" />
 *   Meta Business Suite → Brand safety → Domains
 *     <meta name="facebook-domain-verification" content="PASTE_THIS_PART" />
 */
export const VERIFICATION: {
  google: string
  bing: string
  facebookDomain: string
} = {
  google: '',
  bing: '',
  facebookDomain: '',
}

export const SOCIAL_PROFILES = [
  'https://x.com/mrlmedisystems',
  'https://www.facebook.com/mrlmedisystems/',
  'https://www.instagram.com/mrlmedisystems/',
  'https://www.linkedin.com/company/mrl-advanced-medi-systems/',
]
