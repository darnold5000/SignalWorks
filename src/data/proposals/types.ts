export type ProposalStatus =
  | "draft"
  | "sent"
  | "viewed"
  | "accepted"
  | "expired";

export type ProposalFeatureGroup = {
  id: string;
  title: string;
  icon: "globe" | "users" | "message" | "settings" | "cloud";
  items: string[];
};

export type ProposalTimelineStep = {
  number: number;
  title: string;
};

export type ProposalSection =
  | {
      id: "executive-summary";
      type: "executive-summary";
      title: string;
      paragraphs: string[];
    }
  | {
      id: "platform-includes";
      type: "platform-includes";
      title: string;
      groups: ProposalFeatureGroup[];
    }
  | {
      id: "development-investment";
      type: "development-investment";
      title: string;
      waivedBadge: string;
      normalFeeNote: string;
      foundingBenefitCopy: string;
      foundingBenefitSupportingCopy: string;
      estimatedValueLabel: string;
      whatsIncludedLabel: string;
      whatsIncluded: string[];
    }
  | {
      id: "guided-launch";
      type: "guided-launch";
      title: string;
      paragraphs: string[];
      includes: string[];
      process: ProposalTimelineStep[];
      scopeNote: string;
    }
  | {
      id: "founding-partner-pricing";
      type: "founding-partner-pricing";
      title: string;
      introductoryLabel: string;
      ongoingLabel: string;
      introductoryBillingNote: string;
      commitmentNote: string;
      paragraphs: string[];
      monthlyIncludes: string[];
      disclaimer: string;
    }
  | {
      id: "built-to-grow";
      type: "built-to-grow";
      title: string;
      paragraphs: string[];
      includedLabel: string;
      included: string[];
      futureLabel: string;
      future: string[];
      platformStatement: string;
      futureNote: string;
    }
  | {
      id: "ongoing-partnership";
      type: "ongoing-partnership";
      title: string;
      paragraphs: string[];
      monthlyValue: string[];
    }
  | {
      id: "why-signal-works";
      type: "why-signal-works";
      title: string;
      items: string[];
    }
  | {
      id: "partnership-difference";
      type: "partnership-difference";
      title: string;
      contrastLines: [string, string];
      paragraphs: string[];
    }
  | {
      id: "next-steps";
      type: "next-steps";
      title: string;
      steps: string[];
      agreementNote: string;
    };

export type Proposal = {
  id: string;
  slug: string;
  proposalNumber: string;
  status: ProposalStatus;
  clientName: string;
  clientLogo?: string;
  preparedFor?: string;
  preparedBy: string;
  proposalDate: string;
  expirationDate?: string;
  version: number;
  statusPill: string;
  hero: {
    eyebrow: string;
    title: string;
    summary: string;
  };
  sections: ProposalSection[];
  pricing: {
    developmentValue: number;
    developmentPrice: number;
    introductoryMonthlyPrice: number;
    introductoryMonths: number;
    ongoingMonthlyPrice: number;
    currency: "USD";
  };
  scheduleCallHref: string;
};
