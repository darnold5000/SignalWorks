import { Button } from "./Button";

type CTASectionProps = {
  title: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export function CTASection({
  title,
  description,
  buttonLabel = "Start a Project",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="border-t border-border bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center lg:px-8 lg:py-28">
        <h2 className="font-display text-3xl tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted">{description}</p>
        <div className="mt-10">
          <Button href={buttonHref}>{buttonLabel}</Button>
        </div>
      </div>
    </section>
  );
}
