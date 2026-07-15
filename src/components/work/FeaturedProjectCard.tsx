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
    <article className="group flex flex-col">
      <Link href={`/work/${project.slug}`} className="block">
        <BrowserPreview
          src={project.image}
          alt={`${project.name} website preview`}
        />
      </Link>
      <p className="mt-5 text-xs font-semibold tracking-[0.18em] uppercase text-muted">
        {project.category}
      </p>
      <h3 className="mt-2 font-display text-2xl tracking-tight">
        <Link href={`/work/${project.slug}`} className="hover:underline">
          {project.name}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.transformation}
      </p>
      <a
        href={project.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-muted"
      >
        Explore Website
        <ExternalLinkIcon className="transition-transform duration-300 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    </article>
  );
}
