import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#ffffff",
          color: "#0a0a0a",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontFamily: "system-ui, sans-serif",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#737373",
            fontWeight: 600,
          }}
        >
          Hire Signal Works
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              fontWeight: 400,
              maxWidth: 980,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 36,
              lineHeight: 1.35,
              color: "#404040",
              fontFamily: "system-ui, sans-serif",
              maxWidth: 920,
            }}
          >
            {siteConfig.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontFamily: "system-ui, sans-serif",
            fontSize: 24,
            color: "#737373",
          }}
        >
          <span>Websites · Custom software · AI tools</span>
          <span style={{ color: "#0a0a0a", fontWeight: 600 }}>
            Better signal. Less noise.
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
