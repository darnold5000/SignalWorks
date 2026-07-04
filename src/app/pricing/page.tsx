import { Hero } from "@/components/Hero";
import { PricingPhilosophySection } from "@/components/PricingPhilosophySection";
import { WebsiteOfferingsSection } from "@/components/WebsiteOfferingsSection";
import { GrowthOptionsSection } from "@/components/GrowthOptionsSection";
import { TraditionalOwnershipSection } from "@/components/TraditionalOwnershipSection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { pricingFaqs, pricingHero, pricingReassurance } from "@/data/pricing";
import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Pricing",
    description:
    "Professional websites without agency pricing. Launch from $500 with monthly partnerships starting at $99/month.",
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
        primaryCta={pricingHero.primaryCta}
        ctaNote={pricingHero.ctaNote}
        size="compact"
      />

      <WebsiteOfferingsSection />

      <PricingPhilosophySection />

      <GrowthOptionsSection />

      <TraditionalOwnershipSection />

      <section className="border-t border-border bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeading title="Common questions" />
          <div className="mt-10">
            <FAQAccordion faqs={pricingFaqs} />
          </div>
          <p className="mx-auto mt-10 max-w-xl text-center text-sm text-muted">
            {pricingReassurance}
          </p>
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
