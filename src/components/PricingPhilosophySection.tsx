import { partnershipPhilosophy } from "@/data/pricing";

export function PricingPhilosophySection() {
  return (
    <section className="border-t border-border bg-neutral-50">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-8 lg:py-28">
        <h2 className="font-display text-3xl tracking-tight sm:text-4xl lg:text-5xl">
          {partnershipPhilosophy.title}
        </h2>
        <div className="mt-8 space-y-4 text-lg text-muted leading-relaxed">
          {partnershipPhilosophy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-12 space-y-2">
          {partnershipPhilosophy.principles.map((principle) => (
            <p key={principle} className="text-base font-medium text-foreground">
              {principle}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
