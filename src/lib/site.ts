import { SHOW_WORK } from "./flags";

export const siteConfig = {
  name: "Signal Works",
  tagline: "Modern websites. Custom software. AI-powered tools.",
  description:
    "Websites, custom software, AI tools, and automation — built to reduce manual work, surface customer insights, and grow your business without agency overhead.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://signalworks.dev",
  author: "Dave Arnold",
  // company: "Arnold Digital", // internal use only — not shown on public site
  brandStatement: "Better signal. Less noise.",
  email: process.env.CONTACT_EMAIL ?? "hello@hiresignalworks.com",
  location: {
    city: "Indianapolis",
    region: "IN",
    country: "US",
  },
} as const;

const allNavLinks = [
  { label: "Our Work", href: "/work", show: SHOW_WORK },
  { label: "Services", href: "/services", show: true },
  { label: "Capabilities", href: "/capabilities", show: true },
  { label: "Process", href: "/process", show: true },
  { label: "Pricing", href: "/pricing", show: true },
  { label: "About", href: "/about", show: true },
  { label: "Contact", href: "/contact", show: true },
] as const;

export const navLinks = allNavLinks
  .filter((link) => link.show)
  .map(({ label, href }) => ({ label, href }));
