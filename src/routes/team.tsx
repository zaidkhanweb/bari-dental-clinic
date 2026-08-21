import { createFileRoute } from "@tanstack/react-router";
import { UserRound } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { team } from "@/config/business";

const title = "Our Team | Bari Dental Clinic, North Nazimabad Karachi";
const description =
  "Meet the team at Bari Dental Clinic & Consultant Clinic in North Nazimabad, Karachi. Team details are being confirmed with the clinic.";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Team"
        title="The People Behind Your Care"
        description="Team names, roles and qualifications are intentionally left as placeholders until they are verified by the clinic."
      />

      <section className="container-page py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <Reveal
              as="article"
              key={i}
              delay={i * 70}
              className="rounded-3xl border border-dashed border-primary/25 bg-card p-7"
            >
              <span className="inline-flex size-16 items-center justify-center rounded-2xl bg-accent text-primary">
                <UserRound className="size-7" aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-display text-xl font-semibold">
                {member.name}
              </h2>
              <p className="mt-1 text-sm font-medium text-secondary">{member.role}</p>
              <p className="mt-4 text-sm text-muted-foreground">{member.note}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 rounded-3xl bg-accent p-6 text-sm text-accent-foreground sm:p-8">
          <strong className="font-display">Note for the clinic:</strong> no
          dentist names, qualifications, registrations or years of experience
          have been invented. Provide verified details and photos, and they can
          be added to this page.
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
