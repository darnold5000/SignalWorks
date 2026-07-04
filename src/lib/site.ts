export const siteConfig = {
  name: "Signal Works",
  tagline: "Professional websites without agency pricing.",
  description:
    "Professional websites without agency pricing. Modern websites, custom software, and AI solutions backed by real software engineering.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://signalworks.dev",
  author: "Dave Arnold",
  company: "Arnold Digital",
  email: process.env.CONTACT_EMAIL ?? "hello@signalworks.dev",
  location: {
    city: "Indianapolis",
    region: "IN",
    country: "US",
  },
} as const;

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
