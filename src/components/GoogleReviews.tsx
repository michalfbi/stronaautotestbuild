import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  ExternalLink,
  MessagesSquare,
} from "lucide-react";
import { fetchGoogleReviews } from "@/lib/reviews.functions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

/**
 * Google Reviews carousel — prawdziwe opinie z wizytówki Google (Places API).
 * Fallback: statyczne opinie poniżej, gdy API nie odpowie.
 */

type Review = {
  author: string;
  photo?: string;
  rating: number;
  relative: string;
  text: string;
  url?: string;
};

const MAPS_FALLBACK =
  "https://www.google.com/maps/search/?api=1&query=AutoTest+Koz%C3%B3w+26A";

export function GoogleReviews() {
  const getReviews = useServerFn(fetchGoogleReviews);
  const { data, isPending } = useQuery({
    queryKey: ["google-reviews"],
    queryFn: () => getReviews(),
    staleTime: 1000 * 60 * 60,
  });

  // Pokazujemy wyłącznie prawdziwe opinie z wizytówki Google (API zwraca do 5).
  const reviews: Review[] = data?.reviews ?? [];
  const AVG = data?.rating ?? 0;
  const TOTAL = data?.total ?? reviews.length;
  const MAPS_URI = data?.mapsUri ?? MAPS_FALLBACK;

  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setI(0);
  }, [reviews.length]);

  useEffect(() => {
    if (paused || reviews.length < 2) return;
    const t = setInterval(() => setI((v) => (v + 1) % reviews.length), 7000);
    return () => clearInterval(t);
  }, [paused, reviews.length]);

  if (reviews.length === 0) {
    return <ReviewsFallback loading={isPending} mapsUri={MAPS_URI} />;
  }

  const r = reviews[Math.min(i, reviews.length - 1)];
  const prev = () => setI((v) => (v - 1 + reviews.length) % reviews.length);
  const next = () => setI((v) => (v + 1) % reviews.length);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute -inset-2 sm:-inset-8 pointer-events-none bg-gradient-primary opacity-15 blur-3xl rounded-full" />

      <div className="relative rounded-2xl border border-border bg-card/70 backdrop-blur p-6 sm:p-7 shadow-elegant">
        {/* Header: Google logo + overall rating */}
        <div className="flex items-center justify-between gap-4 pb-5 border-b border-border/60">
          <div className="flex items-center gap-3">
            <GoogleG />
            <div>
              <div className="text-xs text-muted-foreground leading-tight">
                Opinie w
              </div>
              <div className="font-semibold leading-tight">Google</div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1.5 justify-end">
              <span className="font-display text-2xl font-bold">
                {AVG.toFixed(1)}
              </span>
              <Stars value={AVG} size={16} />
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">
              na podstawie {TOTAL} opinii
            </div>
          </div>
        </div>

        {/* Review body */}
        <div className="pt-5 min-h-[240px]">
          <div
            key={i}
            className="animate-in fade-in slide-in-from-bottom-2 duration-500"
          >
            <div className="flex items-center gap-3">
              {r.photo ? (
                <img
                  src={r.photo}
                  alt={`Zdjęcie profilowe ${r.author}`}
                  loading="lazy"
                  className="h-10 w-10 rounded-full object-cover shrink-0"
                />
              ) : (
                <div className="h-10 w-10 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center font-semibold shrink-0">
                  {r.author.charAt(0)}
                </div>
              )}
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold truncate">{r.author}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Stars value={r.rating} size={12} />
                  <span>·</span>
                  <span>{r.relative}</span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-[15px] leading-relaxed text-foreground/90 line-clamp-6 whitespace-pre-line">
              &ldquo;{r.text}&rdquo;
            </p>

            {r.url && (
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-xs text-primary hover:underline"
              >
                Czytaj całą opinię w Google
              </a>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-5 pt-5 border-t border-border/60 flex items-center justify-between">
          <div className="flex gap-1.5">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Opinia ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i
                    ? "w-6 bg-primary"
                    : "w-1.5 bg-border hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-1">
            <button
              onClick={prev}
              aria-label="Poprzednia opinia"
              className="h-8 w-8 rounded-full border border-border hover:border-primary/50 hover:text-primary grid place-items-center transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              aria-label="Następna opinia"
              className="h-8 w-8 rounded-full border border-border hover:border-primary/50 hover:text-primary grid place-items-center transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Wszystkie opinie */}
        <div className="mt-5 pt-5 border-t border-border/60 flex flex-wrap items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <MessagesSquare className="h-4 w-4" />
                Przejrzyj opinie ({reviews.length})
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <GoogleG /> Opinie klientów AutoTest
                </DialogTitle>
                <DialogDescription>
                  Ocena {AVG.toFixed(1)}/5 na podstawie {TOTAL} opinii w Google.
                </DialogDescription>
              </DialogHeader>
              <ScrollArea className="max-h-[60vh] pr-4">
                <ul className="space-y-5">
                  {reviews.map((rev, idx) => (
                    <li
                      key={idx}
                      className="rounded-xl border border-border bg-surface/40 p-4"
                    >
                      <div className="flex items-center gap-3">
                        {rev.photo ? (
                          <img
                            src={rev.photo}
                            alt={`Zdjęcie profilowe ${rev.author}`}
                            loading="lazy"
                            className="h-9 w-9 rounded-full object-cover shrink-0"
                          />
                        ) : (
                          <div className="h-9 w-9 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center text-sm font-semibold shrink-0">
                            {rev.author.charAt(0)}
                          </div>
                        )}
                        <div className="min-w-0">
                          <div className="font-medium truncate">
                            {rev.author}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Stars value={rev.rating} size={12} />
                            <span>·</span>
                            <span>{rev.relative}</span>
                          </div>
                        </div>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/90 whitespace-pre-line">
                        &ldquo;{rev.text}&rdquo;
                      </p>
                      {rev.url && (
                        <a
                          href={rev.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1 text-xs text-primary hover:underline"
                        >
                          Zobacz w Google <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </ScrollArea>
              <a
                href={MAPS_URI}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
              >
                Wszystkie {TOTAL} opinii w Google{" "}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </DialogContent>
          </Dialog>

          <a
            href={MAPS_URI}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Wszystkie {TOTAL} opinii w Google{" "}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Trust footer */}
      <div className="relative mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <ShieldCheck className="h-3.5 w-3.5 text-success" />
        Opinie wyświetlane bezpośrednio z naszej wizytówki Google
      </div>
    </div>
  );
}

function Stars({ value, size = 14 }: { value: number; size?: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${value} z 5 gwiazdek`}
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          style={{ width: size, height: size }}
          className={
            n <= Math.round(value)
              ? "fill-warning text-warning"
              : "text-muted-foreground/40"
          }
        />
      ))}
    </div>
  );
}

function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

/** Gdy opinie z Google są niedostępne — bez wymyślonych treści, tylko link do wizytówki. */
function ReviewsFallback({
  loading,
  mapsUri,
}: {
  loading: boolean;
  mapsUri: string;
}) {
  return (
    <div className="relative">
      <div className="absolute -inset-2 sm:-inset-8 pointer-events-none bg-gradient-primary opacity-15 blur-3xl rounded-full" />
      <div className="relative rounded-2xl border border-border bg-card/70 backdrop-blur p-6 sm:p-7 shadow-elegant">
        <div className="flex items-center gap-3">
          <GoogleG />
          <div>
            <div className="text-xs text-muted-foreground leading-tight">
              Opinie w
            </div>
            <div className="font-semibold leading-tight">Google</div>
          </div>
        </div>
        {loading ? (
          <div className="mt-6 space-y-3" aria-hidden="true">
            <div className="h-4 w-2/3 rounded bg-muted/40 animate-pulse" />
            <div className="h-4 w-full rounded bg-muted/40 animate-pulse" />
            <div className="h-4 w-5/6 rounded bg-muted/40 animate-pulse" />
          </div>
        ) : (
          <>
            <p className="mt-5 text-sm text-muted-foreground">
              Zobacz, co piszą o nas klienci — wszystkie opinie są na naszej
              wizytówce Google.
            </p>
            <Button asChild variant="outline" size="sm" className="mt-4 gap-2">
              <a href={mapsUri} target="_blank" rel="noopener noreferrer">
                Zobacz opinie w Google <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
