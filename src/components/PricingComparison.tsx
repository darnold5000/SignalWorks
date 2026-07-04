import { monthlyPricingComparison } from "@/data/pricing";
import { SectionHeading } from "./SectionHeading";

export function PricingComparison() {
  const { title, description, columns, rows } = monthlyPricingComparison;

  return (
    <section className="border-t border-border bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-32">
        <SectionHeading title={title} description={description} />
        <div className="mt-16 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 pr-6 text-left font-medium text-muted"> </th>
                {columns.map((column) => (
                  <th
                    key={column}
                    className="px-4 py-4 text-left font-display text-base tracking-tight"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature} className="border-b border-border">
                  <td className="py-4 pr-6 font-medium">{row.feature}</td>
                  <td className="px-4 py-4 text-muted">{row.local}</td>
                  <td className="px-4 py-4 text-muted">{row.growth}</td>
                  <td className="px-4 py-4 text-muted">{row.digital}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
