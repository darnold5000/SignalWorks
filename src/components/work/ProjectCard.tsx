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

  return (
    <article
      className={cn(
        "group flex flex-col border border-border bg-background p-5 transition-all duration-300 sm:p-6",
        "motion-safe:hover:-translate-y-1 hover:border-neutral-300 hover:shadow-sm",
        className,
      )}
    >
      <div className="relative mb-6">
        <BrowserPreview
          src={project.image}
          alt={`${project.name} preview`}
        />
        {project.mobileImage && (
          <div className="pointer-events-none absolute -bottom-4 -right-2 w-[28%] max-w-[110px] sm:-right-3 sm:w-[26%]">
            <MobilePreview
              src={project.mobileImage}
              alt=""
              className="shadow-md"
            />
          </div>
        )}
      </div>

      <p className="mt-2 text-xs font-semibold tracking-[0.18em] uppercase text-muted">
        {project.category}
      </p>
      {project.productType && (
        <p className="mt-1 text-xs font-medium tracking-wide text-foreground/70">
          {project.productType}
        </p>
      )}

      <h2 className="mt-2 font-display text-2xl tracking-tight sm:text-3xl">
        {project.name}
      </h2>

      <p className="mt-3 text-sm leading-relaxed text-foreground sm:text-base">
        {project.transformation}
      </p>

      <div className="mt-6 grid gap-4 border-t border-border pt-5 sm:grid-cols-2">
        <div>
          <h3 className="text-xs font-semibold tracking-[0.16em] uppercase text-muted">
            {project.beforeLabel ?? "Before"}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {project.before}
          </p>
        </div>
        <div>
          <h3 className="text-xs font-semibold tracking-[0.16em] uppercase text-muted">
            {project.builtLabel ?? "What We Built"}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {project.whatWeBuilt}
          </p>
        </div>
      </div>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Key features">
        {chips.map((feature) => (
          <li
            key={feature}
            className="rounded-sm border border-border px-2.5 py-1 text-xs text-muted"
          >
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
        >
          {project.demoCtaLabel ?? "Explore Live Website"}
          <ExternalLinkIcon className="transition-transform duration-300 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-neutral-50"
        >
          View Project
        </Link>
      </div>
    </article>
  );
}
