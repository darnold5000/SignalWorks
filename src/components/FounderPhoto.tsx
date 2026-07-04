"use client";

import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

type FounderPhotoProps = {
  className?: string;
};

const PHOTO_PATH = "/images/dave-arnold.jpg";

export function FounderPhoto({ className }: FounderPhotoProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative aspect-[4/5] overflow-hidden border border-border bg-neutral-100 ${className ?? ""}`}
    >
      {!hasError ? (
        <Image
          src={PHOTO_PATH}
          alt={`${siteConfig.author}, founder of ${siteConfig.name}`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 320px"
          priority
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-neutral-200 to-neutral-300 text-center text-muted">
          {/* TODO: Add professional headshot at public/images/dave-arnold.jpg */}
          <p className="text-xs font-semibold tracking-wider uppercase">Photo</p>
          <p className="mt-2 text-sm font-medium">{siteConfig.author}</p>
          <p className="mt-1 text-xs">Founder, {siteConfig.name}</p>
        </div>
      )}
    </div>
  );
}
