import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as CircleCheck, C as FileText, D as DollarSign, I as Car, R as Calendar, V as ArrowRight, d as Search, p as Phone } from "../_libs/lucide-react.mjs";
import { n as Button } from "./router-B7oAaZnH.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-BTjTjq_Y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pomoc-w-zakupie-DD75SK4N.js
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	{
		n: "01",
		icon: Phone,
		t: "Kontakt telefoniczny",
		d: "Poznajemy Twoje potrzeby, budżet i oczekiwania."
	},
	{
		n: "02",
		icon: Calendar,
		t: "Umówienie oględzin",
		d: "Koordynujemy spotkanie z obecnym właścicielem pojazdu."
	},
	{
		n: "03",
		icon: Search,
		t: "Inspekcja pojazdu",
		d: "Szczegółowa inspekcja dopasowana do wybranego pakietu."
	},
	{
		n: "04",
		icon: FileText,
		t: "Raport z oględzin",
		d: "Otrzymujesz kompletny raport z rekomendacją: kupować czy odpuścić."
	},
	{
		n: "05",
		icon: DollarSign,
		t: "Negocjacje i zakup",
		d: "Reprezentujemy Cię w negocjacjach, pomagamy sfinalizować transakcję."
	}
];
var PACKAGES = [{
	name: "Basic",
	price: "500 zł",
	desc: "Sprawdzenie jednego wybranego auta",
	features: [
		"Inspekcja mobilna w miejscu auta",
		"Diagnostyka komputerowa OBD-II",
		"Pomiar grubości lakieru",
		"Test drogowy i ocena podwozia",
		"Raport pisemny ze zdjęciami"
	]
}, {
	name: "Standard",
	price: "650 zł",
	desc: "Pomoc w wyborze i negocjacjach",
	featured: true,
	features: [
		"Wszystko z pakietu Basic",
		"Wyszukanie do 3 egzemplarzy",
		"Analiza ogłoszeń i raport VIN",
		"Negocjacje ceny z właścicielem",
		"Obecność przy transakcji i umowa"
	]
}];
var FAQ = [
	{
		q: "Ile trwa cały proces?",
		a: "Od 1 do 5 dni zależnie od dostępności. O każdym etapie informujemy Cię na bieżąco."
	},
	{
		q: "Jak wygląda pierwszy krok?",
		a: "Umawiasz bezpłatną konsultację, w której przeglądamy przesłane ogłoszenie i sprawdzamy telefonicznie dostępność auta.\xA0\nMożemy również zająć się poszukiwaniem pojazdu na portalach ogłoszeniowych za ciebie"
	},
	{
		q: "Czy jeździcie po całej Polsce?",
		a: "Tak. Dojeżdżamy do każdego miasta. Doliczamy do ceny pakietu koszty dojazdu."
	},
	{
		q: "Jak sprawdzacie pojazd przed zakupem?",
		a: "Weryfikujemy historię VIN, sprawdzamy przebieg i stany liczników, wykonujemy diagnostykę komputerową OBD oraz dokładne oględziny techniczne i wizualne, a także sprawdzamy dokumenty i stan prawny pojazdu."
	},
	{
		q: "Czy negocjujecie cenę w moim imieniu?",
		a: "Tak. Prowadzimy negocjacje cenowe z sprzedającym i dbamy o to, byś nie przepłacił. Statystycznie kupujemy pojazdy średnio 12% taniej niż cena wyjściowa."
	},
	{
		q: "Czy dostanę raport na piśmie?",
		a: "Tak — zawsze. Otrzymujesz pełen raport PDF z fotografiami, wynikami diagnostyki i rekomendacją, wraz ze szczegółowym uzasadnieniem naszej decyzji."
	},
	{
		q: "Czy mogę odstąpić od usługi w trakcie?",
		a: "Tak. Na każdym etapie możesz zrezygnować bez podawania przyczyny. Rozliczamy się wyłącznie za faktycznie wykonane etapy, a pozostała część jest zwracana."
	},
	{
		q: "Jak się z Wami skontaktować?",
		a: "Najprościej przez formularz kontaktowy, e-mail na dual1518@gmail.com lub telefonicznie pod numerem +48 690 976 790. Chętnie odpowiemy na wszystkie pytania."
	}
];
function PurchaseAssistance() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden bg-gradient-hero py-14 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Car, { className: "h-3.5 w-3.5" }), " Kompleksowa pomoc w zakupie"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 font-display text-3xl sm:text-5xl font-bold",
						children: [
							"Kupujemy auto ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-primary",
								children: "za Ciebie"
							}),
							" — od wyszukania do rejestracji"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-lg text-muted-foreground",
						children: "Ty wybierasz model. My znajdujemy najlepszy egzemplarz, weryfikujemy, negocjujemy cenę i finalizujemy transakcję. Średnio 12% niżej niż cena wyjściowa."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "bg-gradient-primary text-primary-foreground shadow-glow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/kontakt",
								children: ["Umów konsultację ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "tel:+48690976790",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mr-2 h-4 w-4" }), " Zadzwoń teraz"]
							})
						})]
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
					children: "Jak wygląda proces"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5",
					children: STEPS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-gradient-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-3xl font-bold text-gradient-primary",
								children: s.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "mt-3 h-5 w-5 text-primary" }),
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
			className: "py-14 sm:py-20 bg-surface/40 border-y border-border/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl sm:text-4xl font-bold",
						children: "Pakiety"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: "Wybierz zakres wsparcia dopasowany do Twoich potrzeb."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto",
					children: PACKAGES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `relative rounded-2xl border p-8 bg-gradient-card ${p.featured ? "border-primary/60 shadow-glow" : "border-border"}`,
						children: [
							p.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground",
								children: "Najczęściej wybierany"
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
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-14 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl sm:text-3xl font-bold text-center",
					children: "Najczęstsze pytania"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					className: "mt-10",
					children: FAQ.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: `f-${i}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
							className: "text-left",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
							className: "text-muted-foreground",
							children: f.a
						})]
					}, i))
				})]
			})
		})
	] });
}
//#endregion
export { PurchaseAssistance as component };
