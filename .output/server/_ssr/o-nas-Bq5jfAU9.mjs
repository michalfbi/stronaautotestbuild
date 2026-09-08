import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as Award, S as Gauge, T as Eye, V as ArrowRight, _ as MapPin, b as HeartHandshake, f as Scale, r as Wrench, u as ShieldCheck } from "../_libs/lucide-react.mjs";
import { n as Button } from "./router-B7oAaZnH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/o-nas-Bq5jfAU9.js
var import_jsx_runtime = require_jsx_runtime();
var STATS = [
	{
		icon: Gauge,
		value: "1000+",
		label: "sprawdzonych samochodów"
	},
	{
		icon: Award,
		value: "8 lat",
		label: "doświadczenia w branży"
	},
	{
		icon: ShieldCheck,
		value: "5,0",
		label: "Ocena w Google"
	},
	{
		icon: MapPin,
		value: "Cała Polska\xA0",
		label: "\n"
	}
];
var VALUES = [
	{
		icon: Scale,
		title: "Pełna niezależność",
		desc: "Nie współpracujemy z komisami ani handlarzami. Nasz jedyny interes to Twój dobry zakup — dlatego mówimy „nie kupuj”, gdy trzeba."
	},
	{
		icon: Eye,
		title: "Przejrzystość",
		desc: "Otrzymujesz pisemny raport ze zdjęciami, pomiarami lakieru i odczytami z komputera. Wszystko udokumentowane, bez ogólników."
	},
	{
		icon: Wrench,
		title: "Wiedza techniczna",
		desc: "Diagnostyka OBD-II, miernik grubości lakieru, test drogowy i ocena podwozia. Praktyka warsztatowa, nie teoria z internetu."
	},
	{
		icon: HeartHandshake,
		title: "Realne oszczędności",
		desc: "Średnio zbijamy cenę auta o kilka tysięcy złotych — a w wielu przypadkach chronimy klienta przed stratą całego budżetu."
	}
];
var TIMELINE = [
	{
		year: "2018",
		text: "Pierwsze inspekcje przedzakupowe dla znajomych i rodziny — z prostym raportem w PDF."
	},
	{
		year: "2020",
		text: "Własny sprzęt diagnostyczny i mobilny serwis: dojeżdżamy do auta w dowolne miejsce w Polsce."
	},
	{
		year: "2022",
		text: "Rozszerzenie oferty o pomoc w zakupie „od A do Z”, negocjacje i przygotowanie aut do sprzedaży."
	},
	{
		year: "2024",
		text: "Obsługa firm i flot: przeglądy poleasingowe, wyceny i cykliczne kontrole stanu pojazdów."
	},
	{
		year: "2026",
		text: "Tysiące zrealizowanych zleceń i ocena 5,0 w opiniach Google."
	}
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden border-b border-border/60",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-gradient-primary opacity-[0.07]",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/60 px-3 py-1 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-primary" }), " Niezależni od komisów i handlarzy"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 font-display text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl",
						children: ["Jesteśmy po stronie ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-primary",
							children: "kupującego"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-muted-foreground md:text-lg",
						children: "Autotest to zespół rzeczoznawców i diagnostów, który sprawdza samochody zanim wydasz na nie pieniądze. Nie sprzedajemy aut — sprzedajemy pewność, że kupujesz dobrze."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/kontakt",
								children: "Porozmawiajmy o Twoim aucie"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/cennik",
								children: "Zobacz cennik"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
						children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border/60 bg-surface/60 p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 font-display text-2xl font-semibold",
									children: s.value
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-muted-foreground",
									children: s.label
								})
							]
						}, s.label))
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl sm:text-3xl font-semibold tracking-tight",
					children: "Nasze zasady"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-muted-foreground",
					children: "Cztery reguły, od których nigdy nie odstępujemy — niezależnie od tego, jak atrakcyjnie wygląda ogłoszenie."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 sm:grid-cols-2",
					children: VALUES.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border/60 bg-surface/40 p-6 transition-colors hover:border-primary/40",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v.icon, { className: "h-5 w-5 text-primary" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-lg font-semibold",
								children: v.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: v.desc
							})
						]
					}, v.title))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl sm:text-3xl font-semibold tracking-tight",
				children: "Jak to się zaczęło"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-10 space-y-6 border-l border-border/60 pl-6",
				children: TIMELINE.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-sm font-semibold text-primary",
							children: t.year
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground max-w-2xl",
							children: t.text
						})
					]
				}, t.year))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border/60 bg-gradient-primary/10 p-8 md:p-12 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl md:text-3xl font-semibold tracking-tight",
						children: "Masz auto na oku? Sprawdźmy je razem."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground max-w-xl mx-auto",
						children: "Zadzwoń lub napisz — w ciągu kilku minut powiemy, czy oferta jest warta dojazdu."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 flex flex-wrap justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:+48690976790",
								children: "Zadzwoń: +48 690 976 790"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/kontakt",
								children: ["Formularz kontaktowy ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
							})
						})]
					})
				]
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
