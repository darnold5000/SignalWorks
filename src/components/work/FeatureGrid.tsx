import type { FeatureItem } from "@/data/projects";

type FeatureGridProps = {
  features: FeatureItem[];
};

function FeatureIcon({ index }: { index: number }) {
  const icons = [
    // path / services
    "M4 6h16M4 12h10M4 18h14",
    // calendar
    "M8 2v4M16 2v4M3 10h18M5 6h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
    // users / mobile
    "M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm-7 9a7 7 0 0 1 14 0",
    // check
    "M20 6 9 17l-5-5",
  ];
  const d = icons[index % icons.length];

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="text-foreground"
    >
      <path d={d} />
    </svg>
  );
}

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <section className="border-t border-border bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-muted">
            Key Features
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
            Built around how customers actually decide.
          </h2>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {features.map((feature, index) => (
            <li
              key={feature.name}
              className="border border-border bg-background p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center border border-border">
                <FeatureIcon index={index} />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">
                {feature.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
