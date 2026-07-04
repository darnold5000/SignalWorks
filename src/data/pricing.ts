export type WebsiteOffering = {
  id: string;
  name: string;
  price: string;
  description: string;
  examples: string[];
  features: string[];
};

export type PartnershipLevel = {
  id: string;
  name: string;
  price: string;
  priceLabel: string;
  examples: string[];
  includesIntro?: string;
  includes: string[];
  idealFor?: string;
};

export type PaymentModel = {
  id: string;
  name: string;
  badge?: string;
  headline: string;
  copy: string;
  partnershipValue?: string;
  launchPrice?: string;
  launchLabel?: string;
  monthlyPrice?: string;
  monthlyLabel?: string;
  monthlyNote?: string;
  traditionalPricing?: { label: string; price: string }[];
  ownershipNote?: string;
  optional?: string;
  cta: string;
  ctaHref: string;
};

export const websiteOfferings: WebsiteOffering[] = [
  {
    id: "launch-website",
    name: "Launch Website",
    price: "$995+",
    description:
      "For businesses that simply need a professional online presence.",
    examples: [
      "Hair salons",
      "Barbers",
      "Restaurants",
      "Contractors",
      "Local service businesses",
    ],
    features: [
      "1–5 pages",
      "Mobile responsive",
      "Contact form",
      "Google Maps",
      "Reviews",
      "Booking or calendar integration (if needed)",
      "Basic Local SEO",
      "AI-ready structure",
    ],
  },
  {
    id: "business-website",
    name: "Business Website",
    price: "$3,500+",
    description: "For businesses actively trying to grow.",
    examples: [
      "Financial advisors",
      "Gyms",
      "Medical practices",
      "Professional services",
      "Growing companies",
    ],
    features: [
      "Multiple service pages",
      "Blog and resources",
      "Lead generation",
      "Technical SEO",
      "AI optimization",
      "Content strategy",
      "Custom design",
      "Analytics",
      "Landing pages",
    ],
  },
  {
    id: "custom-software",
    name: "Custom Software",
    price: "Custom quote",
    description: "For businesses needing more than a website.",
    examples: [
      "Dashboards",
      "Client portals",
      "Membership sites",
      "Scheduling systems",
      "AI tools",
      "Internal software",
      "Automation",
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

export const paymentModels: PaymentModel[] = [
  {
    id: "growth-partnership",
    name: "Growth Partnership",
    badge: "Recommended",
    headline: "Lower upfront investment. Everything managed.",
    copy: "Perfect for businesses that want predictable monthly costs instead of a large upfront investment.",
    partnershipValue:
      "The website is only one part of the partnership. You also receive ongoing engineering, hosting, monitoring, maintenance, security, SEO, AI optimization, and continuous improvements.",
    launchPrice: "$750–995",
    launchLabel: "Website Launch",
    monthlyPrice: "$99",
    monthlyLabel: "Monthly Partnership",
    monthlyNote:
      "Monthly pricing depends on business complexity and support requirements.",
    ownershipNote:
      "Signal Works retains ownership during the partnership because the lower launch investment is subsidized by the ongoing agreement. After the minimum partnership term, ownership may transfer for a predefined buyout amount or according to the agreement.",
    cta: "Let's Talk",
    ctaHref: "/contact",
  },
  {
    id: "traditional-project",
    name: "Traditional Project",
    headline: "Own your website from day one.",
    copy: "Ideal for businesses that prefer a traditional one-time investment and complete ownership immediately.",
    traditionalPricing: [
      { label: "Launch Website", price: "$995+" },
      { label: "Business Website", price: "$4,500+" },
    ],
    ownershipNote: "You own your website from day one.",
    optional: "Ongoing Partnership available after launch.",
    cta: "Request Proposal",
    ctaHref: "/contact",
  },
];

export const partnershipLevels: PartnershipLevel[] = [
  {
    id: "local-business",
    name: "Local Business",
    price: "$99",
    priceLabel: "starting around / month",
    examples: [
      "Hair salons",
      "Restaurants",
      "Contractors",
      "Small local businesses",
    ],
    includes: [
      "Hosting",
      "SSL",
      "Security",
      "Monitoring",
      "Software updates",
      "Basic Local SEO",
      "AI-ready structure",
      "Minor content updates",
      "Email support",
    ],
    idealFor: "websites that change only occasionally",
  },
  {
    id: "growth-business",
    name: "Growth Business",
    price: "$199",
    priceLabel: "starting around / month",
    examples: [
      "Gyms",
      "Financial advisors",
      "Medical offices",
      "Professional services",
    ],
    includesIntro: "Everything in Local Business, plus:",
    includes: [
      "Technical SEO",
      "Ongoing AI optimization",
      "Monthly analytics review",
      "Blog and content publishing",
      "Landing page updates",
      "Conversion improvements",
      "Priority support",
      "More monthly engineering time",
    ],
    idealFor: "businesses actively investing in growth",
  },
  {
    id: "digital-partner",
    name: "Digital Partner",
    price: "$399–599+",
    priceLabel: "starting around / month",
    examples: [
      "Membership platforms",
      "Client portals",
      "Custom integrations",
      "Internal tools",
      "Automation",
      "AI products",
    ],
    includesIntro: "Everything in Growth Business, plus:",
    includes: [
      "Custom feature development",
      "Workflow automation",
      "Database changes",
      "API integrations",
      "AI enhancements",
      "New functionality every month",
      "Strategic consulting",
      "Highest priority support",
    ],
    idealFor: "businesses that need ongoing engineering capacity",
  },
];

export const monthlyPricingComparison = {
  title: "Why monthly pricing changes",
  description:
    "Every client receives the same quality engineering. The difference is not hosting — it's how much ongoing work Signal Works performs. You're paying for ongoing engineering capacity, not hosting.",
  columns: ["Local Business", "Growth Business", "Digital Partner"] as const,
  rows: [
    { feature: "Hosting", local: "✓", growth: "✓", digital: "✓" },
    { feature: "Security", local: "✓", growth: "✓", digital: "✓" },
    { feature: "Updates", local: "✓", growth: "✓", digital: "✓" },
    { feature: "SEO", local: "Basic", growth: "Advanced", digital: "Strategy" },
    {
      feature: "AI Optimization",
      local: "Foundation",
      growth: "Monthly",
      digital: "Continuous",
    },
    {
      feature: "Content Changes",
      local: "Minor",
      growth: "Regular",
      digital: "Ongoing",
    },
    {
      feature: "Analytics",
      local: "Dashboard",
      growth: "Monthly review",
      digital: "Strategy",
    },
    {
      feature: "Integrations",
      local: "Basic",
      growth: "Moderate",
      digital: "Complex",
    },
    {
      feature: "Monthly engineering time",
      local: "Low",
      growth: "Medium",
      digital: "High",
    },
  ],
} as const;

export const pricingPhilosophy =
  "Professional websites without agency pricing.";

export const pricingHeroDescription =
  "Every business deserves a professional online presence. Whether you want a simple marketing website or an evolving digital platform, there's a pricing model that fits your business.";

export const pricingReassurance =
  "Not sure which option fits? We'll recommend the right approach after a short conversation.";

export const pricingPhilosophyLines = [
  "Build once.",
  "Improve continuously.",
  "Better signal. Less noise.",
] as const;

export const pricingFaqs = [
  {
    question: "What's the difference between Launch and Business websites?",
    answer:
      "Launch Websites (starting around $995+) are focused sites for local businesses that need a credible online presence — salons, restaurants, contractors, and similar. Business Websites (starting around $3,500+) are built for companies actively trying to grow, with service pages, technical SEO, AI optimization, blogs, landing pages, and a stronger content strategy.",
  },
  {
    question: "Do I own my website?",
    answer:
      "With a Traditional Project, you own your website immediately upon final payment. With a Growth Partnership, Signal Works retains ownership during the partnership because the lower launch investment is subsidized by the ongoing agreement. After the minimum partnership term, ownership may transfer for a predefined buyout amount or according to your agreement.",
  },
  {
    question: "What is the difference between Growth Partnership and Traditional Project?",
    answer:
      "These are investment models, not different websites. Growth Partnership spreads the investment with a smaller Website Launch plus monthly partnership — ideal when you want predictable costs and continuous improvements. Traditional Project is a one-time upfront payment with full ownership from day one, with optional ongoing partnership after launch.",
  },
  {
    question: "What do the partnership levels mean?",
    answer:
      "Local Business, Growth Business, and Digital Partner are levels of ongoing engineering partnership — not hosting tiers. Each level reflects how much ongoing work Signal Works performs each month: from keeping a local site fast and secure, to active growth and content work, to custom feature development and strategic consulting.",
  },
  {
    question: "How are custom software projects priced?",
    answer:
      "Custom software is scoped through discovery based on your business goals — dashboards, client portals, membership sites, AI tools, automation, and internal applications. Every project starts with a conversation.",
  },
];
