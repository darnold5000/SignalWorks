import type { EngagementModel } from "@/data/pricing";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

type EngagementModelCardProps = EngagementModel;

export function EngagementModelCard({
  id,
  name,
  subtitle,
  headline,
  copy,
  price,
  priceLabel,
  includes,
  optional,
  ownershipNote,
  note,
  examples,
  featured,
  badge,
  cta,
  ctaHref,
}: EngagementModelCardProps) {
  return (
    <article
      id={id}
      className={cn(
        "relative flex scroll-mt-24 flex-col border bg-background p-8 transition-transform duration-200 hover:-translate-y-0.5 lg:p-10",
        featured
          ? "border-foreground shadow-sm lg:scale-[1.02] lg:p-12"
          : "border-border",
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
      {subtitle && (
        <p className="mt-2 text-sm text-muted">{subtitle}</p>
      )}
      <h3 className="mt-4 font-display text-2xl tracking-tight sm:text-3xl">
        {headline}
      </h3>
      <p className="mt-4 text-sm text-muted leading-relaxed">{copy}</p>

      <div className="mt-8">
        {priceLabel && priceLabel !== "per month" && (
          <p className="text-xs font-semibold tracking-wider uppercase text-muted">
            {priceLabel}
          </p>
        )}
        <p className="font-display text-4xl tracking-tight sm:text-5xl">{price}</p>
        {priceLabel === "per month" && (
          <p className="mt-1 text-sm text-muted">/ month</p>
        )}
      </div>

      {includes && includes.length > 0 && (
        <ul className="mt-8 flex-1 space-y-3">
          {includes.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-muted">
              <span aria-hidden="true" className="mt-0.5">
                •
              </span>
              {item}
            </li>
          ))}
        </ul>
      )}

      {examples && examples.length > 0 && (
        <div className="mt-8 flex-1">
          <p className="text-xs font-semibold tracking-wider uppercase text-muted">
            Examples
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {examples.map((item) => (
              <li key={item} className="text-sm text-muted">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {note && (
        <p className="mt-8 border-t border-border pt-6 text-sm leading-relaxed text-muted">
          {note}
        </p>
      )}

      {optional && (
        <p className="mt-4 text-sm text-muted">
          <span className="font-medium text-foreground">Optional:</span> {optional}
        </p>
      )}

      {ownershipNote && (
        <div className="mt-6 border border-border bg-neutral-50 px-5 py-4">
          <p className="text-sm font-medium text-foreground">{ownershipNote}</p>
        </div>
      )}

      <div className="mt-8">
        <Button href={ctaHref} className="w-full" variant={featured ? "primary" : "secondary"}>
          {cta}
        </Button>
      </div>
    </article>
  );
}
