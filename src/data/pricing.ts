export type WebsiteOffering = {
  id: string;
  name: string;
  price: string;
  priceLabel?: string;
  description: string;
  examples: string[];
  features: string[];
};

export type PaymentModel = {
  id: string;
  name: string;
  badge?: string;
  headline: string;
  copy: string;
  launchPrice?: string;
  monthlyPrice?: string;
  monthlyNote?: string;
  upfrontPrice?: string;
  upfrontLabel?: string;
  includes: string[];
  ownershipNote?: string;
  optional?: string;
  cta: string;
  ctaHref: string;
};

export const websiteOfferings: WebsiteOffering[] = [
  {
    id: "starter-website",
    name: "Starter Website",
    price: "$995",
    priceLabel: "starting at",
    description:
      "Designed for businesses that primarily need a professional online presence.",
    examples: [
      "Hair salons",
      "Barbers",
      "Restaurants",
      "Contractors",
      "Realtors",
      "Local service businesses",
    ],
    features: [
      "1–3 pages",
      "Mobile responsive",
      "Contact form",
      "Google Maps",
      "Reviews",
      "Booking or calendar integration",
      "Basic SEO",
    ],
  },
  {
    id: "business-website",
    name: "Business Website",
    price: "$3,500",
    priceLabel: "starting at",
    description: "For businesses actively trying to grow.",
    examples: [
      "Financial firms",
      "Sports organizations",
      "Professional services",
      "Medical offices",
      "Growing companies",
    ],
    features: [
      "Multiple service pages",
      "SEO architecture",
      "AI-ready structure",
      "Lead generation",
      "Blog and resources",
      "Strong content strategy",
      "Custom design",
    ],
  },
  {
    id: "custom-software",
    name: "Custom Software",
    price: "Custom quote",
    description: "For organizations that need more than a website.",
    examples: [
      "Client portals",
      "Dashboards",
      "AI tools",
      "Automation",
      "Marketplaces",
      "Internal software",
    ],
    features: [
      "Discovery and scoping",
      "Custom architecture",
      "Authentication and workflows",
      "AI integrations",
      "Deployment and support",
    ],
  },
];

export const whichWebsiteCards = [
  {
    title: "I just need a professional website.",
    offering: "Starter Website",
    href: "/pricing#starter-website",
  },
  {
    title: "My business is growing.",
    offering: "Business Website",
    href: "/pricing#business-website",
  },
  {
    title: "I need custom software.",
    offering: "Custom Software",
    href: "/pricing#custom-software",
  },
] as const;

export const paymentModels: PaymentModel[] = [
  {
    id: "growth-partnership",
    name: "Growth Partnership",
    badge: "Recommended",
    headline: "Lower upfront investment.",
    copy: "Ideal for businesses that want predictable monthly costs, ongoing support, and continuous improvements after launch.",
    launchPrice: "$750",
    monthlyPrice: "$149",
    monthlyNote: "24-month minimum partnership",
    includes: [
      "Website Launch investment",
      "Hosting and security",
      "Software updates",
      "Technical SEO",
      "AI optimization",
      "Monthly improvements",
      "Priority support",
    ],
    ownershipNote:
      "You'll receive a fully custom website immediately. Ownership transfers to you after successfully completing the 24-month partnership.",
    cta: "Let's Talk",
    ctaHref: "/contact",
  },
  {
    id: "traditional-project",
    name: "Traditional Project",
    headline: "Pay for the website upfront.",
    copy: "Ideal when you prefer a one-time investment and full ownership from day one.",
    upfrontPrice: "$3,500+",
    upfrontLabel: "starting at",
    includes: [
      "Complete custom website",
      "Mobile-first design",
      "Technical SEO",
      "AI-search optimization",
      "Analytics and launch support",
    ],
    ownershipNote: "You own your website from day one.",
    optional: "Ongoing Partnership available after launch — $149/month.",
    cta: "Request Proposal",
    ctaHref: "/contact",
  },
];

export const pricingComparison = {
  note: "Both paths deliver a custom website. The difference is how you invest — spread over a long-term partnership, or upfront with optional ongoing support.",
  rows: [
    { feature: "Upfront investment", growth: "Lower", traditional: "Higher" },
    { feature: "Monthly partnership", growth: "Included", traditional: "Optional" },
    { feature: "Continuous improvements", growth: "✓", traditional: "Optional" },
    { feature: "Hosting & support", growth: "✓", traditional: "Optional" },
    { feature: "Ownership", growth: "After partnership", traditional: "Immediately" },
  ],
} as const;

export const pricingPhilosophy =
  "Professional websites without agency pricing.";

export const pricingSubtext =
  "You don't need a $30,000 agency website to look like a million-dollar company.";

export const pricingAudience =
  "Built for Midwest businesses — and growing companies nationwide that want professional quality without agency complexity.";

export const pricingReassurance =
  "Not sure which option fits? We'll recommend the right approach after a short conversation.";

export const pricingTermsNote =
  "Final pricing depends on project scope and complexity. Growth Partnership Website Launch typically starts around $750; Ongoing Partnership around $149/month.";

export const pricingFaqs = [
  {
    question: "What's the difference between Starter and Business websites?",
    answer:
      "Starter Websites (starting at $995) are focused 1–3 page sites for local businesses that need a credible online presence — salons, restaurants, contractors, and similar. Business Websites (starting at $3,500) are built for companies actively trying to grow, with service pages, SEO architecture, AI-ready structure, blogs, and a stronger content strategy.",
  },
  {
    question: "Do I own my website?",
    answer:
      "With a Traditional Project, you own it immediately. With a Growth Partnership, ownership transfers to you after completing the 24-month partnership. This allows a smaller initial Website Launch investment while we continue improving and supporting your site over time.",
  },
  {
    question: "What is the difference between Growth Partnership and Traditional Project?",
    answer:
      "These are payment models, not different websites. Growth Partnership spreads the investment with a smaller Website Launch plus monthly Ongoing Partnership. Traditional Project is a larger upfront payment with optional ongoing support after launch. We'll help you choose based on your business and goals.",
  },
  {
    question: "How are custom software projects priced?",
    answer:
      "Custom software is scoped through discovery based on your business goals — dashboards, AI tools, portals, automation, marketplaces, and internal applications. Every project starts with a conversation.",
  },
];
