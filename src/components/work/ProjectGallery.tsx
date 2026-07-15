import Image from "next/image";
import type { GalleryItem } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectGalleryProps = {
  items: GalleryItem[];
};

export function ProjectGallery({ items }: ProjectGalleryProps) {
  if (items.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-muted">
          Website Experience
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
          Inside the customer journey.
        </h2>
      </div>

      <div className="mt-12 space-y-16">
        {items.map((item, index) => {
          const isOdd = index % 2 === 1;
          const isMobile =
            item.layout === "mobile" ||
            item.label === "Mobile Experience" ||
            item.src.includes("/mobile.");

          return (
            <figure
              key={`${item.src}-${item.label}`}
              className={cn(
                "grid items-center gap-8 lg:grid-cols-12",
                isOdd && "lg:[&>*:first-child]:order-2",
              )}
            >
              <div
                className={cn(
                  "relative overflow-hidden border border-border shadow-sm",
                  isMobile
                    ? "mx-auto w-full max-w-[280px] rounded-[1.75rem] bg-black sm:max-w-[320px] lg:col-span-5 lg:mx-0"
                    : cn(
                        "rounded-lg bg-neutral-100",
                        isOdd ? "lg:col-span-7" : "lg:col-span-8",
                        index === 0 ? "aspect-[16/10]" : "aspect-[16/11]",
                      ),
                )}
              >
                {isMobile ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={550}
                    height={1024}
                    sizes="(max-width: 640px) 280px, 320px"
                    className="h-auto w-full"
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover object-top"
                  />
                )}
              </div>
              <figcaption
                className={cn(
                  isMobile
                    ? "lg:col-span-7"
                    : isOdd
                      ? "lg:col-span-5"
                      : "lg:col-span-4",
                  "lg:px-2",
                )}
              >
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-2xl tracking-tight">
                  {item.label}
                </h3>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
