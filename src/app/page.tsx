import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { WhySignalWorksIntro } from "@/components/WhySignalWorksIntro";
import { ProjectPreviewCard } from "@/components/ProjectPreviewCard";
import { HowWeWork } from "@/components/HowWeWork";
import { Testimonials } from "@/components/Testimonials";
import { RecentExperiments } from "@/components/RecentExperiments";
import { WhatIDontDo } from "@/components/WhatIDontDo";
import { FlexibleWaysSection } from "@/components/FlexibleWaysSection";
import { getHomepagePreviewProjects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { SHOW_WORK } from "@/lib/flags";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Signal Works",
  description:
    "Professional websites without agency pricing. Built for salons, gyms, contractors, and growing local businesses.",
  path: "/",
});

const whatIBuild = [
  {
    title: "Business Websites",
    description: "Professional sites that look great on phones and help customers find you.",
    href: "/services/business-websites",
    icon: "globe",
  },
  {
    title: "Custom Web Apps",
    description: "Booking systems, client portals, and tools built for how you work.",
    href: "/services/custom-apps",
    icon: "code",
  },
  {
    title: "AI & Business Automation",
    description: "Practical tools that save time on repetitive tasks.",
    href: "/services/ai-automation",
    icon: "sparkles",
  },
  {
    title: "SEO + Search",
    description: "Help customers find you on Google and local search.",
    href: "/services/seo-aeo",
    icon: "search",
  },
  {
    title: "Automation Systems",
    description: "Connect your tools and cut down on manual work.",
    href: "/services/ai-automation",
    icon: "automation",
  },
  {
    title: "Dashboards & Portals",
    description: "Client-facing portals and internal tools for your team.",
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
        title="Professional websites without agency pricing."
        description="Whether you run a salon, a gym, or a growing local business — get a website that looks great, works on every phone, and stays updated without you thinking about it."
        primaryCta={{ label: "Let's Talk", href: "/contact" }}
        secondaryCta={{ label: "See Pricing", href: "/pricing" }}
        size="large"
      />

      <WhySignalWorksIntro />

      {SHOW_WORK && (
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
      )}

      <HowWeWork />

      {SHOW_WORK && <RecentExperiments />}

      {SHOW_WORK && <Testimonials items={testimonials} />}

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Services"
          title="What we build"
          description="Websites and online tools for businesses that want to look professional and grow."
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
                title="Build once. Improve continuously."
              />
            </div>
            <div>
              <p className="text-lg text-muted leading-relaxed">
                Most business owners don&apos;t want to think about hosting,
                plugins, or security updates. You want a website that looks
                professional, brings in customers, and just works.
              </p>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                That&apos;s what we do — build it, launch it, and keep it
                running. As your business grows, your website grows with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FlexibleWaysSection />

      <WhatIDontDo />

      <CTASection
        title="Ready to build something that works?"
        description="Whether you need a Launch Website or a Growth Website — we'll recommend the right partnership for your business."
      />
    </>
  );
}
