import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ReviewCard } from "@/components/ReviewCard";
import { ButtonAnchor } from "@/components/ui/action-button";
import { business } from "@/config/business";

const title = "Patient Reviews | Bari Dental Clinic, North Nazimabad Karachi";
const description =
  "Read patient feedback for Bari Dental Clinic & Consultant Clinic in North Nazimabad, Karachi, and see the clinic's Google reviews.";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reviews"
        title="What Patients Are Saying"
        description="Explore genuine patient feedback and learn more about experiences shared by patients."
      >
        <div className="inline-flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-background px-5 py-4">
          <span className="flex items-center gap-2">
            <Star className="size-5 fill-secondary text-secondary" aria-hidden="true" />
            <span className="font-display text-2xl font-bold">
              {business.rating.value}
            </span>
            <span className="text-sm text-muted-foreground">Google rating</span>
          </span>
          <span className="hidden h-6 w-px bg-border sm:block" />
          <span className="text-sm text-muted-foreground">
            {business.rating.count} Google Reviews
          </span>
        </div>
      </PageHeader>

      <section className="container-page py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <Reveal key={i} delay={i * 50} className="h-full">
              <ReviewCard />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4">
          <ButtonAnchor
            href={business.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
          >
            Read More Reviews
          </ButtonAnchor>
          <p className="text-sm text-muted-foreground">
            No testimonials have been written or invented for this demo. Verified
            Google reviews can be added once the clinic confirms them.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
