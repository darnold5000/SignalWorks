import { trustedIndustries } from "@/data/industries";

export function TrustIndustries() {
  return (
    <section className="border-t border-border bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-muted">
          Trusted by businesses across
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {trustedIndustries.map((industry) => (
            <span
              key={industry}
              className="flex items-center gap-2 text-sm font-medium sm:text-base"
            >
              <span className="text-muted" aria-hidden="true">
                ✓
              </span>
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
