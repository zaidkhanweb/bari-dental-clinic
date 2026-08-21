import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";
import { business, navLinks, whatsappUrl } from "@/config/business";
import { LogoMark } from "./Logo";

const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
} as const;

export function Footer() {
  const socials = Object.entries(business.social).filter(([, url]) => Boolean(url));

  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark className="h-11 w-11" />
            <span className="font-display text-base font-bold">
              Bari Dental Clinic
              <span className="block text-[0.68rem] font-medium tracking-[0.14em] text-muted-foreground uppercase">
                &amp; Consultant Clinic
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm text-muted-foreground">
            Professional dental care in North Nazimabad, Karachi.
          </p>
          {socials.length > 0 && (
            <ul className="mt-5 flex gap-2">
              {socials.map(([key, url]) => {
                const Icon = socialIcons[key as keyof typeof socialIcons];
                return (
                  <li key={key}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${business.shortName} on ${key}`}
                      className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-accent"
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-sm font-bold tracking-[0.14em] uppercase">
            Quick Links
          </h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-bold tracking-[0.14em] uppercase">
            Contact
          </h2>
          <ul className="mt-5 space-y-3.5 text-sm text-muted-foreground">
            <li>
              <a
                href={business.phoneHref}
                className="inline-flex items-start gap-2.5 transition-colors hover:text-primary"
              >
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {business.phone}
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2.5 transition-colors hover:text-primary"
              >
                <MessageCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                WhatsApp Us
              </a>
            </li>
            <li>
              <a
                href={business.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2.5 not-italic transition-colors hover:text-primary"
              >
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <address className="not-italic">
                  {business.address.line1},<br />
                  {business.address.line2},<br />
                  {business.address.line3},<br />
                  {business.address.city}, {business.address.country}
                </address>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold tracking-[0.14em] uppercase">
            Opening Hours
          </h2>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            {business.openingHours.map((row) => (
              <li key={row.day} className="flex justify-between gap-3">
                <span>{row.day}</span>
                <span className="text-right text-foreground/80">{row.hours}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">
            {business.openingHoursNote}
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p>Photography shown is illustrative stock imagery.</p>
        </div>
      </div>
    </footer>
  );
}
