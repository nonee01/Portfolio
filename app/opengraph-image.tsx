import { ImageResponse } from "next/og"
import { site } from "@/lib/content"

export const runtime = "edge"
export const alt = `${site.name} · ${site.role}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1a1b26",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#7aa2f7", fontSize: 26, letterSpacing: 4 }}>
          {site.role.toUpperCase()}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#c0caf5", fontSize: 92, fontWeight: 700, letterSpacing: -2 }}>{site.name}</div>
          <div style={{ color: "#565f89", fontSize: 32, marginTop: 20 }}>
            Monitoring · security tooling · wire protocols by hand
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", color: "#565f89", fontSize: 24 }}>
          <span>{site.school}</span>
          <span>github.com/{site.githubHandle}</span>
        </div>
      </div>
    ),
    size,
  )
}
