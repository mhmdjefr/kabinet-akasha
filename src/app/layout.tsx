import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kabinet Akasha — Ruang Gerak & Karya",
  description: "Website Resmi Kampanye Kabinet Akasha.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className="antialiased bg-cream text-ink">{children}</body>
    </html>
  );
}
