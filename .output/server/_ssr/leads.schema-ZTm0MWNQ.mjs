import { a as stringType, i as objectType, n as literalType, r as numberType, t as enumType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/leads.schema-ZTm0MWNQ.js
var LeadSchema = objectType({
	kind: enumType([
		"hero",
		"vin",
		"contact",
		"business",
		"preparation",
		"purchase"
	]),
	name: stringType().trim().max(120).optional().nullable(),
	phone: stringType().trim().max(40).optional().nullable(),
	email: stringType().trim().email().max(200).optional().nullable().or(literalType("")),
	url: stringType().trim().max(600).optional().nullable(),
	vin: stringType().trim().max(20).optional().nullable(),
	message: stringType().trim().max(2e3).optional().nullable(),
	source: stringType().trim().max(120).optional().nullable(),
	/** Seconds the visitor spent on the site before submitting. */
	timeOnSiteSeconds: numberType().int().min(0).max(86400).optional().nullable()
});
//#endregion
export { LeadSchema as t };
