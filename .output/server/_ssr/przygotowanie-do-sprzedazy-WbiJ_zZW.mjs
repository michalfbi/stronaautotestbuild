import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as CircleCheck, L as Camera, V as ArrowRight, c as Sparkles, o as TrendingUp, r as Wrench, x as Handshake } from "../_libs/lucide-react.mjs";
import { n as Button } from "./router-B7oAaZnH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/przygotowanie-do-sprzedazy-WbiJ_zZW.js
var import_jsx_runtime = require_jsx_runtime();
var AREAS = [
	{
		icon: Wrench,
		t: "Przygotowanie techniczne",
		items: [
			"Diagnostyka komputerowa OBD-II",
			"Weryfikacja zawieszenia, hamulców, płynów, opon",
			"Doradztwo — co poprawić, by zwiększyć wartość"
		]
	},
	{
		icon: Sparkles,
		t: "Przygotowanie wizualne",
		items: [
			"Mycie zewnętrzne, czyszczenie felg",
			"Odkurzanie i pranie tapicerki",
			"Korekta lakieru, wosk / powłoka ochronna",
			"Czyszczenie komory silnika"
		]
	},
	{
		icon: Camera,
		t: "Profesjonalne ogłoszenie",
		items: [
			"Sesja zdjęciowa auta lub motocykla",
			"Atrakcyjny opis ogłoszenia",
			"Doradztwo w ustaleniu ceny sprzedaży"
		]
	},
	{
		icon: Handshake,
		t: "Pomoc w sprzedaży",
		items: [
			"Rozmowy z potencjalnymi kupującymi",
			"Obecność przy oględzinach jako niezależny ekspert",
			"Negocjacje i bezpieczna finalizacja"
		]
	}
];
var PACKAGES = [
	{
		name: "Standard",
		price: "300 zł",
		desc: "Podstawa dla szybkiej sprzedaży",
		features: [
			"Mycie zewnętrzne",
			"Odkurzanie wnętrza",
			"Sesja zdjęciowa",
			"Szablon ogłoszenia"
		]
	},
	{
		name: "Premium",
		price: "790 zł",
		desc: "Najczęściej wybierany",
		featured: true,
		features: [
			"Wszystko ze Standard",
			"Diagnostyka OBD-II",
			"Korekta lakieru + wosk",
			"Pranie tapicerki",
			"Publikacja i moderacja ogłoszenia"
		]
	},
	{
		name: "VIP",
		price: "1490 zł",
		desc: "Sprzedajemy za Ciebie",
		features: [
			"Wszystko z Premium",
			"Pełny detailing",
			"Rozmowy z kupującymi",
			"Obecność przy oględzinach",
			"Umowa i formalności"
		]
	}
];
function CarPreparationPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden bg-gradient-hero py-14 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-3.5 w-3.5" }), " Sprzedaj drożej i szybciej"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 font-display text-3xl sm:text-5xl font-bold",
						children: ["Twoje auto zasługuje na ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-primary",
							children: "najlepszą prezentację"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-lg text-muted-foreground",
						children: "Diagnostyka, detailing, sesja zdjęciowa, ogłoszenie i wsparcie w rozmowach z kupującymi. Sprzedaj o 8–15% drożej niż średnia rynkowa."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						className: "mt-8 bg-gradient-primary text-primary-foreground shadow-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/kontakt",
							children: ["Wyceń przygotowanie ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-14 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl sm:text-4xl font-bold text-center",
					children: "Cztery obszary, o które zadbamy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-5 md:grid-cols-2",
					children: AREAS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-gradient-card p-6 hover:border-primary/40 transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a.icon, { className: "h-5 w-5 text-primary" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-semibold text-lg",
								children: a.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2",
								children: a.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2 text-sm text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary shrink-0 mt-0.5" }),
										" ",
										i
									]
								}, i))
							})
						]
					}, a.t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-14 sm:py-20 bg-surface/40 border-y border-border/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl sm:text-3xl font-bold text-center",
					children: "Pakiety"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-3",
					children: PACKAGES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `relative rounded-2xl border p-8 bg-gradient-card ${p.featured ? "border-primary/60 shadow-glow" : "border-border"}`,
						children: [
							p.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground",
								children: "Popularny"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-bold",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: p.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 font-display text-4xl font-bold text-gradient-primary",
								children: p.price
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-2.5",
								children: p.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary shrink-0 mt-0.5" }),
										" ",
										f
									]
								}, f))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: `mt-8 w-full ${p.featured ? "bg-gradient-primary text-primary-foreground shadow-glow" : ""}`,
								variant: p.featured ? "default" : "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/kontakt",
									children: ["Wybieram ", p.name]
								})
							})
						]
					}, p.name))
				})]
			})
		})
	] });
}
//#endregion
export { CarPreparationPage as component };
