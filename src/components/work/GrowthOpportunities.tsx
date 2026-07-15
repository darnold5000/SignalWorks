type GrowthItem = {
  id: string;
  title: string;
  description: string;
};

type GrowthOpportunitiesProps = {
  items: GrowthItem[];
};

export function GrowthOpportunities({ items }: GrowthOpportunitiesProps) {
  if (items.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-muted">
          Growth Opportunities
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
          Built for what comes next.
        </h2>
        <p className="mt-4 text-muted leading-relaxed">
          This type of website can grow into scheduling, payments, portals, and
          custom tools without starting over.
        </p>
      </div>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="border border-border p-5 transition-colors hover:bg-neutral-50"
          >
            <h3 className="text-sm font-semibold tracking-tight">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
