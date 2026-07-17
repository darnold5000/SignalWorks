import type { ProposalSection } from "@/data/proposals/types";
import { FeatureIcon } from "../FeatureIcon";

type Props = {
  section: Extract<ProposalSection, { type: "platform-includes" }>;
};

export function PlatformIncludes({ section }: Props) {
  return (
    <section className="border-b border-border bg-neutral-50">
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
          Scope
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
          {section.title}
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {section.groups.map((group) => (
            <div key={group.id}>
              <div className="flex items-center gap-2.5 text-foreground">
                <FeatureIcon icon={group.icon} className="h-5 w-5 text-neutral-600" />
                <h3 className="text-sm font-semibold tracking-wide">{group.title}</h3>
              </div>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="proposal-body flex items-start gap-2 text-sm">
                    <span className="proposal-dot mt-1.5 h-1 w-1 shrink-0 rounded-full" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
