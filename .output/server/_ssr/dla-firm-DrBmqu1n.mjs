import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as CircleCheck, B as Award, D as DollarSign, F as ChartColumn, V as ArrowRight, i as Users, l as Shield, o as TrendingUp } from "../_libs/lucide-react.mjs";
import { n as Button } from "./router-B7oAaZnH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dla-firm-DrBmqu1n.js
var import_jsx_runtime = require_jsx_runtime();
var SERVICES = [
	{
		icon: Users,
		t: "Zakup i odświeżanie floty",
		d: "Analiza potrzeb, wyszukiwanie, negocjacje grupowe, harmonogram dostaw.",
		price: "od 500 zł / pojazd"
	},
	{
		icon: DollarSign,
		t: "Leasing i finansowanie",
		d: "Porównanie ofert, analiza TCO, negocjacje warunków, optymalizacja podatkowa.",
		price: "od 1500 zł"
	},
	{
		icon: ChartColumn,
		t: "Audyt kosztów floty",
		d: "Analiza paliwa, serwisu, ubezpieczeń i amortyzacji z planem optymalizacji.",
		price: "od 2000 zł"
	},
	{
		icon: Shield,
		t: "Compliance i policy",
		d: "Polityka floty, procedury, umowy leasingowe zgodne z RODO i KSeF.",
		price: "od 990 zł"
	}
];
var RESULTS = [
	{
		v: "18%",
		l: "Średnia oszczędność na TCO"
	},
	{
		v: "72h",
		l: "Czas przygotowania pierwszej rekomendacji"
	},
	{
		v: "300+",
		l: "Zrealizowanych zakupów flotowych"
	}
];
function ForBusinessPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden bg-gradient-hero py-14 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-3.5 w-3.5" }), " Dla firm i flot"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 font-display text-3xl sm:text-5xl font-bold",
						children: ["Optymalizuj flotę. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-primary",
							children: "Oszczędzaj na TCO."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-lg text-muted-foreground",
						children: "Kompleksowe wsparcie w zakupie pojazdów firmowych, negocjacjach z dealerami, wyborze finansowania i audycie kosztów."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						className: "mt-8 bg-gradient-primary text-primary-foreground shadow-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/kontakt",
							children: ["Umów konsultację B2B ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-10 sm:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-3",
					children: RESULTS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-gradient-card p-8 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-5xl font-bold text-gradient-primary",
							children: r.v
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: r.l
						})]
					}, r.l))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-10 sm:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl sm:text-4xl font-bold",
					children: "Usługi B2B"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 md:grid-cols-2",
					children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-gradient-card p-6 hover:border-primary/40 transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5 text-primary" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold text-gradient-primary shrink-0",
									children: s.price
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-semibold text-lg",
								children: s.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: s.d
							})
						]
					}, s.t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-14 sm:py-20 bg-surface/40 border-y border-border/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl sm:text-3xl font-bold",
					children: "Jak pracujemy z firmami"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 md:grid-cols-4",
					children: [
						{
							n: "01",
							t: "Diagnoza potrzeb",
							d: "Analiza floty i celów biznesowych."
						},
						{
							n: "02",
							t: "Rekomendacja",
							d: "Wybór modeli, dostawców, formy finansowania."
						},
						{
							n: "03",
							t: "Negocjacje",
							d: "Grupowe zakupy z twardymi warunkami."
						},
						{
							n: "04",
							t: "Wdrożenie",
							d: "Harmonogram dostaw, formalności, przekazanie."
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card/60 p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-3xl font-bold text-gradient-primary",
								children: s.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-semibold",
								children: s.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: s.d
							})
						]
					}, s.n))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-14 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-3xl border border-primary/30 bg-gradient-card p-10 sm:p-14",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-2 gap-8 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl sm:text-3xl font-bold",
								children: "Bezpłatny audyt wstępny"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground",
								children: "Prześlij dane floty — w 72h dostaniesz raport z potencjalnymi oszczędnościami."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-2 text-sm",
								children: [
									"Bez zobowiązań",
									"Analiza w 72h",
									"Rekomendacje konkretnych oszczędności"
								].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary" }),
										" ",
										f
									]
								}, f))
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex md:justify-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "bg-gradient-primary text-primary-foreground shadow-glow",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/kontakt",
									children: ["Zamów audyt ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "ml-2 h-4 w-4" })]
								})
							})
						})]
					})
				})
			})
		})
	] });
}
//#endregion
export { ForBusinessPage as component };
