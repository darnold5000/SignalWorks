import { paymentModels } from "@/data/pricing";
import { SectionHeading } from "./SectionHeading";
import { PaymentModelCard } from "./PaymentModelCard";

export function EngagementModelsSection() {
  return (
    <section className="border-t border-border bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="How you pay"
          title="Two ways to get started"
          description="These are payment models — not different websites. Pick the approach that fits how your business prefers to invest."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {paymentModels.map((model) => (
            <PaymentModelCard key={model.id} {...model} />
          ))}
        </div>
      </div>
    </section>
  );
}
