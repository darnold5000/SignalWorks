import { traditionalOwnership } from "@/data/pricing";

export function TraditionalOwnershipSection() {
  return (
    <section id="traditional-ownership" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-2xl px-6 py-16 text-center lg:px-8 lg:py-20">
        <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
          {traditionalOwnership.title}
        </h2>
        <p className="mt-4 text-sm text-muted leading-relaxed">
          {traditionalOwnership.copy}
        </p>
        <div className="mt-8 space-y-4">
          {traditionalOwnership.pricing.map((item) => (
            <div key={item.label}>
              <p className="text-xs text-muted">{item.label}</p>
              <p className="mt-1 font-display text-2xl tracking-tight">
                Starting at {item.price}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted">{traditionalOwnership.optional}</p>
      </div>
    </section>
  );
}
