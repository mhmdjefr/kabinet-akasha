import type { Metadata } from "next";
import { Gochi_Hand, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const gochiHand = Gochi_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gochi-hand",
});

export const metadata: Metadata = {
  title: "Kabinet Akasha — Coming Soon",
  description:
    "Kabinet Akasha: ruang tumbuh untuk cerita yang belum selesai. Video, animasi, dan kejutan kecil.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${inter.variable} ${gochiHand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
