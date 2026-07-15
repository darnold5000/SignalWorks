type ProjectOverviewProps = {
  challenge: string;
  solution: string;
  impact: string;
};

export function ProjectOverview({
  challenge,
  solution,
  impact,
}: ProjectOverviewProps) {
  const items = [
    { title: "The Challenge", body: challenge },
    { title: "What We Built", body: solution },
    { title: "Why It Helps", body: impact },
  ];

  return (
    <section className="border-t border-border bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="border border-border bg-background p-6 sm:p-8"
            >
              <h2 className="text-xs font-semibold tracking-[0.18em] uppercase text-muted">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground sm:text-base">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
