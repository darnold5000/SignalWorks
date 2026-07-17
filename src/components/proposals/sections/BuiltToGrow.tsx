import type { ProposalSection } from "@/data/proposals/types";

type Props = {
  section: Extract<ProposalSection, { type: "built-to-grow" }>;
};

export function BuiltToGrow({ section }: Props) {
  return (
    <section className="border-b border-border bg-neutral-50">
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
          Roadmap
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

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold tracking-wide">
              {section.includedLabel}
            </h3>
            <ul className="mt-4 space-y-2">
              {section.included.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-0.5 text-foreground/50" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wide">
              {section.futureLabel}
            </h3>
            <ul className="mt-4 space-y-2">
              {section.future.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground/30" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 max-w-3xl text-base text-foreground leading-relaxed">
          {section.platformStatement}
        </p>
        <p className="mt-4 max-w-3xl text-sm text-muted leading-relaxed">
          {section.futureNote}
        </p>
      </div>
    </section>
  );
}
