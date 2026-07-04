import type { WebsiteOffering } from "@/data/pricing";

type WebsiteOfferingCardProps = WebsiteOffering;

export function WebsiteOfferingCard({
  id,
  name,
  description,
  examples,
  features,
  launchPrice,
  monthlyPrice,
  monthlyNote,
}: WebsiteOfferingCardProps) {
  return (
    <article
      id={id}
      className="flex scroll-mt-24 flex-col border border-border bg-background p-8 lg:p-12"
    >
      <h3 className="font-display text-3xl tracking-tight sm:text-4xl">{name}</h3>
      <p className="mt-4 text-lg text-muted leading-relaxed">{description}</p>

      <div className="mt-10 grid gap-8 border border-border p-8 sm:grid-cols-2">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
            Website Launch
          </p>
          <p className="mt-2 text-xs text-muted">Starting at</p>
          <p className="mt-1 font-display text-4xl tracking-tight">{launchPrice}</p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
            Monthly Partnership
          </p>
          <p className="mt-2 text-xs text-muted">Starting at</p>
          <p className="mt-1 font-display text-4xl tracking-tight">
            {monthlyPrice}
            <span className="text-lg text-muted">/month</span>
          </p>
        </div>
      </div>

      {monthlyNote && (
        <p className="mt-4 text-sm text-muted leading-relaxed">{monthlyNote}</p>
      )}

      <p className="mt-10 text-xs font-semibold tracking-[0.2em] uppercase text-muted">
        Examples
      </p>
      <ul className="mt-3 space-y-1.5">
        {examples.map((example) => (
          <li key={example} className="text-muted">
            {example}
          </li>
        ))}
      </ul>

      <p className="mt-10 text-xs font-semibold tracking-[0.2em] uppercase text-muted">
        Features
      </p>
      <ul className="mt-3 flex-1 space-y-1.5">
        {features.map((feature) => (
          <li key={feature} className="text-muted">
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}
