/**
 * Web3Forms delivers form submissions straight to your inbox — no backend.
 *
 * The access key is public by design: it only permits submitting to your form,
 * never reading past submissions. Set it in .env.local as
 * NEXT_PUBLIC_WEB3FORMS_KEY (get one free at https://web3forms.com).
 */

export const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ''

type SubmitArgs = {
  subject: string
  fields: Record<string, string>
}

export async function submitToWeb3Forms({ subject, fields }: SubmitArgs): Promise<void> {
  if (!WEB3FORMS_KEY) {
    throw new Error('Form is not configured yet. Please call us on +91 8970 300 900.')
  }

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      from_name: 'MRL Advanced Medi Systems — Website',
      subject,
      ...fields,
    }),
  })

  const data = await res.json().catch(() => ({}))
  if (!res.ok || !data.success) {
    throw new Error(data.message || 'Submission failed. Please try again in a moment.')
  }
}
