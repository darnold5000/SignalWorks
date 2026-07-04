import type { ProcessStep } from "@/data/process";

type ProcessTimelineProps = {
  steps: ProcessStep[];
};

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step) => (
        <div
          key={step.number}
          className="border border-border p-8 transition-transform duration-200 hover:-translate-y-0.5"
        >
          <span className="font-display text-3xl text-muted">{step.number}</span>
          <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
