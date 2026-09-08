import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { P as Check, V as ArrowRight, m as Minus, p as Phone, y as Info } from "../_libs/lucide-react.mjs";
import { n as Button } from "./router-B7oAaZnH.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-BTjTjq_Y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cennik-ig1pRqZ6.js
var import_jsx_runtime = require_jsx_runtime();
var PACKAGES = [{
	name: "Basic",
	price: "500 zł",
	desc: "Sprawdzenie jednego wybranego auta",
	cta: "Wybierz Basic",
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
	cta: "Wybierz Standard",
	featured: true,
	features: [
		"Wszystko z pakietu Basic",
		"Wyszukanie do 3 egzemplarzy",
		"Analiza ogłoszeń i raport VIN",
		"Negocjacje ceny z właścicielem",
		"Obecność przy transakcji i umowa"
	]
}];
var SINGLE_SERVICES = [
	{
		group: "Weryfikacja i inspekcja",
		items: [
			{
				name: "Inspekcja mobilna pojazdu",
				price: "od 300 zł",
				note: "dojazd do 50 km w cenie"
			},
			{
				name: "Raport VIN i analiza ogłoszenia",
				price: "od 99 zł"
			},
			{
				name: "Pomiar lakieru + protokół",
				price: "150 zł"
			},
			{
				name: "Diagnostyka komputerowa",
				price: "150 zł"
			}
		]
	},
	{
		group: "Zakup i negocjacje",
		items: [
			{
				name: "Wycena i negocjacje ceny",
				price: "od 199 zł"
			},
			{
				name: "Wyszukanie egzemplarzy pod kryteria",
				price: "od 399 zł"
			},
			{
				name: "Reprezentacja przy transakcji",
				price: "od 250 zł"
			}
		]
	},
	{
		group: "Sprzedaż auta",
		items: [
			{
				name: "Przygotowanie do sprzedaży",
				price: "od 300 zł"
			},
			{
				name: "Sesja zdjęciowa i ogłoszenie",
				price: "od 250 zł"
			},
			{
				name: "Obsługa kupujących i oględzin",
				price: "od 250 zł"
			}
		]
	},
	{
		group: "Dodatki",
		items: [
			{
				name: "Kredyt / leasing — porównanie ofert",
				price: "od 149 zł"
			},
			{
				name: "Ubezpieczenie OC/AC/GAP",
				price: "0 zł",
				note: "wynagrodzenie od ubezpieczyciela"
			},
			{
				name: "Transport lawetą",
				price: "od 490 zł",
				note: "zależnie od dystansu"
			},
			{
				name: "Rejestracja pojazdu",
				price: "299 zł"
			}
		]
	}
];
var COMPARE = [
	{
		label: "Inspekcja techniczna auta",
		basic: true,
		standard: true,
		premium: true
	},
	{
		label: "Raport pisemny ze zdjęciami",
		basic: true,
		standard: true,
		premium: true
	},
	{
		label: "Raport VIN",
		basic: "dopłata",
		standard: true,
		premium: true
	},
	{
		label: "Liczba sprawdzanych egzemplarzy",
		basic: "1",
		standard: "do 3",
		premium: "bez limitu"
	},
	{
		label: "Negocjacje ceny",
		basic: false,
		standard: true,
		premium: true
	},
	{
		label: "Obecność przy transakcji",
		basic: false,
		standard: true,
		premium: true
	},
	{
		label: "Transport i rejestracja",
		basic: false,
		standard: "dopłata",
		premium: true
	},
	{
		label: "Dobór ubezpieczenia",
		basic: false,
		standard: false,
		premium: true
	}
];
var FAQ = [
	{
		q: "Czy w cenie jest dojazd do samochodu?",
		a: "Tak, dojazd w promieniu 50 km od naszej lokalizacji jest wliczony w cenę inspekcji. Powyżej tego dystansu doliczamy 1,50 zł za każdy kolejny kilometr — zawsze podajemy dokładną kwotę przed wyjazdem."
	},
	{
		q: "Kiedy płacę za usługę?",
		a: "Po wykonaniu inspekcji i przekazaniu raportu. W pakietach Standard i Premium pobieramy zaliczkę 30% na start, a resztę po zakończeniu procesu zakupu."
	},
	{
		q: "Co jeśli auto okaże się w złym stanie?",
		a: "Płacisz za wiedzę, nie za pozytywny wynik. Raport ostrzegający przed zakupem powypadkowego auta jest najlepszą inwestycją — jedna taka decyzja oszczędza kilkanaście tysięcy złotych."
	},
	{
		q: "Czy wystawiacie fakturę?",
		a: "Tak, każdą usługę rozliczamy fakturą — również dla firm i flot. Dla stałych klientów biznesowych przygotowujemy indywidualne stawki."
	},
	{
		q: "Czy ceny są ostateczne?",
		a: "Kwoty „od” dotyczą standardowych osobówek. Dla aut zabytkowych, sportowych, dostawczych oraz zakupów za granicą przygotowujemy indywidualną wycenę po krótkiej rozmowie."
	}
];
function Cell({ value }) {
	if (value === true) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mx-auto h-4 w-4 text-primary" });
	if (value === false) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "mx-auto h-4 w-4 text-muted-foreground/50" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-xs text-muted-foreground",
		children: value
	});
}
function PricingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden border-b border-border/60",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-gradient-primary opacity-[0.07]",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-24 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/60 px-3 py-1 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "h-3.5 w-3.5 text-primary" }), " Bez ukrytych kosztów"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 font-display text-3xl md:text-5xl font-semibold tracking-tight",
						children: ["Cennik ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-primary",
							children: "Autotest"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-2xl text-muted-foreground md:text-lg",
						children: "Płacisz za konkretną pracę i dokumentację. Wycenę potwierdzamy zawsze przed wyjazdem — żadnych niespodzianek na fakturze."
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl sm:text-3xl font-semibold tracking-tight",
					children: "Pakiety pomocy w zakupie"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-sm text-muted-foreground",
					children: "Uwaga: do ceny pakietu doliczany jest koszt dojazdu na miejsce — dojazd do 50 km jest w cenie, a za każdy kolejny kilometr doliczamy 1,50 zł."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 md:grid-cols-2",
					children: PACKAGES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: p.featured ? "relative rounded-2xl border border-primary/50 bg-surface/70 p-7 shadow-glow" : "relative rounded-2xl border border-border/60 bg-surface/40 p-7",
						children: [
							p.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-3 left-7 rounded-full bg-gradient-primary px-3 py-1 text-[11px] font-medium text-primary-foreground",
								children: "Najczęściej wybierany"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-semibold",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: p.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 font-display text-2xl sm:text-3xl font-semibold",
								children: p.price
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-2.5 text-sm",
								children: p.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: f
									})]
								}, f))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: p.featured ? "mt-7 w-full bg-gradient-primary text-primary-foreground hover:opacity-90" : "mt-7 w-full",
								variant: p.featured ? "default" : "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/kontakt",
									children: p.cta
								})
							})
						]
					}, p.name))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border/60 bg-surface/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl sm:text-3xl font-semibold tracking-tight",
						children: "Porównanie pakietów"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-muted-foreground md:hidden",
						children: "Przewiń tabelę w poziomie, aby zobaczyć wszystkie pakiety."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 sm:mt-8 overflow-x-auto rounded-xl border border-border/60 bg-background/60",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[640px] text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border/60",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-4 text-left font-display font-semibold",
										children: "Zakres"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-4 text-center font-display font-semibold",
										children: "Basic"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-4 text-center font-display font-semibold text-primary",
										children: "Standard"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: COMPARE.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border/40 last:border-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5 text-muted-foreground",
										children: row.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5 text-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { value: row.basic })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5 text-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { value: row.standard })
									})
								]
							}, row.label)) })]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl sm:text-3xl font-semibold tracking-tight",
					children: "Usługi pojedyncze"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-muted-foreground",
					children: "Nie potrzebujesz całego pakietu? Zamów dokładnie to, co jest Ci potrzebne."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 md:grid-cols-2",
					children: SINGLE_SERVICES.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border/60 bg-surface/40 p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold",
							children: g.group
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 divide-y divide-border/40",
							children: g.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-baseline justify-between gap-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sm text-muted-foreground",
									children: [i.name, i.note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xs text-muted-foreground/70",
										children: i.note
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "whitespace-nowrap font-display text-sm font-semibold",
									children: i.price
								})]
							}, i.name))
						})]
					}, g.group))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border/60 bg-surface/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl sm:text-3xl font-semibold tracking-tight",
					children: "Pytania o ceny"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					className: "mt-8",
					children: FAQ.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: `item-${i}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
							className: "text-left",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
							className: "text-muted-foreground",
							children: f.a
						})]
					}, f.q))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border/60 bg-gradient-primary/10 p-8 md:p-12 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl md:text-3xl font-semibold tracking-tight",
						children: "Nie wiesz, który pakiet wybrać?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground max-w-xl mx-auto",
						children: "Opisz nam auto i budżet — zaproponujemy najtańszy zakres, który realnie Cię zabezpieczy."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 flex flex-wrap justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "tel:+48690976790",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mr-2 h-4 w-4" }), " +48 690 976 790"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/kontakt",
								children: ["Napisz do nas ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
							})
						})]
					})
				]
			})
		})
	] });
}
//#endregion
export { PricingPage as component };
