type TechBadgeProps = {
  label: string;
};

export function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="rounded-sm border border-border px-2.5 py-1 text-xs text-muted">
      {label}
    </span>
  );
}
