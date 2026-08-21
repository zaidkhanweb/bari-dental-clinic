import { Link } from "@tanstack/react-router";
import { business } from "@/config/business";

/**
 * Temporary brand mark: a smile curve enclosed in a soft "B" shield.
 * Replace this component with the client's official logo when available.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <rect width="48" height="48" rx="14" fill="var(--color-primary)" />
      <path
        d="M15 14h9.5c3.9 0 6.3 2 6.3 5.1 0 2.1-1.2 3.6-3.1 4.3 2.4.6 3.9 2.3 3.9 4.8 0 3.5-2.7 5.8-7 5.8H15V14Z"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M14 35.5c3 3.1 6.4 4.6 10 4.6s7-1.5 10-4.6"
        fill="none"
        stroke="var(--color-secondary)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      className="flex items-center gap-3 rounded-lg"
      aria-label={`${business.name} — home`}
    >
      <LogoMark className="h-10 w-10 shrink-0" />
      {!compact && (
        <span className="leading-tight">
          <span className="block font-display text-[0.98rem] font-700 tracking-tight text-foreground sm:text-base">
            Bari Dental Clinic
          </span>
          <span className="block text-[0.68rem] font-medium tracking-[0.14em] text-muted-foreground uppercase">
            &amp; Consultant Clinic
          </span>
        </span>
      )}
    </Link>
  );
}
