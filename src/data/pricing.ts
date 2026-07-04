export type EngagementModel = {
  id: string;
  name: string;
  headline: string;
  copy: string;
  price: string;
  priceLabel?: string;
  includes?: string[];
  optional?: string;
  note?: string;
  examples?: string[];
  featured?: boolean;
  badge?: string;
  cta: string;
  ctaHref: string;
};

export const engagementModels: EngagementModel[] = [
  {
    id: "subscription-partnership",
    name: "Subscription Partnership",
    headline: "Launch your website without a large upfront investment.",
    copy: "Perfect for local businesses that want a professional online presence while keeping startup costs low.",
    price: "$99–199",
    priceLabel: "per month",
    includes: [
      "Professional custom website",
      "Secure hosting",
      "SSL",
      "Performance monitoring",
      "Software updates",
      "Technical SEO",
      "AI-search optimization foundation",
      "Monthly content updates",
      "Reasonable text and image edits",
      "Analytics",
      "Priority support",
    ],
    note: "Instead of paying thousands upfront, invest in your business over time while your website continues to improve.",
    featured: true,
    badge: "Most Popular",
    cta: "Let's Talk",
    ctaHref: "/contact",
  },
  {
    id: "own-your-website",
    name: "Own Your Website",
    headline: "Prefer to purchase your website outright?",
    copy: "Ideal for businesses that prefer a traditional project with full ownership from day one.",
    price: "$3,500+",
    priceLabel: "starting at",
    includes: [
      "Complete custom website",
      "Mobile-first design",
      "Technical SEO",
      "AI-search optimization",
      "Analytics",
      "CMS where appropriate",
      "Vercel deployment",
      "Launch support",
    ],
    optional: "Ongoing Partnership available after launch.",
    cta: "Request Proposal",
    ctaHref: "/contact",
  },
  {
    id: "professional-services",
    name: "Professional Services",
    headline: "For organizations needing more than a website.",
    copy: "Every project begins with discovery and is scoped specifically around your business goals.",
    price: "Custom quote",
    examples: [
      "Financial firms",
      "Medical practices",
      "Professional services",
      "Custom dashboards",
      "AI tools",
      "Internal business software",
      "Customer portals",
      "Automation",
      "Marketplaces",
    ],
    cta: "Schedule Consultation",
    ctaHref: "/contact",
  },
];

export const whichOptionCards = [
  {
    title: "Small Business",
    description: "Want to launch without spending thousands upfront?",
    model: "Subscription Partnership",
    href: "/pricing#subscription-partnership",
  },
  {
    title: "Growing Business",
    description: "Want to own your website from day one?",
    model: "Ownership",
    href: "/pricing#own-your-website",
  },
  {
    title: "Established Organization",
    description: "Need custom software, AI, or complex integrations?",
    model: "Professional Services",
    href: "/pricing#professional-services",
  },
] as const;

export const ongoingPartnership = {
  title: "Ongoing Partnership",
  description:
    "Launch is just the beginning. A long-term partnership keeps your digital presence secure, performant, and improving month over month.",
  includes: [
    "Security",
    "Monitoring",
    "Performance",
    "Small updates",
    "Monthly improvements",
    "Analytics review",
    "SEO health checks",
    "AI optimization",
    "Priority support",
    "Hosting",
  ],
};

export const pricingPhilosophy =
  "Professional websites and software without enterprise pricing.";

export const pricingReassurance =
  "Not sure which option fits? We'll recommend the right approach after a short conversation.";

export const subscriptionTermsNote =
  "Terms vary depending on project complexity.";

export const pricingFaqs = [
  {
    question: "What is a Subscription Partnership?",
    answer:
      "A Subscription Partnership lets you launch a professional custom website with a predictable monthly investment — typically $99–199/month — instead of a large upfront payment. Your site includes hosting, security, updates, technical SEO, AI-search foundation, and ongoing improvements.",
  },
  {
    question: "When does ownership make more sense?",
    answer:
      "Own Your Website is ideal when you prefer a traditional project with full ownership from day one, starting at $3,500+. You receive a complete custom website with mobile-first design, technical SEO, AI-search optimization, analytics, and launch support. An Ongoing Partnership is available after launch.",
  },
  {
    question: "How are professional services and custom software priced?",
    answer:
      "Professional Services are scoped through discovery based on your business goals — whether that's custom dashboards, AI tools, portals, automation, or marketplaces. Every engagement starts with a conversation, not a fixed package.",
  },
];
