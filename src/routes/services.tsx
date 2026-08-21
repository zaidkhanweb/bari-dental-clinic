import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { ButtonAnchor, ButtonLink } from "@/components/ui/action-button";
import { services, whatsappUrl } from "@/config/business";

const title = "Dental Services | Bari Dental Clinic, North Nazimabad Karachi";
const description =
  "Dental services listed for Bari Dental Clinic & Consultant Clinic in North Nazimabad, Karachi — including general dentistry, checkups, root canal treatment, crowns and orthodontic care.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Dental Care Designed Around Your Needs"
        description="Explore available dental services and contact our clinic to discuss the treatment you need. Service availability is confirmed directly with the clinic."
      />

      <section className="container-page py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 60} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="container-page space-y-12">
          {services.map((service, i) => (
            <Reveal
              key={service.slug}
              delay={i * 40}
              className="grid scroll-mt-28 gap-6 border-b border-border pb-12 last:border-0 last:pb-0 md:grid-cols-[1fr_1.6fr]"
            >
              <div id={service.slug}>
                <h2 className="text-3xl">{service.name}</h2>
              </div>
              <div>
                <p className="text-muted-foreground">{service.description}</p>
                <p className="mt-3 text-muted-foreground">{service.detail}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink to="/appointment">Request an Appointment</ButtonLink>
                  <ButtonAnchor
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                  >
                    Message on WhatsApp
                  </ButtonAnchor>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
