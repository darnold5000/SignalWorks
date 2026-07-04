import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { StatCard } from "@/components/StatCard";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { PricingCard } from "@/components/PricingCard";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { CTASection } from "@/components/CTASection";
import { stats } from "@/data/stats";
import { getFeaturedProjects } from "@/data/projects";
import { homepagePricingPreview, pricingDisclaimer } from "@/data/pricing";
import { processSteps } from "@/data/process";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Signal Works",
  description:
    "Modern websites, custom software, and AI-powered solutions built with clarity. Signal Works helps businesses cut through the noise.",
  path: "/",
});

const whatIBuild = [
  {
    title: "Business Websites",
    description: "Premium sites that look credible, load fast, and convert visitors.",
    href: "/services/business-websites",
    icon: "globe",
  },
  {
    title: "Custom Web Apps",
    description: "Dashboards, portals, and tools with real software architecture.",
    href: "/services/custom-apps",
    icon: "code",
  },
  {
    title: "AI-Powered Tools",
    description: "Practical AI integrations that save time and reduce manual work.",
    href: "/services/ai-automation",
    icon: "sparkles",
  },
  {
    title: "SEO + AEO Platforms",
    description: "Structured for Google ranking and AI answer engine discovery.",
    href: "/services/seo-aeo",
    icon: "search",
  },
  {
    title: "Automation Systems",
    description: "Workflows that eliminate repetitive tasks and connect your tools.",
    href: "/services/ai-automation",
    icon: "automation",
  },
  {
    title: "Dashboards & Portals",
    description: "Internal tools and client-facing portals for data and workflows.",
    href: "/services/custom-apps",
    icon: "chart",
  },
];

const differentiators = [
  "Custom code, not generic templates",
  "SEO and AI-search structure included",
  "Built for performance on Vercel",
  "Flexible enough to grow into apps, portals, dashboards, and automations",
  "Designed to reduce long-term maintenance",
];

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <Hero
        eyebrow="Better signal. Less noise."
        title="Modern websites, custom software, and AI-powered solutions built with clarity."
        description="I build high-performance websites, custom software, AI tools, and automations for businesses that need more than a basic online presence."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
        secondaryCta={{ label: "View Work", href: "/work" }}
        pills={[
          "Business Websites",
          "Custom Apps",
          "AI Tools",
          "SEO + AEO",
          "Automation",
        ]}
        size="large"
      />

      {/* Stats */}
      <section className="border-t border-border bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* What I Build */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Services"
          title="What I build"
          description="Digital products that help businesses look better, work smarter, and stand out online."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whatIBuild.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section className="border-t border-border bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="Case Studies"
            title="Featured work"
            description="Real projects across business websites, sports technology, and AI-powered applications."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                category={project.category}
                description={project.description}
                technologies={project.technologies}
                result={project.result}
                href={`/work/${project.slug}`}
                accent={project.accent}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy / Why Different */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Philosophy"
              title="Websites are only the starting point."
            />
          </div>
          <div>
            <p className="text-lg text-muted leading-relaxed">
              Most web designers build pages. Most developers build tools. I combine
              both — polished front-end design, real software architecture, AI
              integrations, and practical automation.
            </p>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Every project starts with the same goal: remove complexity. Whether
              it&apos;s a website, an internal dashboard, or an AI-powered
              application, the objective isn&apos;t to add features — it&apos;s to
              make the important things obvious.
            </p>
            <ul className="mt-8 space-y-4">
              {differentiators.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 text-muted" aria-hidden="true">
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="border-t border-border bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="Pricing"
            title="Clear packages, flexible scope"
            description="Fixed starting prices for websites. Monthly care plans for ongoing support. Custom quotes for software and AI."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {homepagePricingPreview.map((tier) => (
              <PricingCard key={tier.name} {...tier} />
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted">{pricingDisclaimer}</p>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Process"
          title="How projects work"
          description="A structured approach from discovery through launch and ongoing improvement."
        />
        <div className="mt-12">
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      <CTASection
        title="Have an idea for a website, app, or AI tool?"
        description="Let's turn it into something real, polished, and useful."
      />
    </>
  );
}
