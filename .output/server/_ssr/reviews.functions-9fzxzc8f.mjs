import { i as createServerFn } from "./server-CSrs-Z0B.mjs";
import { t as createServerRpc } from "./createServerRpc-CdB7q5FW.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/reviews.functions-9fzxzc8f.js
var PLACE_ID = "ChIJY9R_r4HIimwRsX84tSDixBY";
var fetchGoogleReviews_createServerFn_handler = createServerRpc({
	id: "5260216fd3f4d6450497b00fa3f4d1d691603d8f143e639e297e24d97d399b66",
	name: "fetchGoogleReviews",
	filename: "src/lib/reviews.functions.ts"
}, (opts) => fetchGoogleReviews.__executeServer(opts));
var fetchGoogleReviews = createServerFn({ method: "GET" }).handler(fetchGoogleReviews_createServerFn_handler, async () => {
	const key = processModule.env["GOOGLE_API_KEY"];
	if (!key) return null;
	try {
		const res = await fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=pl`, { headers: {
			"X-Goog-Api-Key": key,
			"X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews"
		} });
		if (!res.ok) return null;
		const data = await res.json();
		const reviews = (data.reviews ?? []).map((r) => ({
			author: r.authorAttribution?.displayName ?? "Klient Google",
			photo: r.authorAttribution?.photoUri,
			rating: r.rating ?? 5,
			relative: r.relativePublishTimeDescription ?? "",
			text: (r.text?.text ?? r.originalText?.text ?? "").trim(),
			url: r.googleMapsUri
		})).filter((r) => r.text.length > 0);
		if (reviews.length === 0) return null;
		return {
			rating: data.rating ?? 5,
			total: data.userRatingCount ?? reviews.length,
			mapsUri: data.googleMapsUri,
			reviews
		};
	} catch {
		return null;
	}
});
//#endregion
export { fetchGoogleReviews_createServerFn_handler };
