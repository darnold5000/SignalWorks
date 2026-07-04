import Link from "next/link";
import type { Testimonial } from "@/data/testimonials";
import { SHOW_WORK } from "@/lib/flags";
import { SectionHeading } from "./SectionHeading";

type TestimonialsProps = {
  items: Testimonial[];
};

export function Testimonials({ items }: TestimonialsProps) {
  return (
    <section className="border-t border-border bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say"
          description="Short and honest — from businesses we've worked with."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <figure
              key={item.author}
              className="border border-border bg-background p-8"
            >
              <blockquote className="font-display text-xl leading-relaxed tracking-tight">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                {item.href && SHOW_WORK ? (
                  <Link href={item.href} className="text-sm font-semibold hover:underline">
                    {item.author}
                  </Link>
                ) : (
                  <p className="text-sm font-semibold">{item.author}</p>
                )}
                {item.role && (
                  <p className="mt-1 text-xs text-muted">{item.role}</p>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
