import type { ProposalSection } from "@/data/proposals/types";

type Props = {
  section: Extract<ProposalSection, { type: "guided-launch" }>;
};

export function GuidedLaunchProgram({ section }: Props) {
  return (
    <section className="border-b border-border bg-neutral-50">
      <div className="proposal-landmark proposal-landmark-blue mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
          Launch
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl tracking-tight sm:text-4xl">
          {section.title}
        </h2>
        <div className="mt-8 max-w-3xl space-y-5">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="proposal-body text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-5">
          {section.process.map((step) => (
            <li key={step.number} className="border border-border bg-background px-4 py-5">
              <span className="font-display text-2xl text-muted">{step.number}</span>
              <p className="mt-2 text-sm font-medium leading-snug">{step.title}</p>
            </li>
          ))}
        </ol>

        <ul className="mt-10 grid gap-2 sm:grid-cols-2">
          {section.includes.map((item) => (
            <li key={item} className="proposal-body flex items-start gap-2 text-sm">
              <span className="proposal-check mt-0.5" aria-hidden="true">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-2xl text-sm text-muted leading-relaxed">
          {section.scopeNote}
        </p>
      </div>
    </section>
  );
}
