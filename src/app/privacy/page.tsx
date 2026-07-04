import { SectionHeading } from "@/components/SectionHeading";
import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for Signal Works website and contact form.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(
            "Privacy Policy",
            "Privacy policy for Signal Works",
            "/privacy",
          ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Privacy", path: "/privacy" },
          ]),
        ]}
      />

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
        <SectionHeading title="Privacy Policy" />
        <p className="mt-4 text-sm text-muted">Last updated: July 4, 2026</p>

        <div className="prose prose-neutral mt-12 space-y-8 text-muted">
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              Information we collect
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              When you submit the contact form on this website, we collect the
              information you provide: name, email address, company, project
              details, and message content.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              How we use your information
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              We use contact form submissions solely to respond to your inquiry
              and discuss potential projects. We do not sell, rent, or share your
              personal information with third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Analytics</h2>
            <p className="mt-2 text-sm leading-relaxed">
              This site may use Google Analytics and Microsoft Clarity to
              understand how visitors use the website. These services collect
              anonymized usage data. You can opt out using browser extensions or
              privacy settings.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Cookies</h2>
            <p className="mt-2 text-sm leading-relaxed">
              Analytics services may use cookies to track site usage. No
              advertising cookies are used on this site.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Contact</h2>
            <p className="mt-2 text-sm leading-relaxed">
              For privacy-related questions, contact{" "}
              <a href={`mailto:${siteConfig.email}`} className="underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
