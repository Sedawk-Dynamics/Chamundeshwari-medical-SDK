/**
 * Web3Forms delivers form submissions straight to your inbox — no backend.
 *
 * The access key is public by design: it only permits submitting to your form,
 * never reading past submissions. Set it in .env.local as
 * NEXT_PUBLIC_WEB3FORMS_KEY (get one free at https://web3forms.com).
 *
 * IMPORTANT — where the mail lands:
 * The recipient address is bound to the access key inside the Web3Forms
 * dashboard. It deliberately cannot be set from this code, so a stolen public
 * key can never be used to mail arbitrary addresses. To change the inbox, or
 * to route through your own SMTP server, do it at
 * https://web3forms.com/dashboard — not here.
 */

export const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ''

/** Inbox the access key is configured to deliver to. Documentation only. */
export const WEB3FORMS_RECIPIENT = 'Info@mrlmedisystems.com'

type SubmitArgs = {
  subject: string
  fields: Record<string, string>
  /** Lead's email, so hitting Reply in the inbox answers them directly. */
  replyTo?: string
  /** Honeypot value — must stay empty. Any content means a bot filled it. */
  botcheck?: string
}

export async function submitToWeb3Forms({
  subject,
  fields,
  replyTo,
  botcheck,
}: SubmitArgs): Promise<void> {
  if (!WEB3FORMS_KEY) {
    throw new Error('Form is not configured yet. Please call us on +91 8970 300 900.')
  }

  // Bots autofill every field they find. Humans never see this one, so if it
  // has a value we drop the submission and report success to avoid tipping
  // the bot off that it was caught.
  if (botcheck) return

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      from_name: 'MRL Advanced MEDI Systems — Website',
      subject,
      ...(replyTo ? { replyto: replyTo } : {}),
      ...fields,
    }),
  })

  const data = await res.json().catch(() => ({}))
  if (!res.ok || !data.success) {
    throw new Error(data.message || 'Submission failed. Please try again in a moment.')
  }
}
