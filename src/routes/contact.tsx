import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { AppointmentForm } from "@/components/AppointmentForm";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonAnchor } from "@/components/ui/action-button";
import { business, whatsappUrl } from "@/config/business";
import { absoluteUrl } from "@/config/seo";

const title = "Contact Us | Bari Dental Clinic, North Nazimabad Karachi";
const description =
  "Contact Bari Dental Clinic & Consultant Clinic in North Nazimabad, Karachi by phone or WhatsApp, get directions, or send an appointment request.";

export const Route = createFileRoute("/contact")({
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
      { property: "og:url", content: absoluteUrl("/contact") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/contact") }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    business.mapsEmbedQuery,
  )}&output=embed`;

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch with Our Clinic"
        description="Call, message on WhatsApp, or prepare an appointment request to check availability with the clinic."
      />

      <section className="container-page grid gap-12 py-20 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <Reveal className="rounded-3xl border border-border bg-card p-7">
            <h2 className="text-2xl">{business.name}</h2>

            <ul className="mt-6 space-y-5 text-[0.95rem]">
              <li className="flex gap-3">
                <MapPin className="mt-1 size-5 shrink-0 text-secondary" aria-hidden="true" />
                <address className="not-italic text-muted-foreground">
                  {business.address.line1},<br />
                  {business.address.line2},<br />
                  {business.address.line3},<br />
                  {business.address.city}, {business.address.country}
                </address>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-1 size-5 shrink-0 text-secondary" aria-hidden="true" />
                <a
                  href={business.phoneHref}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {business.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-1 size-5 shrink-0 text-secondary" aria-hidden="true" />
                <div className="w-full">
                  <p className="font-display font-semibold">Opening Hours</p>
                  <ul className="mt-2 space-y-1.5 text-muted-foreground">
                    {business.openingHours.map((row) => (
                      <li key={row.day} className="flex justify-between gap-4">
                        <span>{row.day}</span>
                        <span className="text-right">{row.hours}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs text-muted-foreground">
                    {business.openingHoursNote}
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonAnchor href={business.phoneHref}>
                <Phone className="size-4" aria-hidden="true" />
                Call Now
              </ButtonAnchor>
              <ButtonAnchor
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp Us
              </ButtonAnchor>
              <ButtonAnchor
                href={business.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                <MapPin className="size-4" aria-hidden="true" />
                Get Directions
              </ButtonAnchor>
            </div>
          </Reveal>
        </div>

        <div>
          <SectionHeading
            eyebrow="Appointment Request"
            title="Request an Appointment"
            description="Share a few details, then continue to WhatsApp to send your appointment request."
          />
          <div className="mt-8">
            <AppointmentForm />
          </div>
        </div>
      </section>

      <section aria-label="Clinic location map" className="container-page pb-20">
        <Reveal className="overflow-hidden rounded-[2rem] border border-border bg-muted">
          <iframe
            title={`Map showing the location of ${business.name}`}
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[380px] w-full border-0 sm:h-[460px]"
          />
        </Reveal>
      </section>
    </>
  );
}
