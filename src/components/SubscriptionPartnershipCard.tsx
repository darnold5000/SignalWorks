import { subscriptionPartnership } from "@/data/pricing";
import { Button } from "./Button";

export function SubscriptionPartnershipCard() {
  const {
    id,
    name,
    headline,
    copy,
    badge,
    phases,
    flowSteps,
    closingNote,
    cta,
    ctaHref,
  } = subscriptionPartnership;

  return (
    <article
      id={id}
      className="relative scroll-mt-24 border border-foreground bg-background p-8 shadow-sm lg:p-12"
    >
      {badge && (
        <span className="absolute -top-3 left-8 rounded-sm bg-foreground px-3 py-1 text-xs font-semibold tracking-wide text-background">
          {badge}
        </span>
      )}

      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
        {name}
      </p>
      <h3 className="mt-4 font-display text-2xl tracking-tight sm:text-3xl lg:text-4xl">
        {headline}
      </h3>
      <p className="mt-4 max-w-2xl text-sm text-muted leading-relaxed">{copy}</p>

      {/* Visual flow */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3 border border-border bg-neutral-50 px-6 py-5 text-sm font-medium sm:gap-4">
        {flowSteps.map((step, index) => (
          <span key={step} className="flex items-center gap-3 sm:gap-4">
            <span>{step}</span>
            {index < flowSteps.length - 1 && (
              <span className="text-muted" aria-hidden="true">
                ↓
              </span>
            )}
          </span>
        ))}
      </div>

      {/* Two phases */}
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {phases.map((phase, index) => (
          <div
            key={phase.title}
            className="border border-border p-6 lg:p-8"
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
              Phase {index === 0 ? "One" : "Two"}
            </p>
            <h4 className="mt-2 text-xl font-semibold">{phase.title}</h4>

            <div className="mt-6">
              {phase.priceLabel === "starting at" && (
                <p className="text-xs font-semibold tracking-wider uppercase text-muted">
                  {phase.priceLabel}
                </p>
              )}
              <p className="font-display text-4xl tracking-tight">{phase.price}</p>
              {phase.priceLabel === "per month" && (
                <p className="mt-1 text-sm text-muted">/ month</p>
              )}
              {phase.sublabel && (
                <p className="mt-2 text-xs text-muted">{phase.sublabel}</p>
              )}
            </div>

            <p className="mt-6 text-xs font-semibold tracking-wider uppercase text-muted">
              Includes
            </p>
            <ul className="mt-3 space-y-2">
              {phase.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted">
                  <span aria-hidden="true">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-10 border-t border-border pt-8 text-sm leading-relaxed text-muted">
        {closingNote}
      </p>

      <div className="mt-8">
        <Button href={ctaHref} className="w-full sm:w-auto">
          {cta}
        </Button>
      </div>
    </article>
  );
}
