import Image from "next/image";
import { cn } from "@/lib/utils";

type BrowserPreviewProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function BrowserPreview({
  src,
  alt,
  className,
  priority = false,
}: BrowserPreviewProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-neutral-100 shadow-sm",
        className,
      )}
    >
      <div
        className="flex items-center gap-2 border-b border-border bg-neutral-50 px-3 py-2"
        aria-hidden="true"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
        <span className="ml-2 h-5 flex-1 rounded-sm bg-neutral-200/80" />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]"
          priority={priority}
        />
      </div>
    </div>
  );
}
