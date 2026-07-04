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
    name: "Starter Website",
    price: "$3,500",
    period: "starting at",
    description: "Best for small businesses needing a modern online presence.",
    includes: [
      "5–7 pages",
      "Mobile responsive design",
      "Technical SEO",
      "Contact form",
      "Basic analytics",
      "Vercel deployment",
    ],
    cta: "Start a Project",
    ctaHref: "/contact",
  },
  {
    name: "Premium Website",
    price: "$6,500",
    period: "starting at",
    description:
      "Best for professional service businesses that need stronger positioning, content structure, and SEO/AEO foundation.",
    includes: [
      "10–20 pages",
      "Service landing pages",
      "Blog/resource setup",
      "SEO metadata",
      "Schema markup",
      "AEO-ready FAQ/answer sections",
      "Analytics",
      "Contact form",
      "Launch support",
    ],
    highlighted: true,
    cta: "Start a Project",
    ctaHref: "/contact",
  },
  {
    name: "Website Care Plan",
    price: "$199",
    period: "per month",
    description: "Ongoing hosting, updates, and maintenance for continuous improvement.",
    includes: [
      "Hosting coordination",
      "Small content updates",
      "Blog publishing support",
      "Analytics review",
      "SEO/AEO health checks",
      "Performance monitoring",
      "Security checks",
      "Priority support",
    ],
    cta: "Get Started",
    ctaHref: "/contact",
  },
  {
    name: "Custom Application",
    price: "Custom quote",
    description:
      "For apps, dashboards, portals, AI tools, marketplaces, and automation systems.",
    includes: [
      "Discovery and planning",
      "Database design",
      "Authentication and user roles",
      "Custom workflows",
      "AI integrations",
      "Deployment",
      "Ongoing support options",
    ],
    cta: "Request a Quote",
    ctaHref: "/contact",
  },
];

export const homepagePricingPreview: PricingTier[] = [
  {
    name: "Launch Website",
    price: "$3,500",
    period: "starting at",
    description: "For businesses that need a modern, fast, professional website.",
    includes: [
      "Custom design",
      "Mobile responsive build",
      "Technical SEO",
      "AEO-ready structure",
      "Contact form",
      "Analytics",
      "Vercel deployment",
    ],
    cta: "Start a Project",
    ctaHref: "/contact",
  },
  {
    name: "Growth Website",
    price: "$299",
    period: "per month",
    description:
      "For businesses that want hosting, updates, publishing, SEO maintenance, and ongoing improvements.",
    includes: [
      "Hosting",
      "Security",
      "Small content updates",
      "Blog publishing",
      "Analytics review",
      "SEO/AEO checks",
      "Performance monitoring",
    ],
    highlighted: true,
    cta: "Learn More",
    ctaHref: "/pricing",
  },
  {
    name: "Custom Application",
    price: "Custom quote",
    description:
      "For dashboards, portals, AI tools, marketplaces, reporting systems, and internal business software.",
    includes: [
      "Discovery",
      "Database design",
      "Authentication",
      "User workflows",
      "AI integrations",
      "Deployment",
      "Ongoing support",
    ],
    cta: "Request a Quote",
    ctaHref: "/contact",
  },
];

export const pricingDisclaimer =
  "Pricing depends on project scope, content needs, integrations, and ongoing support requirements.";
