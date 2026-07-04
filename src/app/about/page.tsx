import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { FounderIntro } from "@/components/FounderIntro";
import { WhySignalWorks } from "@/components/WhySignalWorks";
import { Testimonials } from "@/components/Testimonials";
import { industryExperience } from "@/data/industries";
import { testimonials } from "@/data/testimonials";
import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Signal Works is a boutique digital product studio founded by Dave Arnold — premium websites, custom software, and AI-powered business tools.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(
            "About",
            `About ${siteConfig.name} digital product studio`,
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
        title="A boutique studio — not a web design shop"
        tagline="Built by a software engineer — not a marketing agency."
        description="Signal Works designs and builds custom digital products for businesses that need more than a template. You work directly with the person writing the software."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
        secondaryCta={{ label: "View Work", href: "/work" }}
      />

      <FounderIntro variant="about" />

      <section className="border-t border-border bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="Experience"
            title="Better signal. Less noise."
            description="Built for real industries — financial services, youth sports, and growing businesses that depend on software working."
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

      <Testimonials items={testimonials} />

      <CTASection
        title="Let's build something together"
        description="Whether you need a website, an app, or an AI tool — I'd love to hear about your project."
      />
    </>
  );
}
