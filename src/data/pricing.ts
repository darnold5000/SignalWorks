export type PricingPlan = {
  id: string;
  name: string;
  description: string;
  type: "partnership" | "outright" | "custom";
  launchPrice?: string;
  monthlyPrice?: string;
  monthlyPriceLabel?: string;
  monthlyNote?: string;
  outrightTiers?: { label: string; price: string }[];
  includes: string[];
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
  note: "Monthly partnership pricing is based on the level of ongoing work required — not hosting alone. A simple local business website may only need occasional updates, while a growth-focused business may need SEO, content publishing, integrations, analytics, and regular improvements.",
} as const;

export const pricingPlans: PricingPlan[] = [
  {
    id: "launch-partnership",
    name: "Launch Website",
    description:
      "A polished, credible web presence for businesses launching or refreshing their brand online.",
    type: "partnership",
    launchPrice: "$295",
    monthlyPrice: "$49/month",
    monthlyPriceLabel: "Starting at",
    monthlyNote:
      "Best for local businesses with a smaller website and occasional updates.",
    includes: [
      "Hosting, security, and updates included",
      "Ongoing support and performance monitoring",
      "Custom 3–5 page website",
      "Mobile-responsive design",
      "Contact form and location integration",
    ],
  },
  {
    id: "growth-partnership",
    name: "Growth Website",
    description:
      "A lead-generating website built to grow traffic, trust, and inquiries over time.",
    type: "partnership",
    launchPrice: "$495",
    monthlyPrice: "$99–399/month",
    monthlyPriceLabel: "Typically",
    monthlyNote:
      "Final monthly pricing depends on content updates, SEO/AEO needs, integrations, analytics, and ongoing support requirements.",
    includes: [
      "Everything in Launch, plus priority support",
      "Ongoing SEO, content, and conversion improvements",
      "6–10 page custom site",
      "Blog or resources section",
      "Analytics and conversion tracking",
    ],
  },
  {
    id: "purchase-outright",
    name: "Purchase Outright",
    description:
      "For businesses that prefer a one-time investment and want to manage hosting, security, and ongoing technical maintenance themselves.",
    type: "outright",
    outrightTiers: [
      { label: "Launch Website", price: "$1,499" },
      { label: "Growth Website", price: "$3,750" },
    ],
    includes: [
      "Custom website built and delivered to you",
      "You manage hosting, security, and updates",
      "Optional monthly partnership available after launch",
    ],
  },
  {
    id: "custom-software",
    name: "Custom Software",
    description:
      "Dashboards, portals, automation, AI tools, and custom integrations — scoped to your business.",
    type: "custom",
    includes: [
      "Discovery and scoping",
      "Custom build for your workflow",
      "Clear estimate before work begins",
    ],
  },
];

/** @deprecated Use pricingPlans */
export const websiteOfferings = pricingPlans;

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
      "Launch Websites are focused sites for businesses that need a credible, professional online presence. Growth Websites are built for companies where the website actively generates leads — with multi-page architecture, advanced SEO, blogs, landing pages, and priority support.",
  },
  {
    question: "What is Purchase Outright?",
    answer:
      "Purchase Outright is for businesses that want a one-time website investment and prefer to handle hosting, security, and technical maintenance on their own. We build and deliver your site — you manage the ongoing technical side. A monthly partnership is still available afterward if you'd like us to take that over.",
  },
  {
    question: "Do I own my website?",
    answer:
      "With Purchase Outright, the website is yours to manage and host as you choose. With a monthly partnership, Signal Works manages and improves your site as your long-term partner. We'll explain the options clearly before you start.",
  },
];
