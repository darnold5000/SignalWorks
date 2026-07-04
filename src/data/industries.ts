export const trustedIndustries = [
  "Financial Services",
  "Youth Sports",
  "Professional Services",
  "Local Businesses",
] as const;

export type IndustryExperience = {
  industry: string;
  description: string;
  /** Reserved for future client logos, testimonials, or case study links. */
  clients?: { name: string; href?: string }[];
};

export const industryExperience: IndustryExperience[] = [
  {
    industry: "Financial Services",
    description:
      "Premium websites and client-facing platforms for advisors, wealth managers, and professional firms.",
  },
  {
    industry: "Youth Sports",
    description:
      "Facility websites, scheduling systems, scouting platforms, registration tools, and competition software.",
  },
  {
    industry: "Professional Services",
    description:
      "Credibility-focused websites designed to generate leads, build trust, and rank well in search.",
  },
  {
    industry: "AI & Automation",
    description:
      "Practical AI tools and workflow automation that eliminate repetitive work and improve operations.",
  },
];
