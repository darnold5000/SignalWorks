type BeforeAfterProps = {
  before: string[];
  after: string[];
};

export function BeforeAfter({ before, after }: BeforeAfterProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="border border-border p-8">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
          Before
        </p>
        <ul className="mt-6 space-y-3">
          {before.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <span className="mt-0.5 text-muted" aria-hidden="true">
                —
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="border border-foreground bg-foreground p-8 text-background">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400">
          After
        </p>
        <ul className="mt-6 space-y-3">
          {after.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-neutral-200">
              <span className="mt-0.5" aria-hidden="true">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
