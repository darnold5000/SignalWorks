import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";

const offerings = [
  { label: "Personal Brand", href: "/pricing#personal-brand" },
  { label: "Launch Website", href: "/pricing#launch-partnership" },
  { label: "Growth Website", href: "/pricing#growth-partnership" },
  { label: "Purchase Outright", href: "/pricing#purchase-outright" },
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
        <div className="mx-auto mt-10 max-w-xl text-center">
          <p className="text-sm font-medium text-foreground">
            Starting your own business?
          </p>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            Our Personal Brand partnership is designed specifically for independent
            professionals who want an affordable, modern website with online booking.
          </p>
        </div>
        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-muted">
          Not sure which option fits? We&apos;ll recommend the right approach after
          a short conversation.
        </p>
      </div>
    </section>
  );
}
