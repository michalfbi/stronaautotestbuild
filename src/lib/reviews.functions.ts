import { createServerFn } from "@tanstack/react-start";

const PLACE_ID = "ChIJY9R_r4HIimwRsX84tSDixBY"; // AutoTest, Kozów 26A

export type GoogleReview = {
  author: string;
  photo?: string;
  rating: number;
  relative: string;
  text: string;
  url?: string;
};

export type GoogleReviewsPayload = {
  rating: number;
  total: number;
  mapsUri?: string;
  reviews: GoogleReview[];
};

/**
 * Cache w pamięci workera: Places API jest płatne za każde zapytanie, a opinie zmieniają się rzadko.
 * Udane pobranie trzymamy 6 h, nieudane 10 min (żeby nie odpytywać API przy każdej wizycie).
 */
const OK_TTL_MS = 6 * 60 * 60 * 1000;
const FAIL_TTL_MS = 10 * 60 * 1000;
let cache: { value: GoogleReviewsPayload | null; expires: number } | undefined;
let inflight: Promise<GoogleReviewsPayload | null> | undefined;

export const fetchGoogleReviews = createServerFn({ method: "GET" }).handler(
  async (): Promise<GoogleReviewsPayload | null> => {
    if (cache && cache.expires > Date.now()) return cache.value;
    if (!inflight) {
      inflight = loadReviews()
        .then((value) => {
          cache = {
            value,
            expires: Date.now() + (value ? OK_TTL_MS : FAIL_TTL_MS),
          };
          return value;
        })
        .finally(() => {
          inflight = undefined;
        });
    }
    return inflight;
  },
);

async function loadReviews(): Promise<GoogleReviewsPayload | null> {
  const key = process.env["GOOGLE_API_KEY"];
  if (!key) return null;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=pl`,
      {
        headers: {
          "X-Goog-Api-Key": key,
          "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews",
        },
        signal: AbortSignal.timeout(5000),
      },
    );
    if (!res.ok) return null;

    const data = (await res.json()) as {
      rating?: number;
      userRatingCount?: number;
      googleMapsUri?: string;
      reviews?: Array<{
        rating?: number;
        relativePublishTimeDescription?: string;
        text?: { text?: string };
        originalText?: { text?: string };
        googleMapsUri?: string;
        authorAttribution?: { displayName?: string; photoUri?: string };
      }>;
    };

    const reviews: GoogleReview[] = (data.reviews ?? [])
      .map((r) => ({
        author: r.authorAttribution?.displayName ?? "Klient Google",
        photo: r.authorAttribution?.photoUri,
        rating: r.rating ?? 5,
        relative: r.relativePublishTimeDescription ?? "",
        text: (r.text?.text ?? r.originalText?.text ?? "").trim(),
        url: r.googleMapsUri,
      }))
      .filter((r) => r.text.length > 0);

    if (reviews.length === 0) return null;

    return {
      rating: data.rating ?? 5,
      total: data.userRatingCount ?? reviews.length,
      mapsUri: data.googleMapsUri,
      reviews,
    };
  } catch {
    return null;
  }
}
