import Link from "next/link";
import { TechBadge } from "./TechBadge";
import { ScreenshotFrame } from "./ScreenshotFrame";

type ProjectCardProps = {
  title: string;
  industry: string;
  category: string;
  description: string;
  storyHook: string;
  technologies: string[];
  result: string;
  href: string;
  accent?: string;
};

export function ProjectCard({
  title,
  industry,
  category,
  description,
  storyHook,
  technologies,
  result,
  href,
  accent = "from-neutral-800 to-neutral-600",
}: ProjectCardProps) {
  return (
    <article className="group flex flex-col border border-border bg-background transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-300">
      <ScreenshotFrame
        title={title}
        accent={accent}
        className="rounded-none border-0 border-b border-border"
      />
      <div className="flex flex-1 flex-col p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-sm bg-foreground px-2.5 py-1 text-xs font-medium text-background">
            {industry}
          </span>
          <span className="text-xs text-muted">{category}</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm font-medium leading-relaxed">{storyHook}</p>
        <p className="mt-3 flex-1 text-sm text-muted leading-relaxed">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.slice(0, 4).map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
        <p className="mt-4 text-sm text-muted">{result}</p>
        <Link
          href={href}
          className="mt-6 text-sm font-medium group-hover:underline"
        >
          Read the case study →
        </Link>
      </div>
    </article>
  );
}
