import { cn } from "@/lib/utils";

type FormSelectProps = {
  id: string;
  name: string;
  required?: boolean;
  defaultValue?: string;
  children: React.ReactNode;
  className?: string;
};

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FormSelect({
  id,
  name,
  required,
  defaultValue = "",
  children,
  className,
}: FormSelectProps) {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        required={required}
        defaultValue={defaultValue}
        className={cn(
          "w-full appearance-none rounded-sm border border-neutral-300 bg-background px-3.5 py-2.5 pr-10 text-sm text-foreground outline-none transition-colors focus:border-neutral-500",
          className,
        )}
      >
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-muted" />
    </div>
  );
}
