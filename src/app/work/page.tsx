import { Hero } from "@/components/Hero";
import { WorkStoryCard } from "@/components/WorkStoryCard";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { LogoCloud } from "@/components/LogoCloud";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Work",
  description:
    "Case studies from Signal Works — transformations across financial services, youth sports, and custom software.",
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
        title="Transformations, not screenshots"
        description="People buy outcomes — faster sites, modern brands, software that saves time. Every project below started with a business problem."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
      />

      <LogoCloud />

      <section className="mx-auto max-w-6xl px-6 pb-12 lg:px-8">
        <div className="space-y-8">
          {projects.map((project) => (
            <WorkStoryCard
              key={project.slug}
              title={project.title}
              industry={project.industry}
              challenge={project.workStory.challenge}
              solution={project.workStory.solution}
              results={project.workStory.results}
              href={`/work/${project.slug}`}
            />
          ))}
        </div>
      </section>

      <Testimonials items={testimonials} />

      <CTASection
        title="Want a transformation like this?"
        description="Let's discuss your project and build something tailored to your business."
      />
    </>
  );
}
