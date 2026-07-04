export type WebsiteOffering = {
  id: string;
  name: string;
  description: string;
  examples: string[];
  features: string[];
  launchPrice: string;
  monthlyPrice: string;
  monthlyNote?: string;
};

export const pricingHero = {
  title: "Professional websites backed by a long-term technology partnership.",
  description:
    "Launch with a predictable monthly partnership that includes hosting, security, updates, technical support, and continuous improvements.",
  descriptionSecondary:
    "Whether you're a one-person business or an established company, Signal Works grows with you.",
  primaryCta: { label: "Start Your Project", href: "/contact" },
  secondaryCta: { label: "Schedule a Conversation", href: "/contact" },
} as const;

export const partnershipPhilosophy = {
  title: "Build once. Improve continuously.",
  paragraphs: [
    "Your website shouldn't become outdated six months after launch.",
    "Every Signal Works partnership includes everything required to keep your website online, secure, fast, and improving over time.",
  ],
  principles: [
    "No juggling hosting companies.",
    "No hiring freelancers every time you need a change.",
    "One partner.",
    "One monthly investment.",
  ],
} as const;

export const websiteOfferings: WebsiteOffering[] = [
  {
    id: "launch-website",
    name: "Launch Website",
    description:
      "For businesses that need a clean, professional online presence.",
    examples: [
      "Hair salons",
      "Barbers",
      "Restaurants",
      "Contractors",
      "Local service businesses",
    ],
    launchPrice: "$500",
    monthlyPrice: "$99",
    features: [
      "1–5 pages",
      "Responsive design",
      "Contact form",
      "Maps",
      "Reviews",
      "Calendar or booking integration",
      "Basic Local SEO",
      "AI-ready structure",
    ],
  },
  {
    id: "growth-website",
    name: "Growth Website",
    description:
      "For businesses where the website actively generates leads.",
    examples: [
      "Financial advisors",
      "Medical practices",
      "Gyms",
      "Professional services",
      "Multi-location businesses",
    ],
    launchPrice: "$995",
    monthlyPrice: "$199",
    monthlyNote:
      "Most Growth Website partnerships range between $199–399/month, depending on the level of ongoing support and business needs.",
    features: [
      "Multi-page architecture",
      "Blog and resources",
      "Advanced SEO",
      "AI optimization",
      "Analytics",
      "Landing pages",
      "Lead generation",
      "CRM integrations",
      "Scheduling integrations",
      "Priority support",
    ],
  },
];

export const partnershipVaries = {
  title: "Your business determines the partnership—not the website.",
  intro:
    "Every client receives the same engineering quality. The difference is the amount of ongoing work.",
  examples: [
    {
      label: "A hair salon may simply need",
      items: [
        "Hosting",
        "Security",
        "Minor updates",
        "Booking integration",
      ],
    },
    {
      label: "A financial advisor may require",
      items: [
        "Regular content publishing",
        "SEO improvements",
        "AI optimization",
        "Landing pages",
        "Analytics reviews",
        "Compliance-related updates",
        "CRM integrations",
      ],
    },
  ],
  closing:
    "Both receive professional engineering. One simply requires significantly more ongoing attention.",
} as const;

export const everythingIncluded = {
  title: "Everything included",
  emphasis:
    "This replaces multiple subscriptions and vendors with one predictable monthly partnership.",
  items: [
    "Hosting",
    "SSL",
    "Security",
    "Monitoring",
    "Daily backups",
    "Software updates",
    "Technical support",
    "Performance optimization",
    "Minor content updates",
    "Technical SEO foundation",
    "AI-ready structure",
  ],
} as const;

export const growthOptions = {
  title: "Grow your website over time.",
  intro:
    "Most businesses don't need everything on day one. Every Signal Works website is built to expand as your business grows.",
  options: [
    "Advanced SEO campaigns",
    "AI Search Optimization",
    "Blog writing and publishing",
    "Customer portals",
    "Online payments",
    "Appointment scheduling",
    "CRM integrations",
    "Email marketing",
    "Membership areas",
    "Automation",
    "AI assistants",
    "Custom software",
    "API integrations",
    "Additional landing pages",
  ],
  closing: {
    lines: [
      "Start with what you need today.",
      "Expand when your business is ready.",
      "No rebuild required.",
    ],
  },
} as const;

export const traditionalOwnership = {
  title: "Prefer to purchase your website outright?",
  copy: "Some businesses prefer a traditional one-time investment. Signal Works offers that too.",
  pricing: [
    { label: "Launch Website", price: "$995" },
    { label: "Growth Website", price: "$3,750" },
  ],
  optional: "Optional Monthly Partnership available after launch.",
} as const;

export const pricingPhilosophyLines = [
  "Build once. Improve continuously.",
  "Better signal. Less noise.",
] as const;

export const pricingReassurance =
  "Not sure which option fits? We'll recommend the right approach after a short conversation.";

export const pricingFaqs = [
  {
    question: "Why does the monthly partnership cost vary?",
    answer:
      "Because every business has different ongoing needs. Hosting is only a small part of what we provide. Some businesses simply need occasional updates. Others require ongoing SEO, AI optimization, content publishing, integrations, analytics, and strategic improvements.",
  },
  {
    question: "Can I add features later?",
    answer:
      "Absolutely. Every Signal Works website is designed to grow. You can add scheduling, payments, CRM integrations, customer portals, blogs, AI tools, automation, and custom functionality without rebuilding your website.",
  },
  {
    question: "What's included every month?",
    answer:
      "Everything required to keep your website online, secure, fast, and improving — hosting, security, updates, monitoring, backups, support, performance optimization, technical SEO, and AI-ready structure. Plus ongoing improvements based on your partnership level.",
  },
  {
    question: "What's the difference between Launch and Growth websites?",
    answer:
      "Launch Websites are focused sites for local businesses that need a credible online presence — salons, restaurants, contractors, and similar. Growth Websites are built for companies where the website actively generates leads, with multi-page architecture, advanced SEO, AI optimization, blogs, landing pages, CRM integrations, and priority support.",
  },
  {
    question: "Do I own my website?",
    answer:
      "With a traditional purchase, you own your website upon final payment. With a monthly partnership, Signal Works manages and improves your site as your long-term technology partner. We'll explain ownership options clearly before you start.",
  },
];
