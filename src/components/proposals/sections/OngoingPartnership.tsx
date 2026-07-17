import type { ProposalSection } from "@/data/proposals/types";

type Props = {
  section: Extract<ProposalSection, { type: "ongoing-partnership" }>;
};

export function OngoingPartnership({ section }: Props) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
          Partnership
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
          {section.title}
        </h2>
        <div className="mt-8 max-w-3xl space-y-4">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="text-base text-muted leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
          {section.monthlyValue.map((item) => (
            <li key={item} className="text-sm text-muted">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
