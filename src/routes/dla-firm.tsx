import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, DollarSign, BarChart3, Shield, CheckCircle2, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/dla-firm")({
  head: () => ({
    meta: [
      { title: "Autotest dla firm i flot | Zakup i audyt pojazdów firmowych" },
      { name: "description", content: "Kompleksowa obsługa firm i flot: zakup pojazdów, negocjacje grupowe, audyt kosztów, leasing i finansowanie. Oszczędź do 18% na TCO." },
      { property: "og:title", content: "Autotest dla firm i flot" },
      { property: "og:description", content: "Zakup pojazdów, negocjacje, leasing i audyt kosztów dla firm." },
      { property: "og:url", content: "/dla-firm" },
    ],
    links: [{ rel: "canonical", href: "/dla-firm" }],
  }),
  component: ForBusinessPage,
});

const SERVICES = [
  { icon: Users, t: "Zakup i odświeżanie floty", d: "Analiza potrzeb, wyszukiwanie, negocjacje grupowe, harmonogram dostaw.", price: "od 500 zł / pojazd" },
  { icon: DollarSign, t: "Leasing i finansowanie", d: "Porównanie ofert, analiza TCO, negocjacje warunków, optymalizacja podatkowa.", price: "od 1500 zł" },
  { icon: BarChart3, t: "Audyt kosztów floty", d: "Analiza paliwa, serwisu, ubezpieczeń i amortyzacji z planem optymalizacji.", price: "od 2000 zł" },
  { icon: Shield, t: "Compliance i policy", d: "Polityka floty, procedury, umowy leasingowe zgodne z RODO i KSeF.", price: "od 990 zł" },
];

const RESULTS = [
  { v: "18%", l: "Średnia oszczędność na TCO" },
  { v: "72h", l: "Czas przygotowania pierwszej rekomendacji" },
  { v: "300+", l: "Zrealizowanych zakupów flotowych" },
];

function ForBusinessPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Award className="h-3.5 w-3.5" /> Dla firm i flot
          </span>
          <h1 className="mt-6 font-display text-3xl sm:text-5xl font-bold">
            Optymalizuj flotę. <span className="text-gradient-primary">Oszczędzaj na TCO.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Kompleksowe wsparcie w zakupie pojazdów firmowych, negocjacjach z dealerami, wyborze finansowania i audycie kosztów.
          </p>
          <Button asChild size="lg" className="mt-8 bg-gradient-primary text-primary-foreground shadow-glow">
            <Link to="/kontakt">Umów konsultację B2B <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {RESULTS.map((r) => (
              <div key={r.l} className="rounded-2xl border border-border bg-gradient-card p-8 text-center">
                <p className="font-display text-5xl font-bold text-gradient-primary">{r.v}</p>
                <p className="mt-3 text-sm text-muted-foreground">{r.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-4xl font-bold">Usługi B2B</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {SERVICES.map((s) => (
              <div key={s.t} className="rounded-2xl border border-border bg-gradient-card p-6 hover:border-primary/40 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                    <s.icon className="h-5 w-5 text-primary" />
                  </span>
                  <span className="text-sm font-semibold text-gradient-primary shrink-0">{s.price}</span>
                </div>
                <h3 className="mt-4 font-semibold text-lg">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-surface/40 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold">Jak pracujemy z firmami</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { n: "01", t: "Diagnoza potrzeb", d: "Analiza floty i celów biznesowych." },
              { n: "02", t: "Rekomendacja", d: "Wybór modeli, dostawców, formy finansowania." },
              { n: "03", t: "Negocjacje", d: "Grupowe zakupy z twardymi warunkami." },
              { n: "04", t: "Wdrożenie", d: "Harmonogram dostaw, formalności, przekazanie." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-card/60 p-6">
                <span className="font-display text-3xl font-bold text-gradient-primary">{s.n}</span>
                <h3 className="mt-3 font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-primary/30 bg-gradient-card p-10 sm:p-14">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold">Bezpłatny audyt wstępny</h2>
                <p className="mt-3 text-muted-foreground">Prześlij dane floty — w 72h dostaniesz raport z potencjalnymi oszczędnościami.</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {["Bez zobowiązań", "Analiza w 72h", "Rekomendacje konkretnych oszczędności"].map((f) => (
                    <li key={f} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> {f}</li>
                  ))}
                </ul>
              </div>
              <div className="flex md:justify-end">
                <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow">
                  <Link to="/kontakt">Zamów audyt <TrendingUp className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
