import type { Proposal } from "@/data/proposals/types";
import type { ProposalSection } from "@/data/proposals/types";
import { formatCurrency } from "@/lib/proposals/format";

type Props = {
  section: Extract<ProposalSection, { type: "founding-partner-pricing" }>;
  pricing: Proposal["pricing"];
};

export function FoundingPartnerPricing({ section, pricing }: Props) {
  return (
    <section id="pricing" className="scroll-mt-24 border-b border-border">
      <div className="proposal-landmark proposal-landmark-gold mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
          Partnership
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
          {section.title}
        </h2>

        <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
          <div className="bg-background p-8 sm:p-10">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-muted">
              {section.introductoryLabel}
            </p>
            <p className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
              {formatCurrency(pricing.introductoryMonthlyPrice)}
              <span className="text-xl text-muted">/month</span>
            </p>
            <p className="mt-3 text-sm text-muted">
              First {pricing.introductoryMonths} months
            </p>
            <p className="proposal-body mt-4 text-sm leading-relaxed">
              {section.introductoryBillingNote}
            </p>
          </div>
          <div className="bg-neutral-50 p-8 sm:p-10">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-muted">
              Ongoing
            </p>
            <p className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
              {formatCurrency(pricing.ongoingMonthlyPrice)}
              <span className="text-xl text-muted">/month</span>
            </p>
            <p className="mt-3 text-sm font-medium text-foreground">
              {section.ongoingLabel}
            </p>
          </div>
        </div>

        <div className="mt-8 max-w-3xl space-y-4">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="proposal-body text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
          <p className="proposal-body text-sm leading-relaxed">
            {section.commitmentNote}
          </p>
        </div>

        <div className="mt-10">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-muted">
            Monthly partnership includes
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {section.monthlyIncludes.map((item) => (
              <li key={item} className="proposal-body flex items-start gap-2 text-sm">
                <span className="proposal-check mt-0.5" aria-hidden="true">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 max-w-2xl text-sm text-muted leading-relaxed">
          {section.disclaimer}
        </p>
      </div>
    </section>
  );
}
