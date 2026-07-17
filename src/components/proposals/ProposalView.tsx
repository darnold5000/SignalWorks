"use client";

import { useState } from "react";
import type { Proposal } from "@/data/proposals/types";
import { ProposalHeader } from "./ProposalHeader";
import { AcceptProposalModal } from "./AcceptProposalModal";
import { AskQuestionModal } from "./AskQuestionModal";
import { ExecutiveSummary } from "./sections/ExecutiveSummary";
import { PlatformIncludes } from "./sections/PlatformIncludes";
import { DevelopmentInvestment } from "./sections/DevelopmentInvestment";
import { GuidedLaunchProgram } from "./sections/GuidedLaunchProgram";
import { FoundingPartnerPricing } from "./sections/FoundingPartnerPricing";
import { BuiltToGrow } from "./sections/BuiltToGrow";
import { OngoingPartnership } from "./sections/OngoingPartnership";
import { WhySignalWorks } from "./sections/WhySignalWorks";
import { NextSteps } from "./sections/NextSteps";

type ProposalViewProps = {
  proposal: Proposal;
};

export function ProposalView({ proposal }: ProposalViewProps) {
  const [acceptOpen, setAcceptOpen] = useState(false);
  const [questionOpen, setQuestionOpen] = useState(false);

  function scrollToInvestment() {
    document
      .getElementById("pricing")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <ProposalHeader
        proposal={proposal}
        onReviewInvestment={scrollToInvestment}
        onAskQuestion={() => setQuestionOpen(true)}
      />

      {proposal.sections.map((section) => {
        switch (section.type) {
          case "executive-summary":
            return <ExecutiveSummary key={section.id} section={section} />;
          case "platform-includes":
            return <PlatformIncludes key={section.id} section={section} />;
          case "development-investment":
            return (
              <DevelopmentInvestment
                key={section.id}
                section={section}
                pricing={proposal.pricing}
              />
            );
          case "guided-launch":
            return <GuidedLaunchProgram key={section.id} section={section} />;
          case "founding-partner-pricing":
            return (
              <FoundingPartnerPricing
                key={section.id}
                section={section}
                pricing={proposal.pricing}
              />
            );
          case "built-to-grow":
            return <BuiltToGrow key={section.id} section={section} />;
          case "ongoing-partnership":
            return <OngoingPartnership key={section.id} section={section} />;
          case "why-signal-works":
            return <WhySignalWorks key={section.id} section={section} />;
          case "next-steps":
            return (
              <NextSteps
                key={section.id}
                section={section}
                scheduleCallHref={proposal.scheduleCallHref}
                onAccept={() => setAcceptOpen(true)}
                onAskQuestion={() => setQuestionOpen(true)}
              />
            );
          default:
            return null;
        }
      })}

      <AcceptProposalModal
        proposal={proposal}
        open={acceptOpen}
        onClose={() => setAcceptOpen(false)}
      />
      <AskQuestionModal
        proposal={proposal}
        open={questionOpen}
        onClose={() => setQuestionOpen(false)}
      />
    </>
  );
}
