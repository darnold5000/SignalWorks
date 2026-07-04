import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { stats } from "@/data/stats";
import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Signal Works is a digital product studio founded by Dave Arnold, building modern websites, custom software, and AI-powered solutions.",
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
        title="A digital product studio built with clarity"
        description="Signal Works helps businesses cut through the noise with modern websites, custom software, AI tools, and automation — all designed to make the important things obvious."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
        secondaryCta={{ label: "View Work", href: "/work" }}
      />

      <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading title="Better signal. Less noise." />
            <p className="mt-6 text-muted leading-relaxed">
              Every business is competing with noise. My job is to make your
              business the signal people notice — whether that&apos;s a better
              website, a custom app, SEO, AI search optimization, or automation.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              I&apos;m {siteConfig.author}, founder of {siteConfig.name}. Based
              in {siteConfig.location.city}, {siteConfig.location.region}, I work
              with businesses across the country to build digital products that
              look polished, perform well, and solve real problems.
            </p>
          </div>
          <div>
            <SectionHeading title="What I bring" />
            <ul className="mt-6 space-y-4 text-muted">
              <li className="flex items-start gap-3">
                <span aria-hidden="true">—</span>
                Premium front-end design with editorial clarity
              </li>
              <li className="flex items-start gap-3">
                <span aria-hidden="true">—</span>
                Real software architecture — not just page builders
              </li>
              <li className="flex items-start gap-3">
                <span aria-hidden="true">—</span>
                AI integrations that solve practical business problems
              </li>
              <li className="flex items-start gap-3">
                <span aria-hidden="true">—</span>
                SEO and AEO structure built into every project
              </li>
              <li className="flex items-start gap-3">
                <span aria-hidden="true">—</span>
                Experience across financial services, sports tech, and AI tools
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="By the numbers"
            title="Real projects, real results"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border border-border bg-background p-6"
              >
                <p className="font-display text-3xl">{stat.value}</p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TODO: Add personal/studio photo and logo when available */}

      <CTASection
        title="Let's build something together"
        description="Whether you need a website, an app, or an AI tool — I'd love to hear about your project."
      />
    </>
  );
}
