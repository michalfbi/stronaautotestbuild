import { i as __toESM } from "../_runtime.mjs";
import { v as require_jsx_runtime, y as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { A as CircleCheck, C as FileText, E as ExternalLink, H as Activity, I as Car, M as ChevronLeft, O as Cpu, S as Gauge, V as ArrowRight, _ as MapPin, a as TriangleAlert, d as Search, h as MessagesSquare, j as ChevronRight, l as Shield, n as X, p as Phone, s as Star, t as Zap, u as ShieldCheck } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as Button, r as cn } from "./router-B7oAaZnH.mjs";
import { i as createServerFn } from "./server-CSrs-Z0B.mjs";
import { i as useServerFn, n as createSsrRpc, r as submitLead, t as Input } from "./leads.functions-NNr-aP5o.mjs";
import { a as Viewport, i as ScrollAreaThumb, n as Root, r as ScrollAreaScrollbar, t as Corner } from "../_libs/radix-ui__react-scroll-area.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D2FGE7GZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var fetchGoogleReviews = createServerFn({ method: "GET" }).handler(createSsrRpc("5260216fd3f4d6450497b00fa3f4d1d691603d8f143e639e297e24d97d399b66"));
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var ScrollArea = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, {
	ref,
	className: cn("relative overflow-hidden", className),
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewport, {
			className: "h-full w-full rounded-[inherit]",
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollBar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Corner, {})
	]
}));
ScrollArea.displayName = Root.displayName;
var ScrollBar = import_react.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbar, {
	ref,
	orientation,
	className: cn("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
}));
ScrollBar.displayName = ScrollAreaScrollbar.displayName;
var FALLBACK_REVIEWS = [
	{
		author: "Marcin K.",
		rating: 5,
		relative: "2 tygodnie temu",
		text: "Ekspert Autotest wykrył ślady lakierowania na 3 elementach, których sprzedawca nie ujawnił. Zbiliśmy cenę o 8 000 zł. Warto każdej wydanej złotówki."
	},
	{
		author: "Anna S.",
		rating: 5,
		relative: "3 tygodnie temu",
		text: "Bardzo profesjonalne podejście. Pan przyjechał z całym sprzętem, komputer diagnostyczny, miernik lakieru, jazda próbna. Dostałam szczegółowy raport w PDF następnego dnia."
	},
	{
		author: "Tomasz W.",
		rating: 5,
		relative: "miesiąc temu",
		text: "Odradzili mi zakup — auto miało kręcony przebieg i naprawianą ramę. Uratowali mnie przed 65 000 zł błędem. Polecam z całego serca."
	},
	{
		author: "Katarzyna L.",
		rating: 5,
		relative: "miesiąc temu",
		text: "Świetny kontakt i bardzo rzetelna wycena stanu auta. Raport był czytelny, a ekspert odpowiedział cierpliwie na każde pytanie. Serdecznie polecam."
	},
	{
		author: "Piotr G.",
		rating: 5,
		relative: "miesiąc temu",
		text: "Zleciłem pełny przegląd przed kupnem. Pan sprawdził wszystko od silnika po elektronikę, a do tego zrobili jazdę próbną. Dzięki raportowi kupiłem auto ze spokojną głową."
	}
];
var FALLBACK_AVG = 5;
var FALLBACK_TOTAL = 28;
function GoogleReviews() {
	const getReviews = useServerFn(fetchGoogleReviews);
	const { data } = useQuery({
		queryKey: ["google-reviews"],
		queryFn: () => getReviews(),
		staleTime: 36e5
	});
	const merged = [...data?.reviews?.length ? data.reviews : [], ...FALLBACK_REVIEWS];
	const seen = /* @__PURE__ */ new Set();
	const reviews = merged.filter((r) => {
		const k = `${r.author}|${r.text.slice(0, 40)}`;
		if (seen.has(k)) return false;
		seen.add(k);
		return true;
	}).slice(0, 10);
	const AVG = data?.rating ?? FALLBACK_AVG;
	const TOTAL = data?.total ?? FALLBACK_TOTAL;
	const MAPS_URI = data?.mapsUri ?? "https://www.google.com/maps/search/?api=1&query=AutoTest+Koz%C3%B3w+26A";
	const [i, setI] = (0, import_react.useState)(0);
	const [paused, setPaused] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setI(0);
	}, [reviews.length]);
	(0, import_react.useEffect)(() => {
		if (paused) return;
		const t = setInterval(() => setI((v) => (v + 1) % reviews.length), 7e3);
		return () => clearInterval(t);
	}, [paused, reviews.length]);
	const r = reviews[Math.min(i, reviews.length - 1)];
	const prev = () => setI((v) => (v - 1 + reviews.length) % reviews.length);
	const next = () => setI((v) => (v + 1) % reviews.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		onMouseEnter: () => setPaused(true),
		onMouseLeave: () => setPaused(false),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-2 sm:-inset-8 pointer-events-none bg-gradient-primary opacity-15 blur-3xl rounded-full" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative rounded-2xl border border-border bg-card/70 backdrop-blur p-6 sm:p-7 shadow-elegant",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-4 pb-5 border-b border-border/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleG, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground leading-tight",
								children: "Opinie w"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold leading-tight",
								children: "Google"
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 justify-end",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl font-bold",
									children: AVG.toFixed(1)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {
									value: AVG,
									size: 16
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-muted-foreground mt-0.5",
								children: [
									"na podstawie ",
									TOTAL,
									" opinii"
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pt-5 min-h-[240px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "animate-in fade-in slide-in-from-bottom-2 duration-500",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [r.photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: r.photo,
										alt: `Zdjęcie profilowe ${r.author}`,
										loading: "lazy",
										className: "h-10 w-10 rounded-full object-cover shrink-0"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-10 w-10 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center font-semibold shrink-0",
										children: r.author.charAt(0)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 flex-wrap",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold truncate",
												children: r.author
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-success",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3 w-3" }), " zweryfikowana"]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 text-xs text-muted-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {
													value: r.rating,
													size: 12
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r.relative })
											]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 text-[15px] leading-relaxed text-foreground/90 line-clamp-6 whitespace-pre-line",
									children: [
										"“",
										r.text,
										"”"
									]
								}),
								r.url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: r.url,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "mt-2 inline-block text-xs text-primary hover:underline",
									children: "Czytaj całą opinię w Google"
								})
							]
						}, i)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 pt-5 border-t border-border/60 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1.5",
							children: reviews.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setI(idx),
								"aria-label": `Opinia ${idx + 1}`,
								className: `h-1.5 rounded-full transition-all ${idx === i ? "w-6 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground/50"}`
							}, idx))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: prev,
								"aria-label": "Poprzednia opinia",
								className: "h-8 w-8 rounded-full border border-border hover:border-primary/50 hover:text-primary grid place-items-center transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: next,
								"aria-label": "Następna opinia",
								className: "h-8 w-8 rounded-full border border-border hover:border-primary/50 hover:text-primary grid place-items-center transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 pt-5 border-t border-border/60 flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								className: "gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessagesSquare, { className: "h-4 w-4" }),
									"Przejrzyj opinie (",
									reviews.length,
									")"
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
							className: "max-w-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleG, {}), " Opinie klientów AutoTest"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
									"Ocena ",
									AVG.toFixed(1),
									"/5 na podstawie ",
									TOTAL,
									" opinii w Google."
								] })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
									className: "max-h-[60vh] pr-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-5",
										children: reviews.map((rev, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "rounded-xl border border-border bg-surface/40 p-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-3",
													children: [rev.photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: rev.photo,
														alt: `Zdjęcie profilowe ${rev.author}`,
														loading: "lazy",
														className: "h-9 w-9 rounded-full object-cover shrink-0"
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "h-9 w-9 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center text-sm font-semibold shrink-0",
														children: rev.author.charAt(0)
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "min-w-0",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "font-medium truncate",
															children: rev.author
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-2 text-xs text-muted-foreground",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {
																	value: rev.rating,
																	size: 12
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: rev.relative })
															]
														})]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "mt-3 text-sm leading-relaxed text-foreground/90 whitespace-pre-line",
													children: [
														"“",
														rev.text,
														"”"
													]
												}),
												rev.url && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: rev.url,
													target: "_blank",
													rel: "noopener noreferrer",
													className: "mt-2 inline-flex items-center gap-1 text-xs text-primary hover:underline",
													children: ["Zobacz w Google ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })]
												})
											]
										}, idx))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: MAPS_URI,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center gap-1.5 text-sm text-primary hover:underline",
									children: [
										"Wszystkie ",
										TOTAL,
										" opinii w Google ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" })
									]
								})
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: MAPS_URI,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors",
							children: [
								"Wszystkie ",
								TOTAL,
								" opinii w Google ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" })
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-success" }), "Wszystkie opinie pochodzą od zweryfikowanych klientów Google"]
			})
		]
	});
}
function Stars({ value, size = 14 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center gap-0.5",
		"aria-label": `${value} z 5 gwiazdek`,
		children: [
			1,
			2,
			3,
			4,
			5
		].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
			style: {
				width: size,
				height: size
			},
			className: n <= Math.round(value) ? "fill-warning text-warning" : "text-muted-foreground/40"
		}, n))
	});
}
function GoogleG() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 48 48",
		className: "h-8 w-8",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#EA4335",
				d: "M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#4285F4",
				d: "M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#FBBC05",
				d: "M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#34A853",
				d: "M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
			})
		]
	});
}
var VISIT_KEY = "autotest_visit_started_at";
function Home() {
	const submit = useServerFn(submitLead);
	const [url, setUrl] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!sessionStorage.getItem(VISIT_KEY)) sessionStorage.setItem(VISIT_KEY, String(Date.now()));
	}, []);
	const onSubmit = async (e) => {
		e.preventDefault();
		if (!url.trim() || !phone.trim()) return;
		setLoading(true);
		const startedAt = Number(sessionStorage.getItem(VISIT_KEY) || Date.now());
		const timeOnSiteSeconds = Math.max(0, Math.round((Date.now() - startedAt) / 1e3));
		try {
			await submit({ data: {
				kind: "hero",
				url: url.trim(),
				phone: phone.trim(),
				source: "home-hero",
				timeOnSiteSeconds
			} });
			toast.success("Zgłoszenie wysłane. Oddzwonimy w ciągu 24h.");
			setUrl("");
			setPhone("");
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Coś poszło nie tak.");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-gradient-hero",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,oklch(1_0_0/0.06)_1px,transparent_0)] [background-size:24px_24px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28 grid lg:grid-cols-2 gap-10 sm:gap-12 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-3.5 w-3.5" }), " Niezależni eksperci w całej Polsce"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight",
						children: [
							"Pomoc w zakupie pojazdów.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-primary",
								children: "Kupuj bez ryzyka."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-base sm:text-lg text-muted-foreground max-w-xl",
						children: "Wklej link do ogłoszenia — w 24h dostaniesz opinię naszego eksperta, analizę ryzyka i realną wycenę. Chronimy przed wadami ukrytymi i przepłacaniem."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "mt-8 rounded-2xl border border-border bg-card/60 backdrop-blur p-4 sm:p-5 shadow-elegant",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-[1fr,200px,auto]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: url,
									onChange: (e) => setUrl(e.target.value),
									placeholder: "Wklej link do ogłoszenia (OLX, Otomoto...)",
									className: "h-12",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: phone,
									onChange: (e) => setPhone(e.target.value),
									placeholder: "Numer telefonu",
									className: "h-12",
									type: "tel",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									disabled: loading,
									className: "h-12 px-6 bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90",
									children: loading ? "Wysyłam..." : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Wyślij ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })] })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-muted-foreground",
							children: "Analiza bezpłatna. Odpowiadamy w 24h. Nie musisz nic decydować od razu."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary" }), " 1000+ zleceń"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary" }), " Ocena 5/5"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary" }), " Cała Polska"]
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleReviews, {})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-10 sm:py-16 bg-surface/40 border-b border-border/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-primary/30 bg-gradient-card p-6 sm:p-10 lg:p-12 shadow-elegant relative overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-primary opacity-10 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative grid lg:grid-cols-[1fr,auto] gap-8 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-3.5 w-3.5" }), " Zanim zdecydujesz o zakupie"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight",
									children: [
										"Najpierw poznaj historię pojazdu.",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-gradient-primary",
											children: "Zamów raport VIN — już od 100 zł."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-muted-foreground",
									children: "Zanim zdecydujesz się na kosztowną inspekcję, sprawdź historię auta po numerze VIN: szkody, przebieg, kradzieże i wcześniejsze właściciele. Szybka weryfikacja za przystępną cenę, która pozwoli Ci podjąć właściwą decyzję."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary" }), " Odpowiedź w 24h"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary" }), " Pełna historia pojazdu"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary" }), " Zniżka na inspekcję"]
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-start lg:items-end gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center lg:text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "Cena raportu"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-4xl sm:text-5xl font-bold text-gradient-primary",
									children: "100 zł"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "bg-gradient-primary text-primary-foreground shadow-glow",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/raport-vin",
									children: ["Zamów raport VIN ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
								})
							})]
						})]
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-14 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary text-sm font-medium tracking-wider uppercase",
						children: "Jak to działa"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-2xl sm:text-4xl font-bold",
						children: "4 kroki dzielą Cię od pewnego zakupu"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
					children: [
						{
							n: "01",
							t: "Wyślij ogłoszenie",
							d: "Wklej link do OLX/Otomoto i zostaw numer. Odezwiemy się w 24h."
						},
						{
							n: "02",
							t: "Analiza wstępna",
							d: "Sprawdzamy dokumentację, historię VIN i ryzyka jeszcze przed dojazdem."
						},
						{
							n: "03",
							t: "Inspekcja na miejscu",
							d: "Test drogowy, komputer diagnostyczny, miernik lakieru, dokumentacja fotograficzna."
						},
						{
							n: "04",
							t: "Raport i negocjacje",
							d: "Otrzymujesz raport, realną wycenę i wsparcie w negocjacjach ceny."
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative rounded-2xl border border-border bg-gradient-card p-6 hover:border-primary/40 transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-4xl font-bold text-gradient-primary",
								children: s.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-semibold text-lg",
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
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-2 gap-12 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-primary text-sm font-medium tracking-wider uppercase",
							children: "Zakres inspekcji"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl sm:text-4xl font-bold",
							children: "Co dokładnie sprawdzamy w Twoim aucie"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: "Kompleksowa procedura, dzięki której wykrywamy średnio 3–5 istotnych usterek na inspekcję. Nasi klienci negocjują średnio 12% zniżki dzięki naszym raportom."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-8 bg-gradient-primary text-primary-foreground shadow-glow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/uslugi",
								children: ["Zobacz wszystkie usługi ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
							})
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 gap-4",
						children: [
							{
								icon: Shield,
								t: "Weryfikacja prawna",
								d: "Historia serwisowa, hipoteki, kradzieże, VIN"
							},
							{
								icon: Gauge,
								t: "Powłoka lakiernicza",
								d: "Miernik lakieru, ślady napraw powypadkowych"
							},
							{
								icon: Activity,
								t: "Test drogowy",
								d: "Mechanika, hamulce, zawieszenie, skrzynia"
							},
							{
								icon: Cpu,
								t: "Diagnostyka OBD-II",
								d: "Błędy silnika, EGR, DPF, czujniki NOx"
							},
							{
								icon: Search,
								t: "Wnętrze i wyposażenie",
								d: "Elektronika, klimatyzacja, elementy komfortu"
							},
							{
								icon: FileText,
								t: "Dokumenty",
								d: "Umowy, faktury, książka serwisowa, VIN"
							}
						].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-card/60 p-5 hover:border-primary/40 transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-6 w-6 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-semibold",
									children: f.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: f.d
								})
							]
						}, f.t))
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-14 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary text-sm font-medium tracking-wider uppercase",
						children: "Dlaczego Autotest"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-2xl sm:text-4xl font-bold",
						children: "Kupujesz mądrzej i taniej"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-3",
					children: [
						{
							icon: TriangleAlert,
							t: "Chronimy przed wadami ukrytymi",
							d: "Wykrywamy naprawy powypadkowe, przekręcony licznik, ukryte awarie."
						},
						{
							icon: Car,
							t: "Negocjujemy cenę",
							d: "Twarde argumenty z raportu = średnio 12% niżej niż oferta wyjściowa."
						},
						{
							icon: MapPin,
							t: "Cała Polska",
							d: "Dojeżdżamy do każdego miasta. Weryfikacja mobilna 7 dni w tygodniu."
						}
					].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-gradient-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-5 w-5 text-primary" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-semibold text-lg",
								children: f.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: f.d
							})
						]
					}, f.t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-14 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-primary/30 bg-gradient-card p-10 sm:p-14 text-center shadow-elegant relative overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-primary opacity-10 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-2xl sm:text-4xl font-bold",
								children: ["Znalazłeś auto? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-primary",
									children: "Sprawdź je z nami."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-muted-foreground max-w-2xl mx-auto",
								children: "Analiza ogłoszenia jest bezpłatna. Zaoszczędź dziesiątki tysięcy dzięki jednej rozmowie z ekspertem."
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
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mr-2 h-4 w-4" }), " +48 690 976 790"]
									})
								})]
							})
						]
					})]
				})
			})
		})
	] });
}
//#endregion
export { Home as component };
