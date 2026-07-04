import { growthOptions } from "@/data/pricing";
import { SectionHeading } from "./SectionHeading";

export function GrowthOptionsSection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-32">
        <SectionHeading title={growthOptions.title} description={growthOptions.intro} />
        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {growthOptions.options.map((option) => (
            <li key={option} className="text-muted">
              {option}
            </li>
          ))}
        </ul>
        <div className="mx-auto mt-16 max-w-xl space-y-2 text-center">
          {growthOptions.closing.lines.map((line) => (
            <p key={line} className="font-display text-xl tracking-tight sm:text-2xl">
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
