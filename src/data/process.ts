export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your business, audience, goals, and constraints. Identify what matters most and what can be simplified.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Define scope, architecture, content structure, and success metrics. Create a clear roadmap before writing code.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Craft the visual language, page layouts, and user flows. Focus on clarity, hierarchy, and conversion paths.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Develop with modern tools — Next.js, TypeScript, Tailwind — with SEO, AEO, and performance built in from day one.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Deploy to production, configure analytics, verify SEO structure, and ensure everything works across devices.",
  },
  {
    number: "06",
    title: "Improve",
    description:
      "Monitor performance, gather feedback, and iterate. Websites and applications should evolve with your business.",
  },
];
