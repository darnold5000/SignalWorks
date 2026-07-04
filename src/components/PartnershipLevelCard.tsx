import type { PartnershipLevel } from "@/data/pricing";

type PartnershipLevelCardProps = PartnershipLevel;

export function PartnershipLevelCard({
  id,
  name,
  price,
  examples,
  includesIntro,
  includes,
  idealFor,
}: PartnershipLevelCardProps) {
  return (
    <article
      id={id}
      className="flex scroll-mt-24 flex-col border border-border bg-background p-8 lg:p-10"
    >
      <h3 className="font-display text-2xl tracking-tight">{name}</h3>

      <div className="mt-6">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
          Starting around
        </p>
        <p className="mt-1 font-display text-3xl tracking-tight">
          {price}
          <span className="text-base text-muted"> / month</span>
        </p>
      </div>

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
        {includesIntro ? "Includes" : "Includes"}
      </p>
      {includesIntro && (
        <p className="mt-2 text-sm text-muted">{includesIntro}</p>
      )}
      <ul className="mt-3 flex-1 space-y-1.5">
        {includes.map((item) => (
          <li key={item} className="text-sm text-muted">
            {item}
          </li>
        ))}
      </ul>

      {idealFor && (
        <p className="mt-8 border-t border-border pt-6 text-sm text-muted leading-relaxed">
          Ideal for {idealFor}.
        </p>
      )}
    </article>
  );
}
