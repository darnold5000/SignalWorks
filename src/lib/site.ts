import { SHOW_WORK } from "./flags";

export const siteConfig = {
  name: "Signal Works",
  tagline: "Professional websites without agency pricing.",
  description:
    "Professional websites without agency pricing. Modern websites, custom software, and AI solutions backed by real software engineering.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://signalworks.dev",
  author: "Dave Arnold",
  // company: "Arnold Digital", // internal use only — not shown on public site
  brandStatement: "Better signal. Less noise.",
  email: process.env.CONTACT_EMAIL ?? "hello@hiresignalworks.dev",
  location: {
    city: "Indianapolis",
    region: "IN",
    country: "US",
  },
} as const;

const allNavLinks = [
  { label: "Work", href: "/work", show: SHOW_WORK },
  { label: "Services", href: "/services", show: true },
  { label: "Process", href: "/process", show: true },
  { label: "Pricing", href: "/pricing", show: true },
  { label: "About", href: "/about", show: true },
  { label: "Contact", href: "/contact", show: true },
] as const;

export const navLinks = allNavLinks
  .filter((link) => link.show)
  .map(({ label, href }) => ({ label, href }));
