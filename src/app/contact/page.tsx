import { Hero } from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";
import { contactFormIntro, contactNextSteps } from "@/data/contact";
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
      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-foreground/70"
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
        title="Lets talk about your project"
        description="Tell us about your business and what you're hoping to build. Most inquiries receive a personal reply within one business day."
        size="compact"
      />

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <p className="mb-8 max-w-2xl text-muted leading-relaxed">
              {contactFormIntro}
            </p>
            <ContactForm />
          </div>
          <aside className="lg:col-span-2 lg:border-l lg:border-neutral-300 lg:pl-10">
            <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
              What happens next?
            </h2>
            <ul className="mt-5 space-y-3.5">
              {contactNextSteps.map((step) => (
                <li key={step} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                  <CheckIcon />
                  {step}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
