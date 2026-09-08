import { i as __toESM } from "../_runtime.mjs";
import { y as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as render } from "../_libs/@react-email/render+[...].mjs";
import { t as TEMPLATES } from "./registry-CdpHCr8B.mjs";
import { n as sendLovableEmail, t as EmailAPIError } from "../_libs/lovable.dev__email-js.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/send-email-BCdNXroh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var SITE_NAME = "Autotest";
var SENDER_DOMAIN = "notify.autotest-ap.com";
var FROM_DOMAIN = "autotest-ap.com";
/**
* Renders a registered template and sends it through Lovable's managed email
* API. Suppression, retries, and rate limits are enforced by Lovable
* server-side. A suppressed recipient is an expected outcome
* ({ sent: false }); any other failure throws — EmailAPIError exposes
* .code and .status for branching.
*/
async function sendTemplateEmail(templateName, to, options = {}) {
	const resendKey = processModule.env["RESEND_API_KEY"];
	const apiKey = processModule.env["LOVABLE_API_KEY"];
	if (!resendKey && !apiKey) throw new Error("No email backend configured (set RESEND_API_KEY or LOVABLE_API_KEY)");
	const template = TEMPLATES[templateName];
	if (!template) throw new Error(`Template '${templateName}' not found. Available: ${Object.keys(TEMPLATES).join(", ")}`);
	const recipients = (template.to || to || "").split(",").map((r) => r.trim()).filter(Boolean);
	if (recipients.length === 0) throw new Error("Recipient is required (the template defines no fixed recipient)");
	const templateData = options.templateData ?? {};
	const element = import_react.createElement(template.component, templateData);
	const html = await render(element);
	const text = await render(element, { plainText: true });
	const subject = typeof template.subject === "function" ? template.subject(templateData) : template.subject;
	for (const recipient of recipients) {
		if (resendKey) {
			const from = processModule.env["MAIL_FROM"] || `${SITE_NAME} <noreply@${FROM_DOMAIN}>`;
			const res = await fetch("https://api.resend.com/emails", {
				method: "POST",
				headers: {
					Authorization: `Bearer ${resendKey}`,
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					from,
					to: [recipient],
					subject,
					html,
					text,
					...options.replyTo ? { reply_to: options.replyTo } : {}
				})
			});
			if (!res.ok) throw new Error(`Resend failed (${res.status}): ${await res.text()}`);
			continue;
		}
		try {
			await sendLovableEmail({
				to: recipient,
				from: `${SITE_NAME} <noreply@${FROM_DOMAIN}>`,
				sender_domain: SENDER_DOMAIN,
				subject,
				html,
				text,
				purpose: "transactional",
				label: templateName,
				idempotency_key: (options.idempotencyKey || crypto.randomUUID()) + `:${recipient}`,
				reply_to: options.replyTo
			}, {
				apiKey,
				sendUrl: processModule.env["LOVABLE_SEND_URL"]
			});
		} catch (error) {
			if (error instanceof EmailAPIError && error.code === "recipient_suppressed") continue;
			throw error;
		}
	}
	return { sent: true };
}
//#endregion
export { sendTemplateEmail };
