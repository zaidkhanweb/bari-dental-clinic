import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-card">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-20 size-96 rounded-full bg-accent/70 blur-3xl"
      />
      <div className="container-page relative py-16 sm:py-20">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h1 className="max-w-3xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl text-muted-foreground">{description}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
