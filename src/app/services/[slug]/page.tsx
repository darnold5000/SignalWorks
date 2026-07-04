import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { services, getService } from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/schema";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return createPageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const path = `/services/${slug}`;

  return (
    <>
      <JsonLd
        data={[
          webPageSchema(service.title, service.description, path),
          serviceSchema(service.title, service.description, path),
          ...(service.faqs ? [faqSchema(service.faqs)] : []),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path },
          ]),
        ]}
      />

      <Hero
        eyebrow="Service"
        title={service.title}
        description={service.description}
        primaryCta={{ label: "Start a Project", href: "/contact" }}
        secondaryCta={{ label: "View Pricing", href: "/pricing" }}
      />

      <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
        <SectionHeading title="What's included" />
        <div className="mt-8">
          <FeatureGrid items={service.includes} columns={2} />
        </div>
      </section>

      {service.examples && (
        <section className="border-t border-border bg-neutral-50">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
            <SectionHeading title="Examples" />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {service.examples.map((example) => (
                <li
                  key={example}
                  className="border border-border bg-background p-4 text-sm"
                >
                  {example}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {slug === "seo-aeo" && (
        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <SectionHeading
            title="Built in, not bolted on"
            description="Technical SEO and AEO are included in every modern Signal Works site build. Ongoing content campaigns and advanced optimization are available separately."
          />
        </section>
      )}

      {service.faqs && service.faqs.length > 0 && (
        <section className="border-t border-border bg-neutral-50">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
            <SectionHeading title="Common questions" />
            <div className="mt-8">
              <FAQAccordion faqs={service.faqs} />
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Ready to get started with ${service.title.toLowerCase()}?`}
        description="Tell me about your project and we'll find the right approach."
      />
    </>
  );
}
