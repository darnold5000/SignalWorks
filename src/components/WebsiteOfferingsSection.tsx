import { websiteOfferings } from "@/data/pricing";
import { SectionHeading } from "./SectionHeading";
import { WebsiteOfferingCard } from "./WebsiteOfferingCard";

export function WebsiteOfferingsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="What we build"
        title="Website offerings"
        description="Start by identifying what your business needs. Then choose how you'd like to invest."
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {websiteOfferings.map((offering) => (
          <WebsiteOfferingCard key={offering.id} {...offering} />
        ))}
      </div>
    </section>
  );
}
