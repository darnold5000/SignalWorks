import Link from "next/link";
import Image from "next/image";
import { clientLogos } from "@/data/logos";

export function LogoCloud() {
  return (
    <section className="border-t border-border bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-muted">
          Built for real businesses
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {clientLogos.map((logo) => {
            const label = logo.shortName ?? logo.name;
            const content = (
              <div className="flex h-20 items-center justify-center border border-border bg-background px-4 transition-all duration-200 hover:border-neutral-300 hover:-translate-y-0.5">
                {logo.logoSrc ? (
                  <Image
                    src={logo.logoSrc}
                    alt={`${logo.name} logo`}
                    width={120}
                    height={40}
                    className="max-h-8 w-auto object-contain grayscale"
                  />
                ) : (
                  <span className="text-center text-xs font-semibold tracking-wide uppercase text-foreground">
                    {label}
                  </span>
                )}
              </div>
            );

            return logo.href ? (
              <Link key={logo.name} href={logo.href} className="block">
                {content}
              </Link>
            ) : (
              <div key={logo.name}>{content}</div>
            );
          })}
        </div>
        {/* TODO: Replace wordmark placeholders with client logos when permission is granted */}
      </div>
    </section>
  );
}
