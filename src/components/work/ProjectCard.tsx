import Link from "next/link";
import type { Project } from "@/data/projects";
import { BrowserPreview } from "./BrowserPreview";
import { MobilePreview } from "./MobilePreview";
import { cn } from "@/lib/utils";

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
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

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const chips = project.features.slice(0, 5);
  const metrics = project.metrics?.slice(0, 4) ?? [];
  const beforeCopy = project.cardBefore ?? project.before;
  const builtCopy = project.cardBuilt ?? project.whatWeBuilt;
  const demoLabel =
    project.demoCtaLabel === "Explore Live Platform"
      ? "Explore Platform"
      : "Explore Website";

  return (
    <article
      className={cn(
        "group flex flex-col border border-border bg-background p-5 transition-all duration-300 sm:p-6",
        "motion-safe:hover:-translate-y-1.5 hover:border-neutral-300 hover:shadow-md",
        className,
      )}
    >
      <p className="text-xs font-semibold tracking-[0.18em] uppercase text-muted">
        {project.category}
      </p>
      {project.productType && (
        <p className="mt-1 text-xs font-medium tracking-wide text-foreground/70">
          {project.productType}
        </p>
      )}

      <h2 className="mt-2 font-display text-2xl tracking-tight sm:text-[1.75rem]">
        {project.name}
      </h2>

      <p className="mt-3 text-sm leading-relaxed text-foreground sm:text-[0.95rem]">
        {project.transformation}
      </p>

      <div className="mt-5 flex flex-col items-start gap-2.5">
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
        >
          {demoLabel}
          <ExternalLinkIcon className="transition-transform duration-300 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center text-sm text-muted transition-colors hover:text-foreground"
        >
          Read Case Study
          <span aria-hidden="true" className="ml-1">
            →
          </span>
        </Link>
      </div>

      <div className="relative mt-5 overflow-hidden rounded-lg transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.015]">
        <BrowserPreview src={project.image} alt={`${project.name} preview`} />
        {project.mobileImage && (
          <div className="pointer-events-none absolute -bottom-3 -right-2 w-[26%] max-w-[100px] sm:-right-2 sm:w-[24%]">
            <MobilePreview
              src={project.mobileImage}
              alt=""
              className="shadow-md"
            />
          </div>
        )}
      </div>

      {metrics.length > 0 && (
        <ul
          className="mt-3 flex flex-wrap gap-1.5"
          aria-label="Project scope"
        >
          {metrics.map((metric) => (
            <li
              key={metric}
              className="rounded-sm bg-neutral-100 px-2 py-0.5 text-[11px] font-medium tracking-wide text-foreground/75"
            >
              {metric}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 grid gap-4 border-t border-border pt-4 sm:grid-cols-2">
        <div>
          <h3 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-muted">
            {project.beforeLabel ?? "Before"}
          </h3>
          <p className="mt-1.5 text-sm leading-snug text-muted line-clamp-3">
            {beforeCopy}
          </p>
        </div>
        <div>
          <h3 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-muted">
            {project.builtLabel ?? "What We Built"}
          </h3>
          <p className="mt-1.5 text-sm leading-snug text-muted line-clamp-3">
            {builtCopy}
          </p>
        </div>
      </div>

      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Key features">
        {chips.map((feature) => (
          <li
            key={feature}
            className="rounded-sm border border-border px-2 py-0.5 text-[11px] text-muted"
          >
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}
