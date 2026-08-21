import { Quote, Star } from "lucide-react";

/**
 * Reviews are NOT fabricated. Each card is a placeholder until verified
 * Google reviews are supplied by the clinic.
 */
export function ReviewCard() {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-dashed border-primary/25 bg-card p-7">
      <Quote className="size-6 text-secondary" aria-hidden="true" />
      <p className="mt-4 flex-1 font-display text-lg font-semibold text-foreground/70">
        [Verified Google Review Will Appear Here]
      </p>
      <div className="mt-6 flex items-center gap-2 border-t border-border pt-5">
        <span className="flex gap-0.5" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-4 text-muted-foreground/40" />
          ))}
        </span>
        <span className="text-sm text-muted-foreground">
          [Reviewer name — pending verification]
        </span>
      </div>
    </article>
  );
}
