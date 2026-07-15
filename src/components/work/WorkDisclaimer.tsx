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
      These projects are based on real businesses and real business challenges.
      To respect privacy and demonstrate possibilities, some branding, content,
      features, imagery, and other details may have been modified while
      preserving the overall design approach, user experience, and business
      goals behind each project.
    </p>
  );
}
