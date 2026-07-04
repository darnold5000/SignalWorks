import { whySignalWorks } from "@/data/why";
import { SectionHeading } from "./SectionHeading";

export function WhySignalWorks() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Why Signal Works"
        title="Why work with Signal Works?"
        description="Thousands of people build websites. Far fewer can build a polished marketing site and a custom application — and stand behind both long after launch."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {whySignalWorks.map((item) => (
          <div
            key={item.title}
            className="border border-border p-8 transition-transform duration-200 hover:-translate-y-0.5"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
