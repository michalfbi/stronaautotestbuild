import { i as __toESM } from "../_runtime.mjs";
import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { u as Slot, v as require_jsx_runtime, y as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as render } from "../_libs/@react-email/render+[...].mjs";
import { t as TEMPLATES } from "./registry-CdpHCr8B.mjs";
import { _ as createRootRouteWithContext, d as HeadContent, g as createFileRoute, h as lazyRouteComponent, m as Outlet, p as createRouter, u as Scripts, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { B as Award, _ as MapPin, g as Menu, k as Clock, n as X, p as Phone, s as Star, u as ShieldCheck, v as Mail } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/router-B7oAaZnH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Cv-EyWrO.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var NAV_LINKS = [
	{
		to: "/",
		label: "Start",
		exact: true
	},
	{
		to: "/uslugi",
		label: "Usługi"
	},
	{
		to: "/cennik",
		label: "Cennik"
	},
	{
		to: "/pomoc-w-zakupie",
		label: "Pomoc w zakupie"
	},
	{
		to: "/przygotowanie-do-sprzedazy",
		label: "Sprzedaż"
	},
	{
		to: "/o-nas",
		label: "O nas"
	},
	{
		to: "/kontakt",
		label: "Kontakt"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("fixed top-0 inset-x-0 z-50 transition-all duration-300", scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-elegant" : "bg-transparent"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex items-center gap-2 group shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-lg font-semibold tracking-tight",
						children: ["Auto", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-primary",
							children: "test"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-1",
					children: NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						activeOptions: { exact: l.exact ?? false },
						className: "px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground transition-colors data-[status=active]:text-foreground data-[status=active]:bg-accent/40",
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden md:flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "tel:+48690976790",
						className: "hidden xl:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " +48 690 976 790"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						className: "bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/kontakt",
							children: "Umów konsultację"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1 lg:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						className: "h-9 px-3 bg-gradient-primary text-primary-foreground shadow-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:+48690976790",
							"aria-label": "Zadzwoń",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1.5 hidden sm:inline",
								children: "Zadzwoń"
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
						open,
						onOpenChange: setOpen,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								"aria-label": "Otwórz menu",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
							side: "right",
							className: "w-[280px] bg-background border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
								className: "sr-only",
								children: "Menu"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-col gap-1",
								children: [
									NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: l.to,
										onClick: () => setOpen(false),
										activeOptions: { exact: l.exact ?? false },
										className: "px-3 py-3 rounded-md text-base text-muted-foreground hover:text-foreground hover:bg-accent/40 transition-colors data-[status=active]:text-foreground data-[status=active]:bg-accent/60",
										children: l.label
									}, l.to)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										className: "mt-4 bg-gradient-primary text-primary-foreground",
										onClick: () => setOpen(false),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/kontakt",
											children: "Umów konsultację"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "tel:+48690976790",
										className: "mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " +48 690 976 790"]
									})
								]
							})]
						})]
					})]
				})
			]
		})
	});
}
var COLS = [{
	title: "Usługi",
	links: [
		{
			to: "/pomoc-w-zakupie",
			label: "Pomoc w zakupie"
		},
		{
			to: "/przygotowanie-do-sprzedazy",
			label: "Przygotowanie do sprzedaży"
		},
		{
			to: "/uslugi",
			label: "Wszystkie usługi"
		},
		{
			to: "/cennik",
			label: "Cennik"
		}
	]
}];
function Footer() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-24 border-t border-border/60 bg-surface/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 md:grid-cols-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "flex items-center gap-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-lg font-semibold",
									children: ["Auto", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient-primary",
										children: "test"
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-muted-foreground max-w-md",
								children: "Niezależni eksperci w weryfikacji, zakupie i sprzedaży pojazdów. Chronimy Twoje pieniądze na każdym etapie transakcji."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap gap-3 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-3.5 w-3.5 text-primary" }), " 1200+ zrealizowanych zleceń"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-primary" }), " 7 dni w tygodniu"]
								})]
							})
						]
					}), COLS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-sm font-semibold mb-4",
						children: c.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2 text-sm",
						children: c.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: "text-muted-foreground hover:text-foreground transition-colors",
							children: l.label
						}) }, l.to))
					})] }, c.title))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 pt-8 border-t border-border/60 grid gap-4 md:grid-cols-3 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-primary" }), " +48 690 976 790"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-primary" }), " dual1518@gmail.com"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-primary" }), " Cała Polska"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 text-xs text-muted-foreground",
					children: [
						"© ",
						year,
						" Autotest. Wszelkie prawa zastrzeżone."
					]
				})
			]
		})
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var STORAGE_KEY = "autotest_call_popup_dismissed_at";
var DELAY_MS = 2e4;
var SNOOZE_MS = 864e5;
function CallNowPopup() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	const [closing, setClosing] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let raw = null;
		try {
			raw = window.localStorage.getItem(STORAGE_KEY);
		} catch {
			raw = null;
		}
		if (raw && Date.now() - Number(raw) < SNOOZE_MS) return;
		const timer = window.setTimeout(() => setVisible(true), DELAY_MS);
		return () => window.clearTimeout(timer);
	}, []);
	const dismiss = () => {
		setClosing(true);
		try {
			window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
		} catch {}
		window.setTimeout(() => setVisible(false), 200);
	};
	if (!visible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "dialog",
		"aria-label": "Zadzwoń teraz",
		className: cn("fixed z-[60] left-4 right-4 bottom-4 sm:left-auto sm:right-6 sm:bottom-6 sm:w-[360px]", "rounded-2xl border border-primary/40 bg-surface/95 p-5 shadow-glow backdrop-blur-xl", closing ? "animate-out fade-out slide-out-to-bottom-4" : "animate-in fade-in slide-in-from-bottom-6", "duration-300"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: dismiss,
				"aria-label": "Zamknij",
				className: "absolute right-3 top-3 rounded-md p-1 text-muted-foreground transition-colors hover:bg-accent/40 hover:text-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative flex h-2 w-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-primary" })]
					}), "Jesteśmy dostępni teraz"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-primary text-primary" }), " 5,0 w Google"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 font-display text-lg font-semibold leading-snug",
				children: "Masz auto na oku? Zadzwoń teraz."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-sm text-muted-foreground",
				children: "Bezpłatna, krótka konsultacja — powiemy, czy oferta jest warta dojazdu i ile powinna kosztować inspekcja."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "w-full bg-gradient-primary text-primary-foreground hover:opacity-90",
					onClick: dismiss,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "tel:+48690976790",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mr-2 h-4 w-4" }), " +48 690 976 790"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					className: "w-full",
					onClick: dismiss,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/kontakt",
						children: "Wolę napisać"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 flex items-center gap-1.5 text-[11px] text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-primary" }), " Niezależni eksperci — bez powiązań z komisami"]
			})
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 flex items-center justify-center px-4 pt-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-md text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-7xl font-bold text-gradient-primary",
							children: "404"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-xl font-semibold",
							children: "Nie znaleziono strony"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Strona, której szukasz, nie istnieje lub została przeniesiona."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "inline-flex items-center justify-center rounded-md bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground",
								children: "Wróć na stronę główną"
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight",
					children: "Coś poszło nie tak"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Nie udało się załadować tej strony. Spróbuj odświeżyć lub wróć na stronę główną."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground",
						children: "Spróbuj ponownie"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input px-4 py-2 text-sm",
						children: "Strona główna"
					})]
				})
			]
		})
	});
}
var Route$10 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "theme-color",
				content: "#1a1f2e"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Autotest"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "pl",
		className: "dark",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$10.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-screen flex flex-col bg-background text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1 pt-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
					richColors: true,
					position: "top-right"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallNowPopup, {})
			]
		})
	});
}
var $$splitComponentImporter$8 = () => import("./routes-D2FGE7GZ.mjs");
var Route$9 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Autotest — Niezależna weryfikacja i pomoc w zakupie auta" },
			{
				name: "description",
				content: "Ekspercka inspekcja pojazdów, raport VIN, negocjacje ceny i kompleksowa pomoc w zakupie samochodu. Chronimy Twoje pieniądze na każdym etapie transakcji."
			},
			{
				property: "og:title",
				content: "Autotest — Niezależna weryfikacja i pomoc w zakupie auta"
			},
			{
				property: "og:description",
				content: "Ekspercka inspekcja pojazdów, raport VIN, negocjacje ceny i pomoc w zakupie samochodu w całej Polsce."
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./cennik-ig1pRqZ6.mjs");
var Route$8 = createFileRoute("/cennik")({
	head: () => ({
		meta: [
			{ title: "Cennik — Autotest | Inspekcja auta od 300 zł" },
			{
				name: "description",
				content: "Przejrzysty cennik Autotest: inspekcja mobilna od 300 zł, raport VIN od 99 zł, pakiety pomocy w zakupie Basic 500 zł, Standard 650 zł. Bez ukrytych kosztów."
			},
			{
				property: "og:title",
				content: "Cennik Autotest — przejrzyste stawki"
			},
			{
				property: "og:description",
				content: "Inspekcja mobilna od 300 zł, raport VIN od 99 zł, pakiety pomocy w zakupie od 799 zł."
			},
			{
				property: "og:url",
				content: "/cennik"
			}
		],
		links: [{
			rel: "canonical",
			href: "/cennik"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./dla-firm-DrBmqu1n.mjs");
var Route$7 = createFileRoute("/dla-firm")({
	head: () => ({
		meta: [
			{ title: "Autotest dla firm i flot | Zakup i audyt pojazdów firmowych" },
			{
				name: "description",
				content: "Kompleksowa obsługa firm i flot: zakup pojazdów, negocjacje grupowe, audyt kosztów, leasing i finansowanie. Oszczędź do 18% na TCO."
			},
			{
				property: "og:title",
				content: "Autotest dla firm i flot"
			},
			{
				property: "og:description",
				content: "Zakup pojazdów, negocjacje, leasing i audyt kosztów dla firm."
			},
			{
				property: "og:url",
				content: "/dla-firm"
			}
		],
		links: [{
			rel: "canonical",
			href: "/dla-firm"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./kontakt-BzvRLwkf.mjs");
var Route$6 = createFileRoute("/kontakt")({
	head: () => ({
		meta: [
			{ title: "Kontakt — Autotest | Umów konsultację" },
			{
				name: "description",
				content: "Skontaktuj się z ekspertami Autotest. Konsultacja bezpłatna, odpowiadamy w 24h. Telefon, email, formularz kontaktowy."
			},
			{
				property: "og:title",
				content: "Kontakt — Autotest"
			},
			{
				property: "og:description",
				content: "Umów bezpłatną konsultację z ekspertem Autotest."
			},
			{
				property: "og:url",
				content: "/kontakt"
			}
		],
		links: [{
			rel: "canonical",
			href: "/kontakt"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./o-nas-Bq5jfAU9.mjs");
var Route$5 = createFileRoute("/o-nas")({
	head: () => ({
		meta: [
			{ title: "O nas — Autotest | Niezależni eksperci od samochodów" },
			{
				name: "description",
				content: "Poznaj Autotest: niezależny zespół rzeczoznawców i diagnostów. Ponad 1200 sprawdzonych aut, 5,0 w opiniach Google. Działamy w całej Polsce, bez powiązań z komisami."
			},
			{
				property: "og:title",
				content: "O nas — Autotest"
			},
			{
				property: "og:description",
				content: "Niezależny zespół rzeczoznawców i diagnostów. 1200+ sprawdzonych aut, ocena 5,0 w Google."
			},
			{
				property: "og:url",
				content: "/o-nas"
			}
		],
		links: [{
			rel: "canonical",
			href: "/o-nas"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./pomoc-w-zakupie-DD75SK4N.mjs");
var Route$4 = createFileRoute("/pomoc-w-zakupie")({
	head: () => ({
		meta: [
			{ title: "Pomoc w zakupie auta — Autotest | Ekspert prowadzi Cię za rękę" },
			{
				name: "description",
				content: "Kompleksowa pomoc w zakupie samochodu: wyszukanie, weryfikacja, negocjacje ceny, transport i rejestracja. Pakiety od 799 zł. Cała Polska."
			},
			{
				property: "og:title",
				content: "Pomoc w zakupie auta — Autotest"
			},
			{
				property: "og:description",
				content: "Ekspert prowadzi Cię przez cały proces zakupu — od wyszukania do rejestracji."
			},
			{
				property: "og:url",
				content: "/pomoc-w-zakupie"
			}
		],
		links: [{
			rel: "canonical",
			href: "/pomoc-w-zakupie"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./przygotowanie-do-sprzedazy-WbiJ_zZW.mjs");
var Route$3 = createFileRoute("/przygotowanie-do-sprzedazy")({
	head: () => ({
		meta: [
			{ title: "Przygotowanie auta do sprzedaży — Autotest | Sprzedaj drożej i szybciej" },
			{
				name: "description",
				content: "Profesjonalne przygotowanie samochodu do sprzedaży: diagnostyka, detailing, sesja zdjęciowa, ogłoszenie i wsparcie w negocjacjach. Pakiety od 300 zł."
			},
			{
				property: "og:title",
				content: "Przygotowanie do sprzedaży — Autotest"
			},
			{
				property: "og:description",
				content: "Auto sprzeda się szybciej i drożej — zajmiemy się każdym detalem."
			},
			{
				property: "og:url",
				content: "/przygotowanie-do-sprzedazy"
			}
		],
		links: [{
			rel: "canonical",
			href: "/przygotowanie-do-sprzedazy"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./raport-vin-BSaFGI9B.mjs");
var Route$2 = createFileRoute("/raport-vin")({
	head: () => ({
		meta: [
			{ title: "Raport VIN — Autotest | Pełna historia pojazdu przed zakupem" },
			{
				name: "description",
				content: "Zamów raport VIN i analizę ogłoszenia. Szczegółowa historia serwisowa, szkody, przebieg. Zniżka 20% na inspekcję. Odpowiedź w 24h."
			},
			{
				property: "og:title",
				content: "Raport VIN — Autotest"
			},
			{
				property: "og:description",
				content: "Pełna historia pojazdu przed zakupem. Uniknij ukrytych kosztów."
			},
			{
				property: "og:url",
				content: "/raport-vin"
			}
		],
		links: [{
			rel: "canonical",
			href: "/raport-vin"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./uslugi-luhbRnhg.mjs");
var Route$1 = createFileRoute("/uslugi")({
	head: () => ({
		meta: [
			{ title: "Usługi — Autotest | Weryfikacja, zakup i sprzedaż aut" },
			{
				name: "description",
				content: "Pełen katalog usług Autotest: pomoc w zakupie auta, inspekcja mobilna, negocjacje ceny, raport VIN, przygotowanie do sprzedaży, ubezpieczenia. Ceny od 300 zł."
			},
			{
				property: "og:title",
				content: "Usługi Autotest — pełen katalog"
			},
			{
				property: "og:description",
				content: "Katalog usług: inspekcja mobilna, pomoc w zakupie, raport VIN, przygotowanie do sprzedaży."
			},
			{
				property: "og:url",
				content: "/uslugi"
			}
		],
		links: [{
			rel: "canonical",
			href: "/uslugi"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var Route = createFileRoute("/lovable/email/transactional/preview")({ server: { handlers: { POST: async ({ request }) => {
	const apiKey = processModule.env["LOVABLE_API_KEY"];
	if (!apiKey) return Response.json({ error: "Server configuration error" }, { status: 500 });
	if (request.headers.get("Authorization")?.replace(/^Bearer\s+/i, "") !== apiKey) return Response.json({ error: "Unauthorized" }, { status: 401 });
	const templateNames = Object.keys(TEMPLATES);
	const results = [];
	for (const name of templateNames) {
		const entry = TEMPLATES[name];
		const displayName = entry.displayName || name;
		if (!entry.previewData) {
			results.push({
				templateName: name,
				displayName,
				subject: "",
				html: "",
				status: "preview_data_required"
			});
			continue;
		}
		try {
			const html = await render(import_react.createElement(entry.component, entry.previewData));
			const resolvedSubject = typeof entry.subject === "function" ? entry.subject(entry.previewData) : entry.subject;
			results.push({
				templateName: name,
				displayName,
				subject: resolvedSubject,
				html,
				status: "ready"
			});
		} catch (err) {
			console.error("Failed to render template for preview", {
				template: name,
				error: err
			});
			results.push({
				templateName: name,
				displayName,
				subject: "",
				html: "",
				status: "render_failed",
				errorMessage: err instanceof Error ? err.message : String(err)
			});
		}
	}
	return Response.json({ templates: results });
} } } });
var rootRouteChildren = {
	IndexRoute: Route$9.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$10
	}),
	CennikRoute: Route$8.update({
		id: "/cennik",
		path: "/cennik",
		getParentRoute: () => Route$10
	}),
	DlaFirmRoute: Route$7.update({
		id: "/dla-firm",
		path: "/dla-firm",
		getParentRoute: () => Route$10
	}),
	KontaktRoute: Route$6.update({
		id: "/kontakt",
		path: "/kontakt",
		getParentRoute: () => Route$10
	}),
	ONasRoute: Route$5.update({
		id: "/o-nas",
		path: "/o-nas",
		getParentRoute: () => Route$10
	}),
	PomocWZakupieRoute: Route$4.update({
		id: "/pomoc-w-zakupie",
		path: "/pomoc-w-zakupie",
		getParentRoute: () => Route$10
	}),
	PrzygotowanieDoSprzedazyRoute: Route$3.update({
		id: "/przygotowanie-do-sprzedazy",
		path: "/przygotowanie-do-sprzedazy",
		getParentRoute: () => Route$10
	}),
	RaportVinRoute: Route$2.update({
		id: "/raport-vin",
		path: "/raport-vin",
		getParentRoute: () => Route$10
	}),
	UslugiRoute: Route$1.update({
		id: "/uslugi",
		path: "/uslugi",
		getParentRoute: () => Route$10
	}),
	LovableEmailTransactionalPreviewRoute: Route.update({
		id: "/lovable/email/transactional/preview",
		path: "/lovable/email/transactional/preview",
		getParentRoute: () => Route$10
	})
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { Button as n, cn as r, router_exports as t };
