// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import SiteNavbar from "@/components/ui/site-navbar";

export const metadata: Metadata = {
  title: "Sami Sipahi — Frontend Engineer",
  description: "React • Next.js • Tailwind • Firebase • UX polish",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="app-bg min-h-dvh text-foreground">
        <SiteNavbar />
        {children}
      </body>
    </html>
  );
}
