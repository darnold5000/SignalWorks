import { siteConfig } from "@/lib/site";

type PhotoPlaceholderProps = {
  className?: string;
};

export function PhotoPlaceholder({ className }: PhotoPlaceholderProps) {
  return (
    <div
      className={`relative aspect-[4/5] overflow-hidden border border-border bg-neutral-100 ${className ?? ""}`}
      role="img"
      aria-label={`Photo of ${siteConfig.author}`}
    >
      {/* TODO: Replace with professional headshot photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-muted">
        <p className="text-xs font-semibold tracking-wider uppercase">Photo</p>
        <p className="mt-2 text-sm font-medium">{siteConfig.author}</p>
        <p className="mt-1 text-xs">Founder, {siteConfig.name}</p>
      </div>
    </div>
  );
}
