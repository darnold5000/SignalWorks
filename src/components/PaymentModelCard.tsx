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
  partnershipValue,
  launchPrice,
  launchLabel,
  monthlyPrice,
  monthlyLabel,
  monthlyNote,
  traditionalPricing,
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
        "relative flex scroll-mt-24 flex-col border bg-background p-8 lg:p-12",
        isGrowth ? "border-foreground" : "border-border",
      )}
    >
      {badge && (
        <span className="absolute -top-3 left-8 bg-foreground px-3 py-1 text-xs font-semibold tracking-wide text-background">
          {badge}
        </span>
      )}

      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
        {name}
      </p>
      <h3 className="mt-4 font-display text-2xl tracking-tight sm:text-3xl">
        {headline}
      </h3>
      <p className="mt-4 text-muted leading-relaxed">{copy}</p>

      {partnershipValue && (
        <p className="mt-6 text-sm text-muted leading-relaxed">{partnershipValue}</p>
      )}

      {isGrowth && launchPrice && monthlyPrice && (
        <div className="mt-10 border border-border p-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
            Investment
          </p>
          <div className="mt-6 flex flex-col gap-8 sm:flex-row sm:items-end sm:gap-6">
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-muted">
                {launchLabel ?? "Website Launch"}
              </p>
              <p className="mt-2 text-xs text-muted">Starting around</p>
              <p className="mt-1 font-display text-3xl tracking-tight sm:text-4xl">
                {launchPrice}
              </p>
            </div>
            <span className="hidden text-2xl text-muted sm:block" aria-hidden="true">
              +
            </span>
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-muted">
                {monthlyLabel ?? "Monthly Partnership"}
              </p>
              <p className="mt-2 text-xs text-muted">Starting at</p>
              <p className="mt-1 font-display text-3xl tracking-tight sm:text-4xl">
                {monthlyPrice}
                <span className="text-lg text-muted"> / month</span>
              </p>
            </div>
          </div>
        </div>
      )}

      {monthlyNote && (
        <p className="mt-4 text-sm text-muted leading-relaxed">{monthlyNote}</p>
      )}

      {traditionalPricing && (
        <div className="mt-10 space-y-6 border border-border p-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
            Starting around
          </p>
          {traditionalPricing.map((item) => (
            <div key={item.label}>
              <p className="text-sm text-muted">{item.label}</p>
              <p className="mt-1 font-display text-3xl tracking-tight">{item.price}</p>
            </div>
          ))}
        </div>
      )}

      {ownershipNote && (
        <p className="mt-8 border-t border-border pt-8 text-sm text-muted leading-relaxed">
          {ownershipNote}
        </p>
      )}

      {optional && (
        <p className="mt-4 text-sm text-muted">{optional}</p>
      )}

      <div className="mt-10">
        <Button href={ctaHref} className="w-full" variant={isGrowth ? "primary" : "secondary"}>
          {cta}
        </Button>
      </div>
    </article>
  );
}
