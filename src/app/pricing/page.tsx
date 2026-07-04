import { Hero } from "@/components/Hero";
import { WebsiteOfferingsSection } from "@/components/WebsiteOfferingsSection";
import { EngagementModelsSection } from "@/components/EngagementModelsSection";
import { PartnershipLevelsSection } from "@/components/PartnershipLevelsSection";
import { PricingComparison } from "@/components/PricingComparison";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import {
  pricingFaqs,
  pricingPhilosophy,
  pricingHeroDescription,
  pricingReassurance,
  pricingPhilosophyLines,
} from "@/data/pricing";
import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Pricing",
  description:
    "Launch websites from $995, business websites from $3,500, and custom software. Long-term digital partnerships that grow with your business.",
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
        description={pricingHeroDescription}
        primaryCta={{ label: "Let's Talk", href: "/contact" }}
        size="large"
      />

      <WebsiteOfferingsSection />

      <EngagementModelsSection />

      <PartnershipLevelsSection />

      <PricingComparison />

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center lg:px-8 lg:py-32">
          <div className="mx-auto max-w-2xl space-y-2">
            {pricingPhilosophyLines.map((line) => (
              <p key={line} className="font-display text-2xl tracking-tight sm:text-3xl">
                {line}
              </p>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-xl text-muted leading-relaxed">
            {pricingReassurance}
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <SectionHeading title="Common questions" />
          <div className="mt-12">
            <FAQAccordion faqs={pricingFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Ready for a conversation?"
        description="Tell us about your business. We'll recommend the right build and the right level of partnership."
        buttonLabel="Let's Talk"
      />
    </>
  );
}
