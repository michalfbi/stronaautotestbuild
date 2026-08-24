import * as React from 'react'
import { render } from '@react-email/render'
import { EmailAPIError, sendLovableEmail } from '@lovable.dev/email-js'
import { TEMPLATES } from './registry'

// Server-only: reads LOVABLE_API_KEY. Never import from client components.

// Configuration baked in at scaffold time
const SITE_NAME = "Autotest"
// SENDER_DOMAIN is the verified sender subdomain FQDN (e.g., "notify.example.com").
// It MUST match the subdomain delegated to Lovable's nameservers. NEVER use the root domain.
const SENDER_DOMAIN = "notify.autotest-ap.com"
// FROM_DOMAIN is the domain shown in the From: header (e.g., "example.com").
// Can be the root domain when display_from_root is enabled — this is cosmetic only.
const FROM_DOMAIN = "autotest-ap.com"

export type SendTemplateEmailResult =
  | { sent: true }
  | { sent: false; reason: 'recipient_suppressed' }

export interface SendTemplateEmailOptions {
  templateData?: Record<string, any>
  /** Dedupes retries of the same logical send; defaults to a random UUID (no dedupe). */
  idempotencyKey?: string
  replyTo?: string
}

/**
 * Renders a registered template and sends it through Lovable's managed email
 * API. Suppression, retries, and rate limits are enforced by Lovable
 * server-side. A suppressed recipient is an expected outcome
 * ({ sent: false }); any other failure throws — EmailAPIError exposes
 * .code and .status for branching.
 */
export async function sendTemplateEmail(
  templateName: string,
  to: string,
  options: SendTemplateEmailOptions = {}
): Promise<SendTemplateEmailResult> {
  // Two delivery backends:
  //  - Resend (self-hosted / independent deploy): set RESEND_API_KEY (+ optional MAIL_FROM)
  //  - Lovable managed email (default inside Lovable): LOVABLE_API_KEY
  const resendKey = process.env['RESEND_API_KEY']
  const apiKey = process.env['LOVABLE_API_KEY']
  if (!resendKey && !apiKey) {
    throw new Error('No email backend configured (set RESEND_API_KEY or LOVABLE_API_KEY)')
  }

  const template = TEMPLATES[templateName]
  if (!template) {
    throw new Error(
      `Template '${templateName}' not found. Available: ${Object.keys(TEMPLATES).join(', ')}`
    )
  }

// Template-level `to` takes precedence — notification templates always
  // send to their fixed address(es). Multiple recipients may be comma-separated.
  const recipientRaw = template.to || to
  const recipients = (recipientRaw || '')
    .split(',')
    .map((r) => r.trim())
    .filter(Boolean)
  if (recipients.length === 0) {
    throw new Error('Recipient is required (the template defines no fixed recipient)')
  }

  const templateData = options.templateData ?? {}
  const element = React.createElement(template.component, templateData)
  const html = await render(element)
  const text = await render(element, { plainText: true })
  const subject =
    typeof template.subject === 'function'
      ? template.subject(templateData)
      : template.subject

// Send one email to each recipient so every address receives the notification.
  for (const recipient of recipients) {
    if (resendKey) {
      const from = process.env['MAIL_FROM'] || `${SITE_NAME} <noreply@${FROM_DOMAIN}>`
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from,
          to: [recipient],
          subject,
          html,
          text,
          ...(options.replyTo ? { reply_to: options.replyTo } : {}),
        }),
      })
      if (!res.ok) {
        throw new Error(`Resend failed (${res.status}): ${await res.text()}`)
      }
      continue
    }

    try {
      await sendLovableEmail(
        {
          to: recipient,
          from: `${SITE_NAME} <noreply@${FROM_DOMAIN}>`,
          sender_domain: SENDER_DOMAIN,
          subject,
          html,
          text,
          purpose: 'transactional',
          label: templateName,
          idempotency_key:
            (options.idempotencyKey || crypto.randomUUID()) + `:${recipient}`,
          reply_to: options.replyTo,
        },
        { apiKey: apiKey!, sendUrl: process.env['LOVABLE_SEND_URL'] }
      )
    } catch (error) {
      if (error instanceof EmailAPIError && error.code === 'recipient_suppressed') {
        // A suppressed recipient is expected — skip it, still deliver to others.
        continue
      }
      throw error
    }
  }

  return { sent: true }
}
