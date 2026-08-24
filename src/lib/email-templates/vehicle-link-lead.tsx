import React from 'react'
import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  url?: string
  phone?: string
  region?: string
  timeOnSite?: string
  totalSubmissions?: number | string
  submittedAt?: string
  source?: string
}

const Email = ({
  url,
  phone,
  region,
  timeOnSite,
  totalSubmissions,
  submittedAt,
  source,
}: Props) => (
  <Html lang="pl" dir="ltr">
    <Head />
    <Preview>{`Nowy link do pojazdu${phone ? ` — tel. ${phone}` : ''}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Text style={badgeText}>AUTOTEST</Text>
          <Text style={headerSub}>Zgłoszenie z formularza na stronie głównej</Text>
        </Section>

        <Heading style={h1}>Potencjalny klient przysłał link do pojazdu</Heading>
        <Text style={lead}>
          Klient zostawił ogłoszenie do sprawdzenia. Poniżej dane kontaktowe i kontekst wizyty.
        </Text>

        <Section style={card}>
          <Text style={label}>Link do ogłoszenia</Text>
          {url ? (
            <Link href={url} style={link}>
              {url}
            </Link>
          ) : (
            <Text style={value}>—</Text>
          )}
          <Hr style={hr} />
          <Text style={label}>Telefon</Text>
          {phone ? (
            <Link href={`tel:${phone.replace(/\s+/g, '')}`} style={phoneLink}>
              {phone}
            </Link>
          ) : (
            <Text style={value}>—</Text>
          )}
        </Section>

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
          <Text style={metaRow}>
            <span style={metaLabel}>Źródło: </span>
            {source || 'strona główna'}
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
  subject: 'Potencjalny klient przysłał link do pojazdu',
  displayName: 'Link do pojazdu (formularz hero)',
  to: 'dual1518@gmail.com, michalpakula12345@gmail.com',
  previewData: {
    url: 'https://www.otomoto.pl/oferta/bmw-seria-5-ID6Gxyz.html',
    phone: '+48 600 100 200',
    region: 'Lublin, Lubelskie, Polska',
    timeOnSite: '3 min 42 s',
    totalSubmissions: 128,
    submittedAt: '24 sierpnia 2026, 18:45',
    source: 'home-hero',
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'Arial, Helvetica, sans-serif',
  padding: '0',
}
const container = { padding: '24px 24px 32px', maxWidth: '600px' }
const header = {
  backgroundColor: '#111827',
  borderRadius: '12px',
  padding: '16px 20px',
}
const badgeText = {
  margin: '0',
  color: '#facc15',
  fontSize: '16px',
  fontWeight: 'bold' as const,
  letterSpacing: '0.14em',
}
const headerSub = { margin: '4px 0 0', color: '#d1d5db', fontSize: '12px' }
const h1 = { fontSize: '22px', color: '#111827', margin: '24px 0 6px', lineHeight: '30px' }
const lead = { fontSize: '14px', color: '#4b5563', margin: '0 0 18px', lineHeight: '22px' }
const card = {
  border: '1px solid #e5e7eb',
  borderLeft: '4px solid #facc15',
  borderRadius: '10px',
  padding: '16px 18px',
  backgroundColor: '#fffdf5',
}
const label = {
  margin: '0 0 4px',
  color: '#6b7280',
  fontSize: '11px',
  fontWeight: 'bold' as const,
  letterSpacing: '0.08em',
  textTransform: 'uppercase' as const,
}
const value = { margin: '0', fontSize: '15px', color: '#111827' }
const link = {
  fontSize: '14px',
  color: '#1d4ed8',
  wordBreak: 'break-all' as const,
  textDecoration: 'underline',
}
const phoneLink = {
  fontSize: '20px',
  color: '#111827',
  fontWeight: 'bold' as const,
  textDecoration: 'none',
}
const hr = { borderColor: '#f0e3b0', margin: '14px 0' }
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
