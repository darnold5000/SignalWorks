import type { Metadata } from "next";
import { siteConfig } from "./site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle =
    path === "/" ? `${siteConfig.name} — ${siteConfig.tagline}` : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}
