import type { PricingPlan } from "@/data/pricing";

type PricingPlanCardProps = PricingPlan;

export function PricingPlanCard({
  id,
  name,
  description,
  headline,
  type,
  launchPrice,
  noUpfrontFee,
  monthlyPrice,
  monthlyPriceLabel,
  monthlyNote,
  outrightTiers,
  includes,
  cardGrowthOptions,
}: PricingPlanCardProps) {
  const showDescriptionAfterPricing = Boolean(headline);

  return (
    <article
      id={id}
      className="flex scroll-mt-24 flex-col border border-neutral-300 bg-background p-6"
    >
      <h3 className="font-display text-xl tracking-tight sm:text-2xl">{name}</h3>
      {headline && (
        <p className="mt-2 font-display text-lg tracking-tight">{headline}</p>
      )}
      {!showDescriptionAfterPricing && (
        <p className="mt-3 text-sm text-muted leading-relaxed">{description}</p>
      )}

      {type === "custom" && (
        <div className="mt-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
            Custom quote
          </p>
          <p className="mt-2 font-display text-2xl tracking-tight">Scoped to your project</p>
        </div>
      )}

      {type === "partnership" && (noUpfrontFee || (launchPrice && monthlyPrice)) && (
        <div className="mt-6 space-y-4">
          {noUpfrontFee ? (
            <div>
              <p className="font-display text-xl tracking-tight sm:text-2xl">
                No upfront website build fee.
              </p>
            </div>
          ) : (
            launchPrice && (
              <div>
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted">
                  Website Launch
                </p>
                <p className="mt-1 text-xs text-muted">Starting at</p>
                <p className="mt-0.5 font-display text-2xl tracking-tight">{launchPrice}</p>
              </div>
            )
          )}
          {monthlyPrice && (
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted">
                Monthly Partnership
              </p>
              {monthlyPriceLabel && (
                <p className="mt-1 text-xs text-muted">{monthlyPriceLabel}</p>
              )}
              <p className="mt-0.5 font-display text-2xl tracking-tight">{monthlyPrice}</p>
            </div>
          )}
        </div>
      )}

      {type === "outright" && outrightTiers && (
        <div className="mt-6 space-y-4">
          {outrightTiers.map((tier) => (
            <div key={tier.label}>
              <p className="text-xs text-muted">{tier.label}</p>
              <p className="mt-1 text-xs text-muted">Starting at</p>
              <p className="mt-0.5 font-display text-2xl tracking-tight">{tier.price}</p>
            </div>
          ))}
        </div>
      )}

      {showDescriptionAfterPricing && (
        <p className="mt-4 text-sm text-muted leading-relaxed">{description}</p>
      )}

      {monthlyNote && (
        <p className="mt-4 text-xs text-muted leading-relaxed">{monthlyNote}</p>
      )}

      <ul className="mt-6 flex-1 space-y-2 border-t border-border pt-6">
        {includes.map((item) => (
          <li key={item} className="text-sm text-muted leading-relaxed">
            {item}
          </li>
        ))}
      </ul>

      {cardGrowthOptions && (
        <div className="mt-6 border-t border-border pt-6">
          <p className="text-sm text-muted leading-relaxed">{cardGrowthOptions.intro}</p>
          <p className="mt-4 text-xs font-semibold tracking-[0.15em] uppercase text-muted">
            Available enhancements
          </p>
          <ul className="mt-3 space-y-2">
            {cardGrowthOptions.options.map((option) => (
              <li key={option} className="text-sm text-muted leading-relaxed">
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
