import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kabinet-akasha.vercel.app";

export const viewport: Viewport = {
  themeColor: "#171717",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kabinet Akasha — Ruang untuk Semua, Tumbuh dan Berdiri Bersama",
    template: "%s | Kabinet Akasha",
  },
  description:
    "Website Resmi Kampanye Kabinet Akasha HIMATIK Periode 2026–2027 bersama M. Jeffri & P. Anisa La A. Membawa ruang yang terbuka, inklusif, transparan, dan mandiri bagi seluruh mahasiswa TIK.",
  applicationName: "Kabinet Akasha",
  authors: [{ name: "Kabinet Akasha", url: siteUrl }],
  generator: "Next.js",
  keywords: [
    "Kabinet Akasha",
    "Akasha",
    "HIMATIK",
    "HIMATIK PNJ",
    "Teknik Informatika dan Komputer",
    "Politeknik Negeri Jakarta",
    "M. Jeffri",
    "P. Anisa La A.",
    "Pemira HIMATIK",
    "Visi Misi Akasha",
    "Program Unggulan",
    "ITechnoCup",
    "SAUM",
    "TIK Games",
    "Gerakan Inovasi",
    "TIKTrack",
    "ASAH",
    "Barnaby 2.0",
    "Ruang untuk Semua",
  ],
  creator: "Kabinet Akasha",
  publisher: "HIMATIK Politeknik Negeri Jakarta",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/assets/icon.png", type: "image/png" },
    ],
    shortcut: "/assets/icon.png",
    apple: [
      { url: "/assets/icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "Kabinet Akasha",
    title: "Kabinet Akasha — Ruang untuk Semua, Tumbuh dan Berdiri Bersama",
    description:
      "Website Resmi Kampanye Kabinet Akasha HIMATIK Periode 2026–2027 bersama M. Jeffri & P. Anisa La A. Kenali visi, misi, filosofi, program unggulan, dan gerakan inovasi kami.",
    images: [
      {
        url: "/assets/icon.png",
        width: 512,
        height: 512,
        alt: "Logo Kabinet Akasha",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Kabinet Akasha — Ruang untuk Semua, Tumbuh dan Berdiri Bersama",
    description:
      "Website Resmi Kampanye Kabinet Akasha HIMATIK Periode 2026–2027 bersama M. Jeffri & P. Anisa La A.",
    images: ["/assets/icon.png"],
    creator: "@himatikpnj",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kabinet Akasha",
  alternateName: "Akasha HIMATIK",
  url: siteUrl,
  logo: `${siteUrl}/assets/icon.png`,
  sameAs: ["https://www.instagram.com/kabinet.akasha/"],
  description:
    "Website Resmi Kampanye Kabinet Akasha HIMATIK Periode 2026–2027: Ruang untuk Semua, Tumbuh dan Berdiri Bersama.",
  founder: [
    {
      "@type": "Person",
      name: "M. Jeffri",
      jobTitle: "Calon Ketua HIMATIK",
    },
    {
      "@type": "Person",
      name: "P. Anisa La A.",
      jobTitle: "Calon Wakil Ketua HIMATIK",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-cream text-ink">{children}</body>
    </html>
  );
}
