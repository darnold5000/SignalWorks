export const siteConfig = {
  name: "Signal Works",
  tagline: "Software engineering for growing businesses.",
  description:
    "Software engineering for growing businesses. Modern websites, custom software, and AI solutions built with clarity.",
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
