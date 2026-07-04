import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { PricingCard } from "@/components/PricingCard";
import { CTASection } from "@/components/CTASection";
import { WhySignalWorksIntro } from "@/components/WhySignalWorksIntro";
import { ProjectPreviewCard } from "@/components/ProjectPreviewCard";
import { HowWeWork } from "@/components/HowWeWork";
import { Testimonials } from "@/components/Testimonials";
import { RecentExperiments } from "@/components/RecentExperiments";
import { WhatIDontDo } from "@/components/WhatIDontDo";
import { getHomepagePreviewProjects } from "@/data/projects";
import { homepagePricingPreview, pricingDisclaimer } from "@/data/pricing";
import { testimonials } from "@/data/testimonials";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Signal Works",
  description:
    "Software engineering for growing businesses. Modern websites, custom software, and AI solutions built with clarity.",
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
  const previewProjects = getHomepagePreviewProjects();

  return (
    <>
      <Hero
        eyebrow="Better signal. Less noise."
        title="Websites that win business. Software that saves time. AI that actually gets used."
        tagline="Modern websites backed by real software engineering."
        description="Software engineering for growing businesses — modern websites, custom applications, and AI tools for organizations that have outgrown templates."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
        secondaryCta={{ label: "View Work", href: "/work" }}
        size="large"
      />

      <WhySignalWorksIntro />

      <section className="border-t border-border bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="Work"
            title="Recent projects"
            description="A sample of what we build — full stories on the Work page."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-8">
            {previewProjects.map((project) => (
              <ProjectPreviewCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <HowWeWork />

      <RecentExperiments />

      <Testimonials items={testimonials} />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Services"
          title="What we build"
          description="Not just pages — technology built for real businesses."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whatIBuild.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </div>
      </section>

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

      <WhatIDontDo />

      <CTASection
        title="Ready to build something that works?"
        description="Whether it's a website, a custom app, or an AI tool — let's talk about what your business actually needs."
      />
    </>
  );
}
