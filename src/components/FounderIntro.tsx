import { siteConfig } from "@/lib/site";
import { FounderPhoto } from "./FounderPhoto";

type FounderIntroProps = {
  variant?: "homepage" | "about";
};

export function FounderIntro({ variant = "homepage" }: FounderIntroProps) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16 lg:items-center">
          <div className="lg:col-span-2">
            <FounderPhoto />
          </div>
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
              {variant === "homepage" ? "Who you're hiring" : "About the founder"}
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
              Hi, I&apos;m {siteConfig.author.split(" ")[0]}.
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              I build software and websites for businesses that have outgrown
              templates. My background is software engineering, so every project
              starts with solving the business problem — not just making something
              look better.
            </p>
            {variant === "homepage" ? (
              <p className="mt-4 text-muted leading-relaxed">
                When you work with {siteConfig.name}, you work directly with me —
                from discovery through launch and beyond. No account managers. No
                hand-offs.
              </p>
            ) : (
              <>
                <p className="mt-4 text-muted leading-relaxed">
                  Based in {siteConfig.location.city}, {siteConfig.location.region},
                  I work with businesses across the country — financial advisors,
                  sports organizations, and growing companies that need more than a
                  basic online presence.
                </p>
                <p className="mt-4 text-muted leading-relaxed">
                  People hire people. When you work with {siteConfig.name}, you work
                  directly with me — from discovery through launch and beyond.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
