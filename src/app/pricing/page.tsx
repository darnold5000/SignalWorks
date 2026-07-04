import { Hero } from "@/components/Hero";
import { PricingCard } from "@/components/PricingCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { pricingTiers, pricingDisclaimer } from "@/data/pricing";
import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Pricing",
  description:
    "Transparent pricing for business websites, care plans, and custom applications. Starting at $3,500 for starter websites.",
  path: "/pricing",
});

const pricingFaqs = [
  {
    question: "How much does a custom website cost?",
    answer:
      "Starter websites start at $3,500 for 5–7 pages. Premium websites start at $6,500 for 10–20 pages with service landing pages, blog setup, and advanced SEO/AEO. Final pricing depends on scope, content needs, and integrations.",
  },
  {
    question: "What's included in a website care plan?",
    answer:
      "Care plans include hosting coordination, small content updates, blog publishing support, analytics review, SEO/AEO health checks, performance monitoring, security checks, and priority support starting at $199/month.",
  },
  {
    question: "How are custom applications priced?",
    answer:
      "Custom applications are quoted based on discovery, database design, authentication requirements, workflows, AI integrations, and ongoing support needs. Every project starts with a conversation to understand scope and goals.",
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(
            "Pricing",
            "Pricing for websites, care plans, and custom applications",
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
        title="Clear packages, honest scope"
        description="Fixed starting prices for websites. Monthly care plans for ongoing support. Custom quotes for software, AI, and automation."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
      />

      <section className="mx-auto max-w-6xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">{pricingDisclaimer}</p>
      </section>

      <section className="border-t border-border bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <SectionHeading title="Pricing questions" />
          <div className="mt-8">
            <FAQAccordion faqs={pricingFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Need a custom quote?"
        description="Every project is different. Let's talk through your requirements and find the right fit."
      />
    </>
  );
}
