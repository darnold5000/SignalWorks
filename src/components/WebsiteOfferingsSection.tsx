import { pricingPlans, websiteOfferingsSection } from "@/data/pricing";
import { SectionHeading } from "./SectionHeading";
import { PricingPlanCard } from "./PricingPlanCard";

export function WebsiteOfferingsSection() {
  return (
    <section className="border-t border-border bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
        <SectionHeading title={websiteOfferingsSection.title} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <PricingPlanCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
