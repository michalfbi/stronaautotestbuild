import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";
import {
  ArrowRight, CheckCircle2, Shield, Search, FileText, Gauge,
  MapPin, Fingerprint, Phone, Activity, Zap, Car, Cpu, AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { submitLead } from "@/lib/leads.functions";
import { GoogleReviews } from "@/components/GoogleReviews";
import { ConsentNote, Honeypot, getTimeOnSiteSeconds, useVisitStart } from "@/components/LeadFormExtras";
import { isValidPhone } from "@/lib/leads.schema";
import heroCar from "@/assets/hero-car.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Autotest — Niezależna weryfikacja i pomoc w zakupie auta" },
      { name: "description", content: "Ekspercka inspekcja pojazdów, raport VIN, negocjacje ceny i kompleksowa pomoc w zakupie samochodu. Chronimy Twoje pieniądze na każdym etapie transakcji." },
      { property: "og:title", content: "Autotest — Niezależna weryfikacja i pomoc w zakupie auta" },
      { property: "og:description", content: "Ekspercka inspekcja pojazdów, raport VIN, negocjacje ceny i pomoc w zakupie samochodu w całej Polsce." },
      { property: "og:url", content: "https://autotest-ap.com/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://autotest-ap.com/" }],
  }),
  component: Home,
});

function Home() {
  const submit = useServerFn(submitLead);
  const [url, setUrl] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [loading, setLoading] = useState(false);
  useVisitStart();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading || !url.trim() || !phone.trim()) return;
    if (!isValidPhone(phone)) {
      toast.error("Podaj poprawny numer telefonu (min. 9 cyfr).");
      return;
    }
    setLoading(true);
    try {
      await submit({
        data: {
          kind: "hero",
          url: url.trim(),
          phone: phone.trim(),
          source: "home-hero",
          timeOnSiteSeconds: getTimeOnSiteSeconds(),
          website,
        },
      });
      toast.success("Zgłoszenie wysłane. Oddzwonimy w ciągu 24h.");
      setUrl(""); setPhone("");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Coś poszło nie tak.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,oklch(1_0_0/0.06)_1px,transparent_0)] [background-size:24px_24px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28 grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Zap className="h-3.5 w-3.5" /> Niezależni eksperci w całej Polsce
            </span>
            <h1 className="mt-6 font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Pomoc w zakupie pojazdów.<br />
              <span className="text-gradient-primary">Kupuj bez ryzyka.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl">
              Wklej link do ogłoszenia — w 24h dostaniesz opinię naszego eksperta, analizę ryzyka i realną wycenę.
              Chronimy przed wadami ukrytymi i przepłacaniem.
            </p>

            <form onSubmit={onSubmit} className="relative mt-8 rounded-2xl border border-border bg-card/60 backdrop-blur p-4 sm:p-5 shadow-elegant">
              <div className="grid gap-3 sm:grid-cols-[1fr_200px_auto]">
                <Input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Wklej link do ogłoszenia (OLX, Otomoto...)"
                  aria-label="Link do ogłoszenia"
                  maxLength={600}
                  className="h-12"
                  required
                />
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Numer telefonu"
                  aria-label="Numer telefonu"
                  autoComplete="tel"
                  inputMode="tel"
                  maxLength={40}
                  className="h-12"
                  type="tel"
                  required
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="h-12 px-6 bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90"
                >
                  {loading ? "Wysyłam..." : (<>Wyślij <ArrowRight className="ml-1 h-4 w-4" /></>)}
                </Button>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Analiza bezpłatna. Odpowiadamy w 24h. Nie musisz nic decydować od razu.
              </p>
              <div className="mt-2">
                <ConsentNote />
              </div>
              <Honeypot value={website} onChange={setWebsite} />
            </form>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Niezależni od komisów</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Ocena 5/5</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Cała Polska</span>
            </div>
          </div>

          <GoogleReviews />
        </div>
</section>

      {/* CTA RAPORT VIN */}
      <section className="py-10 sm:py-16 bg-surface/40 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-primary/30 bg-gradient-card p-6 sm:p-10 lg:p-12 shadow-elegant relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-primary opacity-10 blur-3xl" />
            <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <FileText className="h-3.5 w-3.5" /> Zanim zdecydujesz o zakupie
                </span>
                <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  Najpierw poznaj historię pojazdu.<br />
                  <span className="text-gradient-primary">Zamów raport VIN — już od 99 zł.</span>
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Zanim zdecydujesz się na kosztowną inspekcję, sprawdź historię auta po numerze VIN:
                  szkody, przebieg, kradzieże i wcześniejszych właścicieli. Szybka weryfikacja za przystępną cenę,
                  która pozwoli Ci podjąć właściwą decyzję.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Odpowiedź w 24h</span>
                  <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Pełna historia pojazdu</span>
                  <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Zniżka na inspekcję</span>
                </div>
              </div>
              <div className="flex flex-col items-start lg:items-end gap-4">
                <div className="text-center lg:text-right">
                  <p className="text-sm text-muted-foreground">Cena raportu</p>
                  <p className="font-display text-4xl sm:text-5xl font-bold text-gradient-primary">99 zł</p>
                </div>
                <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow">
                  <Link to="/raport-vin">Zamów raport VIN <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JAK TO DZIAŁA */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-primary text-sm font-medium tracking-wider uppercase">Jak to działa</p>
            <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold">
              4 kroki dzielą Cię od pewnego zakupu
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Wyślij ogłoszenie", d: "Wklej link do OLX/Otomoto i zostaw numer. Odezwiemy się w 24h." },
              { n: "02", t: "Analiza wstępna", d: "Sprawdzamy dokumentację, historię VIN i ryzyka jeszcze przed dojazdem." },
              { n: "03", t: "Inspekcja na miejscu", d: "Test drogowy, komputer diagnostyczny, miernik lakieru, dokumentacja fotograficzna." },
              { n: "04", t: "Raport i negocjacje", d: "Otrzymujesz raport, realną wycenę i wsparcie w negocjacjach ceny." },
            ].map((s) => (
              <div key={s.n} className="relative rounded-2xl border border-border bg-gradient-card p-6 hover:border-primary/40 transition-colors">
                <span className="font-display text-4xl font-bold text-gradient-primary">{s.n}</span>
                <h3 className="mt-3 font-semibold text-lg">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CO SPRAWDZAMY */}
      <section className="py-14 sm:py-20 bg-surface/40 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-medium tracking-wider uppercase">Zakres inspekcji</p>
              <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold">
                Co dokładnie sprawdzamy w Twoim aucie
              </h2>
              <p className="mt-4 text-muted-foreground">
                Kompleksowa procedura, która pokazuje realny stan auta, a nie to, co napisano w ogłoszeniu.
                Raport ze zdjęciami daje Ci twarde argumenty do negocjacji ceny.
              </p>
              <Button asChild className="mt-8 bg-gradient-primary text-primary-foreground shadow-glow">
                <Link to="/uslugi">Zobacz wszystkie usługi <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Shield, t: "Weryfikacja prawna", d: "Historia serwisowa, hipoteki, kradzieże, VIN" },
                { icon: Gauge, t: "Powłoka lakiernicza", d: "Miernik lakieru, ślady napraw powypadkowych" },
                { icon: Activity, t: "Test drogowy", d: "Mechanika, hamulce, zawieszenie, skrzynia" },
                { icon: Cpu, t: "Diagnostyka OBD-II", d: "Błędy silnika, EGR, DPF, czujniki NOx" },
                { icon: Search, t: "Wnętrze i wyposażenie", d: "Elektronika, klimatyzacja, elementy komfortu" },
                { icon: FileText, t: "Dokumenty", d: "Umowy, faktury, książka serwisowa, VIN" },
              ].map((f) => (
                <div key={f.t} className="rounded-xl border border-border bg-card/60 p-5 hover:border-primary/40 transition-colors">
                  <f.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-3 font-semibold">{f.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DLACZEGO MY */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-primary text-sm font-medium tracking-wider uppercase">Dlaczego Autotest</p>
            <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold">Kupujesz mądrzej i taniej</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: AlertTriangle, t: "Chronimy przed wadami ukrytymi", d: "Wykrywamy naprawy powypadkowe, przekręcony licznik, ukryte awarie." },
              { icon: Car, t: "Negocjujemy cenę", d: "Każda wykryta usterka to konkretny argument, żeby zapłacić mniej." },
              { icon: MapPin, t: "Cała Polska", d: "Dojeżdżamy do każdego miasta. Weryfikacja mobilna 7 dni w tygodniu." },
            ].map((f) => (
              <div key={f.t} className="rounded-2xl border border-border bg-gradient-card p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <f.icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mt-4 font-semibold text-lg">{f.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* CTA */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-primary/30 bg-gradient-card p-10 sm:p-14 text-center shadow-elegant relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-primary opacity-10 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-2xl sm:text-4xl font-bold">
                Znalazłeś auto? <span className="text-gradient-primary">Sprawdź je z nami.</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Analiza ogłoszenia jest bezpłatna. Zaoszczędź dziesiątki tysięcy dzięki jednej rozmowie z ekspertem.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow">
                  <Link to="/kontakt">Umów konsultację <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="tel:+48690976790"><Phone className="mr-2 h-4 w-4" /> +48 690 976 790</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function StatChip({ icon: Icon, label }: { icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-background/80 backdrop-blur border border-border px-3 py-1.5 text-xs font-medium">
      <Icon className="h-3.5 w-3.5 text-primary" /> {label}
    </span>
  );
}
