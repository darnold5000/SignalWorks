import { Button } from "@/components/Button";

function ExternalLinkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

type ProjectCTAProps = {
  demoUrl: string;
};

export function ProjectCTA({ demoUrl }: ProjectCTAProps) {
  return (
    <section className="border-t border-border bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center lg:px-8 lg:py-28">
        <h2 className="font-display text-3xl tracking-tight sm:text-4xl lg:text-5xl">
          Your business could have an experience like this.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted leading-relaxed">
          Signal Works can create a modern website around your services,
          customers, and existing business tools.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact">Start a Conversation</Button>
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border bg-transparent px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200 hover:bg-neutral-50"
          >
            Explore Live Website
            <ExternalLinkIcon />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
