import { Hero } from "@/components/Hero";
import { PortfolioSection } from "@/components/PortfolioSection";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Work",
  description:
    "Portfolio of websites, custom software, and AI tools built by Signal Works for financial services, youth sports, and growing businesses.",
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
        eyebrow="Work"
        title="Look what we've built."
        tagline="Modern websites backed by real software engineering."
        description="Scroll through real projects — financial services, youth sports, and custom software built for businesses that needed more than a template."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
        size="default"
      />

      <div>
        {projects.map((project, index) => (
          <PortfolioSection key={project.slug} project={project} index={index} />
        ))}
      </div>

      <Testimonials items={testimonials} />

      <CTASection
        title="Want a transformation like this?"
        description="Let's discuss your project and build something tailored to your business."
      />
    </>
  );
}
