import { ongoingPartnership } from "@/data/pricing";
import { SectionHeading } from "./SectionHeading";

export function OngoingPartnershipSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="After launch"
        title={ongoingPartnership.title}
        description={ongoingPartnership.description}
      />
      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {ongoingPartnership.includes.map((item) => (
          <li
            key={item}
            className="border border-border px-5 py-4 text-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
