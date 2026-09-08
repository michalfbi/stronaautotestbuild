import "../_runtime.mjs";
import { v as require_jsx_runtime, y as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Body } from "../_libs/react-email__body.mjs";
import { t as Column } from "../_libs/react-email__column.mjs";
import { t as Container } from "../_libs/react-email__container.mjs";
import { t as Head } from "../_libs/react-email__head.mjs";
import { t as Heading } from "../_libs/react-email__heading.mjs";
import { t as Hr } from "../_libs/react-email__hr.mjs";
import { t as Html } from "../_libs/react-email__html.mjs";
import { t as Link } from "../_libs/react-email__link.mjs";
import { t as Preview } from "../_libs/react-email__preview.mjs";
import { t as Row } from "../_libs/react-email__row.mjs";
import { t as Section } from "../_libs/react-email__section.mjs";
import { t as Text } from "../_libs/react-email__text.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var Email$1 = ({ name, phone, email, message, source, kind, region, timeOnSite, totalSubmissions, submittedAt }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Html, {
	lang: "pl",
	dir: "ltr",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Preview, { children: `Nowe zgłoszenie${name ? ` od ${name}` : ""}${phone ? ` — ${phone}` : ""}` }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
			style: main$1,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				style: container$1,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						style: badge,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
							style: badgeText$1,
							children: "AUTOTEST — nowe zgłoszenie"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Heading, {
						style: h1$1,
						children: [name || "Klient", " wysłał wiadomość"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hr, { style: hr$1 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
						style: row,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: label$1,
								children: "Imię i nazwisko:"
							}),
							" ",
							name || "—"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
						style: row,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: label$1,
								children: "Telefon:"
							}),
							" ",
							phone || "—"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
						style: row,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: label$1,
								children: "Email:"
							}),
							" ",
							email || "—"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
						style: row,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: label$1,
								children: "Formularz:"
							}),
							" ",
							source || kind || "—"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hr, { style: hr$1 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: label$1,
						children: "Wiadomość"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: messageStyle,
						children: message || "(brak treści)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						style: statsWrap$1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Column, {
							style: stat$1,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
								style: statValue$1,
								children: totalSubmissions ?? "—"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
								style: statLabel$1,
								children: "wysłanych formularzy łącznie"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Column, {
							style: stat$1,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
								style: statValue$1,
								children: timeOnSite || "brak danych"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
								style: statLabel$1,
								children: "czas na stronie"
							})]
						})] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						style: metaCard$1,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
							style: metaRow$1,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: metaLabel$1,
								children: "Obszar (szacowany z IP): "
							}), region || "nieustalony"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
							style: metaRow$1,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: metaLabel$1,
								children: "Data zgłoszenia: "
							}), submittedAt || "—"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: footer$1,
						children: "Autotest — niezależna weryfikacja pojazdów. Ta wiadomość została wygenerowana automatycznie po wysłaniu formularza na stronie."
					})
				]
			})
		})
	]
});
var template$1 = {
	component: Email$1,
	subject: (data) => `Nowe zgłoszenie ze strony${data?.name ? ` — ${data.name}` : ""}`,
	displayName: "Powiadomienie o zgłoszeniu (formularz kontaktowy)",
	to: "dual1518@gmail.com, michalpakula12345@gmail.com",
	previewData: {
		name: "Michał Kowalski",
		phone: "+48 600 100 200",
		email: "klient@example.com",
		message: "Chciałbym sprawdzić BMW X5 w okolicach Lublina w ten weekend.",
		source: "kontakt",
		region: "Lublin, Lubelskie, Polska",
		timeOnSite: "2 min 15 s",
		totalSubmissions: 42,
		submittedAt: "24 sierpnia 2026, 18:45"
	}
};
var main$1 = {
	backgroundColor: "#ffffff",
	fontFamily: "Arial, Helvetica, sans-serif"
};
var container$1 = {
	padding: "24px 28px",
	maxWidth: "600px"
};
var badge = {
	backgroundColor: "#facc15",
	borderRadius: "8px",
	padding: "8px 12px",
	display: "inline-block"
};
var badgeText$1 = {
	margin: "0",
	color: "#111827",
	fontSize: "12px",
	fontWeight: "bold",
	letterSpacing: "0.06em"
};
var h1$1 = {
	fontSize: "22px",
	color: "#111827",
	margin: "20px 0 8px"
};
var hr$1 = {
	borderColor: "#e5e7eb",
	margin: "18px 0"
};
var row = {
	fontSize: "15px",
	color: "#111827",
	margin: "6px 0"
};
var label$1 = {
	color: "#6b7280",
	fontSize: "13px",
	fontWeight: "bold"
};
var messageStyle = {
	fontSize: "15px",
	color: "#111827",
	lineHeight: "24px",
	whiteSpace: "pre-wrap",
	backgroundColor: "#f9fafb",
	borderRadius: "8px",
	padding: "14px 16px"
};
var statsWrap$1 = { marginTop: "16px" };
var stat$1 = {
	width: "50%",
	backgroundColor: "#f9fafb",
	border: "1px solid #e5e7eb",
	borderRadius: "10px",
	padding: "14px 16px",
	textAlign: "center"
};
var statValue$1 = {
	margin: "0",
	fontSize: "22px",
	fontWeight: "bold",
	color: "#111827"
};
var statLabel$1 = {
	margin: "4px 0 0",
	fontSize: "11px",
	color: "#6b7280"
};
var metaCard$1 = {
	marginTop: "16px",
	border: "1px solid #e5e7eb",
	borderRadius: "10px",
	padding: "14px 18px"
};
var metaRow$1 = {
	margin: "4px 0",
	fontSize: "14px",
	color: "#111827"
};
var metaLabel$1 = {
	color: "#6b7280",
	fontSize: "13px",
	fontWeight: "bold"
};
var footer$1 = {
	marginTop: "22px",
	fontSize: "11px",
	color: "#9ca3af",
	lineHeight: "18px"
};
var Email = ({ url, phone, region, timeOnSite, totalSubmissions, submittedAt, source }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Html, {
	lang: "pl",
	dir: "ltr",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Preview, { children: `Nowy link do pojazdu${phone ? ` — tel. ${phone}` : ""}` }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
			style: main,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				style: container,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						style: header,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
							style: badgeText,
							children: "AUTOTEST"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
							style: headerSub,
							children: "Zgłoszenie z formularza na stronie głównej"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
						style: h1,
						children: "Potencjalny klient przysłał link do pojazdu"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: lead,
						children: "Klient zostawił ogłoszenie do sprawdzenia. Poniżej dane kontaktowe i kontekst wizyty."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						style: card,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
								style: label,
								children: "Link do ogłoszenia"
							}),
							url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								href: url,
								style: link,
								children: url
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
								style: value,
								children: "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hr, { style: hr }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
								style: label,
								children: "Telefon"
							}),
							phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								href: `tel:${phone.replace(/\s+/g, "")}`,
								style: phoneLink,
								children: phone
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
								style: value,
								children: "—"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						style: statsWrap,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Column, {
							style: stat,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
								style: statValue,
								children: totalSubmissions ?? "—"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
								style: statLabel,
								children: "wysłanych formularzy łącznie"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Column, {
							style: stat,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
								style: statValue,
								children: timeOnSite || "brak danych"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
								style: statLabel,
								children: "czas na stronie"
							})]
						})] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						style: metaCard,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
								style: metaRow,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: metaLabel,
									children: "Obszar (szacowany z IP): "
								}), region || "nieustalony"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
								style: metaRow,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: metaLabel,
									children: "Data zgłoszenia: "
								}), submittedAt || "—"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
								style: metaRow,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: metaLabel,
									children: "Źródło: "
								}), source || "strona główna"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: footer,
						children: "Autotest — niezależna weryfikacja pojazdów. Ta wiadomość została wygenerowana automatycznie po wysłaniu formularza na stronie."
					})
				]
			})
		})
	]
});
var template = {
	component: Email,
	subject: "Potencjalny klient przysłał link do pojazdu",
	displayName: "Link do pojazdu (formularz hero)",
	to: "dual1518@gmail.com, michalpakula12345@gmail.com",
	previewData: {
		url: "https://www.otomoto.pl/oferta/bmw-seria-5-ID6Gxyz.html",
		phone: "+48 600 100 200",
		region: "Lublin, Lubelskie, Polska",
		timeOnSite: "3 min 42 s",
		totalSubmissions: 128,
		submittedAt: "24 sierpnia 2026, 18:45",
		source: "home-hero"
	}
};
var main = {
	backgroundColor: "#ffffff",
	fontFamily: "Arial, Helvetica, sans-serif",
	padding: "0"
};
var container = {
	padding: "24px 24px 32px",
	maxWidth: "600px"
};
var header = {
	backgroundColor: "#111827",
	borderRadius: "12px",
	padding: "16px 20px"
};
var badgeText = {
	margin: "0",
	color: "#facc15",
	fontSize: "16px",
	fontWeight: "bold",
	letterSpacing: "0.14em"
};
var headerSub = {
	margin: "4px 0 0",
	color: "#d1d5db",
	fontSize: "12px"
};
var h1 = {
	fontSize: "22px",
	color: "#111827",
	margin: "24px 0 6px",
	lineHeight: "30px"
};
var lead = {
	fontSize: "14px",
	color: "#4b5563",
	margin: "0 0 18px",
	lineHeight: "22px"
};
var card = {
	border: "1px solid #e5e7eb",
	borderLeft: "4px solid #facc15",
	borderRadius: "10px",
	padding: "16px 18px",
	backgroundColor: "#fffdf5"
};
var label = {
	margin: "0 0 4px",
	color: "#6b7280",
	fontSize: "11px",
	fontWeight: "bold",
	letterSpacing: "0.08em",
	textTransform: "uppercase"
};
var value = {
	margin: "0",
	fontSize: "15px",
	color: "#111827"
};
var link = {
	fontSize: "14px",
	color: "#1d4ed8",
	wordBreak: "break-all",
	textDecoration: "underline"
};
var phoneLink = {
	fontSize: "20px",
	color: "#111827",
	fontWeight: "bold",
	textDecoration: "none"
};
var hr = {
	borderColor: "#f0e3b0",
	margin: "14px 0"
};
var statsWrap = { marginTop: "16px" };
var stat = {
	width: "50%",
	backgroundColor: "#f9fafb",
	border: "1px solid #e5e7eb",
	borderRadius: "10px",
	padding: "14px 16px",
	textAlign: "center"
};
var statValue = {
	margin: "0",
	fontSize: "22px",
	fontWeight: "bold",
	color: "#111827"
};
var statLabel = {
	margin: "4px 0 0",
	fontSize: "11px",
	color: "#6b7280"
};
var metaCard = {
	marginTop: "16px",
	border: "1px solid #e5e7eb",
	borderRadius: "10px",
	padding: "14px 18px"
};
var metaRow = {
	margin: "4px 0",
	fontSize: "14px",
	color: "#111827"
};
var metaLabel = {
	color: "#6b7280",
	fontSize: "13px",
	fontWeight: "bold"
};
var footer = {
	marginTop: "22px",
	fontSize: "11px",
	color: "#9ca3af",
	lineHeight: "18px"
};
/**
* Template registry — maps template names to their React Email components.
* Import and register new templates here after creating them in this directory.
*
* Example:
*   import { template as welcomeTemplate } from './welcome'
*   // then add to TEMPLATES: 'welcome': welcomeTemplate
*/
var TEMPLATES = {
	"contact-notification": template$1,
	"vehicle-link-lead": template
};
//#endregion
export { TEMPLATES as t };
