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
    "How Signal Works builds your website — a simple four-step process from conversation to launch.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(
            "Process",
            "How Signal Works builds websites for growing businesses",
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
        title="Simple from start to finish"
        description="No confusing steps. No tech talk. Just a clear path from first conversation to a website you're proud of."
        primaryCta={{ label: "Let's Talk", href: "/contact" }}
      />

      <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
        <ProcessTimeline steps={processSteps} />
      </section>

      <section className="border-t border-border bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading
            title="Better signal. Less noise."
            description="The goal isn't more features — it's a website that helps your business. Clear pages, easy contact, and a professional look that builds trust."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className="border border-border bg-background p-8">
              <h3 className="font-semibold">Clear communication</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Regular updates and direct access throughout your project. No
                surprises, no jargon.
              </p>
            </div>
            <div className="border border-border bg-background p-8">
              <h3 className="font-semibold">Built to last</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Fast on mobile, easy to find on Google, and designed to look
                professional for years — not just on launch day.
              </p>
            </div>
            <div className="border border-border bg-background p-8">
              <h3 className="font-semibold">Room to grow</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Start with a website. Add booking, payments, or custom tools
                later — without starting from scratch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to start?"
        description="Tell us about your business and we'll walk you through the next step."
      />
    </>
  );
}
