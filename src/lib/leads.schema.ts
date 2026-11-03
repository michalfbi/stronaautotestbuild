import { z } from "zod";

/** Telefon: cyfry, spacje, +, -, nawiasy; co najmniej 9 cyfr. */
export const PHONE_REGEX = /^\+?[0-9\s\-()]{9,20}$/;
export const VIN_REGEX = /^[A-HJ-NPR-Z0-9]{17}$/i;

export function isValidPhone(value: string): boolean {
  const v = value.trim();
  return PHONE_REGEX.test(v) && v.replace(/\D/g, "").length >= 9;
}

export const LeadSchema = z
  .object({
    kind: z.enum([
      "hero",
      "vin",
      "contact",
      "business",
      "preparation",
      "purchase",
    ]),
    name: z.string().trim().max(120).optional().nullable(),
    phone: z
      .string()
      .trim()
      .max(40)
      .refine(isValidPhone, {
        message: "Podaj poprawny numer telefonu (min. 9 cyfr).",
      }),
    email: z
      .string()
      .trim()
      .email({ message: "Podaj poprawny adres e-mail." })
      .max(200)
      .optional()
      .nullable()
      .or(z.literal("")),
    url: z.string().trim().max(600).optional().nullable(),
    vin: z.string().trim().max(20).optional().nullable(),
    message: z.string().trim().max(2000).optional().nullable(),
    source: z.string().trim().max(120).optional().nullable(),
    /** Seconds the visitor spent on the site before submitting. */
    timeOnSiteSeconds: z.number().int().min(0).max(86400).optional().nullable(),
    /** Ukryte pole-pułapka na boty. Człowiek go nie widzi i zostawia puste. */
    website: z.string().max(500).optional().nullable(),
  })
  .superRefine((d, ctx) => {
    if (d.kind === "hero" && !d.url?.trim()) {
      ctx.addIssue({
        code: "custom",
        path: ["url"],
        message: "Wklej link do ogłoszenia.",
      });
    }
    if (d.kind === "vin" && !VIN_REGEX.test(d.vin ?? "")) {
      ctx.addIssue({
        code: "custom",
        path: ["vin"],
        message: "VIN musi mieć 17 znaków (bez I, O, Q).",
      });
    }
    if (d.kind === "contact") {
      if (!d.name?.trim()) {
        ctx.addIssue({
          code: "custom",
          path: ["name"],
          message: "Podaj imię.",
        });
      }
      if (!d.message?.trim()) {
        ctx.addIssue({
          code: "custom",
          path: ["message"],
          message: "Napisz wiadomość.",
        });
      }
    }
  });

export type LeadInput = z.infer<typeof LeadSchema>;
