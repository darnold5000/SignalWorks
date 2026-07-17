import { ProposalChrome, ProposalFooter } from "@/components/proposals/ProposalChrome";

export default function ProposalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="proposal-microsite min-h-screen bg-background">
      <ProposalChrome />
      {children}
      <ProposalFooter />
    </div>
  );
}
