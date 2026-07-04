import { Button } from "./Button";
import { cn } from "@/lib/utils";

type HeroProps = {
  eyebrow?: string;
  title: string;
  tagline?: string;
  description: string;
  descriptionSecondary?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  ctaNote?: string;
  pills?: string[];
  size?: "default" | "large" | "compact";
};

export function Hero({
  eyebrow,
  title,
  tagline,
  description,
  descriptionSecondary,
  primaryCta,
  secondaryCta,
  ctaNote,
  pills,
  size = "default",
}: HeroProps) {
  return (
    <section
      className={cn(
        "mx-auto max-w-6xl px-6 lg:px-8",
        size === "large" && "py-24 lg:py-32",
        size === "default" && "py-16 lg:py-24",
        size === "compact" && "py-12 lg:py-16",
      )}
    >
      <div className="max-w-3xl">
        {eyebrow && (
          <p className="animate-fade-up mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-muted">
            {eyebrow}
          </p>
        )}
        <h1
          className={cn(
            "animate-fade-up animate-delay-100 font-display tracking-tight text-foreground",
            size === "large"
              ? "text-4xl sm:text-5xl lg:text-6xl leading-[1.1]"
              : size === "compact"
                ? "text-3xl sm:text-4xl leading-[1.15]"
                : "text-3xl sm:text-4xl lg:text-5xl leading-[1.15]",
          )}
        >
          {title}
        </h1>
        {tagline && (
          <p className="animate-fade-up animate-delay-100 mt-5 text-base font-medium text-foreground sm:text-lg">
            {tagline}
          </p>
        )}
        <p
          className={cn(
            "animate-fade-up animate-delay-200 mt-4 text-muted leading-relaxed",
            size === "compact" ? "text-base sm:text-lg" : "mt-6 text-lg sm:text-xl",
          )}
        >
          {description}
        </p>
        {descriptionSecondary && (
          <p className="animate-fade-up animate-delay-200 mt-4 text-lg text-muted leading-relaxed sm:text-xl">
            {descriptionSecondary}
          </p>
        )}

        {(primaryCta || secondaryCta) && (
          <div className={cn("animate-fade-up animate-delay-300", size === "compact" ? "mt-8" : "mt-10")}>
            <div className="flex flex-wrap gap-4">
              {primaryCta && (
                <Button href={primaryCta.href}>{primaryCta.label}</Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
            {ctaNote && (
              <p className="mt-4 max-w-lg text-sm text-muted leading-relaxed">
                {ctaNote}
              </p>
            )}
          </div>
        )}

        {pills && pills.length > 0 && (
          <div className="animate-fade-up animate-delay-400 mt-12 flex flex-wrap gap-3">
            {pills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted"
              >
                {pill}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
