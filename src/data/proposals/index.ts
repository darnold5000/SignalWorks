import { ma5PerformanceProposal } from "./ma5-performance";
import type { Proposal } from "./types";

export type { Proposal, ProposalSection, ProposalStatus } from "./types";

const proposals: Proposal[] = [ma5PerformanceProposal];

export function getAllProposals(): Proposal[] {
  return proposals;
}

export function getProposalBySlug(slug: string): Proposal | undefined {
  return proposals.find((proposal) => proposal.slug === slug);
}

export function getProposalSlugs(): string[] {
  return proposals.map((proposal) => proposal.slug);
}
