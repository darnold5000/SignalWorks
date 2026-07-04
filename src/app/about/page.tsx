import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { WhySignalWorks } from "@/components/WhySignalWorks";
import { industryExperience } from "@/data/industries";
import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Signal Works is a digital product studio founded by Dave Arnold — building premium websites, custom software, and AI-powered business tools.",
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
        title="A digital product studio — not a web design shop"
        description="Signal Works designs and builds custom digital products for businesses that need more than a template. Premium websites. Custom software. AI that actually gets used."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
        secondaryCta={{ label: "View Work", href: "/work" }}
      />

      <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <PhotoPlaceholder />
          </div>
          <div className="lg:col-span-3">
            <SectionHeading title="Better signal. Less noise." />
            <p className="mt-6 text-muted leading-relaxed">
              Every business is competing with noise. My job is to make your
              business the signal people notice — whether that&apos;s a premium
              website for a financial advisor, a meet tracker for a gymnastics
              club, or an AI scouting tool for a baseball coach.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              I&apos;m {siteConfig.author}, founder of {siteConfig.name}. Based
              in {siteConfig.location.city}, {siteConfig.location.region}, I work
              with businesses across the country to build digital products that
              look polished, perform well, and solve real problems.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              People hire people. When you work with Signal Works, you work
              directly with me — from discovery through launch and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="Experience"
            title="Built for real industries"
            description="Not generic portfolios — software for organizations that depend on it."
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

      <CTASection
        title="Let's build something together"
        description="Whether you need a website, an app, or an AI tool — I'd love to hear about your project."
      />
    </>
  );
}
