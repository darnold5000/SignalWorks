import { pricingComparison } from "@/data/pricing";

export function PricingComparison() {
  return (
    <section className="border-t border-border bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <p className="mx-auto max-w-2xl text-center text-sm text-muted leading-relaxed">
          {pricingComparison.note}
        </p>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 pr-4 text-left font-semibold"> </th>
                <th className="px-4 py-4 text-left font-semibold">
                  Growth Partnership
                </th>
                <th className="py-4 pl-4 text-left font-semibold">
                  Traditional Project
                </th>
              </tr>
            </thead>
            <tbody className="text-muted">
              {pricingComparison.rows.map((row) => (
                <tr key={row.feature} className="border-b border-border">
                  <td className="py-4 pr-4 font-medium text-foreground">
                    {row.feature}
                  </td>
                  <td className="px-4 py-4">{row.growth}</td>
                  <td className="py-4 pl-4">{row.traditional}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
