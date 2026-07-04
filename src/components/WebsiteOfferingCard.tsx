import type { WebsiteOffering } from "@/data/pricing";

type WebsiteOfferingCardProps = WebsiteOffering;

export function WebsiteOfferingCard({
  id,
  name,
  description,
  launchPrice,
  monthlyPrice,
  monthlyNote,
  customQuote,
}: WebsiteOfferingCardProps) {
  return (
    <article
      id={id}
      className="flex scroll-mt-24 flex-col border border-border bg-background p-6 lg:p-8"
    >
      <h3 className="font-display text-2xl tracking-tight sm:text-3xl">{name}</h3>

      {customQuote ? (
        <div className="mt-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
            Custom quote
          </p>
          <p className="mt-2 font-display text-3xl tracking-tight">Custom quote</p>
        </div>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
              Website Launch
            </p>
            <p className="mt-1 text-xs text-muted">Starting at</p>
            <p className="mt-1 font-display text-3xl tracking-tight">{launchPrice}</p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
              Monthly Partnership
            </p>
            <p className="mt-1 text-xs text-muted">Starting at</p>
            <p className="mt-1 font-display text-3xl tracking-tight">
              {monthlyPrice}
              <span className="text-base text-muted">/month</span>
            </p>
          </div>
        </div>
      )}

      {monthlyNote && (
        <p className="mt-4 text-sm text-muted leading-relaxed">{monthlyNote}</p>
      )}

      <p className="mt-6 text-muted leading-relaxed">{description}</p>
    </article>
  );
}
