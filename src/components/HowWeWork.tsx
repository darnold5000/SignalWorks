import { howWeWorkSteps } from "@/data/howWeWork";
import { SectionHeading } from "./SectionHeading";

export function HowWeWork() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="How we work"
        title="What happens after you reach out"
        description="Three simple steps — no complicated process."
      />
      <div className="mt-12">
        <div className="hidden lg:flex lg:items-start lg:justify-between lg:gap-4">
          {howWeWorkSteps.map((step, index) => (
            <div key={step.title} className="flex flex-1 items-start gap-4">
              <div className="flex-1">
                <p className="text-xs font-semibold tracking-wider uppercase text-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < howWeWorkSteps.length - 1 && (
                <span className="mt-6 text-muted" aria-hidden="true">
                  ↓
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="space-y-8 lg:hidden">
          {howWeWorkSteps.map((step, index) => (
            <div key={step.title}>
              <p className="text-xs font-semibold tracking-wider uppercase text-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {step.description}
              </p>
              {index < howWeWorkSteps.length - 1 && (
                <p className="mt-4 text-center text-muted" aria-hidden="true">
                  ↓
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
