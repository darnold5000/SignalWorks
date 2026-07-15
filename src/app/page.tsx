import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { WhySignalWorksIntro } from "@/components/WhySignalWorksIntro";
import { FeaturedProjectCard } from "@/components/work/FeaturedProjectCard";
import { HowWeWork } from "@/components/HowWeWork";
import { Testimonials } from "@/components/Testimonials";
import { RecentExperiments } from "@/components/RecentExperiments";
import { WhatIDontDo } from "@/components/WhatIDontDo";
import { FlexibleWaysSection } from "@/components/FlexibleWaysSection";
import { Button } from "@/components/Button";
import { getFeaturedProjects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { SHOW_WORK } from "@/lib/flags";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Signal Works",
  description:
    "Websites, custom software, AI tools, and automation — built to reduce manual work, surface customer insights, and grow your business.",
  path: "/",
});

const whatIBuild = [
  {
    title: "Business Websites",
    description: "Professional sites that build trust, convert visitors, and stay maintained for you.",
    href: "/services/business-websites",
    icon: "globe",
  },
  {
    title: "Custom Web Apps",
    description: "Portals, dashboards, and tools built around how your team actually works.",
    href: "/services/custom-apps",
    icon: "code",
  },
  {
    title: "AI Tools & Automation",
    description: "Practical AI and automated workflows that cut hours of manual work every week.",
    href: "/services/ai-automation",
    icon: "sparkles",
  },
  {
    title: "Business Insights",
    description: "Dashboards and reporting that turn customer and operational data into clear decisions.",
    href: "/services/custom-apps",
    icon: "chart",
  },
  {
    title: "SEO + Search",
    description: "Help customers find you on Google, AI search, and answer engines.",
    href: "/services/seo-aeo",
    icon: "search",
  },
  {
    title: "Integrations & Workflows",
    description: "Connect your tools so data flows automatically — fewer spreadsheets, fewer handoffs.",
    href: "/services/ai-automation",
    icon: "automation",
  },
];

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <Hero
        eyebrow="Better signal. Less noise."
        title="Websites, software, and AI — without agency pricing."
        description="We build digital products that win customers online, automate repetitive work, and turn your data into insight — so your team spends less time on manual tasks and more time growing the business."
        primaryCta={{ label: "Let's Talk", href: "/contact" }}
        secondaryCta={{ label: "See Pricing", href: "/pricing" }}
        size="large"
      />

      <WhySignalWorksIntro />

      {SHOW_WORK && (
        <section className="border-t border-border bg-neutral-50">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
            <SectionHeading
              eyebrow="Our Work"
              title="Built around real business needs."
              description="Explore websites designed to improve how local businesses present their services, communicate with customers, and handle the next step."
            />
            <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-8">
              {featuredProjects.map((project) => (
                <FeaturedProjectCard key={project.slug} project={project} />
              ))}
            </div>
            <div className="mt-12">
              <Button href="/work" variant="secondary">
                View All Work
              </Button>
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
          description="Websites, custom software, AI tools, and automation — scoped to the problems your business actually needs solved."
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
                Most teams don&apos;t want to juggle hosting, plugins, spreadsheets,
                and one-off freelancers. You want technology that looks professional,
                saves time, and gives you a clearer picture of your customers.
              </p>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                That&apos;s what we build — websites, software, and AI tools that
                launch fast and keep improving. As your needs grow, your digital
                products grow with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FlexibleWaysSection />

      <WhatIDontDo />

      <CTASection
        title="Ready to build something that works?"
        description="Whether you need a website, custom software, AI automation, or a website and support plan — we'll recommend the right approach."
      />
    </>
  );
}
