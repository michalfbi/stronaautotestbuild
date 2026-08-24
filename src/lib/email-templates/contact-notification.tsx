import React from 'react'
import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  name?: string
  phone?: string
  email?: string
  message?: string
  source?: string
  kind?: string
  region?: string
  timeOnSite?: string
  totalSubmissions?: number | string
  submittedAt?: string
}

const Email = ({
  name,
  phone,
  email,
  message,
  source,
  kind,
  region,
  timeOnSite,
  totalSubmissions,
  submittedAt,
}: Props) => (
  <Html lang="pl" dir="ltr">
    <Head />
    <Preview>{`Nowe zgłoszenie${name ? ` od ${name}` : ''}${phone ? ` — ${phone}` : ''}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={badge}>
          <Text style={badgeText}>AUTOTEST — nowe zgłoszenie</Text>
        </Section>
        <Heading style={h1}>{name || 'Klient'} wysłał wiadomość</Heading>
        <Hr style={hr} />
        <Text style={row}>
          <span style={label}>Imię i nazwisko:</span> {name || '—'}
        </Text>
        <Text style={row}>
          <span style={label}>Telefon:</span> {phone || '—'}
        </Text>
        <Text style={row}>
          <span style={label}>Email:</span> {email || '—'}
        </Text>
        <Text style={row}>
          <span style={label}>Formularz:</span> {source || kind || '—'}
        </Text>
        <Hr style={hr} />
        <Text style={label}>Wiadomość</Text>
        <Text style={messageStyle}>{message || '(brak treści)'}</Text>

        <Section style={statsWrap}>
          <Row>
            <Column style={stat}>
              <Text style={statValue}>{totalSubmissions ?? '—'}</Text>
              <Text style={statLabel}>wysłanych formularzy łącznie</Text>
            </Column>
            <Column style={stat}>
              <Text style={statValue}>{timeOnSite || 'brak danych'}</Text>
              <Text style={statLabel}>czas na stronie</Text>
            </Column>
          </Row>
        </Section>

        <Section style={metaCard}>
          <Text style={metaRow}>
            <span style={metaLabel}>Obszar (szacowany z IP): </span>
            {region || 'nieustalony'}
          </Text>
          <Text style={metaRow}>
            <span style={metaLabel}>Data zgłoszenia: </span>
            {submittedAt || '—'}
          </Text>
        </Section>

        <Text style={footer}>
          Autotest — niezależna weryfikacja pojazdów. Ta wiadomość została wygenerowana
          automatycznie po wysłaniu formularza na stronie.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `Nowe zgłoszenie ze strony${data?.name ? ` — ${data.name}` : ''}`,
  displayName: 'Powiadomienie o zgłoszeniu (formularz kontaktowy)',
  to: 'dual1518@gmail.com, michalpakula12345@gmail.com',
  previewData: {
    name: 'Michał Kowalski',
    phone: '+48 600 100 200',
    email: 'klient@example.com',
    message: 'Chciałbym sprawdzić BMW X5 w okolicach Lublina w ten weekend.',
    source: 'kontakt',
    region: 'Lublin, Lubelskie, Polska',
    timeOnSite: '2 min 15 s',
    totalSubmissions: 42,
    submittedAt: '24 sierpnia 2026, 18:45',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, Helvetica, sans-serif' }
const container = { padding: '24px 28px', maxWidth: '600px' }
const badge = {
  backgroundColor: '#facc15',
  borderRadius: '8px',
  padding: '8px 12px',
  display: 'inline-block' as const,
}
const badgeText = {
  margin: '0',
  color: '#111827',
  fontSize: '12px',
  fontWeight: 'bold' as const,
  letterSpacing: '0.06em',
}
const h1 = { fontSize: '22px', color: '#111827', margin: '20px 0 8px' }
const hr = { borderColor: '#e5e7eb', margin: '18px 0' }
const row = { fontSize: '15px', color: '#111827', margin: '6px 0' }
const label = { color: '#6b7280', fontSize: '13px', fontWeight: 'bold' as const }
const messageStyle = {
  fontSize: '15px',
  color: '#111827',
  lineHeight: '24px',
  whiteSpace: 'pre-wrap' as const,
  backgroundColor: '#f9fafb',
  borderRadius: '8px',
  padding: '14px 16px',
}
const statsWrap = { marginTop: '16px' }
const stat = {
  width: '50%',
  backgroundColor: '#f9fafb',
  border: '1px solid #e5e7eb',
  borderRadius: '10px',
  padding: '14px 16px',
  textAlign: 'center' as const,
}
const statValue = {
  margin: '0',
  fontSize: '22px',
  fontWeight: 'bold' as const,
  color: '#111827',
}
const statLabel = { margin: '4px 0 0', fontSize: '11px', color: '#6b7280' }
const metaCard = {
  marginTop: '16px',
  border: '1px solid #e5e7eb',
  borderRadius: '10px',
  padding: '14px 18px',
}
const metaRow = { margin: '4px 0', fontSize: '14px', color: '#111827' }
const metaLabel = { color: '#6b7280', fontSize: '13px', fontWeight: 'bold' as const }
const footer = {
  marginTop: '22px',
  fontSize: '11px',
  color: '#9ca3af',
  lineHeight: '18px',
}
