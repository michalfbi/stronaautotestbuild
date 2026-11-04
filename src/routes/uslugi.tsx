import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Car, Search, DollarSign, Shield, TrendingUp, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/uslugi")({
  head: () => ({
    meta: [
      { title: "Usługi — Autotest | Weryfikacja, zakup i sprzedaż aut" },
      { name: "description", content: "Pełen katalog usług Autotest: pomoc w zakupie auta, inspekcja mobilna, negocjacje ceny, raport VIN, przygotowanie do sprzedaży, ubezpieczenia. Ceny od 300 zł." },
      { property: "og:title", content: "Usługi Autotest — pełen katalog" },
      { property: "og:description", content: "Katalog usług: inspekcja mobilna, pomoc w zakupie, raport VIN, przygotowanie do sprzedaży." },
      { property: "og:url", content: "https://autotest-ap.com/uslugi" },
    ],
    links: [{ rel: "canonical", href: "https://autotest-ap.com/uslugi" }],
  }),
  component: ServicesPage,
});

type Service = {
  icon: React.ComponentType<{ className?: string }>;
  t: string;
  d: string;
  price: string;
  link?: string;
  featured?: boolean;
};
type Category = { title: string; desc: string; services: Service[] };

const CATEGORIES: Category[] = [
  {
    title: "Weryfikacja i zakup",
    desc: "Wybierasz model — my dbamy, byś nie przepłacił i nie kupił wady ukrytej.",
    services: [
      { icon: Car, t: "Kompleksowa pomoc w zakupie", d: "Od wyszukania idealnego egzemplarza, przez rygorystyczną weryfikację, po finalizację transakcji.", price: "od 500 zł", link: "/pomoc-w-zakupie", featured: true },
      { icon: Search, t: "Inspekcja mobilna pojazdu", d: "Sprawdzenie auta w dowolnym miejscu w Polsce. Diagnostyka komputerowa, pomiar lakieru, test drogowy.", price: "od 300 zł" },
      { icon: DollarSign, t: "Wycena i twarde negocjacje", d: "Znalazłeś auto? Ocenimy jego realną wartość i profesjonalnie zbijemy cenę.", price: "od 199 zł" },
      { icon: FileCheck, t: "Raport VIN i analiza ogłoszenia", d: "Kompletna historia pojazdu, szkody, przebieg. Weryfikacja rzetelności oferty przed dojazdem.", price: "od 99 zł", link: "/raport-vin" },
    ],
  },
  {
    title: "Sprzedaż i przygotowanie",
    desc: "Sprzedasz szybciej i drożej. Zajmiemy się wszystkim.",
    services: [
      { icon: TrendingUp, t: "Przygotowanie do sprzedaży", d: "Diagnostyka, korekta lakieru, profesjonalne zdjęcia, ogłoszenie i wsparcie w negocjacjach.", price: "od 300 zł", link: "/przygotowanie-do-sprzedazy", featured: true },
      { icon: Shield, t: "Reprezentacja przy oględzinach", d: "Nasz ekspert reprezentuje Cię przy spotkaniu z kupującym.", price: "od 250 zł" },
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Katalog usług
          </span>
          <h1 className="mt-6 font-display text-3xl sm:text-5xl font-bold">
            Wszystko, czego potrzebujesz przy <span className="text-gradient-primary">zakupie i sprzedaży auta</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Nie musisz wiedzieć, na co zwrócić uwagę. Wybierz usługę — resztą zajmiemy się my.
          </p>
        </div>
      </section>

      {CATEGORIES.map((cat) => (
        <section key={cat.title} className="py-10 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl sm:text-3xl font-bold">{cat.title}</h2>
              <p className="mt-3 text-muted-foreground">{cat.desc}</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {cat.services.map((s) => (
                <div
                  key={s.t}
                  className={`rounded-2xl border p-6 bg-gradient-card transition-colors ${
                    s.featured ? "border-primary/50 shadow-glow" : "border-border hover:border-primary/40"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                      <s.icon className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-sm font-semibold text-gradient-primary shrink-0">{s.price}</span>
                  </div>
                  <h3 className="mt-4 font-semibold text-lg">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                  <div className="mt-5">
                    {s.link ? (
                      <Button asChild size="sm" variant={s.featured ? "default" : "outline"} className={s.featured ? "bg-gradient-primary text-primary-foreground" : ""}>
                        <Link to={s.link}>Zobacz szczegóły <ArrowRight className="ml-1 h-4 w-4" /></Link>
                      </Button>
                    ) : (
                      <Button asChild size="sm" variant="outline">
                        <Link to="/kontakt">Zapytaj o wycenę <ArrowRight className="ml-1 h-4 w-4" /></Link>
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-primary/30 bg-gradient-card p-10 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold">Nie wiesz, którą usługę wybrać?</h2>
            <p className="mt-3 text-muted-foreground">Porozmawiajmy 15 minut — bezpłatnie doradzimy najlepsze rozwiązanie.</p>
            <Button asChild size="lg" className="mt-6 bg-gradient-primary text-primary-foreground shadow-glow">
              <Link to="/kontakt">Umów rozmowę <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
