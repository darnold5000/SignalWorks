export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  includes: string[];
  examples?: string[];
  faqs?: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "business-websites",
    title: "Business Websites",
    shortDescription:
      "Professional websites that look great on phones, help customers find you, and build trust.",
    description:
      "Custom-designed websites built to establish credibility, convert visitors, and stay maintained — mobile-friendly, search-ready, with hosting and updates handled for you.",
    icon: "globe",
    includes: [
      "Custom design tailored to your brand",
      "Mobile-first responsive build",
      "Technical SEO metadata",
      "AEO-ready content structure",
      "Contact forms with email delivery",
      "Blog and resource page setup",
      "Analytics integration",
      "Reliable hosting and deployment",
      "Performance optimization",
    ],
    faqs: [
      {
        question: "What does a modern business website include?",
        answer:
          "A modern business website includes custom design, mobile responsiveness, fast performance, technical SEO, structured content for AI search engines, contact forms, analytics, and deployment on reliable hosting. It should load quickly, communicate clearly, and convert visitors into leads.",
      },
      {
        question: "How much does a custom website cost?",
        answer:
          "Signal Works builds Launch Websites and Growth Websites with website and support plans — or traditional one-time purchases if you prefer. We'll help you choose based on your business.",
      },
    ],
  },
  {
    slug: "custom-apps",
    title: "Custom Web Applications",
    shortDescription:
      "Dashboards, portals, marketplaces, and internal tools built with real software architecture.",
    description:
      "When your business needs more than pages — client portals, admin dashboards, reporting tools, marketplaces, scheduling systems, or sports platforms — custom web applications provide the workflows and data management you need.",
    icon: "code",
    includes: [
      "Discovery and requirements planning",
      "Database design and architecture",
      "User authentication and roles",
      "Custom workflows and business logic",
      "Admin and reporting interfaces",
      "API integrations",
      "Cloud deployment",
      "Ongoing support options",
    ],
    examples: [
      "Client portals",
      "Dashboards and reporting tools",
      "Internal admin applications",
      "Marketplaces and booking systems",
      "Data workflows and automation",
      "Sports tracking platforms",
      "Scheduling and event management systems",
    ],
    faqs: [
      {
        question: "What is the difference between a website and a web app?",
        answer:
          "A website primarily presents information — pages, content, and contact forms. A web application adds interactive functionality: user accounts, data management, workflows, dashboards, and business logic. Many businesses start with a website and grow into a web app as their needs evolve.",
      },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI & Business Automation",
    shortDescription:
      "Practical AI, automation, and integrations that save time and surface business insight.",
    description:
      "AI works best when it solves real problems — not when it's added for novelty. Signal Works builds AI-powered tools, automated workflows, document processing, and data pipelines that cut manual work and help you understand your customers better.",
    icon: "sparkles",
    includes: [
      "AI workflow discovery and planning",
      "Document and image extraction (OCR/vision)",
      "Report and content generation",
      "Data cleanup and enrichment",
      "Internal copilots and assistants",
      "Automated email and notification workflows",
      "Customer data aggregation and reporting",
      "Business insight dashboards",
      "Integration with existing tools",
      "Monitoring and iteration",
    ],
    examples: [
      "AI content assistants",
      "OCR and document extraction",
      "Vision AI workflows",
      "Automated report generation",
      "Data cleanup pipelines",
      "Customer insight dashboards",
      "Internal business copilots",
      "Automated email workflows",
    ],
    faqs: [
      {
        question: "Can AI automate business workflows?",
        answer:
          "Yes. AI can automate document processing, data extraction, report generation, content drafting, customer inquiry routing, and repetitive administrative tasks. The key is identifying workflows where AI adds real value — not automating for automation's sake.",
      },
    ],
  },
  {
    slug: "seo-aeo",
    title: "SEO + AEO Implementation",
    shortDescription:
      "Help Google and AI assistants understand, rank, and cite your content.",
    description:
      "Search Engine Optimization (SEO) helps Google understand and rank your site. Answer Engine Optimization (AEO) helps AI assistants like ChatGPT, Perplexity, and Google AI Overviews understand and cite your content. Both are built into every modern Signal Works project.",
    icon: "search",
    includes: [
      "Metadata and Open Graph tags",
      "Schema.org structured data",
      "XML sitemap and robots.txt",
      "FAQ and answer page structure",
      "Internal linking strategy",
      "Performance optimization",
      "Blog and content architecture",
      "Local SEO structure",
    ],
    faqs: [
      {
        question: "What is AEO?",
        answer:
          "AEO (Answer Engine Optimization) is the practice of structuring your website content so AI assistants and answer engines can understand, reference, and cite it. This includes clear headings, FAQ schema, structured data, authoritative answer pages, and content written in a direct, scannable format.",
      },
      {
        question: "Do small businesses need SEO?",
        answer:
          "Yes. Even local businesses benefit from SEO because customers search online before making decisions. Technical SEO ensures your site is discoverable, loads fast, and presents the right information to search engines and AI assistants — often before a competitor's site does.",
      },
    ],
  },
];

export const carePlanService = {
  title: "Website and Support Plan",
  shortDescription:
    "Ongoing security, performance, improvements, and priority support — so your websites, apps, and tools keep getting better.",
  includes: [
    "Security",
    "Monitoring",
    "Performance",
    "Small updates",
    "Monthly improvements",
    "Analytics review",
    "SEO health checks",
    "AI optimization",
    "Priority support",
    "Hosting",
  ],
};

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
