export type Testimonial = {
  quote: string;
  author: string;
  role?: string;
  href?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Dave completely modernized our website and made it easier for clients to navigate.",
    author: "Market Street Wealth Management",
    role: "Financial Services",
    href: "/work/market-street",
  },
  {
    quote: "Parents immediately noticed how much easier everything became.",
    author: "Zero Limits Baseball",
    role: "Youth Sports",
    href: "/work/zero-limits",
  },
];
