import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";
import { Shield, CheckCircle2, FileText, Search, BadgePercent, Phone, ArrowRight, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { submitLead } from "@/lib/leads.functions";
import { VIN_REGEX, isValidPhone } from "@/lib/leads.schema";
import { Honeypot, getTimeOnSiteSeconds, useVisitStart } from "@/components/LeadFormExtras";

export const Route = createFileRoute("/raport-vin")({
  head: () => ({
    meta: [
      { title: "Raport VIN — Autotest | Pełna historia pojazdu przed zakupem" },
      { name: "description", content: "Zamów raport VIN i analizę ogłoszenia. Szczegółowa historia serwisowa, szkody, przebieg. Zniżka 20% na inspekcję. Odpowiedź w 24h." },
      { property: "og:title", content: "Raport VIN — Autotest" },
      { property: "og:description", content: "Pełna historia pojazdu przed zakupem. Uniknij ukrytych kosztów." },
      { property: "og:url", content: "https://autotest-ap.com/raport-vin" },
    ],
    links: [{ rel: "canonical", href: "https://autotest-ap.com/raport-vin" }],
  }),
  component: VinReportPage,
});


function VinReportPage() {
  const submit = useServerFn(submitLead);
  const [vin, setVin] = useState("");
  const [link, setLink] = useState("");
  const [phone, setPhone] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [website, setWebsite] = useState("");
  const [loading, setLoading] = useState(false);
  useVisitStart();

  const vinValid = VIN_REGEX.test(vin.trim());
  const phoneValid = isValidPhone(phone);
  const canSubmit = vinValid && phoneValid && privacy;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading || !canSubmit) return;
    setLoading(true);
    try {
      await submit({
        data: { kind: "vin", vin: vin.trim().toUpperCase(), url: link.trim(), phone: phone.trim(), source: "raport-vin", timeOnSiteSeconds: getTimeOnSiteSeconds(), website },
      });
      toast.success("Zgłoszenie wysłane. Oddzwonimy w 24h.");
      setVin(""); setLink(""); setPhone(""); setPrivacy(false);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Coś poszło nie tak.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Shield className="h-3.5 w-3.5" /> Weryfikacja przed zakupem
            </span>
            <h1 className="mt-6 font-display text-3xl sm:text-5xl font-bold">
              Pełna weryfikacja pojazdu <span className="text-gradient-primary">z raportu Autotest</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Zobacz jak możesz uniknąć dodatkowych kosztów — zamów raport VIN i analizę ogłoszenia zanim jedziesz na oględziny.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: FileText, t: "Szczegółowy raport VIN", d: "Historia serwisowa, szkody, przebieg." },
                { icon: Search, t: "Analiza ogłoszenia", d: "Ekspert oceni rzetelność oferty." },
                { icon: BadgePercent, t: "Zniżka 20% na inspekcję", d: "Jeśli zdecydujesz się na oględziny." },
                { icon: Phone, t: "Zadzwonimy do Ciebie", d: "Omówimy wyniki raportu telefonicznie." },
              ].map((f) => (
                <div key={f.t} className="rounded-xl border border-border bg-card/60 p-4">
                  <f.icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-2 font-semibold text-sm">{f.t}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{f.d}</p>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={onSubmit} className="relative rounded-2xl border border-border bg-card/70 backdrop-blur p-6 sm:p-8 shadow-elegant">
            <h2 className="font-display text-2xl font-bold">Zamów raport</h2>
            <p className="mt-1 text-sm text-muted-foreground">Wypełnij formularz — odpowiemy w 24h.</p>

            <div className="mt-6 space-y-4">
              <div>
                <Label htmlFor="vin">Numer VIN *</Label>
                <Input
                  id="vin"
                  value={vin}
                  onChange={(e) => setVin(e.target.value.toUpperCase())}
                  placeholder="17 znaków"
                  maxLength={17}
                  className="mt-1.5 font-mono uppercase"
                />
                {vin && !vinValid && (
                  <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                    <AlertTriangle className="h-3 w-3" /> VIN musi mieć 17 znaków (bez I, O, Q).
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="link">Link do ogłoszenia (opcjonalnie)</Label>
                <Input id="link" value={link} onChange={(e) => setLink(e.target.value)} placeholder="https://otomoto.pl/..." className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="phone">Numer telefonu *</Label>
                <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+48 500 000 000" autoComplete="tel" inputMode="tel" maxLength={40} className="mt-1.5" />
                {phone && !phoneValid && (
                  <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                    <AlertTriangle className="h-3 w-3" /> Podaj poprawny numer telefonu.
                  </p>
                )}
              </div>

              <div className="space-y-3 pt-2">
                <label className="flex items-start gap-3 text-sm">
                  <Checkbox checked={privacy} onCheckedChange={(v) => setPrivacy(v === true)} className="mt-0.5" />
                  <span className="text-muted-foreground">
                    Zapoznałem(-am) się z{" "}
                    <Link to="/polityka-prywatnosci" className="underline underline-offset-2 hover:text-foreground">
                      polityką prywatności
                    </Link>{" "}
                    i chcę, żebyście skontaktowali się ze mną w sprawie raportu.
                  </span>
                </label>
              </div>

              <Honeypot value={website} onChange={setWebsite} />
              <Button
                type="submit"
                disabled={!canSubmit || loading}
                className="w-full h-12 bg-gradient-primary text-primary-foreground shadow-glow disabled:opacity-50"
              >
                {loading ? "Wysyłam..." : (<>Zamów raport <ArrowRight className="ml-1 h-4 w-4" /></>)}
              </Button>
            </div>
          </form>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center">Co znajdziesz w raporcie</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              "Historia szkód komunikacyjnych",
              "Weryfikacja przebiegu (odczyty)",
              "Historia serwisowa ASO",
              "Weryfikacja kradzieży i hipotek",
              "Poprzedni właściciele",
              "Dane techniczne pojazdu",
              "Zdjęcia z aukcji zagranicznych",
              "Ocena ryzyka zakupu",
            ].map((f) => (
              <div key={f} className="flex items-center gap-3 rounded-xl border border-border bg-card/60 px-5 py-4">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> <span className="text-sm">{f}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link to="/uslugi">Zobacz inne usługi <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
