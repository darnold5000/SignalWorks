import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { FounderIntro } from "@/components/FounderIntro";
import { WhySignalWorks } from "@/components/WhySignalWorks";
import { Testimonials } from "@/components/Testimonials";
import { industryExperience } from "@/data/industries";
import { testimonials } from "@/data/testimonials";
import { SHOW_FOUNDER, SHOW_WORK } from "@/lib/flags";
import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Signal Works is a software-first digital partner for growing businesses — professional websites, custom software, and AI-powered tools.",
  path: "/about",
});

const companyThemes = [
  {
    title: "Software engineering first",
    description:
      "Every project is built with clarity, performance, and long-term maintainability — not shortcuts or bloated page builders.",
  },
  {
    title: "Built for real businesses",
    description:
      "From local service companies to growing professional firms, Signal Works builds technology that fits how your business actually operates.",
  },
  {
    title: "Long-term partnership",
    description:
      "We don't disappear after launch. Hosting, security, updates, and continuous improvements are part of how we work.",
  },
  {
    title: "Better signal. Less noise.",
    description:
      "Clear positioning, fast performance, and software that does its job without unnecessary complexity.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(
            "About",
            `About ${siteConfig.name} — software engineering for growing businesses`,
            "/about",
          ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />

      <Hero
        eyebrow="About"
        title="A software-first digital partner for growing businesses."
        description="Signal Works builds professional websites, custom software, and AI-powered tools for businesses that need more than templates. Every project is built with clarity, performance, and long-term maintainability in mind."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
        secondaryCta={{ label: "See Pricing", href: "/pricing" }}
      />

      {SHOW_FOUNDER && <FounderIntro />}

      <section className="border-t border-border bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="How we work"
            title="Professional websites without agency complexity."
            description="Signal Works is built for businesses that want modern technology without the overhead of a large agency or the limitations of a template."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {companyThemes.map((theme) => (
              <div key={theme.title} className="border border-border bg-background p-8">
                <h3 className="font-display text-xl tracking-tight">{theme.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {theme.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="Experience"
            title="Industries we serve"
            description="Built for real industries — financial services, professional services, local businesses, and growing companies that depend on software working."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {industryExperience.map((item) => (
              <div key={item.industry} className="border border-border bg-background p-6">
                <h3 className="font-semibold">{item.industry}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
                <p className="mt-3 text-xs text-muted">{item.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhySignalWorks />

      {SHOW_WORK && <Testimonials items={testimonials} />}

      <CTASection
        title="Let's build something together"
        description="Whether you need a website, custom software, or an ongoing technology partnership — we'd love to hear about your project."
      />
    </>
  );
}
