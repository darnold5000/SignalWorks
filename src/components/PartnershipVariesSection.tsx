import { partnershipVaries } from "@/data/pricing";
import { SectionHeading } from "./SectionHeading";

export function PartnershipVariesSection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-32">
        <SectionHeading
          title={partnershipVaries.title}
          description={partnershipVaries.intro}
        />
        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {partnershipVaries.examples.map((example) => (
            <div
              key={example.label}
              className="border border-border bg-background p-8 lg:p-10"
            >
              <p className="font-medium">{example.label}</p>
              <ul className="mt-6 space-y-2">
                {example.items.map((item) => (
                  <li key={item} className="text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-2xl text-center text-lg text-muted leading-relaxed">
          {partnershipVaries.closing}
        </p>
      </div>
    </section>
  );
}
