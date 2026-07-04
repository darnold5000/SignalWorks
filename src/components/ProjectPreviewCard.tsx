import Link from "next/link";
import type { Project } from "@/data/projects";
import { ScreenshotFrame } from "./ScreenshotFrame";

type ProjectPreviewCardProps = {
  project: Project;
};

export function ProjectPreviewCard({ project }: ProjectPreviewCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block"
    >
      <ScreenshotFrame
        title={project.title}
        accent={project.accent}
        aspectRatio="wide"
        className="transition-transform duration-300 group-hover:-translate-y-1"
      />
      <h3 className="mt-6 text-lg font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-2 text-sm text-muted leading-relaxed">
        {project.previewDescription}
      </p>
      <span className="mt-4 inline-block text-sm font-medium group-hover:underline">
        View project →
      </span>
    </Link>
  );
}
