import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PageHeader } from "@/components/PageHeader";
import { faqs } from "@/config/business";
import { absoluteUrl } from "@/config/seo";

const title = "Dentist FAQs | Bari Dental Clinic, North Nazimabad Karachi";
const description =
  "Answers to common questions about booking, location, dental services and WhatsApp contact for Bari Dental Clinic & Consultant Clinic in North Nazimabad, Karachi.";

export const Route = createFileRoute("/faq")({
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
      { property: "og:url", content: absoluteUrl("/faq") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/faq") }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Helpful answers about appointments, location, services and contacting the clinic."
      />

      <section className="container-page py-20">
        <div className="max-w-3xl">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
