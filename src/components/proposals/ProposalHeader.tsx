"use client";

import Image from "next/image";
import type { Proposal } from "@/data/proposals/types";
import { formatProposalDate } from "@/lib/proposals/format";
import { Button } from "@/components/Button";

type ProposalHeaderProps = {
  proposal: Proposal;
  onReviewInvestment: () => void;
  onAskQuestion: () => void;
};

export function ProposalHeader({
  proposal,
  onReviewInvestment,
  onAskQuestion,
}: ProposalHeaderProps) {
  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/icon.png"
              alt="Signal Works"
              width={36}
              height={36}
              className="h-9 w-9"
              priority
            />
            <span className="text-sm font-semibold tracking-[0.18em] uppercase">
              Signal Works
            </span>
          </div>
          <span className="hidden h-6 w-px bg-border sm:block" aria-hidden="true" />
          <div className="flex items-center gap-3">
            {proposal.clientLogo ? (
              <Image
                src={proposal.clientLogo}
                alt={proposal.clientName}
                width={120}
                height={40}
                className="h-9 w-auto object-contain"
                priority
              />
            ) : (
              <span className="text-sm font-semibold tracking-wide">
                {proposal.clientName}
              </span>
            )}
          </div>
          <span className="inline-flex items-center rounded-sm border border-border px-2.5 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase text-muted">
            {proposal.statusPill}
          </span>
        </div>

        <p className="mt-10 text-xs font-semibold tracking-[0.2em] uppercase text-muted">
          {proposal.hero.eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl tracking-tight sm:text-5xl lg:text-6xl">
          {proposal.hero.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted leading-relaxed">
          {proposal.hero.summary}
        </p>

        <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-xs tracking-[0.14em] uppercase text-muted">Prepared by</dt>
            <dd className="mt-1 font-medium">{proposal.preparedBy}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.14em] uppercase text-muted">Proposal date</dt>
            <dd className="mt-1 font-medium">{formatProposalDate(proposal.proposalDate)}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.14em] uppercase text-muted">Proposal number</dt>
            <dd className="mt-1 font-medium">{proposal.proposalNumber}</dd>
          </div>
          {proposal.expirationDate && (
            <div>
              <dt className="text-xs tracking-[0.14em] uppercase text-muted">Valid through</dt>
              <dd className="mt-1 font-medium">
                {formatProposalDate(proposal.expirationDate)}
              </dd>
            </div>
          )}
        </dl>

        <div className="mt-10 flex flex-wrap gap-3 print:hidden">
          <Button type="button" onClick={onReviewInvestment}>
            Review Investment
          </Button>
          <Button type="button" variant="secondary" onClick={onAskQuestion}>
            Ask a Question
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={() => window.print()}
          >
            Print / Save PDF
          </Button>
        </div>
      </div>
    </header>
  );
}
