import { Hero } from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { contactNextSteps } from "@/data/contact";
import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Signal Works to discuss your website, custom software, or ongoing technology partnership.",
  path: "/contact",
});

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-foreground"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8.5L6.5 12L13 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
        description="Tell us about your business and what you're hoping to build. Most inquiries receive a personal reply within one business day."
      />

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <SectionHeading title="What happens next?" />
            <ul className="mt-6 space-y-4">
              {contactNextSteps.map((step) => (
                <li key={step} className="flex items-start gap-3 text-sm text-muted">
                  <CheckIcon />
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
