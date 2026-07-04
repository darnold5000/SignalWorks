import { Button } from "./Button";
import { cn } from "@/lib/utils";

type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  pills?: string[];
  size?: "default" | "large";
};

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  pills,
  size = "default",
}: HeroProps) {
  return (
    <section
      className={cn(
        "mx-auto max-w-6xl px-6 lg:px-8",
        size === "large" ? "py-24 lg:py-32" : "py-16 lg:py-24",
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
              : "text-3xl sm:text-4xl lg:text-5xl leading-[1.15]",
          )}
        >
          {title}
        </h1>
        <p className="animate-fade-up animate-delay-200 mt-6 text-lg text-muted leading-relaxed sm:text-xl">
          {description}
        </p>

        {(primaryCta || secondaryCta) && (
          <div className="animate-fade-up animate-delay-300 mt-10 flex flex-wrap gap-4">
            {primaryCta && (
              <Button href={primaryCta.href}>{primaryCta.label}</Button>
            )}
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </Button>
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
