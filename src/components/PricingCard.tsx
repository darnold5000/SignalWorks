import type { PricingTier } from "@/data/pricing";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

type PricingCardProps = PricingTier;

export function PricingCard({
  name,
  price,
  period,
  description,
  includes,
  highlighted,
  cta,
  ctaHref,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col border p-8 transition-transform duration-200 hover:-translate-y-0.5",
        highlighted
          ? "border-foreground bg-foreground text-background"
          : "border-border bg-background",
      )}
    >
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="mt-4">
        {period && period !== "per month" && (
          <span
            className={cn(
              "text-xs uppercase tracking-wider",
              highlighted ? "text-neutral-400" : "text-muted",
            )}
          >
            {period}
          </span>
        )}
        <p className="font-display text-4xl tracking-tight">{price}</p>
        {period === "per month" && (
          <span
            className={cn(
              "text-sm",
              highlighted ? "text-neutral-400" : "text-muted",
            )}
          >
            / month
          </span>
        )}
      </div>
      <p
        className={cn(
          "mt-4 text-sm leading-relaxed",
          highlighted ? "text-neutral-300" : "text-muted",
        )}
      >
        {description}
      </p>
      <ul className="mt-8 flex-1 space-y-3">
        {includes.map((item) => (
          <li
            key={item}
            className={cn(
              "flex items-start gap-2 text-sm",
              highlighted ? "text-neutral-200" : "text-muted",
            )}
          >
            <span aria-hidden="true" className="mt-0.5">
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button
          href={ctaHref}
          variant={highlighted ? "secondary" : "primary"}
          className={cn(
            "w-full",
            highlighted &&
              "border-background bg-background text-foreground hover:bg-neutral-100",
          )}
        >
          {cta}
        </Button>
      </div>
    </div>
  );
}
