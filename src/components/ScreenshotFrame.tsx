import { cn } from "@/lib/utils";

type ScreenshotFrameProps = {
  title: string;
  accent?: string;
  className?: string;
  aspectRatio?: "video" | "square" | "wide" | "hero";
};

export function ScreenshotFrame({
  title,
  accent = "from-neutral-800 to-neutral-600",
  className,
  aspectRatio = "video",
}: ScreenshotFrameProps) {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[16/10]",
    hero: "aspect-[16/10] sm:aspect-[2/1]",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-sm border border-border bg-neutral-100",
        aspectClasses[aspectRatio],
        className,
      )}
      role="img"
      aria-label={`Screenshot placeholder for ${title}`}
    >
      {/* TODO: Replace with actual project screenshot */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-90",
          accent,
        )}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white/80">
          <p className="text-xs font-semibold tracking-wider uppercase">
            Screenshot
          </p>
          <p className="mt-1 text-sm font-medium">{title}</p>
        </div>
      </div>
    </div>
  );
}
