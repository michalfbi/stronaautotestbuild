import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitLead } from "@/lib/leads.functions";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Autotest | Umów konsultację" },
      { name: "description", content: "Skontaktuj się z ekspertami Autotest. Konsultacja bezpłatna, odpowiadamy w 24h. Telefon, email, formularz kontaktowy." },
      { property: "og:title", content: "Kontakt — Autotest" },
      { property: "og:description", content: "Umów bezpłatną konsultację z ekspertem Autotest." },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: ContactPage,
});

const VISIT_KEY = "autotest_visit_started_at";

function ContactPage() {
  const submit = useServerFn(submitLead);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(VISIT_KEY)) {
      sessionStorage.setItem(VISIT_KEY, String(Date.now()));
    }
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) return;
    setLoading(true);
    const startedAt = Number(sessionStorage.getItem(VISIT_KEY) || Date.now());
    const timeOnSiteSeconds = Math.max(0, Math.round((Date.now() - startedAt) / 1000));
    try {
      await submit({
        data: {
          kind: "contact",
          name: name.trim(),
          email: email.trim() || null,
          phone: phone.trim(),
          message: message.trim(),
          source: "kontakt",
          timeOnSiteSeconds,
        },
      });
      toast.success("Dziękujemy! Odezwiemy się w ciągu 24h.");
      setName(""); setEmail(""); setPhone(""); setMessage("");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Coś poszło nie tak.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-3xl sm:text-5xl font-bold">
            Porozmawiajmy o <span className="text-gradient-primary">Twoim aucie</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Konsultacja bezpłatna. Odpowiadamy w 24h. Zero zobowiązań.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-2xl font-bold">Dane kontaktowe</h2>
            <div className="mt-6 space-y-4">
              {[
                { icon: Phone, t: "Telefon", v: "+48 690 976 790", href: "tel:+48690976790" },
                { icon: Mail, t: "Email", v: "dual1518@gmail.com", href: "mailto:dual1518@gmail.com" },
                { icon: MapPin, t: "Zasięg", v: "Cała Polska — dojeżdżamy do klienta" },
                { icon: Clock, t: "Godziny pracy", v: "Pn–Nd, 8:00–20:00" },
              ].map((c) => (
                <div key={c.t} className="flex items-start gap-4 rounded-xl border border-border bg-card/60 p-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                    <c.icon className="h-5 w-5 text-primary" />
                  </span>
                  <div>
                    <p className="text-sm text-muted-foreground">{c.t}</p>
                    {c.href ? (
                      <a href={c.href} className="font-medium hover:text-primary transition-colors">{c.v}</a>
                    ) : (
                      <p className="font-medium">{c.v}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card/70 p-6 sm:p-8 shadow-elegant">
            <h2 className="font-display text-2xl font-bold">Wyślij wiadomość</h2>
            <div className="mt-6 space-y-4">
              <div>
                <Label htmlFor="name">Imię i nazwisko *</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1.5" required maxLength={120} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Telefon *</Label>
                  <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1.5" required maxLength={40} />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1.5" maxLength={200} />
                </div>
              </div>
              <div>
                <Label htmlFor="message">Wiadomość *</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1.5 min-h-[120px]"
                  placeholder="Opisz, czego potrzebujesz — model auta, budżet, terminy..."
                  required
                  maxLength={2000}
                />
              </div>
              <Button type="submit" disabled={loading} className="w-full h-12 bg-gradient-primary text-primary-foreground shadow-glow">
                {loading ? "Wysyłam..." : (<>Wyślij wiadomość <ArrowRight className="ml-1 h-4 w-4" /></>)}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
