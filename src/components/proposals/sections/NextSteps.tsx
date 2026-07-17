"use client";

import type { Proposal } from "@/data/proposals/types";
import type { ProposalSection } from "@/data/proposals/types";
import { Button } from "@/components/Button";

type Props = {
  section: Extract<ProposalSection, { type: "next-steps" }>;
  scheduleCallHref: Proposal["scheduleCallHref"];
  onAccept: () => void;
  onAskQuestion: () => void;
};

export function NextSteps({
  section,
  scheduleCallHref,
  onAccept,
  onAskQuestion,
}: Props) {
  return (
    <section className="border-b border-border bg-neutral-50">
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
          Next steps
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
          {section.title}
        </h2>

        <ol className="mt-8 max-w-xl space-y-3">
          {section.steps.map((step, index) => (
            <li key={step} className="flex items-start gap-4">
              <span className="font-display text-xl text-muted leading-none">
                {index + 1}
              </span>
              <span className="proposal-body pt-0.5 text-base">{step}</span>
            </li>
          ))}
        </ol>

        <div className="mt-12 max-w-2xl border border-border bg-background p-8 print:hidden">
          <div className="flex flex-wrap gap-3">
            <Button type="button" onClick={onAccept}>
              Accept Proposal
            </Button>
            <Button type="button" variant="secondary" onClick={onAskQuestion}>
              Ask a Question
            </Button>
            <Button href={scheduleCallHref} variant="ghost">
              Schedule a Call
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted leading-relaxed">
            {section.agreementNote}
          </p>
        </div>
      </div>
    </section>
  );
}
