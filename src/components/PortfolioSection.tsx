import Link from "next/link";
import type { Project } from "@/data/projects";
import { ScreenshotFrame } from "./ScreenshotFrame";
import { cn } from "@/lib/utils";

type PortfolioSectionProps = {
  project: Project;
  index: number;
};

export function PortfolioSection({ project, index }: PortfolioSectionProps) {
  return (
    <section
      className={cn(
        "border-b border-border last:border-b-0",
        index % 2 === 1 ? "bg-neutral-50" : "bg-background",
      )}
    >
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-32">
        <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
          {project.title}
        </h2>

        <div className="mt-10 lg:mt-14">
          <ScreenshotFrame
            title={project.title}
            accent={project.accent}
            aspectRatio="wide"
            className="shadow-sm"
          />
        </div>

        <p className="mt-8 text-sm font-semibold tracking-wider uppercase text-muted">
          {project.industry}
        </p>

        <p className="mt-4 text-xl leading-relaxed sm:text-2xl">
          <span className="text-muted">{project.transformation.from}</span>
          <span className="mx-3 text-muted" aria-hidden="true">
            →
          </span>
          <span className="font-medium">{project.transformation.to}</span>
        </p>

        <Link
          href={`/work/${project.slug}`}
          className="mt-8 inline-block text-sm font-medium hover:underline"
        >
          View Case Study →
        </Link>
      </div>
    </section>
  );
}
