globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"bf1-Zlrc0JDmGiTZ9jd8pRgoKyQAY2o\"",
		"mtime": "2026-09-07T05:58:03.233Z",
		"size": 3057,
		"path": "../public/favicon.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-09-07T05:58:03.234Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/accordion-l7u6vHE_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3726-ulikD6imsrop6qEZ/Dl3Sr6guLI\"",
		"mtime": "2026-09-07T05:58:01.888Z",
		"size": 14118,
		"path": "../public/assets/accordion-l7u6vHE_.js"
	},
	"/assets/arrow-right-CJRNoorp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-8Xg08A8MOmw7RUhNoIb3Usjm7Cw\"",
		"mtime": "2026-09-07T05:58:01.888Z",
		"size": 155,
		"path": "../public/assets/arrow-right-CJRNoorp.js"
	},
	"/assets/button-2r3yurfY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a2a6-MSIpXMU1vTpy/UtnCahbfYIPmGo\"",
		"mtime": "2026-09-07T05:58:01.888Z",
		"size": 41638,
		"path": "../public/assets/button-2r3yurfY.js"
	},
	"/assets/car-BHbGZLXa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18d-fm/ewoSCqkdxpmQMUC2w6KIZZRc\"",
		"mtime": "2026-09-07T05:58:01.888Z",
		"size": 397,
		"path": "../public/assets/car-BHbGZLXa.js"
	},
	"/assets/cennik-C-Bbuvv1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2a23-JIceygUhZYZHEUdtJP0fsJKN1oo\"",
		"mtime": "2026-09-07T05:58:01.888Z",
		"size": 10787,
		"path": "../public/assets/cennik-C-Bbuvv1.js"
	},
	"/assets/check-BfMb_5fS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"72-3bq9NpmGrO2RheD0wexe8clsw7M\"",
		"mtime": "2026-09-07T05:58:01.888Z",
		"size": 114,
		"path": "../public/assets/check-BfMb_5fS.js"
	},
	"/assets/circle-check-iDjRaMvO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a8-yOQqXgPU/hZChidQIJTHbW30TQs\"",
		"mtime": "2026-09-07T05:58:01.888Z",
		"size": 168,
		"path": "../public/assets/circle-check-iDjRaMvO.js"
	},
	"/assets/dist-BsRenhck.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"109-cSoWmWMddcnNa5z+Q67MVyQWvqY\"",
		"mtime": "2026-09-07T05:58:01.888Z",
		"size": 265,
		"path": "../public/assets/dist-BsRenhck.js"
	},
	"/assets/dla-firm-LzzwdrXv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1835-e0OgOymkF5TKKKSByry9sVNACHY\"",
		"mtime": "2026-09-07T05:58:01.888Z",
		"size": 6197,
		"path": "../public/assets/dla-firm-LzzwdrXv.js"
	},
	"/assets/dollar-sign-D-hZyGTG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d1-ZH9ExKuUMQnv2bPFc20l0mSsv/Q\"",
		"mtime": "2026-09-07T05:58:01.888Z",
		"size": 209,
		"path": "../public/assets/dollar-sign-D-hZyGTG.js"
	},
	"/assets/file-text-DHpi-QbJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"177-Ttz1ry1VUnVf4Xa37eTkSfTrKMI\"",
		"mtime": "2026-09-07T05:58:01.888Z",
		"size": 375,
		"path": "../public/assets/file-text-DHpi-QbJ.js"
	},
	"/assets/gauge-BYUOVf3n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a6-o76dqb0L1yWsh7RcVGQ97nSp3PQ\"",
		"mtime": "2026-09-07T05:58:01.888Z",
		"size": 166,
		"path": "../public/assets/gauge-BYUOVf3n.js"
	},
	"/assets/kontakt-ziLnLKP3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"123c-rETcTjqxCWuw8wggO732Me5dtiY\"",
		"mtime": "2026-09-07T05:58:01.889Z",
		"size": 4668,
		"path": "../public/assets/kontakt-ziLnLKP3.js"
	},
	"/assets/label-DnMWS1gS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"283-LGY3EPFPrVTptzP0Z03MxxSevIY\"",
		"mtime": "2026-09-07T05:58:01.889Z",
		"size": 643,
		"path": "../public/assets/label-DnMWS1gS.js"
	},
	"/assets/leads.functions-BOuMuKjL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14d3-LZ5wCcqDpAe7kXuqC55jrucSnYY\"",
		"mtime": "2026-09-07T05:58:01.889Z",
		"size": 5331,
		"path": "../public/assets/leads.functions-BOuMuKjL.js"
	},
	"/assets/o-nas-BZyoQrcM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1bd2-Z/YAxveoM+sgbNO7BFQ5sEqbkKo\"",
		"mtime": "2026-09-07T05:58:01.889Z",
		"size": 7122,
		"path": "../public/assets/o-nas-BZyoQrcM.js"
	},
	"/assets/przygotowanie-do-sprzedazy-nCl405eN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1849-LlbOh1RxqqJpZU+F13PNk13faJQ\"",
		"mtime": "2026-09-07T05:58:01.889Z",
		"size": 6217,
		"path": "../public/assets/przygotowanie-do-sprzedazy-nCl405eN.js"
	},
	"/assets/raport-vin-Co6ZvuLz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2bad-+IVw744wJjUUVs99bMA6DLUJtok\"",
		"mtime": "2026-09-07T05:58:01.889Z",
		"size": 11181,
		"path": "../public/assets/raport-vin-Co6ZvuLz.js"
	},
	"/assets/routes-C69Pf11g.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b595-ekgWCadufjdMfvMhhf+e7FJ3gJM\"",
		"mtime": "2026-09-07T05:58:01.889Z",
		"size": 46485,
		"path": "../public/assets/routes-C69Pf11g.js"
	},
	"/assets/pomoc-w-zakupie-CHTsJbUh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1db0-m2Es+G6Xut1cleS1b2yRFPfJx4E\"",
		"mtime": "2026-09-07T05:58:01.889Z",
		"size": 7600,
		"path": "../public/assets/pomoc-w-zakupie-CHTsJbUh.js"
	},
	"/assets/search-CNmEDlvq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a4-A1Z6v93ZoNbMupfGbV9d3xwF99o\"",
		"mtime": "2026-09-07T05:58:01.889Z",
		"size": 164,
		"path": "../public/assets/search-CNmEDlvq.js"
	},
	"/assets/shield-BO-vHOcb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"106-ykYHryL1D7FM49o1Da5cth6Yy6Y\"",
		"mtime": "2026-09-07T05:58:01.889Z",
		"size": 262,
		"path": "../public/assets/shield-BO-vHOcb.js"
	},
	"/assets/index-DHrha7qI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9ac98-ez6JCUf4UjSm1wzaHEWhF7m0t4g\"",
		"mtime": "2026-09-07T05:58:01.888Z",
		"size": 634008,
		"path": "../public/assets/index-DHrha7qI.js"
	},
	"/assets/styles-Cv-EyWrO.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15bf4-Los9s0ZT8epVDKLnA+2RTngLOg0\"",
		"mtime": "2026-09-07T05:58:01.889Z",
		"size": 89076,
		"path": "../public/assets/styles-Cv-EyWrO.css"
	},
	"/assets/trending-up-B9um5Bvk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-3toeKK87pyKX4H0PSpRfG6guLwg\"",
		"mtime": "2026-09-07T05:58:01.889Z",
		"size": 165,
		"path": "../public/assets/trending-up-B9um5Bvk.js"
	},
	"/assets/triangle-alert-KoVHfaUx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ff-8KP/XCAaimyy2zHqUZ+ZyIKjWV0\"",
		"mtime": "2026-09-07T05:58:01.889Z",
		"size": 255,
		"path": "../public/assets/triangle-alert-KoVHfaUx.js"
	},
	"/assets/uslugi-CgZsGlxG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13e8-H/ee443sgKZbGgt3imLOoveE2X8\"",
		"mtime": "2026-09-07T05:58:01.889Z",
		"size": 5096,
		"path": "../public/assets/uslugi-CgZsGlxG.js"
	},
	"/assets/wrench-CctcTHSK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"125-HJrcv4EWgh3U58pRor8tXpdgTFk\"",
		"mtime": "2026-09-07T05:58:01.889Z",
		"size": 293,
		"path": "../public/assets/wrench-CctcTHSK.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_LqoIsO = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_LqoIsO
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
