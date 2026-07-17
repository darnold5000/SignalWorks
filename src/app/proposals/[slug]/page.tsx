import { notFound } from "next/navigation";
import { ProposalView } from "@/components/proposals/ProposalView";
import { getProposalBySlug, getProposalSlugs } from "@/data/proposals";
import { createPageMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProposalSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const proposal = getProposalBySlug(slug);

  if (!proposal) {
    return createPageMetadata({
      title: "Proposal",
      description: "Signal Works client proposal",
      path: `/proposals/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: proposal.hero.title,
    description: proposal.hero.summary,
    path: `/proposals/${proposal.slug}`,
    noIndex: true,
  });
}

export default async function ProposalPage({ params }: PageProps) {
  const { slug } = await params;
  const proposal = getProposalBySlug(slug);

  if (!proposal) {
    notFound();
  }

  return <ProposalView proposal={proposal} />;
}
