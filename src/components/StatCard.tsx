type StatCardProps = {
  value: string;
  label: string;
};

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="border border-border bg-background p-8 transition-transform duration-200 hover:-translate-y-0.5">
      <p className="font-display text-4xl tracking-tight sm:text-5xl">{value}</p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}
