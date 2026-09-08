import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Award } from "lucide-react";

const COLS = [
  {
    title: "Usługi",
    links: [
      { to: "/pomoc-w-zakupie", label: "Pomoc w zakupie" },
      { to: "/przygotowanie-do-sprzedazy", label: "Przygotowanie do sprzedaży" },
{ to: "/uslugi", label: "Wszystkie usługi" },
      { to: "/cennik", label: "Cennik" },
    ],
  },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border/60 bg-surface/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-display text-lg font-semibold">
                Auto<span className="text-gradient-primary">test</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              Niezależni eksperci w weryfikacji, zakupie i sprzedaży pojazdów. Chronimy Twoje pieniądze na każdym etapie transakcji.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Award className="h-3.5 w-3.5 text-primary" /> 1200+ zrealizowanych zleceń</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-primary" /> 7 dni w tygodniu</span>
            </div>
          </div>

          {COLS.map((c) => (
            <div key={c.title}>
              <h3 className="font-display text-sm font-semibold mb-4">{c.title}</h3>
              <ul className="space-y-2 text-sm">
                {c.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-muted-foreground hover:text-foreground transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-border/60 grid gap-4 md:grid-cols-3 text-sm text-muted-foreground">
          <div className="inline-flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +48 690 976 790</div>
          <div className="inline-flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> dual1518@gmail.com</div>
          <div className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Cała Polska</div>
        </div>

        <div className="mt-8 text-xs text-muted-foreground">
          © {year} Autotest. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
