import { notFound } from "next/navigation";
import { ProjectHero } from "@/components/work/ProjectHero";
import { ProjectOverview } from "@/components/work/ProjectOverview";
import { ProjectGallery } from "@/components/work/ProjectGallery";
import { FeatureGrid } from "@/components/work/FeatureGrid";
import { GrowthOpportunities } from "@/components/work/GrowthOpportunities";
import { ProjectCTA } from "@/components/work/ProjectCTA";
import {
  projects,
  getProject,
  getProjectGrowthFeatures,
} from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  creativeWorkSchema,
  webPageSchema,
} from "@/lib/schema";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return createPageMetadata({
    title: `${project.name} Website`,
    description: project.summary,
    path: `/work/${slug}`,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const growthItems = getProjectGrowthFeatures(project);

  return (
    <>
      <JsonLd
        data={[
          webPageSchema(project.name, project.summary, `/work/${slug}`),
          creativeWorkSchema(
            project.name,
            project.summary,
            `/work/${slug}`,
            project.category,
          ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Work", path: "/work" },
            { name: project.name, path: `/work/${slug}` },
          ]),
        ]}
      />

      <ProjectHero project={project} />
      <ProjectOverview
        challenge={project.challenge}
        solution={project.solution}
        impact={project.impact}
      />
      <ProjectGallery items={project.gallery} />
      <FeatureGrid features={project.featureDetails} />
      <GrowthOpportunities items={growthItems} />
      <ProjectCTA demoUrl={project.demoUrl} />
    </>
  );
}
