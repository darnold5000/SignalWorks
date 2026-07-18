import { WorkHero } from "@/components/work/WorkHero";
import { ProjectGrid } from "@/components/work/ProjectGrid";
import { CTASection } from "@/components/CTASection";
import { getVisibleProjects } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Our Work",
  description:
    "Explore websites created by Signal Works for local businesses, sports organizations, training facilities, salons, fitness brands, and growing companies.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(
            "Our Work",
            "Explore websites created by Signal Works for local businesses and growing companies.",
            "/work",
          ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Work", path: "/work" },
          ]),
        ]}
      />

      <WorkHero />

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <ProjectGrid projects={getVisibleProjects()} />
        </div>
      </section>

      <CTASection
        title="Want a website built around your business?"
        description="Tell us what you offer, who you serve, and what the next step should be — we'll help shape the experience."
        buttonLabel="Start a Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
