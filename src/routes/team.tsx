import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { absoluteUrl } from "@/config/seo";

const title = "Our Team | Bari Dental Clinic, North Nazimabad Karachi";
const description =
  "Learn about the dental team at Bari Dental Clinic & Consultant Clinic in North Nazimabad, Karachi and how to contact the clinic for care.";

export const Route = createFileRoute("/team")({
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
      { property: "og:url", content: absoluteUrl("/team") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/team") }],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Team"
        title="The People Behind Your Care"
        description="Learn more about the dental professionals providing care at Bari Dental Clinic."
      />

      <section className="container-page py-20">
        <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-8 text-center sm:p-10">
          <h2 className="text-2xl">Meet the Clinic Team</h2>
          <p className="mt-3 text-muted-foreground">
            Dentist names, qualifications and professional profiles will be published here once the clinic provides verified details.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
