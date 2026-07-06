export type WebsiteOffering = {
  id: string;
  name: string;
  description: string;
  launchPrice?: string;
  monthlyPrice?: string;
  monthlyNote?: string;
  outrightPrice?: string;
  outrightIncludes?: string[];
  partnershipIncludes?: string[];
  customQuote?: boolean;
};

export const pricingHero = {
  title: "Clear pricing for websites and custom software.",
  description:
    "Website partnerships start predictably. Custom software, AI tools, and automation are scoped to your project — we'll recommend the right investment after understanding your goals.",
  primaryCta: { label: "Get a Free Consultation", href: "/contact" },
  ctaNote:
    "We'll discuss your goals — whether that's a website, a custom app, or automation — and provide a clear estimate with no pressure.",
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
  note: "Optional monthly partnership available after an outright purchase for hosting, updates, and ongoing improvements.",
} as const;

export const websiteOfferings: WebsiteOffering[] = [
  {
    id: "launch-website",
    name: "Launch Website",
    description:
      "A polished, credible web presence for businesses launching or refreshing their brand online.",
    launchPrice: "$500",
    monthlyPrice: "$99",
    outrightPrice: "$995",
    partnershipIncludes: [
      "Hosting, security, and updates included",
      "Ongoing support and performance monitoring",
    ],
    outrightIncludes: [
      "Custom 3–5 page website",
      "Mobile-responsive design",
      "Contact form and location integration",
      "Basic SEO foundation",
      "Fast, secure hosting setup",
      "You own the site upon final payment",
    ],
  },
  {
    id: "growth-website",
    name: "Growth Website",
    description:
      "A lead-generating website built to grow traffic, trust, and inquiries over time.",
    launchPrice: "$995",
    monthlyPrice: "$199",
    outrightPrice: "$3,750",
    monthlyNote:
      "Most Growth Website partnerships range between $199–399/month depending on content, SEO, integrations, AI optimization, and ongoing support needs.",
    partnershipIncludes: [
      "Everything in Launch, plus priority support",
      "Ongoing SEO, content, and conversion improvements",
    ],
    outrightIncludes: [
      "6–10 page custom site architecture",
      "Advanced SEO and AI-search structure",
      "Blog or resources section",
      "Service and landing pages",
      "Analytics and conversion tracking",
      "You own the site upon final payment",
    ],
  },
  {
    id: "custom-software",
    name: "Custom Software",
    description:
      "Dashboards, portals, automation, AI tools, and custom integrations — scoped to cut manual work and surface the customer and operational data your team needs.",
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
      "Launch Websites are focused sites for businesses that need a credible, professional online presence. Growth Websites are built for companies where the website actively generates leads — with multi-page architecture, advanced SEO, AI optimization, blogs, landing pages, CRM integrations, and priority support.",
  },
  {
    question: "Do I own my website?",
    answer:
      "With an outright purchase, you own your website upon final payment. With a monthly partnership, Signal Works manages and improves your site as your long-term technology partner. We'll explain ownership options clearly before you start.",
  },
];
