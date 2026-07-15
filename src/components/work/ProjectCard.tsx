import Link from "next/link";
import type { Project } from "@/data/projects";
import { BrowserPreview } from "./BrowserPreview";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const capabilities = (project.metrics ?? project.features).slice(0, 3);
  const line = project.cardLine ?? project.transformation;

  return (
    <article
      className={cn(
        "group flex flex-col border border-border bg-background p-4 transition-all duration-300 sm:p-5",
        "motion-safe:hover:-translate-y-1.5 hover:border-neutral-300 hover:shadow-md",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted">
          {project.category}
        </p>
        {project.badge && (
          <span className="shrink-0 rounded-sm border border-border px-2 py-0.5 text-[10px] font-semibold tracking-wide text-foreground/80">
            {project.badge}
          </span>
        )}
      </div>

      <h2 className="mt-2 font-display text-xl tracking-tight sm:text-2xl">
        {project.name}
      </h2>

      <p className="mt-2 text-sm leading-snug text-muted line-clamp-2">
        {line}
      </p>

      <div className="relative mt-4 overflow-hidden rounded-lg transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.02]">
        <BrowserPreview src={project.image} alt={`${project.name} preview`} />
      </div>

      {capabilities.length > 0 && (
        <ul
          className="mt-3 flex flex-wrap gap-x-3 gap-y-1"
          aria-label="Capabilities"
        >
          {capabilities.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-1 text-[11px] font-medium text-foreground/75"
            >
              <span aria-hidden="true" className="text-foreground/40">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex flex-col items-start gap-1.5">
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-foreground transition-colors hover:text-muted"
        >
          Explore Website
          <span aria-hidden="true" className="ml-1">
            →
          </span>
          <span className="sr-only">(opens in a new tab)</span>
        </a>
        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center text-sm text-muted transition-colors hover:text-foreground"
        >
          Read the Story
          <span aria-hidden="true" className="ml-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
