import { cn } from "@/lib/utils";

type WorkDisclaimerProps = {
  className?: string;
  /** Tighter styling for project-page footers */
  compact?: boolean;
};

export function WorkDisclaimer({ className, compact = false }: WorkDisclaimerProps) {
  return (
    <p
      className={cn(
        "text-muted leading-relaxed",
        compact ? "text-xs" : "text-sm",
        className,
      )}
    >
      Some projects shown are independent concepts created by Signal Works and
      do not necessarily represent current or former clients. Business names,
      details, services, and other information may have been modified for
      demonstration purposes.
    </p>
  );
}
