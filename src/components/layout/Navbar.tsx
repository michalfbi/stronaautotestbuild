import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import logoAsset from "@/assets/autotest-logo.png.asset.json";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS: { to: string; label: string; exact?: boolean }[] = [
  { to: "/", label: "Start", exact: true },
  { to: "/uslugi", label: "Usługi" },
  { to: "/cennik", label: "Cennik" },
  { to: "/pomoc-w-zakupie", label: "Pomoc w zakupie" },
  { to: "/przygotowanie-do-sprzedazy", label: "Sprzedaż" },
{ to: "/o-nas", label: "O nas" },
  { to: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-elegant"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
<img
            src={logoAsset.url}
            alt="Autotest — logo"
            className="h-9 w-9 rounded-lg object-contain"
          />
          <span className="font-display text-lg font-semibold tracking-tight">
            Auto<span className="text-gradient-primary">test</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.exact ?? false }}
              className="px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground transition-colors data-[status=active]:text-foreground data-[status=active]:bg-accent/40"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href="tel:+48690976790"
            className="hidden xl:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Phone className="h-4 w-4" /> +48 690 976 790
          </a>
          <Button asChild size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow">
            <Link to="/kontakt">Umów konsultację</Link>
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <Button
            asChild
            size="sm"
            className="h-9 px-3 bg-gradient-primary text-primary-foreground shadow-glow"
          >
            <a href="tel:+48690976790" aria-label="Zadzwoń">
              <Phone className="h-4 w-4" />
              <span className="ml-1.5 hidden sm:inline">Zadzwoń</span>
            </a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Otwórz menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

          <SheetContent side="right" className="w-[280px] bg-background border-border">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <div className="mt-8 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.exact ?? false }}
                  className="px-3 py-3 rounded-md text-base text-muted-foreground hover:text-foreground hover:bg-accent/40 transition-colors data-[status=active]:text-foreground data-[status=active]:bg-accent/60"
                >
                  {l.label}
                </Link>
              ))}
              <Button
                asChild
                className="mt-4 bg-gradient-primary text-primary-foreground"
                onClick={() => setOpen(false)}
              >
                <Link to="/kontakt">Umów konsultację</Link>
              </Button>
              <a
                href="tel:+48690976790"
                className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Phone className="h-4 w-4" /> +48 690 976 790
              </a>
            </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

    </header>
  );
}
