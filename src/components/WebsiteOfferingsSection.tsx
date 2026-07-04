import { websiteOfferings } from "@/data/pricing";
import { SectionHeading } from "./SectionHeading";
import { WebsiteOfferingCard } from "./WebsiteOfferingCard";

export function WebsiteOfferingsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-32">
      <SectionHeading title="What are you building?" />
      <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-10">
        {websiteOfferings.map((offering) => (
          <WebsiteOfferingCard key={offering.id} {...offering} />
        ))}
      </div>
    </section>
  );
}
