import { Hero } from "@/components/Hero";
import { WebsiteOfferingsSection } from "@/components/WebsiteOfferingsSection";
import { WhichWebsiteSection } from "@/components/WhichWebsiteSection";
import { EngagementModelsSection } from "@/components/EngagementModelsSection";
import { PricingComparison } from "@/components/PricingComparison";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import {
  pricingFaqs,
  pricingPhilosophy,
  pricingSubtext,
  pricingAudience,
  pricingReassurance,
  pricingTermsNote,
} from "@/data/pricing";
import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Pricing",
  description:
    "Starter websites from $995, business websites from $3,500, and custom software. Professional websites without agency pricing.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(
            "Pricing",
            "Website and software pricing by Signal Works",
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
        description={`${pricingSubtext} ${pricingAudience}`}
        primaryCta={{ label: "Let's Talk", href: "/contact" }}
      />

      <WhichWebsiteSection />

      <WebsiteOfferingsSection />

      <EngagementModelsSection />

      <p className="mx-auto max-w-2xl px-6 pb-8 text-center text-xs text-muted lg:px-8">
        {pricingTermsNote}
      </p>

      <PricingComparison />

      <p className="mx-auto max-w-2xl px-6 pb-16 text-center text-sm text-muted leading-relaxed lg:px-8">
        {pricingReassurance}
      </p>

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
        description="Tell us about your business. We'll recommend the right website and the right way to get started."
        buttonLabel="Let's Talk"
      />
    </>
  );
}
