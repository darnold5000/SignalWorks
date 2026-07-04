import type { WebsiteOffering } from "@/data/pricing";

type WebsiteOfferingCardProps = WebsiteOffering;

export function WebsiteOfferingCard({
  id,
  name,
  price,
  description,
  examples,
  features,
}: WebsiteOfferingCardProps) {
  const isCustomQuote = price.toLowerCase().includes("custom");

  return (
    <article
      id={id}
      className="flex scroll-mt-24 flex-col border border-border bg-background p-8 lg:p-10"
    >
      <h3 className="font-display text-2xl tracking-tight sm:text-3xl">{name}</h3>
      <p className="mt-4 text-muted leading-relaxed">{description}</p>

      <p className="mt-10 text-xs font-semibold tracking-[0.2em] uppercase text-muted">
        Examples
      </p>
      <ul className="mt-3 space-y-1.5">
        {examples.map((example) => (
          <li key={example} className="text-sm text-muted">
            {example}
          </li>
        ))}
      </ul>

      <p className="mt-10 text-xs font-semibold tracking-[0.2em] uppercase text-muted">
        Typical features
      </p>
      <ul className="mt-3 flex-1 space-y-1.5">
        {features.map((feature) => (
          <li key={feature} className="text-sm text-muted">
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-10 border-t border-border pt-8">
        {!isCustomQuote && (
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
            Starting around
          </p>
        )}
        <p className="mt-1 font-display text-3xl tracking-tight sm:text-4xl">
          {price}
        </p>
      </div>
    </article>
  );
}
