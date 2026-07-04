import { Hero } from "@/components/Hero";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { processSteps } from "@/data/process";
import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Process",
  description:
    "How Signal Works builds websites, applications, and AI tools — from discovery through launch and ongoing improvement.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(
            "Process",
            "Project process for Signal Works digital products",
            "/process",
          ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Process", path: "/process" },
          ]),
        ]}
      />

      <Hero
        eyebrow="Process"
        title="Structured, transparent, collaborative"
        description="Every project follows a clear path from understanding your business to launching a polished digital product — and improving it over time."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
      />

      <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
        <ProcessTimeline steps={processSteps} />
      </section>

      <section className="border-t border-border bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading
            title="Better signal. Less noise."
            description="The process isn't about adding features — it's about making the important things obvious. Whether it's a website, an internal dashboard, or an AI-powered application, clarity is the goal."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className="border border-border bg-background p-8">
              <h3 className="font-semibold">Communication</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Regular updates, clear milestones, and direct access throughout
                the project. No black boxes or surprise invoices.
              </p>
            </div>
            <div className="border border-border bg-background p-8">
              <h3 className="font-semibold">Quality</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Modern tooling, performance optimization, accessibility
                standards, and SEO/AEO structure built in from day one.
              </p>
            </div>
            <div className="border border-border bg-background p-8">
              <h3 className="font-semibold">Flexibility</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Start with a website and grow into apps, portals, dashboards,
                and automations as your business evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to start?"
        description="Tell me about your project and we'll map out the path forward."
      />
    </>
  );
}
