// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import SiteNavbar from "@/components/ui/site-navbar"; // or "../components/ui/site-navbar"

export const metadata: Metadata = {
  title: "Sami Sipahi — Frontend Engineer",
  description: "React • Next.js • Tailwind • Firebase • UX polish",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={[
          "min-h-dvh antialiased",
          // Apple-ish dark glass baseline (no CSS tokens needed)
          "bg-[#0b0c0f] text-neutral-100",
          // subtle vignette + glow
          "relative overflow-x-hidden",
        ].join(" ")}
      >
        {/* global backdrop ornaments */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_-10%,rgba(255,255,255,0.08),transparent_60%)]" />
          <div className="absolute inset-x-0 top-0 h-72 blur-3xl opacity-60"
               style={{
                 background:
                   "conic-gradient(from 190deg at 50% 0%, rgba(255,255,255,0.14), rgba(255,255,255,0) 25%, rgba(255,255,255,0.14) 50%, rgba(255,255,255,0) 75%, rgba(255,255,255,0.14))"
               }}
          />
          <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay [background-image:linear-gradient(transparent_0,rgba(0,0,0,0.5)_100%),url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22240%22 height=%22240%22 viewBox=%220 0 240 240%22><filter id=%22n%22 x=%220%22 y=%220%22 width=%22100%25%22 height=%22100%25%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22240%22 height=%22240%22 filter=%22url(%23n)%22 opacity=%220.5%22/></svg>')]" />
        </div>

        <SiteNavbar />
        {children}
      </body>
    </html>
  );
}
