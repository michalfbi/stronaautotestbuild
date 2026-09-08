import { i as __toESM } from "../_runtime.mjs";
import { v as require_jsx_runtime, y as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { V as ArrowRight, _ as MapPin, k as Clock, p as Phone, v as Mail } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as Button, r as cn } from "./router-B7oAaZnH.mjs";
import { i as useServerFn, r as submitLead, t as Input } from "./leads.functions-NNr-aP5o.mjs";
import { t as Label } from "./label-D6F4ax7j.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kontakt-BzvRLwkf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var VISIT_KEY = "autotest_visit_started_at";
function ContactPage() {
	const submit = useServerFn(submitLead);
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!sessionStorage.getItem(VISIT_KEY)) sessionStorage.setItem(VISIT_KEY, String(Date.now()));
	}, []);
	const onSubmit = async (e) => {
		e.preventDefault();
		if (!name.trim() || !phone.trim() || !message.trim()) return;
		setLoading(true);
		const startedAt = Number(sessionStorage.getItem(VISIT_KEY) || Date.now());
		const timeOnSiteSeconds = Math.max(0, Math.round((Date.now() - startedAt) / 1e3));
		try {
			await submit({ data: {
				kind: "contact",
				name: name.trim(),
				email: email.trim() || null,
				phone: phone.trim(),
				message: message.trim(),
				source: "kontakt",
				timeOnSiteSeconds
			} });
			toast.success("Dziękujemy! Odezwiemy się w ciągu 24h.");
			setName("");
			setEmail("");
			setPhone("");
			setMessage("");
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Coś poszło nie tak.");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden bg-gradient-hero py-14 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "font-display text-3xl sm:text-5xl font-bold",
				children: ["Porozmawiajmy o ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient-primary",
					children: "Twoim aucie"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-lg text-muted-foreground",
				children: "Konsultacja bezpłatna. Odpowiadamy w 24h. Zero zobowiązań."
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-10 sm:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-bold",
				children: "Dane kontaktowe"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 space-y-4",
				children: [
					{
						icon: Phone,
						t: "Telefon",
						v: "+48 690 976 790",
						href: "tel:+48690976790"
					},
					{
						icon: Mail,
						t: "Email",
						v: "dual1518@gmail.com",
						href: "mailto:dual1518@gmail.com"
					},
					{
						icon: MapPin,
						t: "Zasięg",
						v: "Cała Polska — dojeżdżamy do klienta"
					},
					{
						icon: Clock,
						t: "Godziny pracy",
						v: "Pn–Nd, 8:00–20:00"
					}
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-4 rounded-xl border border-border bg-card/60 p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-5 w-5 text-primary" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: c.t
					}), c.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: c.href,
						className: "font-medium hover:text-primary transition-colors",
						children: c.v
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: c.v
					})] })]
				}, c.t))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "rounded-2xl border border-border bg-card/70 p-6 sm:p-8 shadow-elegant",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-bold",
					children: "Wyślij wiadomość"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "name",
							children: "Imię i nazwisko *"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "name",
							value: name,
							onChange: (e) => setName(e.target.value),
							className: "mt-1.5",
							required: true,
							maxLength: 120
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid sm:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "phone",
								children: "Telefon *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "phone",
								type: "tel",
								value: phone,
								onChange: (e) => setPhone(e.target.value),
								className: "mt-1.5",
								required: true,
								maxLength: 40
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "email",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "email",
								type: "email",
								value: email,
								onChange: (e) => setEmail(e.target.value),
								className: "mt-1.5",
								maxLength: 200
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "message",
							children: "Wiadomość *"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "message",
							value: message,
							onChange: (e) => setMessage(e.target.value),
							className: "mt-1.5 min-h-[120px]",
							placeholder: "Opisz, czego potrzebujesz — model auta, budżet, terminy...",
							required: true,
							maxLength: 2e3
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: loading,
							className: "w-full h-12 bg-gradient-primary text-primary-foreground shadow-glow",
							children: loading ? "Wysyłam..." : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Wyślij wiadomość ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })] })
						})
					]
				})]
			})]
		})
	})] });
}
//#endregion
export { ContactPage as component };
