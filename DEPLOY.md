# Autotest — pełna instrukcja: własna baza (Supabase) + darmowy deploy

**Ważne na start:** Supabase to tylko baza danych + auth. **Nie hostuje stron** takich jak ta
(strona ma serwer SSR: server functions, wysyłkę maili, pobieranie opinii Google).
Dlatego układ jest taki:

- **Supabase Free** → baza danych (tabela `leads`, licznik zgłoszeń)
- **Cloudflare Workers Free** → hosting samej strony (100 000 requestów/dzień)
- **Resend Free** → wysyłka maili (3 000 maili/miesiąc)

Koszt całości: **0 zł**.

---

## KROK 1 — Własny projekt Supabase

1. Wejdź na https://supabase.com → **Sign in** (GitHub) → **New project**.
2. Ustaw:
   - **Name:** `autotest`
   - **Database Password:** wygeneruj i **zapisz w menedżerze haseł** (potrzebne tylko awaryjnie)
   - **Region:** `Central EU (Frankfurt)`
   - **Plan:** Free
3. Kliknij **Create new project** i poczekaj ~2 minuty.

### 1.1 Wgraj schemat bazy

1. W lewym menu → **SQL Editor** → **New query**.
2. Otwórz w repo plik `self-hosting/schema.sql`, skopiuj **całą** treść, wklej i kliknij **Run**.
3. Powinno pojawić się „Success. No rows returned”.
4. Sprawdź: **Table Editor** → widzisz tabelę `leads`.

### 1.2 Skopiuj klucze API (3 wartości)

Lewe menu → **Project Settings** → **API Keys** / **Data API**:

| Co skopiować | Nazwa w Supabase | Twoja zmienna |
| --- | --- | --- |
| adres projektu | `Project URL` (np. `https://abcxyz.supabase.co`) | `SUPABASE_URL` |
| klucz publiczny | `anon` / `publishable key` (`sb_publishable_...` lub `eyJ...`) | `SUPABASE_PUBLISHABLE_KEY` |
| klucz serwisowy | `service_role` / `secret key` (kliknij **Reveal**) | `SUPABASE_SERVICE_ROLE_KEY` |

> `service_role` daje pełny dostęp do bazy — **nigdy** nie wklejaj go do kodu, tylko do sekretów Cloudflare.

Zapisz te 3 wartości w notatniku — użyjesz ich w kroku 4.

---

## KROK 2 — Maile (Resend)

1. https://resend.com → **Sign up** (Free).
2. **Domains** → **Add Domain** → wpisz `autotest-ap.com` → region `eu-west-1`.
3. Resend pokaże rekordy DNS (3–4 wpisy: `MX`, `TXT` SPF, `TXT` DKIM, opcjonalnie DMARC).
   Dodaj je **dokładnie tak jak są** w panelu, gdzie masz DNS domeny (u rejestratora
   albo w Cloudflare, jeśli już tam przeniesiesz domenę w kroku 5).
4. Wróć do Resend → **Verify DNS Records** → poczekaj do statusu **Verified** (od kilku minut do kilku godzin).
5. **API Keys** → **Create API Key** → nazwa `autotest-prod`, permission **Sending access** → skopiuj klucz
   (`re_...`) — pokaże się **tylko raz**.

Twoje zmienne:

- `RESEND_API_KEY` = `re_...`
- `MAIL_FROM` = `Autotest <noreply@autotest-ap.com>`

> Dopóki domena nie jest zweryfikowana, możesz testowo ustawić `MAIL_FROM` na
> `Autotest <onboarding@resend.dev>` — Resend pozwala wtedy wysyłać tylko na adres właściciela konta.

Maile trafiają na: `dual1518@gmail.com` i `michalpakula12345@gmail.com`.

---

## KROK 3 — Opinie Google (opcjonalnie, ale zalecane)

1. https://console.cloud.google.com → utwórz projekt `autotest`.
2. **APIs & Services** → **Library** → włącz **Places API (New)**.
3. **APIs & Services** → **Credentials** → **Create credentials** → **API key** → skopiuj.
4. Kliknij klucz → **API restrictions** → **Restrict key** → wybierz **Places API (New)** → Save.

Twoja zmienna: `GOOGLE_API_KEY`.
Bez tego klucza zamiast karuzeli pokazuje się link do wizytówki Google — strona działa normalnie.
Opinie są cache’owane w workerze przez 6 h, więc API jest odpytywane rzadko.

---

## KROK 4 — Deploy na Cloudflare Workers

Wszystko poniżej robisz **lokalnie na swoim komputerze**, w katalogu z pobranym repo
(`git clone https://github.com/michalfbi/strona-autotest.git && cd strona-autotest`).

### 4.1 Przygotowanie

```bash
npm install          # albo: bun install
npm i -g wrangler
wrangler login       # otworzy przeglądarkę → zaloguj się do Cloudflare (konto darmowe)
```

### 4.2 Plik `.env` (zmienne potrzebne przy budowaniu frontendu)

Utwórz plik `.env` w głównym katalogu projektu:

```env
VITE_SUPABASE_URL=https://TWOJ-PROJEKT.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_XXXXXXXX
```

(te same wartości co `SUPABASE_URL` i `SUPABASE_PUBLISHABLE_KEY` z kroku 1.2)

### 4.3 Pierwszy build i deploy

```bash
npm run deploy
```

Skrypt robi `vite build`, a potem `wrangler deploy -c .output/server/wrangler.json`.
Na końcu dostaniesz adres w stylu `https://autotest-ap.<twoj-login>.workers.dev`.

### 4.4 Sekrety runtime (serwer) — wpisz po pierwszym deployu

Każda komenda zapyta o wartość — wklej ją i zatwierdź Enterem:

```bash
wrangler secret put SUPABASE_URL                -c .output/server/wrangler.json
wrangler secret put SUPABASE_PUBLISHABLE_KEY    -c .output/server/wrangler.json
wrangler secret put SUPABASE_SERVICE_ROLE_KEY   -c .output/server/wrangler.json
wrangler secret put RESEND_API_KEY               -c .output/server/wrangler.json
wrangler secret put MAIL_FROM                    -c .output/server/wrangler.json
wrangler secret put GOOGLE_API_KEY               -c .output/server/wrangler.json
```

Sprawdzenie listy: `wrangler secret list -c .output/server/wrangler.json`.

Po dodaniu sekretów zrób jeszcze raz `npm run deploy`.

### 4.5 Kolejne aktualizacje strony

```bash
git pull
npm run deploy
```

---

### 4.6 Automatyczny ping Supabase (bez GitHub Actions)

Darmowy projekt Supabase usypia się po ~7 dniach bez ruchu. Worker ma wbudowany
**Cron Trigger Cloudflare**, który codziennie o 06:17 UTC wysyła jedno zapytanie do bazy
(funkcja `count_leads`). Harmonogram jest w `nitro.config.ts`, kod w `server/tasks/supabase-ping.ts`.

- Włącza się sam przy `npm run deploy` (wpis `triggers.crons` w `.output/server/wrangler.json`).
- Jest darmowy (Workers Free) i nie zużywa minut GitHub Actions.
- Korzysta z sekretów `SUPABASE_URL` i `SUPABASE_SERVICE_ROLE_KEY`, które już ustawiłeś w kroku 4.4.
- Podgląd: Cloudflare → **Workers & Pages** → worker → **Settings** → **Triggers** (cron)
  oraz **Logs** — szukaj wpisu `[supabase:ping] HTTP 200`.

---

## KROK 5 — Domena autotest-ap.com

1. Cloudflare Dashboard → **Add a site** → `autotest-ap.com` → plan **Free**.
2. Cloudflare poda 2 nameservery — ustaw je u rejestratora domeny (zamiast obecnych).
   Propagacja: od kilku minut do 24 h.
3. Po aktywacji: **Workers & Pages** → worker `autotest-ap` → **Settings** →
   **Domains & Routes** → **Add** → **Custom domain** → `autotest-ap.com`.
   Powtórz dla `www.autotest-ap.com`.
4. SSL ustawi się automatycznie (Cloudflare → SSL/TLS → tryb **Full**).

> Jeśli DNS domeny jest w Cloudflare, rekordy Resend z kroku 2 dodajesz tutaj:
> **DNS** → **Records** → **Add record**. Rekordy TXT/MX Resend ustaw jako **DNS only** (szara chmurka).

---

## KROK 6 — Test po deployu

1. Wejdź na swój adres → wyślij formularz na stronie głównej (link do pojazdu).
2. Supabase → **Table Editor** → `leads` → powinien pojawić się nowy wiersz.
3. Skrzynka `dual1518@gmail.com` → mail „Potencjalny klient przysłał link do pojazdu”.
4. Resend → **Logs** → status `delivered`.
5. Jeśli coś nie działa: `wrangler tail -c .output/server/wrangler.json` pokazuje logi na żywo.

---

## Ściąga: wszystkie zmienne

| Zmienna | Gdzie ustawiasz | Skąd bierzesz | Do czego |
| --- | --- | --- | --- |
| `VITE_SUPABASE_URL` | `.env` (build) | Supabase → Project URL | klient w przeglądarce |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | `.env` (build) | Supabase → anon key | klient w przeglądarce |
| `SUPABASE_URL` | `wrangler secret` | Supabase → Project URL | serwer |
| `SUPABASE_PUBLISHABLE_KEY` | `wrangler secret` | Supabase → anon key | zapis leadów |
| `SUPABASE_SERVICE_ROLE_KEY` | `wrangler secret` | Supabase → service_role | licznik zgłoszeń w mailach |
| `RESEND_API_KEY` | `wrangler secret` | Resend → API Keys | wysyłka maili |
| `MAIL_FROM` | `wrangler secret` | wpisujesz sam | adres nadawcy |
| `GOOGLE_API_KEY` | `wrangler secret` | Google Cloud → Credentials | opinie Google |

## Najczęstsze problemy

| Objaw | Przyczyna / rozwiązanie |
| --- | --- |
| `Expected 3 parts in JWT; got 1` | używasz nowego klucza `sb_publishable_...` w starym miejscu — upewnij się, że wklejasz go do `SUPABASE_PUBLISHABLE_KEY`, nie do `SERVICE_ROLE` |
| Formularz zapisuje się, ale nie ma maila | brak `RESEND_API_KEY` albo domena w Resend jeszcze nie `Verified` |
| Karuzela pokazuje stare opinie | brak/zły `GOOGLE_API_KEY` albo nie włączone **Places API (New)** |
| `permission denied for table leads` | nie wykonano całego `self-hosting/schema.sql` (brakuje `GRANT`) |
| `wrangler deploy` nie widzi konfiguracji | uruchamiaj po buildzie i z flagą `-c .output/server/wrangler.json` |
