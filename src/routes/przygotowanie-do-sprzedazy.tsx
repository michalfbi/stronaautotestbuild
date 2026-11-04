import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Wrench, Sparkles, Camera, Handshake, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/przygotowanie-do-sprzedazy")({
  head: () => ({
    meta: [
      { title: "Przygotowanie auta do sprzedaży — Autotest | Sprzedaj drożej i szybciej" },
      { name: "description", content: "Profesjonalne przygotowanie samochodu do sprzedaży: diagnostyka, detailing, sesja zdjęciowa, ogłoszenie i wsparcie w negocjacjach. Pakiety od 300 zł." },
      { property: "og:title", content: "Przygotowanie do sprzedaży — Autotest" },
      { property: "og:description", content: "Auto sprzeda się szybciej i drożej — zajmiemy się każdym detalem." },
      { property: "og:url", content: "https://autotest-ap.com/przygotowanie-do-sprzedazy" },
    ],
    links: [{ rel: "canonical", href: "https://autotest-ap.com/przygotowanie-do-sprzedazy" }],
  }),
  component: CarPreparationPage,
});

const AREAS = [
  { icon: Wrench, t: "Przygotowanie techniczne", items: ["Diagnostyka komputerowa OBD-II", "Weryfikacja zawieszenia, hamulców, płynów, opon", "Doradztwo — co poprawić, by zwiększyć wartość"] },
  { icon: Sparkles, t: "Przygotowanie wizualne", items: ["Mycie zewnętrzne, czyszczenie felg", "Odkurzanie i pranie tapicerki", "Korekta lakieru, wosk / powłoka ochronna", "Czyszczenie komory silnika"] },
  { icon: Camera, t: "Profesjonalne ogłoszenie", items: ["Sesja zdjęciowa auta lub motocykla", "Atrakcyjny opis ogłoszenia", "Doradztwo w ustaleniu ceny sprzedaży"] },
  { icon: Handshake, t: "Pomoc w sprzedaży", items: ["Rozmowy z potencjalnymi kupującymi", "Obecność przy oględzinach jako niezależny ekspert", "Negocjacje i bezpieczna finalizacja"] },
];

const PACKAGES = [
  { name: "Standard", price: "300 zł", desc: "Podstawa dla szybkiej sprzedaży", features: ["Mycie zewnętrzne", "Odkurzanie wnętrza", "Sesja zdjęciowa", "Szablon ogłoszenia"] },
  { name: "Premium", price: "790 zł", desc: "Najczęściej wybierany", featured: true, features: ["Wszystko ze Standard", "Diagnostyka OBD-II", "Korekta lakieru + wosk", "Pranie tapicerki", "Publikacja i moderacja ogłoszenia"] },
  { name: "VIP", price: "1490 zł", desc: "Sprzedajemy za Ciebie", features: ["Wszystko z Premium", "Pełny detailing", "Rozmowy z kupującymi", "Obecność przy oględzinach", "Umowa i formalności"] },
];

function CarPreparationPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <TrendingUp className="h-3.5 w-3.5" /> Sprzedaj drożej i szybciej
          </span>
          <h1 className="mt-6 font-display text-3xl sm:text-5xl font-bold">
            Twoje auto zasługuje na <span className="text-gradient-primary">najlepszą prezentację</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Diagnostyka, detailing, sesja zdjęciowa, ogłoszenie i wsparcie w rozmowach z kupującymi.
            Zadbane auto z dobrymi zdjęciami i kompletem dokumentów przyciąga więcej kupujących i lepsze oferty.
          </p>
          <Button asChild size="lg" className="mt-8 bg-gradient-primary text-primary-foreground shadow-glow">
            <Link to="/kontakt">Wyceń przygotowanie <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-center">Cztery obszary, o które zadbamy</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {AREAS.map((a) => (
              <div key={a.t} className="rounded-2xl border border-border bg-gradient-card p-6 hover:border-primary/40 transition-colors">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <a.icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mt-4 font-semibold text-lg">{a.t}</h3>
                <ul className="mt-4 space-y-2">
                  {a.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-surface/40 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center">Pakiety</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PACKAGES.map((p) => (
              <div key={p.name} className={`relative rounded-2xl border p-8 bg-gradient-card ${p.featured ? "border-primary/60 shadow-glow" : "border-border"}`}>
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Popularny</span>
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
    </>
  );
}
