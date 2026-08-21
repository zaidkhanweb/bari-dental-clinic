/**
 * ---------------------------------------------------------------------------
 * SINGLE SOURCE OF TRUTH — edit this file to update the whole website.
 * Anything wrapped in [ ] is a placeholder that must be confirmed with the
 * clinic before the site goes live.
 * ---------------------------------------------------------------------------
 */

export const business = {
  name: "Bari Dental Clinic & Consultant Clinic",
  shortName: "Bari Dental Clinic",
  category: "Dental Clinic",
  tagline: "Professional dental care in North Nazimabad, Karachi.",

  phone: "+92 333 3435123",
  phoneHref: "tel:+923333435123",

  // WhatsApp number in international format, digits only.
  whatsappNumber: "923333435123",
  whatsappMessage:
    "Hello Bari Dental Clinic, I would like to ask about an appointment.",

  address: {
    line1: "Suite 12, 13 & 14",
    line2: "Marhaba Galaxy/Heights, Block M",
    line3: "North Nazimabad Town",
    city: "Karachi",
    region: "Sindh",
    country: "Pakistan",
    postalCode: "", // [Editable — Confirm with Clinic]
  },

  // [Editable — Confirm with Clinic] approximate coordinates for North Nazimabad Block M.
  coordinates: { latitude: 24.9403, longitude: 67.0387 },

  mapsUrl: "https://maps.app.goo.gl/95TD8RrLRd4kzFkFA",
  directionsUrl: "https://maps.app.goo.gl/95TD8RrLRd4kzFkFA",
  mapsEmbedQuery:
    "Marhaba Galaxy, Block M, North Nazimabad Town, Karachi, Pakistan",

  // Google review link — replace with the clinic's "write/see reviews" URL.
  reviewsUrl: "https://maps.app.goo.gl/95TD8RrLRd4kzFkFA",

  rating: {
    value: "4.7",
    // Review counts change over time — update here, never hard-coded in components.
    count: "[Add Verified Review Count]",
  },

  // [CONFIRM CURRENT OPENING HOURS] — replace each value once confirmed.
  openingHours: [
    { day: "Monday", hours: "[Confirm with Clinic]" },
    { day: "Tuesday", hours: "[Confirm with Clinic]" },
    { day: "Wednesday", hours: "[Confirm with Clinic]" },
    { day: "Thursday", hours: "[Confirm with Clinic]" },
    { day: "Friday", hours: "[Confirm with Clinic]" },
    { day: "Saturday", hours: "[Confirm with Clinic]" },
    { day: "Sunday", hours: "[Confirm with Clinic]" },
  ],
  openingHoursNote:
    "Opening hours are being confirmed with the clinic. Please call before visiting.",

  email: "", // [Editable — Confirm with Clinic]

  // Leave empty strings to hide a social icon completely.
  social: {
    facebook: "",
    instagram: "",
    youtube: "",
  },
} as const;

export const fullAddress = [
  business.address.line1,
  business.address.line2,
  business.address.line3,
  `${business.address.city}, ${business.address.country}`,
].join(", ");

export const whatsappUrl = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
  business.whatsappMessage,
)}`;

export type Service = {
  slug: string;
  name: string;
  description: string;
  detail: string;
};

/** Services are treated as editable until confirmed by the clinic. */
export const services: Service[] = [
  {
    slug: "general-dentistry",
    name: "General Dentistry",
    description:
      "Everyday dental care and advice for adults and children, discussed with you before treatment begins.",
    detail:
      "Talk to the clinic about routine dental care needs and what a general dentistry appointment can include. [Editable — Confirm with Clinic]",
  },
  {
    slug: "dental-checkups",
    name: "Dental Checkups",
    description:
      "A dental examination where your concerns are reviewed and options are explained clearly.",
    detail:
      "Ask the clinic what a checkup appointment covers and how often a checkup may be suggested for you. [Editable — Confirm with Clinic]",
  },
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    description:
      "Treatment for an affected tooth, with the process and aftercare explained beforehand.",
    detail:
      "Discuss your symptoms with the clinic to understand whether root canal treatment may be appropriate. [Editable — Confirm with Clinic]",
  },
  {
    slug: "dental-crowns",
    name: "Dental Crowns",
    description:
      "Restorative options for damaged or treated teeth, discussed case by case.",
    detail:
      "Contact the clinic to ask about crown options, materials and the number of visits involved. [Editable — Confirm with Clinic]",
  },
  {
    slug: "orthodontic-care",
    name: "Orthodontic Care",
    description:
      "Guidance on alignment concerns and the treatment options that may be available.",
    detail:
      "Ask the clinic about orthodontic assessment and which approaches are offered. [Editable — Confirm with Clinic]",
  },
  {
    slug: "wisdom-tooth-treatment",
    name: "Wisdom Tooth Treatment",
    description:
      "Assessment and treatment options for wisdom tooth discomfort or complications.",
    detail:
      "Speak to the clinic about wisdom tooth pain and what an assessment appointment involves. [Editable — Confirm with Clinic]",
  },
];

/** Team members are intentionally unverified placeholders. */
export const team = [
  {
    name: "[Add Verified Name]",
    role: "[Add Verified Role]",
    note: "[Add verified qualifications and areas of practice — confirm with clinic]",
  },
  {
    name: "[Add Verified Name]",
    role: "[Add Verified Role]",
    note: "[Add verified qualifications and areas of practice — confirm with clinic]",
  },
  {
    name: "[Add Verified Name]",
    role: "[Add Verified Role]",
    note: "[Add verified qualifications and areas of practice — confirm with clinic]",
  },
];

export const faqs = [
  {
    question: "How can I book an appointment?",
    answer:
      "You can call the clinic, send a WhatsApp message, or submit the appointment request form on this website. A team member will contact you to confirm availability. Requests submitted online are not automatically confirmed.",
  },
  {
    question: "Where is the clinic located?",
    answer: `${business.name} is located at ${fullAddress}. You can use the Get Directions button anywhere on this site to open the location in Google Maps.`,
  },
  {
    question: "What dental services are available?",
    answer:
      "Publicly listed services include general dentistry, dental checkups, root canal treatment, dental crowns, orthodontic care and wisdom tooth treatment. Please contact the clinic to confirm availability for your specific needs. [Editable — Confirm with Clinic]",
  },
  {
    question: "Can I contact the clinic through WhatsApp?",
    answer: `Yes — you can send a WhatsApp message to ${business.phone} to ask about treatments and appointment availability. [Editable — Confirm with Clinic]`,
  },
  {
    question: "What are the clinic's current timings?",
    answer:
      "[CONFIRM CURRENT OPENING HOURS] Opening hours can change, so we recommend calling the clinic before visiting.",
  },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Our Team", to: "/team" },
  { label: "Reviews", to: "/reviews" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;
