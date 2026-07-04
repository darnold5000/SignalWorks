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
  subtitle?: string;
  headline: string;
  copy: string;
  price: string;
  priceLabel?: string;
  includes?: string[];
  optional?: string;
  ownershipNote?: string;
  note?: string;
  examples?: string[];
  featured?: boolean;
  badge?: string;
  cta: string;
  ctaHref: string;
};

export const growthPartnership = {
  id: "growth-partnership",
  name: "Growth Partnership",
  headline:
    "Launch your website with a smaller initial investment and continue improving it over time.",
  copy: "Designed as a long-term partnership. A smaller Website Launch investment is possible because we commit to hosting, maintaining, and improving your site together over time.",
  badge: "Most Popular",
  phases: [
    {
      title: "Website Launch",
      price: "$750",
      priceLabel: "starting at",
      sublabel: "Smaller initial investment.",
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
      sublabel: "24-month minimum partnership.",
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
  ownershipCallout:
    "You'll receive a fully custom website immediately. Ownership transfers to you after successfully completing the 24-month partnership — at no additional cost.",
  closingNote:
    "Most clients choose this option because it spreads the investment over time while ensuring their website never becomes outdated.",
  cta: "Let's Talk",
  ctaHref: "/contact",
};

export const engagementModels: EngagementModel[] = [
  {
    id: "traditional-project",
    name: "Traditional Project",
    subtitle: "One-time investment with optional ongoing support.",
    headline: "Pay for the full website build upfront.",
    copy: "Ideal for businesses that prefer to pay for the full website build upfront, then choose whether to continue with ongoing support after launch.",
    price: "$3,500+",
    priceLabel: "starting at",
    ownershipNote: "You own your website from day one.",
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
    description: "Want a smaller initial investment with ongoing support built in?",
    model: "Growth Partnership",
    href: "/pricing#growth-partnership",
  },
  {
    title: "Growing Business",
    description: "Prefer to pay upfront and own your website immediately?",
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

export const pricingComparison = {
  note: "Both options deliver a custom website built for your business. The difference is payment structure, ongoing support, and when ownership transfers.",
  rows: [
    { feature: "Upfront investment", growth: "Lower", traditional: "Higher" },
    { feature: "Monthly partnership", growth: "Included", traditional: "Optional" },
    { feature: "Continuous improvements", growth: "✓", traditional: "Optional" },
    { feature: "Hosting & support", growth: "✓", traditional: "Optional" },
    { feature: "Ownership", growth: "After partnership", traditional: "Immediately" },
  ],
} as const;

export const ongoingPartnership = {
  title: "Ongoing Partnership",
  price: "$149/month",
  description:
    "Available after a Traditional Project launch, or included in a Growth Partnership. Your site keeps improving long after go-live.",
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
  "Professional websites without the big upfront investment.";

export const pricingPhilosophyExtended =
  "Professional websites and software without agency pricing.";

export const pricingReassurance =
  "Not sure which option fits? We'll recommend the right approach after a short conversation.";

export const growthPartnershipTermsNote =
  "Final pricing depends on project scope and complexity. Website Launch typically starts at $750; Ongoing Partnership at $149/month with a 24-month minimum.";

export const pricingFaqs = [
  {
    question: "Do I own my website?",
    answer:
      "Yes. With a Traditional Project, you own it immediately. With a Growth Partnership, ownership transfers to you after completing the 24-month partnership. This approach allows us to significantly reduce the upfront investment while continuing to improve and support your website over time.",
  },
  {
    question: "What is the difference between Growth Partnership and Traditional Project?",
    answer:
      "Both options include a custom website. Growth Partnership starts with a smaller Website Launch investment and includes ongoing monthly support — ownership transfers after the partnership term. Traditional Project is a larger upfront investment with full ownership from day one and optional ongoing support after launch.",
  },
  {
    question: "How does the Growth Partnership work?",
    answer:
      "It's two phases — a partnership, not a rental. Phase one is Website Launch (starting at $750), covering strategy, custom design, your professional website, and launch. Phase two is Ongoing Partnership (starting at $149/month) with hosting, security, monitoring, updates, technical SEO, AI optimization, and continuous improvements over a 24-month minimum partnership.",
  },
  {
    question: "How are professional services and custom software priced?",
    answer:
      "Professional Services are scoped through discovery based on your business goals — whether that's custom dashboards, AI tools, portals, automation, or marketplaces. Every engagement starts with a conversation, not a fixed package.",
  },
];
