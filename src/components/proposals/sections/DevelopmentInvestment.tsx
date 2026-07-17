"use client";

import { useState } from "react";
import type { Proposal } from "@/data/proposals/types";
import type { ProposalSection } from "@/data/proposals/types";
import { formatCurrency } from "@/lib/proposals/format";
import { cn } from "@/lib/utils";

type Props = {
  section: Extract<ProposalSection, { type: "development-investment" }>;
  pricing: Proposal["pricing"];
};

export function DevelopmentInvestment({ section, pricing }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <section id="investment" className="scroll-mt-24 border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
          Investment
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
          {section.title}
        </h2>

        <div className="mt-10 max-w-2xl border border-border bg-neutral-50 p-8 sm:p-10">
          <p className="text-sm text-muted line-through decoration-foreground/30">
            {formatCurrency(pricing.developmentValue)} One-Time Platform Development
          </p>
          <p className="mt-6 text-xs font-semibold tracking-[0.18em] uppercase text-muted">
            {section.foundingBenefitLabel}
          </p>
          <p className="mt-2 font-display text-5xl tracking-tight sm:text-6xl">
            {formatCurrency(pricing.developmentPrice)}
          </p>
          <p className="mt-4 text-base text-muted leading-relaxed">
            {section.foundingBenefitCopy}
          </p>
          <p className="mt-6 text-sm font-medium">
            {section.estimatedValueLabel}:{" "}
            {formatCurrency(pricing.developmentValue)}
          </p>
        </div>

        <div className="mt-8 max-w-2xl border border-border">
          <button
            type="button"
            className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-sm font-medium transition-colors hover:bg-neutral-50"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {section.whatsIncludedLabel}
            <span
              className={cn(
                "text-xl text-muted transition-transform",
                open && "rotate-45",
              )}
              aria-hidden="true"
            >
              +
            </span>
          </button>
          {open && (
            <ul className="grid gap-2 border-t border-border px-6 py-5 sm:grid-cols-2">
              {section.whatsIncluded.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-0.5 text-foreground/50" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
