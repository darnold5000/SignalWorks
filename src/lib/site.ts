export const siteConfig = {
  name: "Signal Works",
  tagline: "Modern websites. Custom software. AI-powered solutions.",
  description:
    "Modern websites, custom software, and AI-powered solutions built with clarity. Signal Works helps businesses cut through the noise with high-performance digital products.",
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
