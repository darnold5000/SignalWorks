export type EngagementPhase = {
  title: string;
  price: string;
  priceLabel: string;
  sublabel?: string;
  includes: string[];
};

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

export const subscriptionPartnership = {
  id: "subscription-partnership",
  name: "Subscription Partnership",
  headline: "Launch your website without a large upfront investment.",
  copy: "Perfect for local businesses that want a professional online presence while keeping startup costs manageable.",
  badge: "Most Popular",
  phases: [
    {
      title: "Website Launch",
      price: "$750",
      priceLabel: "starting at",
      sublabel: "One-time investment.",
      includes: [
        "Strategy session",
        "Custom design",
        "Professional website",
        "Launch",
      ],
    },
    {
      title: "Ongoing Partnership",
      price: "$149",
      priceLabel: "per month",
      sublabel: "12-month minimum partnership.",
      includes: [
        "Hosting",
        "Security",
        "Monitoring",
        "Updates",
        "Technical SEO",
        "AI optimization",
        "Monthly improvements",
        "Support",
      ],
    },
  ] satisfies EngagementPhase[],
  flowSteps: [
    "Website Launch",
    "Ongoing Partnership",
    "Continuous Improvements",
  ],
  closingNote:
    "Most clients choose this option because it keeps upfront costs manageable while ensuring their website continues to improve long after launch.",
  cta: "Let's Talk",
  ctaHref: "/contact",
};

export const engagementModels: EngagementModel[] = [
  {
    id: "traditional-project",
    name: "Traditional Project",
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
    optional: "Ongoing Partnership available after launch — $149/month.",
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
    model: "Traditional Project",
    href: "/pricing#traditional-project",
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
  price: "$149/month",
  description:
    "Available after any website launch — whether through a Subscription Partnership or a Traditional Project. Your site keeps improving long after go-live.",
  includes: [
    "Hosting",
    "Security",
    "Monitoring",
    "Updates",
    "Technical SEO",
    "AI optimization",
    "Monthly improvements",
    "Support",
  ],
};

export const pricingPhilosophy =
  "Professional websites and software without enterprise pricing.";

export const pricingReassurance =
  "Not sure which option fits? We'll recommend the right approach after a short conversation.";

export const subscriptionTermsNote =
  "Final pricing depends on project scope and complexity. Website Launch typically starts at $750; Ongoing Partnership at $149/month with a 12-month minimum.";

export const pricingFaqs = [
  {
    question: "How does the Subscription Partnership work?",
    answer:
      "It's two phases — not financing. Phase one is Website Launch (starting at $750), a one-time investment covering strategy, custom design, your professional website, and launch. Phase two is Ongoing Partnership (starting at $149/month), which includes hosting, security, monitoring, updates, technical SEO, AI optimization, and continuous improvements with a 12-month minimum partnership.",
  },
  {
    question: "When does a Traditional Project make more sense?",
    answer:
      "A Traditional Project starts at $3,500+ when you prefer full ownership from day one. You receive a complete custom website with mobile-first design, technical SEO, AI-search optimization, analytics, and launch support. An Ongoing Partnership at $149/month is available after launch.",
  },
  {
    question: "How are professional services and custom software priced?",
    answer:
      "Professional Services are scoped through discovery based on your business goals — whether that's custom dashboards, AI tools, portals, automation, or marketplaces. Every engagement starts with a conversation, not a fixed package.",
  },
];
