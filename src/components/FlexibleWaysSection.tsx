import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";

const options = [
  {
    label: "Subscription Partnership",
    href: "/pricing#subscription-partnership",
  },
  {
    label: "Traditional Project",
    href: "/pricing#traditional-project",
  },
  {
    label: "Custom Software",
    href: "/pricing#professional-services",
  },
] as const;

export function FlexibleWaysSection() {
  return (
    <section className="border-t border-border bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <SectionHeading
          title="Flexible ways to work together"
          description="Whether you want to spread costs over time, purchase your website outright, or build custom software, Signal Works offers an approach that fits your business."
          align="center"
          className="mx-auto"
        />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {options.map((option) => (
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
