import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PageHeader } from "@/components/PageHeader";
import { faqs } from "@/config/business";

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
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Answers below are editable and should be confirmed with the clinic before publishing."
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
