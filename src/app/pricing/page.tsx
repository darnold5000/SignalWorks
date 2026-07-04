import { Hero } from "@/components/Hero";
import { GrowthPartnershipCard } from "@/components/GrowthPartnershipCard";
import { EngagementModelCard } from "@/components/EngagementModelCard";
import { PricingComparison } from "@/components/PricingComparison";
import { WhichOptionSection } from "@/components/WhichOptionSection";
import { OngoingPartnershipSection } from "@/components/OngoingPartnershipSection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import {
  engagementModels,
  pricingFaqs,
  pricingPhilosophy,
  pricingPhilosophyExtended,
  pricingReassurance,
  growthPartnershipTermsNote,
} from "@/data/pricing";
import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Pricing",
  description:
    "Growth Partnership from $750 launch + $149/month, or Traditional Projects from $3,500+. Professional websites without the big upfront investment.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(
            "Pricing",
            "Flexible pricing for websites and custom software by Signal Works",
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
        eyebrow="Pricing"
        title={pricingPhilosophy}
        tagline="Modern websites backed by real software engineering."
        description={`${pricingPhilosophyExtended} Flexible pricing that grows with your business — build once, improve continuously.`}
        primaryCta={{ label: "Let's Talk", href: "/contact" }}
      />

      <section className="mx-auto max-w-6xl px-6 pb-8 lg:px-8">
        <GrowthPartnershipCard />
        <p className="mt-4 text-center text-xs text-muted">
          {growthPartnershipTermsNote}
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {engagementModels.map((model) => (
            <EngagementModelCard key={model.id} {...model} />
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-muted leading-relaxed">
          {pricingReassurance}
        </p>
      </section>

      <PricingComparison />

      <WhichOptionSection />

      <OngoingPartnershipSection />

      <section className="border-t border-border bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <SectionHeading title="Common questions" />
          <div className="mt-8">
            <FAQAccordion faqs={pricingFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Ready for a conversation?"
        description="Tell us about your business. We'll recommend the right engagement model — no pressure, no packages to decode."
        buttonLabel="Let's Talk"
      />
    </>
  );
}
