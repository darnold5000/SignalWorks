import Image from "next/image";
import { cn } from "@/lib/utils";

type MobilePreviewProps = {
  src: string;
  alt: string;
  className?: string;
};

export function MobilePreview({ src, alt, className }: MobilePreviewProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[1.25rem] border-[3px] border-neutral-800 bg-neutral-900 shadow-lg",
        className,
      )}
      aria-hidden="true"
    >
      <div className="relative mx-auto mt-1.5 h-3 w-16 rounded-full bg-neutral-700" />
      <div className="relative aspect-[9/16] overflow-hidden bg-neutral-200">
        <Image
          src={src}
          alt=""
          fill
          sizes="160px"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
