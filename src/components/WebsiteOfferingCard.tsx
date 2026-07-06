import type { WebsiteOffering } from "@/data/pricing";

type WebsiteOfferingCardProps = WebsiteOffering;

export function WebsiteOfferingCard({
  id,
  name,
  description,
  launchPrice,
  monthlyPrice,
  monthlyNote,
  outrightPrice,
  outrightIncludes,
  partnershipIncludes,
  customQuote,
}: WebsiteOfferingCardProps) {
  return (
    <article
      id={id}
      className="flex scroll-mt-24 flex-col border border-border bg-background p-6 lg:p-8"
    >
      <h3 className="font-display text-2xl tracking-tight sm:text-3xl">{name}</h3>
      <p className="mt-4 text-muted leading-relaxed">{description}</p>

      {customQuote ? (
        <div className="mt-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
            Custom quote
          </p>
          <p className="mt-2 font-display text-3xl tracking-tight">Scoped to your project</p>
          <p className="mt-4 text-sm text-muted leading-relaxed">
            Tell us what you need — we&apos;ll scope it and provide a clear estimate.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-8 border-t border-border pt-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
              Monthly partnership
            </p>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs text-muted">Website launch from</p>
                <p className="mt-1 font-display text-3xl tracking-tight">{launchPrice}</p>
              </div>
              <div>
                <p className="text-xs text-muted">Then from</p>
                <p className="mt-1 font-display text-3xl tracking-tight">
                  {monthlyPrice}
                  <span className="text-base text-muted">/month</span>
                </p>
              </div>
            </div>
            {partnershipIncludes && (
              <ul className="mt-4 space-y-2">
                {partnershipIncludes.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted">
                    <span aria-hidden="true">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {monthlyNote && (
              <p className="mt-4 text-sm text-muted leading-relaxed">{monthlyNote}</p>
            )}
          </div>

          {outrightPrice && outrightIncludes && (
            <div className="mt-8 border-t border-border pt-8">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
                Purchase outright
              </p>
              <p className="mt-1 text-xs text-muted">Starting at</p>
              <p className="mt-1 font-display text-3xl tracking-tight">{outrightPrice}</p>
              <ul className="mt-4 space-y-2">
                {outrightIncludes.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted">
                    <span aria-hidden="true">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </article>
  );
}
