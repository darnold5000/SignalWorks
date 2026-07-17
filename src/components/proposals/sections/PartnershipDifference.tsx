import type { ProposalSection } from "@/data/proposals/types";

type Props = {
  section: Extract<ProposalSection, { type: "partnership-difference" }>;
};

export function PartnershipDifference({ section }: Props) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
          Partnership
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl tracking-tight sm:text-4xl">
          {section.title}
        </h2>

        <div className="mt-10 max-w-2xl space-y-3 border border-border bg-neutral-50 px-6 py-7 sm:px-8">
          <p className="proposal-body text-lg leading-relaxed">
            {section.contrastLines[0]}
          </p>
          <p className="font-display text-2xl tracking-tight text-foreground sm:text-3xl">
            {section.contrastLines[1]}
          </p>
        </div>

        <div className="mt-8 max-w-3xl space-y-4">
          {section.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="proposal-body text-base leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
