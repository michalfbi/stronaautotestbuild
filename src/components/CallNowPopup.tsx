import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, X, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "autotest_call_popup_dismissed_at";
const DELAY_MS = 20000;
const SNOOZE_MS = 1000 * 60 * 60 * 24; // 24h

export function CallNowPopup() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    let raw: string | null = null;
    try {
      raw = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      raw = null;
    }
    if (raw && Date.now() - Number(raw) < SNOOZE_MS) return;

    const timer = window.setTimeout(() => setVisible(true), DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setClosing(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
    window.setTimeout(() => setVisible(false), 200);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Zadzwoń teraz"
      className={cn(
        "fixed z-[60] left-4 right-4 bottom-4 sm:left-auto sm:right-6 sm:bottom-6 sm:w-[360px]",
        "rounded-2xl border border-primary/40 bg-surface/95 p-5 shadow-glow backdrop-blur-xl",
        closing ? "animate-out fade-out slide-out-to-bottom-4" : "animate-in fade-in slide-in-from-bottom-6",
        "duration-300",
      )}
    >
      <button
        onClick={dismiss}
        aria-label="Zamknij"
        className="absolute right-3 top-3 rounded-md p-1 text-muted-foreground transition-colors hover:bg-accent/40 hover:text-foreground"
      >
        <X className="h-4 w-4" />
      </button>

      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Jesteśmy dostępni teraz
        </span>
        <span className="inline-flex items-center gap-1">
          <Star className="h-3 w-3 fill-primary text-primary" /> 5,0 w Google
        </span>
      </div>

      <h3 className="mt-3 font-display text-lg font-semibold leading-snug">
        Masz auto na oku? Zadzwoń teraz.
      </h3>
      <p className="mt-1.5 text-sm text-muted-foreground">
        Bezpłatna, krótka konsultacja — powiemy, czy oferta jest warta dojazdu i ile powinna kosztować
        inspekcja.
      </p>

      <div className="mt-4 flex flex-col gap-2">
        <Button
          asChild
          className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90"
          onClick={dismiss}
        >
          <a href="tel:+48690976790">
            <Phone className="mr-2 h-4 w-4" /> +48 690 976 790
          </a>
        </Button>
        <Button asChild variant="outline" className="w-full" onClick={dismiss}>
          <Link to="/kontakt">Wolę napisać</Link>
        </Button>
      </div>

      <p className="mt-3 flex items-center gap-1.5 text-[11px] text-muted-foreground">
        <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Niezależni eksperci — bez powiązań z
        komisami
      </p>
    </div>
  );
}
