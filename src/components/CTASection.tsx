import { MapPin } from "lucide-react";
import { business } from "@/config/business";
import { Reveal } from "./Reveal";
import { ButtonAnchor, ButtonLink } from "./ui/action-button";

export function CTASection() {
  return (
    <section className="container-page py-20 sm:py-24">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-16 text-center sm:px-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-secondary/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -left-20 size-80 rounded-full bg-accent/15 blur-3xl"
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-primary-foreground">Have a Dental Concern? Let&apos;s Talk.</h2>
          <p className="mt-4 text-primary-foreground/80">
            Call or message {business.name} to discuss your needs and check
            appointment availability.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink to="/appointment" variant="secondary" size="lg">
              Book an Appointment
            </ButtonLink>
            <ButtonAnchor
              href={business.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <MapPin className="size-4" aria-hidden="true" />
              Get Directions
            </ButtonAnchor>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
