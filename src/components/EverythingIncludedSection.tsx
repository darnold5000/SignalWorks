import { everythingIncluded } from "@/data/pricing";
import { SectionHeading } from "./SectionHeading";

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

export function EverythingIncludedSection() {
  return (
    <section className="border-t border-border bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-32">
        <SectionHeading
          title={everythingIncluded.title}
          description="Every partnership includes:"
          align="center"
          className="mx-auto"
        />
        <ul className="mx-auto mt-16 grid max-w-3xl gap-x-12 gap-y-4 sm:grid-cols-2">
          {everythingIncluded.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-muted">
              <CheckIcon />
              {item}
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-16 max-w-2xl text-center text-lg font-medium leading-relaxed">
          {everythingIncluded.emphasis}
        </p>
      </div>
    </section>
  );
}
