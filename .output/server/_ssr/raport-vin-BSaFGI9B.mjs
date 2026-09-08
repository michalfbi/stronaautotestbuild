import { i as __toESM } from "../_runtime.mjs";
import { v as require_jsx_runtime, y as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as CircleCheck, C as FileText, P as Check, V as ArrowRight, a as TriangleAlert, d as Search, l as Shield, p as Phone, z as BadgePercent } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as Button, r as cn } from "./router-B7oAaZnH.mjs";
import { i as useServerFn, r as submitLead, t as Input } from "./leads.functions-NNr-aP5o.mjs";
import { t as Label } from "./label-D6F4ax7j.mjs";
import { n as CheckboxIndicator, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/raport-vin-BSaFGI9B.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
	ref,
	className: cn("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
		className: cn("grid place-content-center text-current"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
	})
}));
Checkbox.displayName = Checkbox$1.displayName;
var VIN_REGEX = /^[A-HJ-NPR-Z0-9]{17}$/i;
var PHONE_REGEX = /^[0-9+ ]{9,}$/;
function VinReportPage() {
	const submit = useServerFn(submitLead);
	const [vin, setVin] = (0, import_react.useState)("");
	const [link, setLink] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [terms, setTerms] = (0, import_react.useState)(false);
	const [privacy, setPrivacy] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const vinValid = VIN_REGEX.test(vin);
	const phoneValid = PHONE_REGEX.test(phone);
	const canSubmit = vinValid && phoneValid && terms && privacy;
	const onSubmit = async (e) => {
		e.preventDefault();
		if (!canSubmit) return;
		setLoading(true);
		try {
			await submit({ data: {
				kind: "vin",
				vin: vin.trim().toUpperCase(),
				url: link.trim(),
				phone: phone.trim(),
				source: "raport-vin"
			} });
			toast.success("Zgłoszenie wysłane. Oddzwonimy w 24h.");
			setVin("");
			setLink("");
			setPhone("");
			setTerms(false);
			setPrivacy(false);
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Coś poszło nie tak.");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden bg-gradient-hero py-14 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-3.5 w-3.5" }), " Weryfikacja przed zakupem"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-6 font-display text-3xl sm:text-5xl font-bold",
					children: ["Pełna weryfikacja pojazdu ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-primary",
						children: "z raportu Autotest"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-lg text-muted-foreground",
					children: "Zobacz jak możesz uniknąć dodatkowych kosztów — zamów raport VIN i analizę ogłoszenia zanim jedziesz na oględziny."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid sm:grid-cols-2 gap-4",
					children: [
						{
							icon: FileText,
							t: "Szczegółowy raport VIN",
							d: "Historia serwisowa, szkody, przebieg."
						},
						{
							icon: Search,
							t: "Analiza ogłoszenia",
							d: "Ekspert oceni rzetelność oferty."
						},
						{
							icon: BadgePercent,
							t: "Zniżka 20% na inspekcję",
							d: "Jeśli zdecydujesz się na oględziny."
						},
						{
							icon: Phone,
							t: "Zadzwonimy do Ciebie",
							d: "Omówimy wyniki raportu telefonicznie."
						}
					].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card/60 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-5 w-5 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-semibold text-sm",
								children: f.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: f.d
							})
						]
					}, f.t))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "rounded-2xl border border-border bg-card/70 backdrop-blur p-6 sm:p-8 shadow-elegant",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-bold",
						children: "Zamów raport"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Wypełnij formularz — odpowiemy w 24h."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "vin",
									children: "Numer VIN *"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "vin",
									value: vin,
									onChange: (e) => setVin(e.target.value.toUpperCase()),
									placeholder: "17 znaków",
									maxLength: 17,
									className: "mt-1.5 font-mono uppercase"
								}),
								vin && !vinValid && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-xs text-destructive flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-3 w-3" }), " VIN musi mieć 17 znaków (bez I, O, Q)."]
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "link",
								children: "Link do ogłoszenia (opcjonalnie)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "link",
								value: link,
								onChange: (e) => setLink(e.target.value),
								placeholder: "https://otomoto.pl/...",
								className: "mt-1.5"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "phone",
									children: "Numer telefonu *"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "phone",
									type: "tel",
									value: phone,
									onChange: (e) => setPhone(e.target.value),
									placeholder: "+48 500 000 000",
									className: "mt-1.5"
								}),
								phone && !phoneValid && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-xs text-destructive flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-3 w-3" }), " Podaj poprawny numer telefonu."]
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-start gap-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
										checked: terms,
										onCheckedChange: (v) => setTerms(v === true),
										className: "mt-0.5"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Akceptuję regulamin usługi."
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-start gap-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
										checked: privacy,
										onCheckedChange: (v) => setPrivacy(v === true),
										className: "mt-0.5"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Wyrażam zgodę na przetwarzanie danych osobowych w celu obsługi zgłoszenia."
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								disabled: !canSubmit || loading,
								className: "w-full h-12 bg-gradient-primary text-primary-foreground shadow-glow disabled:opacity-50",
								children: loading ? "Wysyłam..." : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Zamów raport ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })] })
							})
						]
					})
				]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-14 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl sm:text-3xl font-bold text-center",
					children: "Co znajdziesz w raporcie"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-2",
					children: [
						"Historia szkód komunikacyjnych",
						"Weryfikacja przebiegu (odczyty)",
						"Historia serwisowa ASO",
						"Weryfikacja kradzieży i hipotek",
						"Poprzedni właściciele",
						"Dane techniczne pojazdu",
						"Zdjęcia z aukcji zagranicznych",
						"Ocena ryzyka zakupu"
					].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-xl border border-border bg-card/60 px-5 py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-primary shrink-0" }),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm",
								children: f
							})
						]
					}, f))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/uslugi",
							children: ["Zobacz inne usługi ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
						})
					})
				})
			]
		})
	})] });
}
//#endregion
export { VinReportPage as component };
