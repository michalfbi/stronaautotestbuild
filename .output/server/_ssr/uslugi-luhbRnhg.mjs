import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as DollarSign, I as Car, V as ArrowRight, d as Search, l as Shield, o as TrendingUp, w as FileCheck } from "../_libs/lucide-react.mjs";
import { n as Button } from "./router-B7oAaZnH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/uslugi-luhbRnhg.js
var import_jsx_runtime = require_jsx_runtime();
var CATEGORIES = [{
	title: "Weryfikacja i zakup",
	desc: "Wybierasz model — my dbamy, byś nie przepłacił i nie kupił wady ukrytej.",
	services: [
		{
			icon: Car,
			t: "Kompleksowa pomoc w zakupie",
			d: "Od wyszukania idealnego egzemplarza, przez rygorystyczną weryfikację, po finalizację transakcji.",
			price: "od 799 zł",
			link: "/pomoc-w-zakupie",
			featured: true
		},
		{
			icon: Search,
			t: "Inspekcja mobilna pojazdu",
			d: "Sprawdzenie auta w dowolnym miejscu w Polsce. Diagnostyka komputerowa, pomiar lakieru, test drogowy.",
			price: "od 300 zł"
		},
		{
			icon: DollarSign,
			t: "Wycena i twarde negocjacje",
			d: "Znalazłeś auto? Ocenimy jego realną wartość i profesjonalnie zbijemy cenę.",
			price: "od 199 zł"
		},
		{
			icon: FileCheck,
			t: "Raport VIN i analiza ogłoszenia",
			d: "Kompletna historia pojazdu, szkody, przebieg. Weryfikacja rzetelności oferty przed dojazdem.",
			price: "od 99 zł",
			link: "/raport-vin"
		}
	]
}, {
	title: "Sprzedaż i przygotowanie",
	desc: "Sprzedasz szybciej i drożej. Zajmiemy się wszystkim.",
	services: [{
		icon: TrendingUp,
		t: "Przygotowanie do sprzedaży",
		d: "Diagnostyka, korekta lakieru, profesjonalne zdjęcia, ogłoszenie i wsparcie w negocjacjach.",
		price: "od 300 zł",
		link: "/przygotowanie-do-sprzedazy",
		featured: true
	}, {
		icon: Shield,
		t: "Reprezentacja przy oględzinach",
		d: "Nasz ekspert reprezentuje Cię przy spotkaniu z kupującym.",
		price: "od 250 zł"
	}]
}];
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden bg-gradient-hero py-14 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
						children: "Katalog usług"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 font-display text-3xl sm:text-5xl font-bold",
						children: ["Wszystko, czego potrzebujesz przy ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-primary",
							children: "zakupie i sprzedaży auta"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-lg text-muted-foreground max-w-2xl mx-auto",
						children: "Nie musisz wiedzieć, na co zwrócić uwagę. Wybierz usługę — resztą zajmiemy się my."
					})
				]
			})
		}),
		CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-10 sm:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl sm:text-3xl font-bold",
						children: cat.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: cat.desc
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 md:grid-cols-2",
					children: cat.services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `rounded-2xl border p-6 bg-gradient-card transition-colors ${s.featured ? "border-primary/50 shadow-glow" : "border-border hover:border-primary/40"}`,
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
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5",
								children: s.link ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "sm",
									variant: s.featured ? "default" : "outline",
									className: s.featured ? "bg-gradient-primary text-primary-foreground" : "",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: s.link,
										children: ["Zobacz szczegóły ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
									})
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "sm",
									variant: "outline",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/kontakt",
										children: ["Zapytaj o wycenę ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
									})
								})
							})
						]
					}, s.t))
				})]
			})
		}, cat.title)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-14 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-primary/30 bg-gradient-card p-10 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl sm:text-3xl font-bold",
							children: "Nie wiesz, którą usługę wybrać?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: "Porozmawiajmy 15 minut — bezpłatnie doradzimy najlepsze rozwiązanie."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "mt-6 bg-gradient-primary text-primary-foreground shadow-glow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/kontakt",
								children: ["Umów rozmowę ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
							})
						})
					]
				})
			})
		})
	] });
}
//#endregion
export { ServicesPage as component };
