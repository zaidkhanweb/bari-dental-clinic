import { createFileRoute } from "@tanstack/react-router";
import clinicInterior from "@/assets/clinic-interior.jpg";
import treatmentRoom from "@/assets/treatment-room.jpg";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/ui/action-button";
import { business, fullAddress } from "@/config/business";
import { absoluteUrl } from "@/config/seo";

const title = "About Our Clinic | Bari Dental Clinic, North Nazimabad Karachi";
const description =
  "Learn about Bari Dental Clinic & Consultant Clinic, a dental clinic in North Nazimabad, Karachi, and how patients can discuss treatment options with the clinic.";

export const Route = createFileRoute("/about")({
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
      { property: "og:url", content: absoluteUrl("/about") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/about") }],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Clear Communication",
    text: "Treatment options and next steps are explained in plain language before anything begins.",
  },
  {
    title: "Comfort First",
    text: "A calm, welcoming environment designed to make dental visits feel less intimidating.",
  },
  {
    title: "Local & Accessible",
    text: `Based in ${business.address.line3}, ${business.address.city}, and easy to reach by phone or WhatsApp.`,
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Dental Care for Individuals and Families"
        description="Visiting the dentist should feel straightforward and reassuring. Our goal is to help patients understand their dental needs and feel comfortable discussing their treatment options."
      />

      <section className="container-page grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16">
        <Reveal className="overflow-hidden rounded-[2rem] bg-muted">
          <img
            src={clinicInterior}
            alt="Waiting area of a modern dental clinic with natural light"
            width={1280}
            height={960}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] size-full object-cover"
          />
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="Our Clinic"
            title="A Dental Clinic in North Nazimabad, Karachi"
            description={`${business.name} is a dental clinic located at ${fullAddress}. Patients are welcome to get in touch to ask about available dental services and appointment availability.`}
          >
          </SectionHeading>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Our Approach" title="What Guides Our Care" />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 70}>
                <div className="border-t-2 border-secondary/40 pt-5">
                  <h3 className="text-xl">{value.title}</h3>
                  <p className="mt-2.5 text-muted-foreground">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <SectionHeading
            eyebrow="Facilities"
            title="A Clean, Modern Treatment Environment"
            description="Contact the clinic if you would like to ask about facilities, treatment arrangements or what to expect during your visit."
          >
            <div className="mt-8">
              <ButtonLink to="/services" size="lg">
                View Our Services
              </ButtonLink>
            </div>
          </SectionHeading>
        </div>
        <Reveal className="order-1 overflow-hidden rounded-[2rem] bg-muted lg:order-2">
          <img
            src={treatmentRoom}
            alt="A clean, modern dental treatment room with a dental chair"
            width={1024}
            height={1280}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] size-full object-cover"
          />
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
