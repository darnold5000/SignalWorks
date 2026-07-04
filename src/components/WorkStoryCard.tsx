import Link from "next/link";
import { TechBadge } from "./TechBadge";

type WorkStoryCardProps = {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  href: string;
};

export function WorkStoryCard({
  title,
  industry,
  challenge,
  solution,
  results,
  href,
}: WorkStoryCardProps) {
  return (
    <article className="border border-border bg-background">
      <div className="border-b border-border p-8 lg:p-10">
        <TechBadge label={industry} />
        <h2 className="mt-4 font-display text-2xl tracking-tight sm:text-3xl">
          {title}
        </h2>
      </div>

      <div className="grid gap-0 lg:grid-cols-3">
        <div className="border-b border-border p-8 lg:border-b-0 lg:border-r">
          <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
            Challenge
          </h3>
          <p className="mt-4 text-sm leading-relaxed">{challenge}</p>
        </div>
        <div className="border-b border-border p-8 lg:border-b-0 lg:border-r">
          <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
            Solution
          </h3>
          <p className="mt-4 text-sm leading-relaxed">{solution}</p>
        </div>
        <div className="p-8">
          <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
            Results
          </h3>
          <ul className="mt-4 space-y-2">
            {results.map((result) => (
              <li key={result} className="flex items-start gap-2 text-sm">
                <span className="mt-0.5 text-muted" aria-hidden="true">
                  •
                </span>
                {result}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-8 py-5 lg:px-10">
        <Link href={href} className="text-sm font-medium hover:underline">
          Read the full case study →
        </Link>
      </div>
    </article>
  );
}
