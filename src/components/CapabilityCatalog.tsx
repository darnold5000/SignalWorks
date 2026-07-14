import type { CapabilityCategory } from "@/data/capabilities";
import { SectionHeading } from "./SectionHeading";

type CapabilityCatalogProps = {
  categories: CapabilityCategory[];
  intro: string;
};

export function CapabilityCatalog({ categories, intro }: CapabilityCatalogProps) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <SectionHeading title="Capabilities by category" description={intro} />
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div key={category.id}>
              <h3 className="font-display text-xl tracking-tight">
                {category.name}
              </h3>
              <ul className="mt-4 space-y-2 border-t border-border pt-4">
                {category.items.map((item) => (
                  <li key={item} className="text-sm text-muted leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
