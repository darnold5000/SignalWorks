import Link from "next/link";
import { whichOptionCards } from "@/data/pricing";
import { SectionHeading } from "./SectionHeading";

export function WhichOptionSection() {
  return (
    <section className="border-t border-border bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <SectionHeading
          title="Which option is right for you?"
          description="Three engagement models — one conversation to find the right fit."
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {whichOptionCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group flex flex-col border border-border bg-background p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-300"
            >
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-3 flex-1 text-sm text-muted leading-relaxed">
                {card.description}
              </p>
              <p className="mt-6 text-sm font-medium group-hover:underline">
                → {card.model}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
