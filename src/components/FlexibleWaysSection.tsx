import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";

const offerings = [
  { label: "Starter Website", href: "/pricing#starter-website" },
  { label: "Business Website", href: "/pricing#business-website" },
  { label: "Custom Software", href: "/pricing#custom-software" },
] as const;

const engagementModels = [
  { label: "Growth Partnership", href: "/pricing#growth-partnership" },
  { label: "Traditional Project", href: "/pricing#traditional-project" },
] as const;

export function FlexibleWaysSection() {
  return (
    <section className="border-t border-border bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <SectionHeading
          title="Flexible ways to work together"
          description="Professional websites without agency pricing. Choose what you need, then how you'd like to invest."
          align="center"
          className="mx-auto"
        />

        <p className="mt-10 text-center text-xs font-semibold tracking-[0.2em] uppercase text-muted">
          What we build
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          {offerings.map((option) => (
            <Button key={option.label} href={option.href} variant="secondary">
              {option.label}
            </Button>
          ))}
        </div>

        <p className="mt-10 text-center text-xs font-semibold tracking-[0.2em] uppercase text-muted">
          Two ways to get started
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          {engagementModels.map((option) => (
            <Button key={option.label} href={option.href} variant="secondary">
              {option.label}
            </Button>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm text-muted">
          Not sure which option fits? We&apos;ll recommend the right approach after
          a short conversation.
        </p>
      </div>
    </section>
  );
}
