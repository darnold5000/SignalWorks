"use client";

import { useState } from "react";
import Image from "next/image";
import {
  capabilityPlanLabels,
  type FeaturedFeature,
} from "@/data/capabilities";
import { cn } from "@/lib/utils";

type FeatureCardGridProps = {
  features: FeaturedFeature[];
};

export function FeatureCardGrid({ features }: FeatureCardGridProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => {
        const isOpen = openId === feature.id;
        return (
          <article
            key={feature.id}
            className={cn(
              "border border-border bg-background",
              isOpen && "sm:col-span-2 lg:col-span-3",
            )}
          >
            <button
              type="button"
              className="flex w-full items-start gap-3 px-5 py-5 text-left transition-colors hover:bg-neutral-50"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : feature.id)}
            >
              <span
                className="mt-0.5 text-sm font-medium text-foreground"
                aria-hidden="true"
              >
                ✓
              </span>
              <span className="flex-1">
                <span className="block font-display text-xl tracking-tight">
                  {feature.title}
                </span>
                {!isOpen && (
                  <span className="mt-1 block text-sm text-muted leading-relaxed">
                    {feature.summary}
                  </span>
                )}
              </span>
              <span
                className={cn(
                  "text-xl text-muted transition-transform",
                  isOpen && "rotate-45",
                )}
                aria-hidden="true"
              >
                +
              </span>
            </button>

            {isOpen && (
              <div className="border-t border-border px-5 pb-6 pt-5">
                <div className="grid gap-8 lg:grid-cols-2">
                  <div className="space-y-5">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted">
                        What it does
                      </p>
                      <p className="mt-2 text-sm text-muted leading-relaxed">
                        {feature.whatItDoes}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted">
                        Who it&apos;s for
                      </p>
                      <p className="mt-2 text-sm text-muted leading-relaxed">
                        {feature.whoItsFor}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted">
                        Available on
                      </p>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {feature.plans.map((plan) => (
                          <li
                            key={plan}
                            className="border border-border px-2.5 py-1 text-xs text-muted"
                          >
                            {capabilityPlanLabels[plan]}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted">
                      Example
                    </p>
                    {feature.screenshot ? (
                      <div className="relative mt-3 aspect-[16/10] overflow-hidden border border-border bg-neutral-50">
                        <Image
                          src={feature.screenshot.src}
                          alt={feature.screenshot.alt}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    ) : (
                      <div className="mt-3 flex aspect-[16/10] items-center justify-center border border-dashed border-border bg-neutral-50">
                        <p className="text-sm text-muted">
                          Screenshot coming soon
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
