import type { ProposalSection } from "@/data/proposals/types";

type Props = {
  section: Extract<ProposalSection, { type: "why-signal-works" }>;
};

export function WhySignalWorks({ section }: Props) {
  return (
    <section className="border-b border-border bg-neutral-50">
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
          Value
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
          {section.title}
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {section.items.map((item) => (
            <li
              key={item}
              className="border border-border bg-background px-5 py-4 text-sm font-medium leading-relaxed"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
