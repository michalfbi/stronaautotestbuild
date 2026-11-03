/** Server-only helpers for enriching lead notifications (geo, counters, formatting). */

export interface GeoInfo {
  city?: string
  region?: string
  country?: string
  label: string
}

const PL = 'Polska'

export async function resolveGeo(headers: Headers): Promise<GeoInfo> {
  const city = headers.get('cf-ipcity') || undefined
  const region = headers.get('cf-region') || undefined
  const country = headers.get('cf-ipcountry') || undefined

  if (city || region) {
    return {
      city,
      region,
      country,
      label: [city, region, country === 'PL' ? PL : country].filter(Boolean).join(', '),
    }
  }

  const ip =
    headers.get('cf-connecting-ip') ||
    headers.get('x-real-ip') ||
    (headers.get('x-forwarded-for') || '').split(',')[0]?.trim()

  if (ip && !/^(127\.|10\.|192\.168\.|::1)/.test(ip)) {
    try {
      const res = await fetch(`https://ipapi.co/${ip}/json/`, {
        signal: AbortSignal.timeout(3000),
      })
      if (res.ok) {
        const j: any = await res.json()
        const label = [j?.city, j?.region, j?.country_name].filter(Boolean).join(', ')
        if (label) return { city: j?.city, region: j?.region, country: j?.country_name, label }
      }
    } catch {
      /* geolokalizacja jest opcjonalna */
    }
  }

  return { label: 'Nieustalony (brak danych lokalizacji)' }
}

export async function countLeads(kind?: string): Promise<number | undefined> {
  const url = process.env['SUPABASE_URL']
  const key = process.env['SUPABASE_SERVICE_ROLE_KEY']
  if (!url || !key) return undefined
  try {
    const res = await fetch(`${url}/rest/v1/rpc/count_leads`, {
      method: 'POST',
      headers: {
        apikey: key,
        // Nowe klucze `sb_secret_...` nie są JWT — wysyłamy je tylko w nagłówku apikey.
        ...(key.startsWith('sb_') ? {} : { Authorization: `Bearer ${key}` }),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _kind: kind ?? null }),
      signal: AbortSignal.timeout(4000),
    })
    if (!res.ok) return undefined
    const value = await res.json()
    return typeof value === 'number' ? value : undefined
  } catch {
    return undefined
  }
}

export function formatDuration(seconds?: number): string {
  if (!seconds || seconds < 1 || !Number.isFinite(seconds)) return 'brak danych'
  const s = Math.round(seconds)
  const m = Math.floor(s / 60)
  const rest = s % 60
  if (m === 0) return `${rest} s`
  return `${m} min ${rest} s`
}

export function formatWarsawTime(date = new Date()): string {
  return new Intl.DateTimeFormat('pl-PL', {
    dateStyle: 'long',
    timeStyle: 'short',
    timeZone: 'Europe/Warsaw',
  }).format(date)
}
