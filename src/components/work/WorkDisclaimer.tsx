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
      <span className="font-medium text-foreground/80">Portfolio Note:</span>{" "}
      The projects shown are based on real businesses and real business
      challenges. Some are completed, while others remain active concepts or
      works in progress. To respect privacy and demonstrate possibilities, some
      branding, content, features, imagery, and other details may have been
      modified. Inclusion in this portfolio should not be interpreted as an
      endorsement or as an indication of a current or past client relationship.
    </p>
  );
}
