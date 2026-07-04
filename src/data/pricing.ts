export type PricingTier = {
  name: string;
  price: string;
  period?: string;
  description: string;
  includes: string[];
  highlighted?: boolean;
  cta: string;
  ctaHref: string;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Professional Website",
    price: "$4,500+",
    description:
      "A credible, fast, conversion-focused website for businesses ready to win online.",
    includes: [
      "5–7 custom pages",
      "Mobile responsive design",
      "Technical SEO foundation",
      "Contact form and analytics",
      "Vercel deployment",
      "Launch support",
    ],
    cta: "Start a Project",
    ctaHref: "/contact",
  },
  {
    name: "Growth Platform",
    price: "$7,500+",
    description:
      "Website + SEO + blog + AI-ready content structure for businesses that need to grow.",
    includes: [
      "10–20 custom pages",
      "Service landing pages",
      "Blog and resource setup",
      "Schema markup and AEO structure",
      "FAQ and answer page architecture",
      "Analytics and launch support",
    ],
    highlighted: true,
    cta: "Start a Project",
    ctaHref: "/contact",
  },
  {
    name: "Custom Software",
    price: "Custom quote",
    description:
      "Dashboards, portals, internal tools, marketplaces, and AI-powered business applications.",
    includes: [
      "Discovery and architecture",
      "Database design",
      "Authentication and user roles",
      "Custom workflows",
      "AI integrations",
      "Deployment and support options",
    ],
    cta: "Request a Quote",
    ctaHref: "/contact",
  },
  {
    name: "Ongoing Partnership",
    price: "$199–299",
    period: "per month",
    description:
      "Hosting, updates, SEO, monitoring, and priority support — launch is just the beginning.",
    includes: [
      "Hosting coordination",
      "Small content updates",
      "Blog publishing support",
      "SEO and AEO health checks",
      "Performance monitoring",
      "Security checks",
      "Priority support",
    ],
    cta: "Get Started",
    ctaHref: "/contact",
  },
];

export const homepagePricingPreview: PricingTier[] = [
  {
    name: "Professional Website",
    price: "$4,500+",
    description: "A credible, fast website built to win business and convert visitors.",
    includes: [
      "Custom design",
      "Mobile responsive build",
      "Technical SEO",
      "Contact form and analytics",
      "Vercel deployment",
    ],
    cta: "Start a Project",
    ctaHref: "/contact",
  },
  {
    name: "Growth Platform",
    price: "$7,500+",
    description: "Website + SEO + blog + AI-ready content for businesses ready to grow.",
    includes: [
      "10–20 custom pages",
      "Service landing pages",
      "Blog and resource setup",
      "Schema and AEO structure",
      "Launch support",
    ],
    highlighted: true,
    cta: "Start a Project",
    ctaHref: "/contact",
  },
  {
    name: "Custom Software",
    price: "Custom quote",
    description: "Dashboards, portals, AI tools, marketplaces, and internal business software.",
    includes: [
      "Discovery and planning",
      "Database and authentication",
      "Custom workflows",
      "AI integrations",
      "Deployment and support",
    ],
    cta: "Request a Quote",
    ctaHref: "/contact",
  },
];

export const pricingDisclaimer =
  "Final pricing depends on project scope, content needs, integrations, and ongoing support requirements.";
