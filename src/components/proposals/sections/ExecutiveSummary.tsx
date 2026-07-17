import type { ProposalSection } from "@/data/proposals/types";

type Props = {
  section: Extract<ProposalSection, { type: "executive-summary" }>;
};

export function ExecutiveSummary({ section }: Props) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
          Overview
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
          {section.title}
        </h2>
        <div className="mt-8 max-w-3xl space-y-5">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="proposal-body text-base leading-relaxed sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
