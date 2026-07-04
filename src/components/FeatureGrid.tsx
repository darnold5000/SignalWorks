type FeatureGridProps = {
  items: string[];
  columns?: 2 | 3;
};

export function FeatureGrid({ items, columns = 2 }: FeatureGridProps) {
  return (
    <ul
      className={
        columns === 3
          ? "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          : "grid gap-4 sm:grid-cols-2"
      }
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 border border-border p-4 text-sm"
        >
          <span className="mt-0.5 text-muted" aria-hidden="true">
            ✓
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
