import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";

const offerings = [
  { label: "Launch Website", href: "/pricing#launch-website" },
  { label: "Growth Website", href: "/pricing#growth-website" },
  { label: "Custom Software", href: "/pricing#custom-software" },
] as const;

export function FlexibleWaysSection() {
  return (
    <section className="border-t border-border bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <SectionHeading
          title="Your long-term website partner"
          description="One monthly partnership covers your website, hosting, security, updates, and ongoing improvements."
          align="center"
          className="mx-auto"
        />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {offerings.map((option) => (
            <Button key={option.label} href={option.href} variant="secondary">
              {option.label}
            </Button>
          ))}
          <Button href="/pricing" variant="primary">
            See Pricing
          </Button>
        </div>
        <p className="mx-auto mt-10 max-w-xl text-center text-sm text-muted">
          Not sure which option fits? We&apos;ll recommend the right approach after
          a short conversation.
        </p>
      </div>
    </section>
  );
}
