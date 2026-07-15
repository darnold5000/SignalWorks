import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

type ProjectGridProps = {
  projects: Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-7">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
