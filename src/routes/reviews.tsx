import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { ButtonAnchor } from "@/components/ui/action-button";
import { business } from "@/config/business";
import { absoluteUrl } from "@/config/seo";

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
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { property: "og:url", content: absoluteUrl("/reviews") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/reviews") }],
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
      </PageHeader>

      <section className="container-page py-20">
        <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-8 text-center sm:p-10">
          <h2 className="text-2xl">See Patient Feedback on Google</h2>
          <p className="mt-3 text-muted-foreground">
            Visit the clinic's Google Business Profile to view current public reviews and feedback.
          </p>
          <ButtonAnchor href={business.reviewsUrl} target="_blank" rel="noopener noreferrer" size="lg" className="mt-6">
            View Google Reviews
          </ButtonAnchor>
        </div>
      </section>

      <CTASection />
    </>
  );
}
