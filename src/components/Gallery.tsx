import clinicInterior from "@/assets/clinic-interior.jpg";
import consultation from "@/assets/hero-consultation.jpg";
import reception from "@/assets/reception.jpg";
import treatmentRoom from "@/assets/treatment-room.jpg";
import { Reveal } from "./Reveal";

/** Replace these entries with the clinic's own photography when available. */
const images = [
  {
    src: clinicInterior,
    alt: "Illustrative photo of a modern dental clinic waiting area",
    caption: "Clinic interior",
    className: "sm:col-span-2 aspect-[16/10]",
    w: 1280,
    h: 960,
  },
  {
    src: reception,
    alt: "Illustrative photo of a dental clinic reception desk",
    caption: "Reception",
    className: "aspect-square",
    w: 1024,
    h: 1024,
  },
  {
    src: treatmentRoom,
    alt: "Illustrative photo of a dental treatment room with a dental chair",
    caption: "Treatment room",
    className: "aspect-square",
    w: 1024,
    h: 1280,
  },
  {
    src: consultation,
    alt: "Illustrative photo of a dentist consulting with a patient",
    caption: "Dentist consultation",
    className: "sm:col-span-2 aspect-[16/10]",
    w: 1280,
    h: 1440,
  },
];

export function Gallery() {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {images.map((image, i) => (
        <Reveal
          as="li"
          key={image.caption}
          delay={i * 70}
          className={`group relative overflow-hidden rounded-3xl bg-muted ${image.className}`}
        >
          <img
            src={image.src}
            alt={image.alt}
            width={image.w}
            height={image.h}
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute bottom-3 left-3 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
            {image.caption}
          </span>
        </Reveal>
      ))}
    </ul>
  );
}
