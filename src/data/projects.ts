export type ProjectCategory =
  | "Business Websites"
  | "Sports Technology"
  | "AI Tools"
  | "Marketplaces"
  | "Internal Apps";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  categories: string[];
  summary: string;
  description: string;
  featured: boolean;
  technologies: string[];
  result: string;
  problem: string;
  solution: string;
  features: string[];
  results: string[];
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "market-street",
    title: "Market Street Wealth Management",
    category: "Business Websites",
    categories: ["Business Website", "SEO", "AEO"],
    summary:
      "Premium financial advisor website built with modern design, trust-focused content, fee transparency, and AI-answer optimized pages.",
    description:
      "Premium financial advisor website with SEO, AEO, blog architecture, client login, fee transparency, and trust-focused design.",
    featured: true,
    technologies: ["Next.js", "TypeScript", "Tailwind", "Vercel", "Schema.org"],
    result: "A credible, high-trust digital presence built for search and AI discovery.",
    problem:
      "The firm needed a website that communicated credibility, transparency, and expertise — not generic financial advisor templates. Visitors needed clear paths to services, fees, and client resources while search engines and AI assistants needed structured, authoritative content.",
    solution:
      "Built a premium Next.js site with editorial design, dedicated service landing pages, fee transparency, client login integration, blog architecture, and comprehensive SEO/AEO structure including FAQ schema and answer-focused content sections.",
    features: [
      "Premium homepage with trust-focused messaging",
      "Service landing pages",
      "Our Fees transparency page",
      "Client Login dropdown",
      "Blog migration and architecture",
      "Financial Answers section",
      "FAQ schema markup",
      "Technical SEO metadata",
      "Vercel deployment",
    ],
    results: [
      "Clear positioning as a premium financial advisory firm",
      "Structured content optimized for Google and AI answer engines",
      "Reduced content clutter with improved hierarchy and scanability",
      "Foundation for ongoing content and SEO growth",
    ],
    accent: "from-neutral-800 to-neutral-600",
  },
  {
    slug: "zero-limits",
    title: "Zero Limits Baseball",
    category: "Business Websites",
    categories: ["Business Website", "Sports Facility"],
    summary:
      "Modern sports performance facility website built to replace an outdated site with a fast, mobile-first, premium design.",
    description:
      "Modern sports facility website built for speed, mobile experience, strong CTAs, and easy updates.",
    featured: true,
    technologies: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    result: "A fast, mobile-first site that drives program inquiries and facility visits.",
    problem:
      "The facility's existing website was outdated, slow on mobile, and failed to communicate the quality of their training programs. Prospective athletes and parents needed a clear, compelling reason to visit.",
    solution:
      "Designed and built a modern, performance-focused website with strong hero messaging, dedicated program pages, clear CTAs, and SEO-ready structure — all optimized for speed on Vercel.",
    features: [
      "Impactful hero section",
      "Program pages",
      "Facility messaging",
      "Strong conversion CTAs",
      "SEO structure",
      "Mobile responsive design",
    ],
    results: [
      "Dramatically improved mobile experience",
      "Clear program discovery for prospective athletes",
      "Professional brand presence matching facility quality",
      "Fast load times on modern hosting",
    ],
    accent: "from-neutral-700 to-neutral-500",
  },
  {
    slug: "dugout-intel",
    title: "Dugout Intel",
    category: "AI Tools",
    categories: ["AI Application", "Baseball Scouting"],
    summary:
      "AI-powered youth baseball scouting tool that converts GameChanger screenshots into structured opponent reports.",
    description:
      "AI-powered baseball scouting platform that turns GameChanger screenshots into scouting reports.",
    featured: true,
    technologies: ["Next.js", "Supabase", "OpenAI", "TypeScript", "Vercel"],
    result: "Coaches save hours of manual stat entry with AI-powered scouting reports.",
    problem:
      "Youth baseball coaches spend significant time manually extracting stats from GameChanger screenshots to prepare scouting reports before games. The process is tedious, error-prone, and takes time away from coaching.",
    solution:
      "Built an AI-powered platform where coaches upload GameChanger screenshots, AI vision extracts player and stat data, and structured opponent scouting reports are generated automatically with batting and pitching breakdowns.",
    features: [
      "Screenshot upload workflow",
      "AI vision extraction",
      "Player data tables",
      "Batting stats analysis",
      "Pitching stats analysis",
      "Opponent report generation",
      "Supabase authentication",
      "Exportable scouting reports",
    ],
    results: [
      "Hours of manual data entry eliminated per week",
      "Consistent, structured scouting reports",
      "Faster game preparation for coaching staff",
      "Demonstrated practical AI application in sports",
    ],
    accent: "from-neutral-900 to-neutral-700",
  },
  {
    slug: "gymnastics-meet-tracker",
    title: "Gymnastics Meet Tracker",
    category: "Sports Technology",
    categories: ["Custom Web App", "Sports Technology"],
    summary:
      "Custom gymnastics tracking platform for meet schedules, athletes, scores, and reporting.",
    description:
      "Custom meet tracking application for gymnastics data, schedules, scores, and reporting.",
    featured: true,
    technologies: ["Next.js", "React", "Database", "Cloud"],
    result: "Centralized meet data management replacing scattered spreadsheets and manual tracking.",
    problem:
      "Gymnastics meet data — schedules, athlete rosters, scores, and results — was spread across spreadsheets, paper forms, and disconnected tools. Organizers needed a single system to track everything in real time.",
    solution:
      "Built a custom web application for meet tracking with athlete management, score workflows, schedule views, admin tools, and data-driven reporting pages.",
    features: [
      "Meet tracking dashboard",
      "Athlete data management",
      "Score entry workflows",
      "Admin tools",
      "Schedule views",
      "Data-driven reporting pages",
    ],
    results: [
      "Single source of truth for meet data",
      "Reduced manual data entry during events",
      "Real-time score and schedule visibility",
      "Foundation for future analytics and reporting",
    ],
    accent: "from-neutral-800 to-neutral-600",
  },
  {
    slug: "cheer-meet-tracker",
    title: "Cheer Meet Tracker",
    category: "Sports Technology",
    categories: ["Custom Web App", "Sports Technology"],
    summary:
      "Cheer competition tracking platform designed around event schedules, teams, divisions, and performance data.",
    description:
      "Cheer competition tracking platform for event schedules, teams, divisions, and performance data.",
    featured: false,
    technologies: ["Next.js", "Cloud Run", "Data Ingestion", "Automation"],
    result: "Streamlined competition management from event ingestion through reporting.",
    problem:
      "Cheer competitions involve complex schedules across multiple divisions, teams, and performance rounds. Tracking everything manually created bottlenecks and errors during live events.",
    solution:
      "Developed a custom platform with event ingestion, schedule tracking, team and division organization, cloud-based workflows, and reporting pages for organizers and coaches.",
    features: [
      "Event data ingestion",
      "Schedule tracking",
      "Team and division organization",
      "Cloud-based workflows",
      "Reporting pages",
      "Performance data views",
    ],
    results: [
      "Organized competition data in one platform",
      "Faster schedule updates during live events",
      "Clear division and team visibility",
      "Automated data workflows reducing manual work",
    ],
    accent: "from-neutral-700 to-neutral-500",
  },
  {
    slug: "ondeck-reps",
    title: "OnDeck Reps",
    category: "Marketplaces",
    categories: ["Marketplace", "Youth Sports"],
    summary:
      "Marketplace concept for youth baseball players to find live reps, including request posting, availability, player profiles, and interest workflows.",
    description:
      "Marketplace for youth baseball players to find live reps with profiles, requests, and availability workflows.",
    featured: false,
    technologies: ["Next.js", "Supabase", "TypeScript", "Tailwind", "RLS"],
    result: "A connected marketplace concept linking players who need reps with available teammates.",
    problem:
      "Youth baseball players often need extra live at-bats or pitching reps but lack an easy way to find teammates available for impromptu practice sessions. Coordination happens through scattered group texts and word of mouth.",
    solution:
      "Designed and built a marketplace platform where players create profiles, post rep requests, list availability, and respond to interest — all backed by Supabase with row-level security policies.",
    features: [
      "User authentication",
      "Player profiles",
      "Request marketplace",
      "Availability postings",
      "Interest response workflows",
      "Supabase database with RLS policies",
    ],
    results: [
      "Structured marketplace for rep coordination",
      "Player profiles enabling trust and discovery",
      "Secure data access with RLS policies",
      "Foundation for community-driven sports networking",
    ],
    accent: "from-neutral-900 to-neutral-700",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export const projectCategories: ProjectCategory[] = [
  "Business Websites",
  "Sports Technology",
  "AI Tools",
  "Marketplaces",
  "Internal Apps",
];
