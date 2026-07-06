import { websiteOfferings, websiteOfferingsSection } from "@/data/pricing";
import { SectionHeading } from "./SectionHeading";
import { WebsiteOfferingCard } from "./WebsiteOfferingCard";

export function WebsiteOfferingsSection() {
  return (
    <section className="border-t border-border bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
        <SectionHeading title={websiteOfferingsSection.title} />
        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {websiteOfferings
            .filter((offering) => offering.id !== "custom-software")
            .map((offering) => (
              <WebsiteOfferingCard key={offering.id} {...offering} />
            ))}
        </div>
        <div className="mt-6">
          <WebsiteOfferingCard
            {...websiteOfferings.find((o) => o.id === "custom-software")!}
          />
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted">
          {websiteOfferingsSection.note}
        </p>
      </div>
    </section>
  );
}
