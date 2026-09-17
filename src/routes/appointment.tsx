import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { AppointmentForm } from "@/components/AppointmentForm";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ButtonAnchor } from "@/components/ui/action-button";
import { business, whatsappUrl } from "@/config/business";
import { absoluteUrl } from "@/config/seo";

const title = "Book an Appointment | Bari Dental Clinic, North Nazimabad Karachi";
const description =
  "Prepare a WhatsApp appointment request for Bari Dental Clinic & Consultant Clinic in North Nazimabad, Karachi and confirm availability directly with the clinic.";

export const Route = createFileRoute("/appointment")({
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
      { property: "og:url", content: absoluteUrl("/appointment") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/appointment") }],
  }),
  component: AppointmentPage,
});

const steps = [
  "Fill in your details and continue to WhatsApp.",
  "Send the pre-filled appointment request to the clinic.",
  "Your appointment time is confirmed with you directly.",
];

function AppointmentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Appointments"
        title="Request an Appointment"
        description="Fill in the form below and continue to WhatsApp with your appointment details pre-filled. The clinic will confirm a suitable time directly with you."
      />

      <section className="container-page grid gap-12 py-20 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <AppointmentForm />

        <aside className="space-y-6">
          <Reveal className="rounded-3xl bg-accent p-7">
            <CalendarCheck className="size-6 text-primary" aria-hidden="true" />
            <h2 className="mt-4 text-xl">How it works</h2>
            <ol className="mt-4 space-y-3 text-sm text-accent-foreground/90">
              {steps.map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="font-display font-bold">{`0${i + 1}`}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={80} className="rounded-3xl border border-border bg-card p-7">
            <h2 className="text-xl">Prefer to talk?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Call or message the clinic directly for the quickest response.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <ButtonAnchor href={business.phoneHref} size="lg">
                <Phone className="size-4" aria-hidden="true" />
                {business.phone}
              </ButtonAnchor>
              <ButtonAnchor
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Message on WhatsApp
              </ButtonAnchor>
            </div>
            <p className="mt-5 text-xs text-muted-foreground">
              {business.openingHoursNote}
            </p>
          </Reveal>
        </aside>
      </section>
    </>
  );
}
