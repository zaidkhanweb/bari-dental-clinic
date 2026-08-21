import { MapPin, MessageCircle, Phone } from "lucide-react";
import { business, whatsappUrl } from "@/config/business";

/** Fixed bottom bar on mobile only. Layout adds matching bottom padding. */
export function MobileActionBar() {
  const items = [
    {
      label: "Call",
      href: business.phoneHref,
      Icon: Phone,
      className: "bg-primary text-primary-foreground",
      external: false,
    },
    {
      label: "WhatsApp",
      href: whatsappUrl,
      Icon: MessageCircle,
      className: "bg-[#1f9d55] text-white",
      external: true,
    },
    {
      label: "Directions",
      href: business.directionsUrl,
      Icon: MapPin,
      className: "bg-secondary text-secondary-foreground",
      external: true,
    },
  ];

  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden"
    >
      <ul className="grid grid-cols-3 gap-2">
        {items.map(({ label, href, Icon, className, external }) => (
          <li key={label}>
            <a
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={`flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-xl font-display text-xs font-semibold ${className}`}
            >
              <Icon className="size-4" aria-hidden="true" />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
