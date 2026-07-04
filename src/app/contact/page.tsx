import { Hero } from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Signal Works to discuss your website, custom application, AI tool, or automation project.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(
            "Contact",
            "Contact Signal Works for project inquiries",
            "/contact",
          ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />

      <Hero
        eyebrow="Contact"
        title="Start a project"
        description="Tell me about your goals, timeline, and budget. Typical response time: within one business day."
      />

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="mb-10 rounded-sm border border-border bg-neutral-50 px-6 py-4">
          <p className="text-sm text-muted">
            <span className="font-medium text-foreground">Typical response time:</span>{" "}
            within one business day. You&apos;ll hear directly from {siteConfig.author} — no
            account managers, no hand-offs.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <SectionHeading title="Other ways to reach me" />
            <div className="mt-6 space-y-6 text-sm text-muted">
              <div>
                <p className="font-medium text-foreground">Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:underline"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="font-medium text-foreground">Location</p>
                <p>
                  {siteConfig.location.city}, {siteConfig.location.region}
                </p>
                <p className="mt-1">Working with clients nationwide</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Typical response time</p>
                <p>Within one business day</p>
                <p className="mt-1 text-xs">Direct reply from {siteConfig.author}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
