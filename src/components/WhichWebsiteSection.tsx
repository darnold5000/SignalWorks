import Link from "next/link";
import { whichWebsiteCards } from "@/data/pricing";
import { SectionHeading } from "./SectionHeading";

export function WhichWebsiteSection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <SectionHeading
          title="Which sounds like you?"
          description="Find your starting point — then choose Growth Partnership or Traditional Project below."
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {whichWebsiteCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group flex flex-col border border-border bg-background p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-300"
            >
              <p className="font-display text-xl tracking-tight leading-snug">
                {card.title}
              </p>
              <p className="mt-4 flex-1 text-sm font-medium group-hover:underline">
                → {card.offering}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
