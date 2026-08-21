import { createFileRoute } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone, Star, CalendarCheck } from "lucide-react";
import heroImage from "@/assets/hero-consultation.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Gallery } from "@/components/Gallery";
import { Reveal } from "@/components/Reveal";
import { ReviewCard } from "@/components/ReviewCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ButtonAnchor, ButtonLink } from "@/components/ui/action-button";
import { business, faqs, services, whatsappUrl } from "@/config/business";

const title =
  "Bari Dental Clinic & Consultant Clinic | Dentist in North Nazimabad, Karachi";
const description =
  "Looking for a dentist in North Nazimabad, Karachi? Contact Bari Dental Clinic & Consultant Clinic to learn about available dental services and appointment options.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: business.name,
          telephone: business.phone,
          url: "/",
          image: "/favicon.ico",
          address: {
            "@type": "PostalAddress",
            streetAddress: `${business.address.line1}, ${business.address.line2}`,
            addressLocality: `${business.address.line3}, ${business.address.city}`,
            addressRegion: business.address.region,
            addressCountry: "PK",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: business.coordinates.latitude,
            longitude: business.coordinates.longitude,
          },
          hasMap: business.mapsUrl,
          areaServed: "North Nazimabad, Karachi",
        }),
      },
    ],
  }),
  component: HomePage,
});

const trustItems = [
  { icon: Star, label: `${business.rating.value} Google Rating` },
  { icon: MessageCircle, label: `${business.rating.count} Google Reviews` },
  { icon: MapPin, label: "North Nazimabad, Karachi" },
  { icon: CalendarCheck, label: "Easy Appointment Enquiry" },
];

const whyChooseUs = [
  {
    title: "Clear Communication",
    text: "Understand your dental needs and treatment options clearly.",
  },
  {
    title: "Patient-Focused Care",
    text: "A welcoming approach designed to help patients feel comfortable.",
  },
  {
    title: "Convenient Location",
    text: "Conveniently located in North Nazimabad, Karachi.",
  },
  {
    title: "Professional Care",
    text: "Discuss your dental needs with the clinic and explore available treatment options.",
  },
];

const steps = [
  {
    number: "01",
    title: "Get in Touch",
    text: "Call or send a WhatsApp enquiry.",
  },
  {
    number: "02",
    title: "Discuss Your Needs",
    text: "Share your dental concern and check appointment availability.",
  },
  {
    number: "03",
    title: "Visit the Clinic",
    text: "Receive a consultation and discuss appropriate treatment options.",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -left-32 size-[28rem] rounded-full bg-accent/80 blur-3xl"
        />
        <div className="container-page relative grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
          <div>
            <p className="eyebrow">Dental Care • North Nazimabad</p>
            <h1 className="mt-4">
              Professional Dental Care for a Healthier, More Confident Smile
            </h1>
            <p className="mt-6 max-w-xl text-muted-foreground">
              Looking for dental care in North Nazimabad? Contact{" "}
              {business.name} to discuss your needs, ask about available
              treatments and request an appointment.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/appointment" size="lg">
                Book an Appointment
              </ButtonLink>
              <ButtonAnchor href={business.phoneHref} variant="outline" size="lg">
                <Phone className="size-4" aria-hidden="true" />
                Call Now
              </ButtonAnchor>
              <ButtonAnchor
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp Us
              </ButtonAnchor>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -top-5 -right-4 hidden size-28 rounded-3xl bg-secondary/15 sm:block"
            />
            <div className="relative overflow-hidden rounded-[2rem] bg-muted shadow-lift">
              <img
                src={heroImage}
                alt="A dentist discussing treatment options with a patient in a modern consultation room"
                width={1280}
                height={1440}
                fetchPriority="high"
                decoding="async"
                className="aspect-[4/5] size-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Illustrative stock photography — replace with clinic photos.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section aria-label="Clinic highlights" className="border-y border-border bg-card">
        <ul className="container-page grid gap-x-8 gap-y-5 py-7 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3">
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-foreground">{label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* SERVICES */}
      <section className="container-page py-20 sm:py-24">
        <SectionHeading
          eyebrow="Our Services"
          title="Dental Care Designed Around Your Needs"
          description="Explore available dental services and contact our clinic to discuss the treatment you need."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 60} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-card py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Patients Choose Us"
            title="A More Comfortable Dental Experience"
          />
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="border-l-2 border-secondary/40 pl-6">
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="mt-2.5 text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="container-page grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <Reveal className="overflow-hidden rounded-[2rem] bg-muted">
          <img
            src={clinicInterior}
            alt="Bright, modern dental clinic waiting area with comfortable seating"
            width={1280}
            height={960}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] size-full object-cover"
          />
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="About the Clinic"
            title="Dental Care for Individuals and Families"
            description="Visiting the dentist should feel straightforward and reassuring. Our goal is to help patients understand their dental needs and feel comfortable discussing their treatment options."
          >
            <div className="mt-8">
              <ButtonLink to="/about" variant="outline" size="lg">
                Learn About Our Clinic
              </ButtonLink>
            </div>
          </SectionHeading>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-card py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="How It Works"
            title="Your Visit Starts with a Simple Conversation"
          />
          <ol className="mt-12 grid gap-8 sm:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.number} delay={i * 80}>
                <span className="font-display text-5xl font-bold text-accent-foreground/25">
                  {step.number}
                </span>
                <h3 className="mt-3 text-xl">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* GALLERY */}
      <section className="container-page py-20 sm:py-24">
        <SectionHeading
          eyebrow="Gallery"
          title="Inside Our Clinic"
          description="Illustrative imagery for this demo. These photos are placeholders and will be replaced with the clinic's own photography."
        />
        <div className="mt-12">
          <Gallery />
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-card py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Reviews"
            title="What Patients Are Saying"
            description="Explore genuine patient feedback and learn more about experiences shared by patients."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <Reveal key={i} delay={i * 60} className="h-full">
                <ReviewCard />
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <ButtonAnchor
              href={business.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
            >
              Read More Reviews
            </ButtonAnchor>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-20 sm:py-24">
        <SectionHeading eyebrow="FAQ" title="Questions Patients Often Ask" />
        <div className="mt-12">
          <FAQAccordion items={faqs.slice(0, 4)} />
        </div>
        <div className="mt-8">
          <ButtonLink to="/faq" variant="ghost">
            See all FAQs →
          </ButtonLink>
        </div>
      </section>

      <CTASection />
    </>
  );
}
