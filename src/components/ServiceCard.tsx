import {
  Activity,
  Braces,
  Crown,
  Scan,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import type { Service } from "@/config/business";
import { ButtonLink } from "./ui/action-button";

const icons: Record<string, typeof Activity> = {
  "general-dentistry": Stethoscope,
  "dental-checkups": Scan,
  "root-canal-treatment": Activity,
  "dental-crowns": Crown,
  "orthodontic-care": Braces,
  "wisdom-tooth-treatment": Sparkles,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.slug] ?? Stethoscope;

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lift">
      <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent text-primary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
        <Icon className="size-5.5" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-xl">{service.name}</h3>
      <p className="mt-3 text-[0.95rem] text-muted-foreground">
        {service.description}
      </p>
      <div className="mt-6 pt-1">
        <ButtonLink
          to="/services"
          hash={service.slug}
          variant="ghost"
          className="px-0 hover:bg-transparent hover:underline"
          aria-label={`Learn more about ${service.name}`}
        >
          Learn More →
        </ButtonLink>
      </div>
    </article>
  );
}
