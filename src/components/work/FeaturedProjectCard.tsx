import Link from "next/link";
import type { Project } from "@/data/projects";
import { BrowserPreview } from "./BrowserPreview";

type FeaturedProjectCardProps = {
  project: Project;
};

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  const capabilities = (project.metrics ?? project.features).slice(0, 3);
  const line = project.cardLine ?? project.transformation;

  return (
    <article className="group flex flex-col transition-transform duration-300 motion-safe:hover:-translate-y-1">
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
      <h3 className="mt-2 font-display text-xl tracking-tight sm:text-2xl">
        <Link href={`/work/${project.slug}`} className="hover:underline">
          {project.name}
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-snug text-muted line-clamp-2">{line}</p>
      {project.image ? (
        <Link href={`/work/${project.slug}`} className="mt-4 block overflow-hidden rounded-lg">
          <BrowserPreview
            src={project.image}
            alt={`${project.name} website preview`}
            className="transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.02]"
          />
        </Link>
      ) : (
        <div className="mt-4 flex aspect-[16/10] items-center justify-center rounded-lg border border-border bg-neutral-50 sm:aspect-[16/9]">
          <p className="px-4 text-center text-sm text-muted">
            Screenshots coming soon — explore the live site
          </p>
        </div>
      )}
      {capabilities.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1" aria-label="Capabilities">
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
