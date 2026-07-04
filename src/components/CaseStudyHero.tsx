import { TechBadge } from "./TechBadge";
import { ScreenshotFrame } from "./ScreenshotFrame";

type CaseStudyHeroProps = {
  title: string;
  summary: string;
  categories: string[];
  accent?: string;
};

export function CaseStudyHero({
  title,
  summary,
  categories,
  accent,
}: CaseStudyHeroProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="max-w-3xl">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <TechBadge key={cat} label={cat} />
          ))}
        </div>
        <h1 className="mt-6 font-display text-4xl tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-xl text-muted leading-relaxed">{summary}</p>
      </div>
      <div className="mt-12">
        <ScreenshotFrame title={title} accent={accent} aspectRatio="wide" />
      </div>
    </section>
  );
}
