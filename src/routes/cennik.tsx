import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Minus, Phone, ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/cennik")({
  head: () => ({
    meta: [
      { title: "Cennik — Autotest | Inspekcja auta od 300 zł" },
      {
        name: "description",
content:
          "Przejrzysty cennik Autotest: inspekcja mobilna od 300 zł, raport VIN od 99 zł, pakiety pomocy w zakupie Basic 500 zł, Standard 650 zł. Bez ukrytych kosztów.",
      },
      { property: "og:title", content: "Cennik Autotest — przejrzyste stawki" },
      {
        property: "og:description",
        content:
          "Inspekcja mobilna od 300 zł, raport VIN od 99 zł, pakiety pomocy w zakupie od 799 zł.",
      },
      { property: "og:url", content: "/cennik" },
    ],
    links: [{ rel: "canonical", href: "/cennik" }],
  }),
  component: PricingPage,
});

const PACKAGES = [
  {
    name: "Basic",
    price: "500 zł",
    desc: "Sprawdzenie jednego wybranego auta",
    cta: "Wybierz Basic",
    features: [
      "Inspekcja mobilna w miejscu auta",
      "Diagnostyka komputerowa OBD-II",
      "Pomiar grubości lakieru",
      "Test drogowy i ocena podwozia",
      "Raport pisemny ze zdjęciami",
    ],
  },
  {
    name: "Standard",
    price: "650 zł",
    desc: "Pomoc w wyborze i negocjacjach",
    cta: "Wybierz Standard",
    featured: true,
    features: [
      "Wszystko z pakietu Basic",
      "Wyszukanie do 3 egzemplarzy",
      "Analiza ogłoszeń i raport VIN",
      "Negocjacje ceny z właścicielem",
      "Obecność przy transakcji i umowa",
    ],
},
];

const SINGLE_SERVICES: { group: string; items: { name: string; price: string; note?: string }[] }[] = [
  {
    group: "Weryfikacja i inspekcja",
    items: [
      { name: "Inspekcja mobilna pojazdu", price: "od 300 zł", note: "dojazd do 50 km w cenie" },
      { name: "Raport VIN i analiza ogłoszenia", price: "od 99 zł" },
      { name: "Pomiar lakieru + protokół", price: "150 zł" },
      { name: "Diagnostyka komputerowa", price: "150 zł" },
    ],
  },
  {
    group: "Zakup i negocjacje",
    items: [
      { name: "Wycena i negocjacje ceny", price: "od 199 zł" },
      { name: "Wyszukanie egzemplarzy pod kryteria", price: "od 399 zł" },
      { name: "Reprezentacja przy transakcji", price: "od 250 zł" },
    ],
  },
  {
    group: "Sprzedaż auta",
    items: [
      { name: "Przygotowanie do sprzedaży", price: "od 300 zł" },
      { name: "Sesja zdjęciowa i ogłoszenie", price: "od 250 zł" },
      { name: "Obsługa kupujących i oględzin", price: "od 250 zł" },
    ],
  },
  {
    group: "Dodatki",
    items: [
      { name: "Kredyt / leasing — porównanie ofert", price: "od 149 zł" },
      { name: "Ubezpieczenie OC/AC/GAP", price: "0 zł", note: "wynagrodzenie od ubezpieczyciela" },
      { name: "Transport lawetą", price: "od 490 zł", note: "zależnie od dystansu" },
      { name: "Rejestracja pojazdu", price: "299 zł" },
    ],
  },
];

const COMPARE: { label: string; basic: boolean | string; standard: boolean | string; premium: boolean | string }[] = [
  { label: "Inspekcja techniczna auta", basic: true, standard: true, premium: true },
  { label: "Raport pisemny ze zdjęciami", basic: true, standard: true, premium: true },
  { label: "Raport VIN", basic: "dopłata", standard: true, premium: true },
  { label: "Liczba sprawdzanych egzemplarzy", basic: "1", standard: "do 3", premium: "bez limitu" },
  { label: "Negocjacje ceny", basic: false, standard: true, premium: true },
  { label: "Obecność przy transakcji", basic: false, standard: true, premium: true },
  { label: "Transport i rejestracja", basic: false, standard: "dopłata", premium: true },
  { label: "Dobór ubezpieczenia", basic: false, standard: false, premium: true },
];

const FAQ = [
  {
    q: "Czy w cenie jest dojazd do samochodu?",
    a: "Tak, dojazd w promieniu 50 km od naszej lokalizacji jest wliczony w cenę inspekcji. Powyżej tego dystansu doliczamy 1,50 zł za każdy kolejny kilometr — zawsze podajemy dokładną kwotę przed wyjazdem.",
  },
  {
    q: "Kiedy płacę za usługę?",
    a: "Po wykonaniu inspekcji i przekazaniu raportu. W pakietach Standard i Premium pobieramy zaliczkę 30% na start, a resztę po zakończeniu procesu zakupu.",
  },
  {
    q: "Co jeśli auto okaże się w złym stanie?",
    a: "Płacisz za wiedzę, nie za pozytywny wynik. Raport ostrzegający przed zakupem powypadkowego auta jest najlepszą inwestycją — jedna taka decyzja oszczędza kilkanaście tysięcy złotych.",
  },
  {
    q: "Czy wystawiacie fakturę?",
    a: "Tak, każdą usługę rozliczamy fakturą — również dla firm i flot. Dla stałych klientów biznesowych przygotowujemy indywidualne stawki.",
  },
  {
    q: "Czy ceny są ostateczne?",
    a: "Kwoty „od” dotyczą standardowych osobówek. Dla aut zabytkowych, sportowych, dostawczych oraz zakupów za granicą przygotowujemy indywidualną wycenę po krótkiej rozmowie.",
  },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="mx-auto h-4 w-4 text-primary" />;
  if (value === false) return <Minus className="mx-auto h-4 w-4 text-muted-foreground/50" />;
  return <span className="text-xs text-muted-foreground">{value}</span>;
}

function PricingPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-gradient-primary opacity-[0.07]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-24 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/60 px-3 py-1 text-xs text-muted-foreground">
            <Info className="h-3.5 w-3.5 text-primary" /> Bez ukrytych kosztów 
          </span>
          <h1 className="mt-5 font-display text-3xl md:text-5xl font-semibold tracking-tight">
            Cennik <span className="text-gradient-primary">Autotest</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground md:text-lg">
            Płacisz za konkretną pracę i dokumentację. Wycenę potwierdzamy zawsze przed wyjazdem —
            żadnych niespodzianek na fakturze.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
<h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">Pakiety pomocy w zakupie</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Uwaga: do ceny pakietu doliczany jest koszt dojazdu na miejsce — dojazd do 50 km jest w cenie, a za każdy kolejny kilometr doliczamy 1,50 zł.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PACKAGES.map((p) => (
            <div
              key={p.name}
              className={
                p.featured
                  ? "relative rounded-2xl border border-primary/50 bg-surface/70 p-7 shadow-glow"
                  : "relative rounded-2xl border border-border/60 bg-surface/40 p-7"
              }
            >
              {p.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-gradient-primary px-3 py-1 text-[11px] font-medium text-primary-foreground">
                  Najczęściej wybierany
                </span>
              )}
              <h3 className="font-display text-xl font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-5 font-display text-2xl sm:text-3xl font-semibold">{p.price}</div>
              <ul className="mt-6 space-y-2.5 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={
                  p.featured
                    ? "mt-7 w-full bg-gradient-primary text-primary-foreground hover:opacity-90"
                    : "mt-7 w-full"
                }
                variant={p.featured ? "default" : "outline"}
              >
                <Link to="/kontakt">{p.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-surface/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
            Porównanie pakietów
          </h2>
          <p className="mt-2 text-xs text-muted-foreground md:hidden">Przewiń tabelę w poziomie, aby zobaczyć wszystkie pakiety.</p>
          <div className="mt-6 sm:mt-8 overflow-x-auto rounded-xl border border-border/60 bg-background/60">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-border/60">
                  <th className="px-5 py-4 text-left font-display font-semibold">Zakres</th>
                  <th className="px-5 py-4 text-center font-display font-semibold">Basic</th>
                  <th className="px-5 py-4 text-center font-display font-semibold text-primary">Standard</th>
                  
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((row) => (
                  <tr key={row.label} className="border-b border-border/40 last:border-0">
                    <td className="px-5 py-3.5 text-muted-foreground">{row.label}</td>
                    <td className="px-5 py-3.5 text-center"><Cell value={row.basic} /></td>
                    <td className="px-5 py-3.5 text-center"><Cell value={row.standard} /></td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">Usługi pojedyncze</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Nie potrzebujesz całego pakietu? Zamów dokładnie to, co jest Ci potrzebne.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {SINGLE_SERVICES.map((g) => (
            <div key={g.group} className="rounded-xl border border-border/60 bg-surface/40 p-6">
              <h3 className="font-display text-lg font-semibold">{g.group}</h3>
              <ul className="mt-4 divide-y divide-border/40">
                {g.items.map((i) => (
                  <li key={i.name} className="flex items-baseline justify-between gap-4 py-3">
                    <span className="text-sm text-muted-foreground">
                      {i.name}
                      {i.note && (
                        <span className="block text-xs text-muted-foreground/70">{i.note}</span>
                      )}
                    </span>
                    <span className="whitespace-nowrap font-display text-sm font-semibold">
                      {i.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-surface/40">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
            Pytania o ceny
          </h2>
          <Accordion type="single" collapsible className="mt-8">
            {FAQ.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="rounded-2xl border border-border/60 bg-gradient-primary/10 p-8 md:p-12 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
            Nie wiesz, który pakiet wybrać?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Opisz nam auto i budżet — zaproponujemy najtańszy zakres, który realnie Cię zabezpieczy.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">
              <a href="tel:+48690976790">
                <Phone className="mr-2 h-4 w-4" /> +48 690 976 790
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/kontakt">
                Napisz do nas <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
