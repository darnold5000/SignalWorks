import type { Project } from "@/data/projects";
import { BrowserPreview } from "./BrowserPreview";
import { MobilePreview } from "./MobilePreview";

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

type ProjectHeroProps = {
  project: Project;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  const demoLabel = project.demoCtaLabel ?? "Explore Live Website";

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-muted">
          {project.category}
        </p>
        {project.productType && (
          <p className="mt-2 text-sm font-medium tracking-wide text-foreground/70">
            {project.productType}
          </p>
        )}
        <h1 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-5 text-xl leading-relaxed text-muted">
          {project.tagline}
        </p>
        <div className="mt-8">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-foreground px-6 py-3 text-sm font-medium tracking-wide text-background transition-colors hover:bg-accent-hover"
          >
            {demoLabel}
            <ExternalLinkIcon />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>

      <div className="relative mt-12">
        <BrowserPreview
          src={project.image}
          alt={`${project.name} homepage`}
          priority
          className="shadow-sm"
        />
        {project.mobileImage && (
          <div className="pointer-events-none absolute -bottom-6 right-4 w-[22%] max-w-[140px] sm:right-8 sm:w-[18%]">
            <MobilePreview src={project.mobileImage} alt="" />
          </div>
        )}
      </div>
    </section>
  );
}
