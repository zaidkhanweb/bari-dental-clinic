import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60 active:translate-y-px";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-soft hover:bg-primary-hover hover:shadow-lift",
  secondary:
    "bg-secondary text-secondary-foreground shadow-soft hover:bg-secondary-hover hover:shadow-lift",
  outline:
    "border border-primary/25 bg-card text-primary hover:border-primary/50 hover:bg-accent",
  ghost: "text-primary hover:bg-accent",
  whatsapp:
    "bg-[#1f9d55] text-white shadow-soft hover:bg-[#177c42] hover:shadow-lift",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 py-2.5 text-[0.95rem]",
  lg: "min-h-13 px-7 py-3.5 text-base",
};

export function buttonClass(
  variant: Variant = "primary",
  size: Size = "md",
  className?: string,
) {
  return cn(base, variants[variant], sizes[size], className);
}

type CommonProps = { variant?: Variant; size?: Size; children: ReactNode };

export function Button({
  variant,
  size,
  className,
  ...props
}: CommonProps & ComponentProps<"button">) {
  return <button className={buttonClass(variant, size, className)} {...props} />;
}

export function ButtonLink({
  to,
  variant,
  size,
  className,
  ...props
}: CommonProps & { to: string } & Omit<ComponentProps<typeof Link>, "to">) {
  return (
    <Link to={to} className={buttonClass(variant, size, className)} {...props} />
  );
}

export function ButtonAnchor({
  variant,
  size,
  className,
  ...props
}: CommonProps & ComponentProps<"a">) {
  return <a className={buttonClass(variant, size, className)} {...props} />;
}
