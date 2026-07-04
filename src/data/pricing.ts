export type WebsiteOffering = {
  id: string;
  name: string;
  description: string;
  launchPrice?: string;
  monthlyPrice?: string;
  monthlyNote?: string;
  customQuote?: boolean;
};

export const pricingHero = {
  title: "Professional websites without agency pricing.",
  description:
    "Launch with a predictable monthly partnership that includes hosting, security, updates, support, and continuous improvements.",
  primaryCta: { label: "Get a Free Consultation", href: "/contact" },
  ctaNote:
    "We'll discuss your business, recommend the right website partnership, and provide a no-pressure estimate.",
} as const;

export const partnershipPhilosophy = {
  title: "Build once. Improve continuously.",
  copy: "Your website should not become outdated six months after launch. Every Signal Works partnership includes what most businesses normally manage separately: hosting, security, monitoring, updates, support, performance optimization, and ongoing improvements.",
  principles: [
    "No juggling hosting companies.",
    "No hiring freelancers every time something changes.",
    "One partner.",
    "One monthly investment.",
  ],
} as const;

export const websiteOfferingsSection = {
  title: "Choose the website that fits your business.",
} as const;

export const websiteOfferings: WebsiteOffering[] = [
  {
    id: "launch-website",
    name: "Launch Website",
    description:
      "For local businesses that need a clean, professional online presence.",
    launchPrice: "$500",
    monthlyPrice: "$99",
  },
  {
    id: "growth-website",
    name: "Growth Website",
    description:
      "For businesses where the website actively generates leads.",
    launchPrice: "$995",
    monthlyPrice: "$199",
    monthlyNote:
      "Most Growth Website partnerships range between $199–399/month depending on content, SEO, integrations, AI optimization, and ongoing support needs.",
  },
  {
    id: "custom-software",
    name: "Custom Software",
    description:
      "For dashboards, portals, automation, AI tools, scheduling systems, internal software, and custom integrations.",
    customQuote: true,
  },
];

export const growthOptions = {
  title: "Grow when you're ready.",
  intro:
    "Most businesses don't need everything on day one. Every Signal Works website is built to expand as your business grows.",
  options: [
    "Online scheduling",
    "Payments",
    "SEO campaigns",
    "AI optimization",
    "Blog publishing",
    "CRM integrations",
    "Customer portals",
    "Membership areas",
    "Automation",
    "Custom software",
  ],
} as const;

export const traditionalOwnership = {
  title: "Prefer to purchase your website outright?",
  copy: "Some businesses prefer a traditional one-time investment. Signal Works offers that too.",
  pricing: [
    { label: "Launch Website", price: "$995" },
    { label: "Growth Website", price: "$3,750" },
  ],
  optional: "Optional monthly partnership available after launch.",
} as const;

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
      "Launch Websites are focused sites for local businesses that need a credible online presence. Growth Websites are built for companies where the website actively generates leads, with multi-page architecture, advanced SEO, AI optimization, blogs, landing pages, CRM integrations, and priority support.",
  },
  {
    question: "Do I own my website?",
    answer:
      "With a traditional purchase, you own your website upon final payment. With a monthly partnership, Signal Works manages and improves your site as your long-term technology partner. We'll explain ownership options clearly before you start.",
  },
];
