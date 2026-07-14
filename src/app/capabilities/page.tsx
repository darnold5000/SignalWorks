import { Hero } from "@/components/Hero";
import { FeatureCardGrid } from "@/components/FeatureCardGrid";
import { CapabilityCatalog } from "@/components/CapabilityCatalog";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import {
  capabilitiesCatalogIntro,
  capabilitiesHero,
  capabilityCategories,
  featuredFeatures,
  industryExamples,
} from "@/data/capabilities";
import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Capabilities",
  description:
    "Platform features for Signal Works websites and software — scheduling, payments, portals, AI, automation, and more. Start simple and grow over time.",
  path: "/capabilities",
});

export default function CapabilitiesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(
            "Capabilities",
            "Platform features and capabilities by Signal Works",
            "/capabilities",
          ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Capabilities", path: "/capabilities" },
          ]),
        ]}
      />

      <Hero
        eyebrow="Platform Features"
        title={capabilitiesHero.title}
        description={capabilitiesHero.description}
        primaryCta={capabilitiesHero.primaryCta}
        secondaryCta={capabilitiesHero.secondaryCta}
      />

      <section className="border-t border-border bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeading
            title="What you can add"
            description="Click a feature to see what it does, who it's for, and which plans include it."
          />
          <div className="mt-10">
            <FeatureCardGrid features={featuredFeatures} />
          </div>
        </div>
      </section>

      <CapabilityCatalog
        categories={capabilityCategories}
        intro={capabilitiesCatalogIntro}
      />

      <section className="border-t border-border bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeading
            title="Built for real businesses"
            description="Capabilities are organized by what they do — and apply across industries like these."
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {industryExamples.map((industry) => (
              <li
                key={industry}
                className="border border-border bg-background px-4 py-3 text-sm text-muted"
              >
                {industry}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Ready to grow into the next capability?"
        description="Tell us where you are today — we'll recommend a starting point and a clear path to expand."
        buttonLabel="Start a Project"
        buttonHref="/contact"
      />
    </>
  );
}
