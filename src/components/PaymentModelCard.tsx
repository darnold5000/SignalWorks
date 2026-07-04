import type { PaymentModel } from "@/data/pricing";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

type PaymentModelCardProps = PaymentModel;

export function PaymentModelCard({
  id,
  name,
  badge,
  headline,
  copy,
  launchPrice,
  monthlyPrice,
  monthlyNote,
  upfrontPrice,
  upfrontLabel,
  includes,
  ownershipNote,
  optional,
  cta,
  ctaHref,
}: PaymentModelCardProps) {
  const isGrowth = id === "growth-partnership";

  return (
    <article
      id={id}
      className={cn(
        "relative flex scroll-mt-24 flex-col border bg-background p-8 lg:p-10",
        isGrowth ? "border-foreground shadow-sm" : "border-border",
      )}
    >
      {badge && (
        <span className="absolute -top-3 left-8 rounded-sm bg-foreground px-3 py-1 text-xs font-semibold tracking-wide text-background">
          {badge}
        </span>
      )}

      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
        {name}
      </p>
      <h3 className="mt-3 text-xl font-semibold">{headline}</h3>
      <p className="mt-3 text-sm text-muted leading-relaxed">{copy}</p>

      {isGrowth && launchPrice && monthlyPrice && (
        <div className="mt-8 flex flex-col items-center gap-4 border border-border bg-neutral-50 px-6 py-8 text-center sm:flex-row sm:justify-center">
          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-muted">
              Website Launch
            </p>
            <p className="mt-1 font-display text-3xl tracking-tight">
              {launchPrice}
            </p>
            <p className="mt-1 text-xs text-muted">starting around</p>
          </div>
          <span className="text-2xl text-muted" aria-hidden="true">
            +
          </span>
          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-muted">
              Monthly Partnership
            </p>
            <p className="mt-1 font-display text-3xl tracking-tight">
              {monthlyPrice}
            </p>
            <p className="mt-1 text-xs text-muted">/ month</p>
          </div>
        </div>
      )}

      {monthlyNote && (
        <p className="mt-3 text-center text-xs text-muted">{monthlyNote}</p>
      )}

      {upfrontPrice && (
        <div className="mt-8">
          {upfrontLabel && (
            <p className="text-xs font-semibold tracking-wider uppercase text-muted">
              {upfrontLabel}
            </p>
          )}
          <p className="font-display text-4xl tracking-tight">{upfrontPrice}</p>
        </div>
      )}

      <ul className="mt-8 flex-1 space-y-2">
        {includes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-muted">
            <span aria-hidden="true">•</span>
            {item}
          </li>
        ))}
      </ul>

      {ownershipNote && (
        <p className="mt-6 border-t border-border pt-6 text-sm text-muted leading-relaxed">
          {ownershipNote}
        </p>
      )}

      {optional && (
        <p className="mt-3 text-sm text-muted">
          <span className="font-medium text-foreground">Optional:</span> {optional}
        </p>
      )}

      <div className="mt-8">
        <Button href={ctaHref} className="w-full" variant={isGrowth ? "primary" : "secondary"}>
          {cta}
        </Button>
      </div>
    </article>
  );
}
