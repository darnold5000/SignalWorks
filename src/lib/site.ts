export const siteConfig = {
  name: "Signal Works",
  tagline: "Websites that win business. Software that saves time.",
  description:
    "Signal Works designs and builds custom digital products — from premium marketing websites to AI-powered business software — for growing businesses.",
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
