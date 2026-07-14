import Link from "next/link";
import { growthOptions } from "@/data/pricing";
import { SectionHeading } from "./SectionHeading";

export function GrowthOptionsSection() {
  return (
    <section className="border-t border-border bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <SectionHeading title={growthOptions.title} description={growthOptions.intro} />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {growthOptions.options.map((option) => (
            <li key={option} className="text-muted">
              {option}
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-12 max-w-xl text-center text-muted leading-relaxed">
          Start with what you need today. Expand when your business is ready. No
          rebuild required.
        </p>
        <p className="mt-6 text-center">
          <Link
            href="/capabilities"
            className="text-sm font-medium hover:underline"
          >
            See all capabilities →
          </Link>
        </p>
      </div>
    </section>
  );
}
