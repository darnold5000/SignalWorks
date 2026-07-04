import { partnershipLevels } from "@/data/pricing";
import { SectionHeading } from "./SectionHeading";
import { PartnershipLevelCard } from "./PartnershipLevelCard";

export function PartnershipLevelsSection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-32">
        <SectionHeading
          title="Growth Partnership levels"
          description="Increasing levels of engineering partnership — not hosting tiers. Choose the level that matches how much ongoing work your business needs."
        />
        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {partnershipLevels.map((level) => (
            <PartnershipLevelCard key={level.id} {...level} />
          ))}
        </div>
      </div>
    </section>
  );
}
