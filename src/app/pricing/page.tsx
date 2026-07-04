import { Hero } from "@/components/Hero";
import { PricingPhilosophySection } from "@/components/PricingPhilosophySection";
import { WebsiteOfferingsSection } from "@/components/WebsiteOfferingsSection";
import { PartnershipVariesSection } from "@/components/PartnershipVariesSection";
import { EverythingIncludedSection } from "@/components/EverythingIncludedSection";
import { GrowthOptionsSection } from "@/components/GrowthOptionsSection";
import { TraditionalOwnershipSection } from "@/components/TraditionalOwnershipSection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import {
  pricingFaqs,
  pricingHero,
  pricingReassurance,
  pricingPhilosophyLines,
} from "@/data/pricing";
import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Pricing",
  description:
    "Professional websites backed by a long-term technology partnership. Launch from $500 with monthly partnerships starting at $99/month.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(
            "Pricing",
            "Website partnership pricing by Signal Works",
            "/pricing",
          ),
          faqSchema(pricingFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
        ]}
      />

      <Hero
        title={pricingHero.title}
        description={pricingHero.description}
        descriptionSecondary={pricingHero.descriptionSecondary}
        primaryCta={pricingHero.primaryCta}
        secondaryCta={pricingHero.secondaryCta}
        size="large"
      />

      <PricingPhilosophySection />

      <WebsiteOfferingsSection />

      <PartnershipVariesSection />

      <EverythingIncludedSection />

      <GrowthOptionsSection />

      <section className="border-t border-border bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl space-y-2">
            {pricingPhilosophyLines.map((line) => (
              <p key={line} className="font-display text-2xl tracking-tight sm:text-3xl">
                {line}
              </p>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-xl text-muted leading-relaxed">
            {pricingReassurance}
          </p>
        </div>
      </section>

      <TraditionalOwnershipSection />

      <section className="border-t border-border bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <SectionHeading title="Common questions" />
          <div className="mt-12">
            <FAQAccordion faqs={pricingFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to stop thinking about your website?"
        description="Signal Works handles it — build once, improve continuously."
        buttonLabel="Start Your Project"
      />
    </>
  );
}
