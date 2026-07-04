import { Hero } from "@/components/Hero";
import { EngagementModelCard } from "@/components/EngagementModelCard";
import { WhichOptionSection } from "@/components/WhichOptionSection";
import { OngoingPartnershipSection } from "@/components/OngoingPartnershipSection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import {
  engagementModels,
  pricingFaqs,
  pricingPhilosophy,
  pricingReassurance,
  subscriptionTermsNote,
} from "@/data/pricing";
import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Pricing",
  description:
    "Professional websites and software without enterprise pricing. Flexible engagement models including subscription partnerships, ownership, and custom software.",
  path: "/pricing",
});

export default function PricingPage() {
  const featured = engagementModels.find((m) => m.featured);
  const others = engagementModels.filter((m) => !m.featured);

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
        description="Flexible pricing that grows with your business. Enterprise-quality work without enterprise pricing — build once, improve continuously."
        primaryCta={{ label: "Let's Talk", href: "/contact" }}
      />

      <section className="mx-auto max-w-6xl px-6 pb-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
          {featured && (
            <div className="lg:col-span-1">
              <EngagementModelCard {...featured} />
              <p className="mt-4 text-center text-xs text-muted">
                {subscriptionTermsNote}
              </p>
            </div>
          )}
          <div className="grid gap-8 lg:col-span-2">
            {others.map((model) => (
              <EngagementModelCard key={model.id} {...model} />
            ))}
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-muted leading-relaxed">
          {pricingReassurance}
        </p>
      </section>

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
