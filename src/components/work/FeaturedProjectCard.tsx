import Link from "next/link";
import type { Project } from "@/data/projects";
import { BrowserPreview } from "./BrowserPreview";

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

type FeaturedProjectCardProps = {
  project: Project;
};

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <article className="group flex flex-col transition-transform duration-300 motion-safe:hover:-translate-y-1">
      <p className="text-xs font-semibold tracking-[0.18em] uppercase text-muted">
        {project.category}
      </p>
      <h3 className="mt-2 font-display text-2xl tracking-tight">
        <Link href={`/work/${project.slug}`} className="hover:underline">
          {project.name}
        </Link>
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {project.transformation}
      </p>
      <div className="mt-4 flex flex-col items-start gap-2">
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
        >
          Explore Website
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
      <Link href={`/work/${project.slug}`} className="mt-5 block overflow-hidden rounded-lg">
        <BrowserPreview
          src={project.image}
          alt={`${project.name} website preview`}
          className="transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.02]"
        />
      </Link>
    </article>
  );
}
