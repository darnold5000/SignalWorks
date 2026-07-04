import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";
import { SHOW_FOUNDER } from "@/lib/flags";

const capabilities = [
  "Modern websites",
  "Custom software",
  "AI & automation",
  "Ongoing partnership",
];

export function WhySignalWorksIntro() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Why Signal Works" title="Why Signal Works" />
            <div className="mt-8 space-y-3 text-lg leading-relaxed">
              <p>Not an agency.</p>
              <p>Not a template shop.</p>
              <p className="font-medium text-foreground">Software engineering first.</p>
            </div>
          </div>
          <div>
            <ul className="space-y-4">
              {capabilities.map((item) => (
                <li key={item} className="flex items-center gap-3 text-base">
                  <span className="text-muted" aria-hidden="true">
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              {SHOW_FOUNDER ? (
                <Button href="/about" variant="secondary">
                  Meet Dave →
                </Button>
              ) : (
                <Button href="/about" variant="secondary">
                  About Signal Works →
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
