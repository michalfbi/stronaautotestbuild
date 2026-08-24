import { z } from "zod";

export const LeadSchema = z.object({
  kind: z.enum(["hero", "vin", "contact", "business", "preparation", "purchase"]),
  name: z.string().trim().max(120).optional().nullable(),
  phone: z.string().trim().max(40).optional().nullable(),
  email: z.string().trim().email().max(200).optional().nullable().or(z.literal("")),
  url: z.string().trim().max(600).optional().nullable(),
  vin: z.string().trim().max(20).optional().nullable(),
  message: z.string().trim().max(2000).optional().nullable(),
  source: z.string().trim().max(120).optional().nullable(),
  /** Seconds the visitor spent on the site before submitting. */
  timeOnSiteSeconds: z.number().int().min(0).max(86400).optional().nullable(),
});

export type LeadInput = z.infer<typeof LeadSchema>;
