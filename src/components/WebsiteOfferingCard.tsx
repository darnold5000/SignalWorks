import type { WebsiteOffering } from "@/data/pricing";
import { Button } from "./Button";

type WebsiteOfferingCardProps = WebsiteOffering;

export function WebsiteOfferingCard({
  id,
  name,
  price,
  priceLabel,
  description,
  examples,
  features,
}: WebsiteOfferingCardProps) {
  return (
    <article
      id={id}
      className="flex scroll-mt-24 flex-col border border-border bg-background p-8 transition-transform duration-200 hover:-translate-y-0.5"
    >
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
        {name}
      </p>
      <div className="mt-4">
        {priceLabel && (
          <p className="text-xs font-semibold tracking-wider uppercase text-muted">
            {priceLabel}
          </p>
        )}
        <p className="font-display text-4xl tracking-tight">{price}</p>
      </div>
      <p className="mt-4 text-sm text-muted leading-relaxed">{description}</p>

      <p className="mt-6 text-xs font-semibold tracking-wider uppercase text-muted">
        Examples
      </p>
      <p className="mt-2 text-sm text-muted leading-relaxed">
        {examples.join(" · ")}
      </p>

      <p className="mt-6 text-xs font-semibold tracking-wider uppercase text-muted">
        Typical features
      </p>
      <ul className="mt-3 flex-1 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-muted">
            <span aria-hidden="true">•</span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button href="/contact" variant="secondary" className="w-full">
          Get Started
        </Button>
      </div>
    </article>
  );
}
