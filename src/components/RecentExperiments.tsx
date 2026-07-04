import Link from "next/link";
import { recentExperiments } from "@/data/experiments";
import { SectionHeading } from "./SectionHeading";

export function RecentExperiments() {
  return (
    <section className="border-t border-border bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Recent experiments"
          title="Always building"
          description="Side projects, prototypes, and tools — because the best way to stay sharp is to keep shipping software."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recentExperiments.map((experiment) => {
            const card = (
              <div className="flex h-full flex-col border border-border bg-background p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-300">
                {experiment.tag && (
                  <span className="mb-3 w-fit rounded-sm border border-border px-2 py-0.5 text-xs text-muted">
                    {experiment.tag}
                  </span>
                )}
                <h3 className="font-semibold">{experiment.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">
                  {experiment.description}
                </p>
                {experiment.href && (
                  <span className="mt-4 text-sm font-medium">Learn more →</span>
                )}
              </div>
            );

            return experiment.href ? (
              <Link key={experiment.title} href={experiment.href} className="block">
                {card}
              </Link>
            ) : (
              <div key={experiment.title}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
