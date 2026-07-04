import { partnershipPhilosophy } from "@/data/pricing";

export function PricingPhilosophySection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center lg:px-8 lg:py-24">
        <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
          {partnershipPhilosophy.title}
        </h2>
        <p className="mt-6 text-lg text-muted leading-relaxed">
          {partnershipPhilosophy.copy}
        </p>
        <div className="mt-10 space-y-2">
          {partnershipPhilosophy.principles.map((principle) => (
            <p key={principle} className="font-medium">
              {principle}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
