import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/polityka-prywatnosci")({
  head: () => ({
    meta: [
      { title: "Polityka prywatności — Autotest" },
      {
        name: "description",
        content:
          "Jak Autotest przetwarza dane osobowe przesłane przez formularze na stronie: cel, podstawa prawna, odbiorcy, czas przechowywania i Twoje prawa.",
      },
      { property: "og:title", content: "Polityka prywatności — Autotest" },
      {
        property: "og:url",
        content: "https://autotest-ap.com/polityka-prywatnosci",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://autotest-ap.com/polityka-prywatnosci",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

const UPDATED = "3 listopada 2026";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-xl font-semibold">{title}</h2>
      <div className="mt-3 space-y-3 text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <h1 className="font-display text-3xl sm:text-4xl font-bold">
        Polityka prywatności
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Ostatnia aktualizacja: {UPDATED}
      </p>

      <Section title="1. Administrator danych">
        <p>
          Administratorem Twoich danych osobowych jest Autotest, Kozów 26A. W
          sprawach dotyczących danych osobowych możesz pisać na adres{" "}
          <a
            href="mailto:dual1518@gmail.com"
            className="underline underline-offset-2"
          >
            dual1518@gmail.com
          </a>{" "}
          lub dzwonić pod numer{" "}
          <a href="tel:+48690976790" className="underline underline-offset-2">
            +48 690 976 790
          </a>
          .
        </p>
      </Section>

      <Section title="2. Jakie dane zbieramy i po co">
        <p>
          Przez formularze na stronie (strona główna, raport VIN, kontakt)
          zbieramy dane, które sam podajesz: imię i nazwisko, numer telefonu,
          adres e-mail, link do ogłoszenia, numer VIN oraz treść wiadomości.
          Wykorzystujemy je wyłącznie po to, aby odpowiedzieć na zgłoszenie,
          przygotować wycenę i wykonać zamówioną usługę.
        </p>
        <p>
          Przy wysłaniu formularza automatycznie zapisujemy też przybliżoną
          lokalizację (miasto, region, kraj) ustaloną na podstawie adresu IP
          oraz czas spędzony na stronie. Pomaga nam to ocenić, czy możemy
          dojechać na oględziny, i chronić formularze przed spamem.
        </p>
      </Section>

      <Section title="3. Podstawa prawna">
        <p>
          Dane przetwarzamy, aby podjąć działania na Twoje żądanie przed
          zawarciem umowy i aby ją wykonać (art. 6 ust. 1 lit. b RODO), a także
          w naszym prawnie uzasadnionym interesie, czyli w celu ochrony przed
          nadużyciami i obsługi ewentualnych roszczeń (art. 6 ust. 1 lit. f
          RODO).
        </p>
      </Section>

      <Section title="4. Komu przekazujemy dane">
        <p>
          Korzystamy z zaufanych dostawców, którzy przetwarzają dane w naszym
          imieniu:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Cloudflare — hosting strony,</li>
          <li>Supabase — baza danych zgłoszeń (serwery w UE, Frankfurt),</li>
          <li>Resend — wysyłka powiadomień e-mail o zgłoszeniach,</li>
          <li>ipapi.co — ustalenie przybliżonej lokalizacji z adresu IP,</li>
          <li>
            Google — czcionki na stronie oraz wyświetlanie opinii z wizytówki
            Google.
          </li>
        </ul>
        <p>
          Część z tych firm może przetwarzać dane poza Europejskim Obszarem
          Gospodarczym. Odbywa się to na podstawie standardowych klauzul
          umownych zatwierdzonych przez Komisję Europejską lub decyzji o
          adekwatności.
        </p>
      </Section>

      <Section title="5. Jak długo przechowujemy dane">
        <p>
          Dane ze zgłoszenia przechowujemy przez czas potrzebny do jego obsługi,
          a jeśli nie dojdzie do zlecenia — nie dłużej niż 12 miesięcy. Dane
          związane z wykonaną usługą przechowujemy do czasu przedawnienia
          roszczeń oraz przez okres wymagany przepisami podatkowymi.
        </p>
      </Section>

      <Section title="6. Twoje prawa">
        <p>
          Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia,
          ograniczenia przetwarzania, przeniesienia oraz wniesienia sprzeciwu.
          Wystarczy napisać na adres podany w punkcie 1. Przysługuje Ci też
          prawo do skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki
          2, 00-193 Warszawa).
        </p>
        <p>
          Podanie danych jest dobrowolne, ale bez numeru telefonu nie będziemy
          mogli odpowiedzieć na zgłoszenie.
        </p>
      </Section>

      <Section title="7. Pamięć przeglądarki">
        <p>
          Strona nie używa ciasteczek reklamowych ani analitycznych. W pamięci
          przeglądarki zapisujemy jedynie moment wejścia na stronę (na czas
          sesji) oraz informację, że zamknąłeś okienko z numerem telefonu, aby
          nie pokazywać go ponownie przez 24 godziny.
        </p>
      </Section>
    </article>
  );
}
