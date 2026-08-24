import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Scale,
  Eye,
  HeartHandshake,
  Award,
  Wrench,
  Gauge,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [
      { title: "O nas — Autotest | Niezależni eksperci od samochodów" },
      {
        name: "description",
        content:
          "Poznaj Autotest: niezależny zespół rzeczoznawców i diagnostów. Ponad 1200 sprawdzonych aut, 5,0 w opiniach Google. Działamy w całej Polsce, bez powiązań z komisami.",
      },
      { property: "og:title", content: "O nas — Autotest" },
      {
        property: "og:description",
        content:
          "Niezależny zespół rzeczoznawców i diagnostów. 1200+ sprawdzonych aut, ocena 5,0 w Google.",
      },
      { property: "og:url", content: "/o-nas" },
    ],
    links: [{ rel: "canonical", href: "/o-nas" }],
  }),
  component: AboutPage,
});

const STATS = [
  { icon: Gauge, value: "1000+", label: "sprawdzonych samochodów" },
  { icon: Award, value: "8 lat", label: "doświadczenia w branży" },
  { icon: ShieldCheck, value: "5,0", label: "Ocena w Google" },
  { icon: MapPin, value: "Cała Polska ", label: "\n" },
];

const VALUES = [
  {
    icon: Scale,
    title: "Pełna niezależność",
    desc: "Nie współpracujemy z komisami ani handlarzami. Nasz jedyny interes to Twój dobry zakup — dlatego mówimy „nie kupuj”, gdy trzeba.",
  },
  {
    icon: Eye,
    title: "Przejrzystość",
    desc: "Otrzymujesz pisemny raport ze zdjęciami, pomiarami lakieru i odczytami z komputera. Wszystko udokumentowane, bez ogólników.",
  },
  {
    icon: Wrench,
    title: "Wiedza techniczna",
    desc: "Diagnostyka OBD-II, miernik grubości lakieru, test drogowy i ocena podwozia. Praktyka warsztatowa, nie teoria z internetu.",
  },
  {
    icon: HeartHandshake,
    title: "Realne oszczędności",
    desc: "Średnio zbijamy cenę auta o kilka tysięcy złotych — a w wielu przypadkach chronimy klienta przed stratą całego budżetu.",
  },
];

const TIMELINE = [
  { year: "2018", text: "Pierwsze inspekcje przedzakupowe dla znajomych i rodziny — z prostym raportem w PDF." },
  { year: "2020", text: "Własny sprzęt diagnostyczny i mobilny serwis: dojeżdżamy do auta w dowolne miejsce w Polsce." },
  { year: "2022", text: "Rozszerzenie oferty o pomoc w zakupie „od A do Z”, negocjacje i przygotowanie aut do sprzedaży." },
  { year: "2024", text: "Obsługa firm i flot: przeglądy poleasingowe, wyceny i cykliczne kontrole stanu pojazdów." },
  { year: "2026", text: "Tysiące zrealizowanych zleceń i ocena 5,0 w opiniach Google." },
];

function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-gradient-primary opacity-[0.07]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/60 px-3 py-1 text-xs text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Niezależni od komisów i handlarzy
          </span>
          <h1 className="mt-5 font-display text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl">
            Jesteśmy po stronie <span className="text-gradient-primary">kupującego</span>
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground md:text-lg">
            Autotest to zespół rzeczoznawców i diagnostów, który sprawdza samochody zanim wydasz na
            nie pieniądze. Nie sprzedajemy aut — sprzedajemy pewność, że kupujesz dobrze.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">
              <Link to="/kontakt">Porozmawiajmy o Twoim aucie</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/cennik">Zobacz cennik</Link>
            </Button>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-xl border border-border/60 bg-surface/60 p-5">
                <s.icon className="h-5 w-5 text-primary" />
                <div className="mt-3 font-display text-2xl font-semibold">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">Nasze zasady</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Cztery reguły, od których nigdy nie odstępujemy — niezależnie od tego, jak atrakcyjnie
          wygląda ogłoszenie.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="rounded-xl border border-border/60 bg-surface/40 p-6 transition-colors hover:border-primary/40"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary/20">
                <v.icon className="h-5 w-5 text-primary" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">Jak to się zaczęło</h2>
        <ol className="mt-10 space-y-6 border-l border-border/60 pl-6">
          {TIMELINE.map((t) => (
            <li key={t.year} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
              <div className="font-display text-sm font-semibold text-primary">{t.year}</div>
              <p className="mt-1 text-sm text-muted-foreground max-w-2xl">{t.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="rounded-2xl border border-border/60 bg-gradient-primary/10 p-8 md:p-12 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
            Masz auto na oku? Sprawdźmy je razem.
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Zadzwoń lub napisz — w ciągu kilku minut powiemy, czy oferta jest warta dojazdu.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">
              <a href="tel:+48690976790">Zadzwoń: +48 690 976 790</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/kontakt">
                Formularz kontaktowy <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
