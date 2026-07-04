import { notFound } from "next/navigation";
import { CaseStudyHero } from "@/components/CaseStudyHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureGrid } from "@/components/FeatureGrid";
import { TechBadge } from "@/components/TechBadge";
import { ScreenshotFrame } from "@/components/ScreenshotFrame";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CTASection } from "@/components/CTASection";
import { projects, getProject } from "@/data/projects";
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
    title: project.title,
    description: project.summary,
    path: `/work/${slug}`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const hasBeforeAfter = project.before && project.after;

  return (
    <>
      <JsonLd
        data={[
          webPageSchema(project.title, project.summary, `/work/${slug}`),
          creativeWorkSchema(
            project.title,
            project.summary,
            `/work/${slug}`,
            project.category,
          ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
            { name: project.title, path: `/work/${slug}` },
          ]),
        ]}
      />

      <CaseStudyHero
        title={project.title}
        summary={project.storyHook}
        categories={[project.industry, ...project.categories]}
        accent={project.accent}
      />

      {hasBeforeAfter ? (
        <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
          <SectionHeading
            title="The transformation"
            description={project.summary}
          />
          <div className="mt-8">
            <BeforeAfter before={project.before!} after={project.after!} />
          </div>
        </section>
      ) : project.after ? (
        <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
          <SectionHeading title="What was built" description={project.summary} />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {project.after.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border border-border p-4 text-sm"
              >
                <span aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="border-t border-border bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading title="The challenge" />
              <p className="mt-6 text-muted leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <SectionHeading title="The solution" />
              <p className="mt-6 text-muted leading-relaxed">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <SectionHeading title="Key features" />
        <div className="mt-8">
          <FeatureGrid items={project.features} columns={2} />
        </div>
      </section>

      <section className="border-t border-border bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <SectionHeading title="Technical stack" />
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <SectionHeading title="The outcome" />
        <ul className="mt-8 space-y-4">
          {project.results.map((result) => (
            <li key={result} className="flex items-start gap-3 text-muted">
              <span aria-hidden="true">—</span>
              {result}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <SectionHeading title="Screenshots" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <ScreenshotFrame title={`${project.title} — Homepage`} accent={project.accent} />
            <ScreenshotFrame title={`${project.title} — Detail`} accent={project.accent} />
          </div>
          {/* TODO: Replace screenshot placeholders with actual project images */}
        </div>
      </section>

      <CTASection
        title="Want something like this?"
        description="Let's build a digital product tailored to your business goals."
      />
    </>
  );
}
