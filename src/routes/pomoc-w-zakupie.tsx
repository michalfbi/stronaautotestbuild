import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone, Calendar, FileText, Search, Car, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/pomoc-w-zakupie")({
  head: () => ({
    meta: [
      { title: "Pomoc w zakupie auta — Autotest | Ekspert prowadzi Cię za rękę" },
      { name: "description", content: "Kompleksowa pomoc w zakupie samochodu: wyszukanie, weryfikacja, negocjacje ceny, transport i rejestracja. Pakiety od 500 zł. Cała Polska." },
      { property: "og:title", content: "Pomoc w zakupie auta — Autotest" },
      { property: "og:description", content: "Ekspert prowadzi Cię przez cały proces zakupu — od wyszukania do rejestracji." },
      { property: "og:url", content: "https://autotest-ap.com/pomoc-w-zakupie" },
    ],
    links: [{ rel: "canonical", href: "https://autotest-ap.com/pomoc-w-zakupie" }],
  }),
  component: PurchaseAssistance,
});

const STEPS = [
  { n: "01", icon: Phone, t: "Kontakt telefoniczny", d: "Poznajemy Twoje potrzeby, budżet i oczekiwania." },
  { n: "02", icon: Calendar, t: "Umówienie oględzin", d: "Koordynujemy spotkanie z obecnym właścicielem pojazdu." },
  { n: "03", icon: Search, t: "Inspekcja pojazdu", d: "Szczegółowa inspekcja dopasowana do wybranego pakietu." },
  { n: "04", icon: FileText, t: "Raport z oględzin", d: "Otrzymujesz kompletny raport z rekomendacją: kupować czy odpuścić." },
  { n: "05", icon: DollarSign, t: "Negocjacje i zakup", d: "Reprezentujemy Cię w negocjacjach, pomagamy sfinalizować transakcję." },
];

const PACKAGES = [
  { name: "Basic", price: "500 zł", desc: "Sprawdzenie jednego wybranego auta", features: ["Inspekcja mobilna w miejscu auta", "Diagnostyka komputerowa OBD-II", "Pomiar grubości lakieru", "Test drogowy i ocena podwozia", "Raport pisemny ze zdjęciami"] },
  { name: "Standard", price: "650 zł", desc: "Pomoc w wyborze i negocjacjach", featured: true, features: ["Wszystko z pakietu Basic", "Wyszukanie do 3 egzemplarzy", "Analiza ogłoszeń i raport VIN", "Negocjacje ceny z właścicielem", "Obecność przy transakcji i umowa"] },
];


const FAQ = [
  { q: "Ile trwa cały proces?", a: "Od 1 do 5 dni zależnie od dostępności. O każdym etapie informujemy Cię na bieżąco." },
  { q: "Jak wygląda pierwszy krok?", a: "Umawiasz bezpłatną konsultację, w której przeglądamy przesłane ogłoszenie i sprawdzamy telefonicznie dostępność auta.\u00a0\nMożemy również zająć się poszukiwaniem pojazdu na portalach ogłoszeniowych za ciebie" },
  { q: "Czy jeździcie po całej Polsce?", a: "Tak. Dojeżdżamy do każdego miasta. Doliczamy do ceny pakietu koszty dojazdu." },
  { q: "Jak sprawdzacie pojazd przed zakupem?", a: "Weryfikujemy historię VIN, sprawdzamy przebieg i stany liczników, wykonujemy diagnostykę komputerową OBD oraz dokładne oględziny techniczne i wizualne, a także sprawdzamy dokumenty i stan prawny pojazdu." },
  
  { q: "Czy negocjujecie cenę w moim imieniu?", a: "Tak. Prowadzimy negocjacje cenowe z sprzedającym i dbamy o to, byś nie przepłacił. Argumenty z inspekcji (usterki, koszty napraw, historia) przedstawiamy sprzedającemu tak, żeby realnie obniżyć cenę." },
  { q: "Czy dostanę raport na piśmie?", a: "Tak — zawsze. Otrzymujesz pełen raport PDF z fotografiami, wynikami diagnostyki i rekomendacją, wraz ze szczegółowym uzasadnieniem naszej decyzji." },
  { q: "Czy mogę odstąpić od usługi w trakcie?", a: "Tak. Na każdym etapie możesz zrezygnować bez podawania przyczyny. Rozliczamy się wyłącznie za faktycznie wykonane etapy, a pozostała część jest zwracana." },
  
  { q: "Jak się z Wami skontaktować?", a: "Najprościej przez formularz kontaktowy, e-mail na dual1518@gmail.com lub telefonicznie pod numerem +48 690 976 790. Chętnie odpowiemy na wszystkie pytania." },
];

function PurchaseAssistance() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Car className="h-3.5 w-3.5" /> Kompleksowa pomoc w zakupie
          </span>
          <h1 className="mt-6 font-display text-3xl sm:text-5xl font-bold">
            Kupujemy auto <span className="text-gradient-primary">za Ciebie</span> — od wyszukania do rejestracji
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Ty wybierasz model. My znajdujemy najlepszy egzemplarz, weryfikujemy, negocjujemy cenę i finalizujemy transakcję.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow">
              <Link to="/kontakt">Umów konsultację <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="tel:+48690976790"><Phone className="mr-2 h-4 w-4" /> Zadzwoń teraz</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-center">Jak wygląda proces</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-gradient-card p-6">
                <span className="font-display text-3xl font-bold text-gradient-primary">{s.n}</span>
                <s.icon className="mt-3 h-5 w-5 text-primary" />
                <h3 className="mt-3 font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-surface/40 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-2xl sm:text-4xl font-bold">Pakiety</h2>
            <p className="mt-3 text-muted-foreground">Wybierz zakres wsparcia dopasowany do Twoich potrzeb.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {PACKAGES.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-2xl border p-8 bg-gradient-card ${
                  p.featured ? "border-primary/60 shadow-glow" : "border-border"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Najczęściej wybierany
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <p className="mt-4 font-display text-4xl font-bold text-gradient-primary">{p.price}</p>
                <ul className="mt-6 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className={`mt-8 w-full ${p.featured ? "bg-gradient-primary text-primary-foreground shadow-glow" : ""}`} variant={p.featured ? "default" : "outline"}>
                  <Link to="/kontakt">Wybieram {p.name}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center">Najczęstsze pytania</h2>
          <Accordion type="single" collapsible className="mt-10">
            {FAQ.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
