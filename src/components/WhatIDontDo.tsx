import { whatIDo, whatIDontDo } from "@/data/qualifiers";
import { SectionHeading } from "./SectionHeading";

export function WhatIDontDo() {
  return (
    <section className="border-t border-border bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <SectionHeading
          title="What I don't do"
          description="Clear boundaries help us both — here's how Signal Works works differently."
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <ul className="space-y-4">
            {whatIDontDo.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted">
                <span className="text-muted" aria-hidden="true">
                  ✕
                </span>
                {item}
              </li>
            ))}
          </ul>
          <ul className="space-y-4">
            {whatIDo.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
