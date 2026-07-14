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
    "Websites, custom software, AI tools, and automation for businesses that want technology built around how they work.",
  path: "/about",
});

const companyThemes = [
  {
    title: "Built for real businesses",
    description:
      "Custom digital products for companies that have outgrown templates — websites, apps, and tools scoped to your workflow.",
  },
  {
    title: "We handle the technical stuff",
    description:
      "Hosting, security, updates, and performance — so you can focus on running your business, not managing technology.",
  },
  {
    title: "Here after launch",
    description:
      "We don't disappear after launch. Ongoing support, automation improvements, and iteration are part of how we work.",
  },
  {
    title: "Better signal. Less noise.",
    description:
      "Clear digital products that help you win customers, cut manual work, and understand your business better.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(
            "About",
            `About ${siteConfig.name} — websites, software, and AI for growing businesses`,
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
        title="A digital product studio for growing businesses."
        description="Signal Works builds websites, custom software, AI tools, and automation — technology that reduces manual work, surfaces customer insight, and grows with your business."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
        secondaryCta={{ label: "See Pricing", href: "/pricing" }}
      />

      {SHOW_FOUNDER && <FounderIntro />}

      <section className="border-t border-border bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="How we work"
            title="Professional websites without agency complexity."
            description="Signal Works is built for businesses that want modern technology — websites, software, and AI — without the overhead of a large agency or the limits of a template."
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
            description="Built across industries — financial services, professional services, youth sports, and growing companies that depend on software working."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {industryExperience.map((item) => (
              <div key={item.industry} className="border border-border bg-background p-6">
                <h3 className="font-semibold">{item.industry}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
                {item.clients && item.clients.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4">
                    {item.clients.map((client) => (
                      <li key={client.name} className="text-xs text-muted">
                        {client.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhySignalWorks />

      {SHOW_WORK && <Testimonials items={testimonials} />}

      <CTASection
        title="Let's build something together"
        description="Whether you need a website, custom software, or ongoing support — we'd love to hear about your project."
      />
    </>
  );
}
