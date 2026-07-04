import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { CTASection } from "@/components/CTASection";
import { projects, projectCategories } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Work",
  description:
    "Case studies from Signal Works — premium websites, custom applications, and AI tools built for financial services, youth sports, and growing businesses.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(
            "Work",
            "Portfolio of digital products built by Signal Works",
            "/work",
          ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
          ]),
        ]}
      />

      <Hero
        eyebrow="Case Studies"
        title="Real businesses using real software"
        description="Financial advisors, baseball facilities, gymnastics clubs, and cheer competitions — each project tells a story of a business that needed more than a template."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
      />

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="mb-12 flex flex-wrap gap-3">
          {projectCategories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              industry={project.industry}
              category={project.category}
              description={project.description}
              storyHook={project.storyHook}
              technologies={project.technologies}
              result={project.result}
              href={`/work/${project.slug}`}
              accent={project.accent}
            />
          ))}
        </div>
      </section>

      <CTASection
        title="Want something like this?"
        description="Let's discuss your project and build something tailored to your business."
      />
    </>
  );
}
