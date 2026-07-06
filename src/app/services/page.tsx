import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { services, carePlanService } from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Professional websites, booking tools, and online support for salons, gyms, contractors, and growing local businesses.",
  path: "/services",
});

const serviceIcons: Record<string, string> = {
  "business-websites": "globe",
  "custom-apps": "code",
  "ai-automation": "sparkles",
  "seo-aeo": "search",
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(
            "Services",
            "Digital product services by Signal Works",
            "/services",
          ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />

      <Hero
        eyebrow="Services"
        title="Websites and tools that help your business grow"
        description="Professional websites, booking and contact tools, search visibility, and ongoing support — built for businesses that want to look credible online."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
        secondaryCta={{ label: "View Pricing", href: "/pricing" }}
      />

      <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              description={service.shortDescription}
              href={`/services/${service.slug}`}
              icon={serviceIcons[service.slug]}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading
            title={carePlanService.title}
            description={carePlanService.shortDescription}
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {carePlanService.includes.map((item) => (
              <li
                key={item}
                className="border border-border bg-background p-4 text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link href="/pricing" className="text-sm font-medium hover:underline">
              View partnership options →
            </Link>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Comparison"
          title="Websites vs. applications vs. AI"
          description="Understanding what you need helps us scope the right solution."
        />
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 pr-4 text-left font-semibold">Capability</th>
                <th className="px-4 py-4 text-left font-semibold">Website</th>
                <th className="px-4 py-4 text-left font-semibold">Web App</th>
                <th className="py-4 pl-4 text-left font-semibold">AI Tool</th>
              </tr>
            </thead>
            <tbody className="text-muted">
              <tr className="border-b border-border">
                <td className="py-4 pr-4 font-medium text-foreground">Content pages</td>
                <td className="px-4 py-4">✓</td>
                <td className="px-4 py-4">✓</td>
                <td className="py-4 pl-4">—</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-4 pr-4 font-medium text-foreground">User accounts</td>
                <td className="px-4 py-4">—</td>
                <td className="px-4 py-4">✓</td>
                <td className="py-4 pl-4">✓</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-4 pr-4 font-medium text-foreground">Data management</td>
                <td className="px-4 py-4">—</td>
                <td className="px-4 py-4">✓</td>
                <td className="py-4 pl-4">✓</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-4 pr-4 font-medium text-foreground">AI processing</td>
                <td className="px-4 py-4">—</td>
                <td className="px-4 py-4">Optional</td>
                <td className="py-4 pl-4">✓</td>
              </tr>
              <tr>
                <td className="py-4 pr-4 font-medium text-foreground">SEO / AEO</td>
                <td className="px-4 py-4">✓</td>
                <td className="px-4 py-4">✓</td>
                <td className="py-4 pl-4">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <CTASection
        title="Not sure what you need?"
        description="Let's talk through your goals and find the right approach."
      />
    </>
  );
}
