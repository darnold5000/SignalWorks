import { paymentModels } from "@/data/pricing";
import { SectionHeading } from "./SectionHeading";
import { PaymentModelCard } from "./PaymentModelCard";

export function EngagementModelsSection() {
  return (
    <section className="border-t border-border bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-32">
        <SectionHeading
          title="How would you like to pay?"
          description="Same website. Different investment model."
        />
        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-6">
          {paymentModels.map((model) => (
            <PaymentModelCard key={model.id} {...model} />
          ))}
        </div>
      </div>
    </section>
  );
}
