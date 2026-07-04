import Link from "next/link";
import { TechBadge } from "./TechBadge";
import { ScreenshotFrame } from "./ScreenshotFrame";

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  result: string;
  href: string;
  accent?: string;
};

export function ProjectCard({
  title,
  category,
  description,
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
        <p className="text-xs font-semibold tracking-wider uppercase text-muted">
          {category}
        </p>
        <h3 className="mt-2 text-xl font-semibold">{title}</h3>
        <p className="mt-3 flex-1 text-sm text-muted leading-relaxed">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.slice(0, 4).map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
        <p className="mt-4 text-sm font-medium">{result}</p>
        <Link
          href={href}
          className="mt-6 text-sm font-medium group-hover:underline"
        >
          View Case Study →
        </Link>
      </div>
    </article>
  );
}
