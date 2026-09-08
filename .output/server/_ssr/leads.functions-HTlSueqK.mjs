import { a as getRequest, i as createServerFn } from "./server-CSrs-Z0B.mjs";
import { t as LeadSchema } from "./leads.schema-ZTm0MWNQ.mjs";
import { t as createServerRpc } from "./createServerRpc-CdB7q5FW.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/leads.functions-HTlSueqK.js
var submitLead_createServerFn_handler = createServerRpc({
	id: "e211e8c27eee0a1053129b7769a37cb2e31b3dc869a84a1c647eee19cfb57993",
	name: "submitLead",
	filename: "src/lib/leads.functions.ts"
}, (opts) => submitLead.__executeServer(opts));
var submitLead = createServerFn({ method: "POST" }).inputValidator((data) => LeadSchema.parse(data)).handler(submitLead_createServerFn_handler, async ({ data }) => {
	const { createClient } = await import("../_libs/supabase__supabase-js.mjs").then((n) => n.n);
	const url = processModule.env.SUPABASE_URL || "https://bcxftjiywpjddlffejqr.supabase.co/rest/v1/";
	const key = processModule.env.SUPABASE_PUBLISHABLE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjeGZ0aml5d3BqZGRsZmZlanFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc1ODg1NDksImV4cCI6MjEwMzE2NDU0OX0.EgyXQ4Jm-uH2mZYgu9YEhzqwxP6LSx3Hqv8cFAsRNIk";
	const isOpaque = key ? key.startsWith("sb_") : false;
	const supabase = createClient(url, key, {
		auth: {
			persistSession: false,
			autoRefreshToken: false,
			storage: void 0
		},
		global: { fetch: (input, init) => {
			const h = new Headers(init?.headers);
			if (isOpaque && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
			h.set("apikey", key);
			return fetch(input, {
				...init,
				headers: h
			});
		} }
	});
	const payload = {
		kind: data.kind,
		name: data.name || null,
		phone: data.phone || null,
		email: data.email ? String(data.email) : null,
		url: data.url || null,
		vin: data.vin || null,
		message: data.message || null,
		source: data.source || null
	};
	const { error } = await supabase.from("leads").insert(payload);
	if (error) {
		console.error("[submitLead] insert failed", error);
		throw new Error("Nie udało się zapisać zgłoszenia. Spróbuj ponownie.");
	}
	try {
		const { sendTemplateEmail } = await import("./send-email-BCdNXroh.mjs");
		const leadId = crypto.randomUUID();
		if (data.kind === "hero") {
			const { resolveGeo, countLeads, formatDuration, formatWarsawTime } = await import("./lead-meta.server-Bkm7oBsJ.mjs");
			let headers = new Headers();
			try {
				headers = getRequest().headers;
			} catch {}
			const [geo, total] = await Promise.all([resolveGeo(headers), countLeads("hero")]);
			await sendTemplateEmail("vehicle-link-lead", "", {
				templateData: {
					url: payload.url ?? void 0,
					phone: payload.phone ?? void 0,
					region: geo.label,
					timeOnSite: formatDuration(data.timeOnSiteSeconds ?? void 0),
					totalSubmissions: total ?? "—",
					submittedAt: formatWarsawTime(),
					source: payload.source ?? "strona główna"
				},
				idempotencyKey: `vehicle-link-lead-${leadId}`
			});
		} else {
			const { resolveGeo, countLeads, formatDuration, formatWarsawTime } = await import("./lead-meta.server-Bkm7oBsJ.mjs");
			let headers = new Headers();
			try {
				headers = getRequest().headers;
			} catch {}
			const [geo, total] = await Promise.all([resolveGeo(headers), countLeads(data.kind)]);
			await sendTemplateEmail("contact-notification", "", {
				templateData: {
					name: payload.name ?? void 0,
					phone: payload.phone ?? void 0,
					email: payload.email ?? void 0,
					message: payload.message ?? void 0,
					source: payload.source ?? void 0,
					kind: payload.kind ?? void 0,
					region: geo.label,
					timeOnSite: formatDuration(data.timeOnSiteSeconds ?? void 0),
					totalSubmissions: total ?? "—",
					submittedAt: formatWarsawTime()
				},
				idempotencyKey: `contact-notification-${leadId}`,
				replyTo: payload.email ?? void 0
			});
		}
	} catch (mailError) {
		console.error("[submitLead] notification email failed", mailError);
	}
	return { ok: true };
});
//#endregion
export { submitLead_createServerFn_handler };
