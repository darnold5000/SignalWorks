import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function ProposalChrome() {
  return (
    <header className="proposal-chrome sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm print:static print:border-0">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/icon.png"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 shrink-0"
            priority
          />
          <span className="text-sm font-semibold tracking-[0.2em] uppercase">
            {siteConfig.name}
          </span>
        </Link>
        <p className="hidden text-xs text-muted sm:block">Client Proposal</p>
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
