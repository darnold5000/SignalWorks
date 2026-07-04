import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { PricingCard } from "@/components/PricingCard";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { CTASection } from "@/components/CTASection";
import { TrustIndustries } from "@/components/TrustIndustries";
import { WhySignalWorks } from "@/components/WhySignalWorks";
import { getFeaturedProjects } from "@/data/projects";
import { homepagePricingPreview, pricingDisclaimer } from "@/data/pricing";
import { processSteps } from "@/data/process";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Signal Works",
  description:
    "Signal Works designs and builds custom digital products — premium websites, custom software, and AI-powered business tools for growing businesses.",
  path: "/",
});

const whatIBuild = [
  {
    title: "Business Websites",
    description: "Premium sites that win business, load fast, and convert visitors.",
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
    title: "AI & Business Automation",
    description: "Practical automation and AI workflows that save time every week.",
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

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <Hero
        eyebrow="Better signal. Less noise."
        title="Websites that win business. Software that saves time. AI that actually gets used."
        description="Signal Works designs and builds custom digital products — from premium marketing websites to AI-powered business software — for financial advisors, sports organizations, and growing businesses."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
        secondaryCta={{ label: "View Work", href: "/work" }}
        pills={[
          "Financial Services",
          "Youth Sports",
          "Professional Services",
          "Custom Software",
        ]}
        size="large"
      />

      <TrustIndustries />

      <WhySignalWorks />

      {/* Featured Work — lead with stories */}
      <section className="border-t border-border bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="Case Studies"
            title="Real businesses. Real software."
            description="Financial advisors, baseball facilities, gymnastics clubs, and cheer competitions — not concepts, not mockups. Software built for organizations that use it every day."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                industry={project.industry}
                category={project.category}
                description={project.description}
                storyHook={project.storyHook}
                technologies={project.technologies}
                result={project.result}
                href={`/work/${project.slug}`}
                accent={project.accent}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Services"
          title="What we build"
          description="Not just pages — digital products designed to grow with your business."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whatIBuild.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-t border-border bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Philosophy"
                title="Websites are only the starting point."
              />
            </div>
            <div>
              <p className="text-lg text-muted leading-relaxed">
                There are thousands of people who build websites. There are far
                fewer who can build a polished marketing site{" "}
                <em>and</em> a custom application — and stand behind both long
                after launch.
              </p>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                Every project starts with the same goal: remove complexity.
                Whether it&apos;s a financial advisor website, a gymnastics meet
                tracker, or an AI scouting platform, the objective isn&apos;t to
                add features — it&apos;s to make the important things obvious.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Pricing"
          title="Invest in outcomes, not page counts"
          description="Professional websites, growth platforms, custom software, and ongoing partnerships — priced for the value they deliver."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {homepagePricingPreview.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          {pricingDisclaimer}{" "}
          <a href="/pricing" className="font-medium text-foreground hover:underline">
            View full pricing →
          </a>
        </p>
      </section>

      {/* Process */}
      <section className="border-t border-border bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="Process"
            title="How projects work"
            description="A structured approach from discovery through launch and ongoing improvement."
          />
          <div className="mt-12">
            <ProcessTimeline steps={processSteps} />
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to build something that works?"
        description="Whether it's a website, a custom app, or an AI tool — let's talk about what your business actually needs."
      />
    </>
  );
}
