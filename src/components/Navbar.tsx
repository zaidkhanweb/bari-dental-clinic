import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { business, navLinks } from "@/config/business";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { ButtonAnchor, ButtonLink } from "./ui/action-button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-card/90 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-background/70 backdrop-blur-sm",
      )}
    >
      <div className="container-page flex h-18 items-center justify-between gap-4 py-3">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="block rounded-full px-3 py-2 text-[0.92rem] font-medium whitespace-nowrap text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                  activeProps={{ className: "bg-accent text-primary" }}
                  activeOptions={{ exact: link.to === "/" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonAnchor
            href={business.phoneHref}
            variant="outline"
            aria-label={`Call ${business.name} on ${business.phone}`}
            className="whitespace-nowrap"
          >
            <Phone className="size-4" aria-hidden="true" />
            <span className="hidden xl:inline">{business.phone}</span>
          </ButtonAnchor>
          <ButtonLink to="/appointment" className="whitespace-nowrap">
            Book an Appointment
          </ButtonLink>
        </div>


        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border bg-card text-primary transition-colors hover:bg-accent lg:hidden"
        >
          {open ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-border bg-card lg:hidden"
      >
        <nav aria-label="Mobile" className="container-page py-4">
          <ul className="flex flex-col">
            {navLinks.map((link, i) => (
              <li
                key={link.to}
                className="animate-in fade-in slide-in-from-top-1"
                style={{ animationDelay: `${i * 35}ms`, animationFillMode: "both" }}
              >
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/70 py-3.5 font-display text-lg font-semibold text-foreground"
                  activeProps={{ className: "text-primary" }}
                  activeOptions={{ exact: link.to === "/" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col gap-2.5 pb-2">
            <ButtonLink to="/appointment" size="lg" onClick={() => setOpen(false)}>
              Book an Appointment
            </ButtonLink>
            <ButtonAnchor href={business.phoneHref} variant="outline" size="lg">
              <Phone className="size-4" aria-hidden="true" />
              Call {business.phone}
            </ButtonAnchor>
          </div>
        </nav>
      </div>
    </header>
  );
}
