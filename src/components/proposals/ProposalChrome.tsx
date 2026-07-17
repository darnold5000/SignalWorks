import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function ProposalChrome() {
  return (
    <header className="proposal-chrome sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm print:static print:border-0">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3 lg:px-8">
        <p className="text-xs font-semibold tracking-[0.16em] uppercase text-muted">
          Client Proposal
        </p>
        <Link
          href="/"
          className="text-xs text-muted transition-colors hover:text-foreground"
        >
          {siteConfig.name}
        </Link>
      </div>
    </header>
  );
}

export function ProposalFooter() {
  return (
    <footer className="proposal-chrome border-t border-border print:hidden">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-muted lg:px-8 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <p>{siteConfig.brandStatement}</p>
      </div>
    </footer>
  );
}
