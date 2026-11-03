import { useEffect } from "react";
import { Link } from "@tanstack/react-router";

const VISIT_KEY = "autotest_visit_started_at";

/** Zapamiętuje moment wejścia na stronę (raz na sesję). Bezpieczne, gdy storage jest zablokowany. */
export function useVisitStart() {
  useEffect(() => {
    try {
      if (!sessionStorage.getItem(VISIT_KEY)) {
        sessionStorage.setItem(VISIT_KEY, String(Date.now()));
      }
    } catch {
      /* tryb prywatny / zablokowane ciasteczka */
    }
  }, []);
}

/** Liczba sekund od wejścia na stronę albo undefined, gdy nie da się tego ustalić. */
export function getTimeOnSiteSeconds(): number | undefined {
  try {
    const raw = sessionStorage.getItem(VISIT_KEY);
    if (!raw) return undefined;
    const seconds = Math.round((Date.now() - Number(raw)) / 1000);
    return Number.isFinite(seconds) && seconds >= 0
      ? Math.min(seconds, 86400)
      : undefined;
  } catch {
    return undefined;
  }
}

/**
 * Ukryte pole-pułapka na boty. Ludzie go nie widzą (ani czytniki ekranu),
 * boty wypełniają wszystkie pola — wtedy serwer po cichu odrzuca zgłoszenie.
 */
export function Honeypot({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div
      aria-hidden="true"
      className="absolute -left-[9999px] h-px w-px overflow-hidden"
    >
      <label>
        Strona www
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
}

/** Informacja RODO pod formularzem. */
export function ConsentNote() {
  return (
    <p className="text-xs text-muted-foreground">
      Wysyłając formularz, przekazujesz nam dane, abyśmy mogli odpowiedzieć na
      zgłoszenie. Szczegóły w{" "}
      <Link
        to="/polityka-prywatnosci"
        className="underline underline-offset-2 hover:text-foreground"
      >
        polityce prywatności
      </Link>
      .
    </p>
  );
}
