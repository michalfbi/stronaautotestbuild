import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/lead-meta.server-Bkm7oBsJ.js
var PL = "Polska";
async function resolveGeo(headers) {
	const city = headers.get("cf-ipcity") || void 0;
	const region = headers.get("cf-region") || void 0;
	const country = headers.get("cf-ipcountry") || void 0;
	if (city || region) return {
		city,
		region,
		country,
		label: [
			city,
			region,
			country === "PL" ? PL : country
		].filter(Boolean).join(", ")
	};
	const ip = headers.get("cf-connecting-ip") || headers.get("x-real-ip") || (headers.get("x-forwarded-for") || "").split(",")[0]?.trim();
	if (ip && !/^(127\.|10\.|192\.168\.|::1)/.test(ip)) try {
		const res = await fetch(`https://ipapi.co/${ip}/json/`, { signal: AbortSignal.timeout(3e3) });
		if (res.ok) {
			const j = await res.json();
			const label = [
				j?.city,
				j?.region,
				j?.country_name
			].filter(Boolean).join(", ");
			if (label) return {
				city: j?.city,
				region: j?.region,
				country: j?.country_name,
				label
			};
		}
	} catch {}
	return { label: "Nieustalony (brak danych lokalizacji)" };
}
async function countLeads(kind) {
	const url = processModule.env["SUPABASE_URL"];
	const key = processModule.env["SUPABASE_SERVICE_ROLE_KEY"];
	if (!url || !key) return void 0;
	try {
		const res = await fetch(`${url}/rest/v1/rpc/count_leads`, {
			method: "POST",
			headers: {
				apikey: key,
				Authorization: `Bearer ${key}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ _kind: kind ?? null }),
			signal: AbortSignal.timeout(4e3)
		});
		if (!res.ok) return void 0;
		const value = await res.json();
		return typeof value === "number" ? value : void 0;
	} catch {
		return;
	}
}
function formatDuration(seconds) {
	if (!seconds || seconds < 1 || !Number.isFinite(seconds)) return "brak danych";
	const s = Math.round(seconds);
	const m = Math.floor(s / 60);
	const rest = s % 60;
	if (m === 0) return `${rest} s`;
	return `${m} min ${rest} s`;
}
function formatWarsawTime(date = /* @__PURE__ */ new Date()) {
	return new Intl.DateTimeFormat("pl-PL", {
		dateStyle: "long",
		timeStyle: "short",
		timeZone: "Europe/Warsaw"
	}).format(date);
}
//#endregion
export { countLeads, formatDuration, formatWarsawTime, resolveGeo };
