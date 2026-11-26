import type { Metadata } from "next";
import NavbarSection from "@/components/sections/NavbarSection";
import MobileNavbar from "@/components/sections/MobileNavbar";
import DetailFooterSection, { Vote2Chibi } from "@/components/sections/DetailFooterSection";
import {
  bentukDasar,
  elemenTerhubung,
  menyebarDariPusat,
} from "@/lib/assets";

export const metadata: Metadata = {
  title: "Filosofi Logo",
  description:
    "Makna bentuk dan warna di balik logo Kabinet Akasha HIMATIK Periode 2026–2027.",
};

const shapeCards = [
  {
    src: elemenTerhubung,
    alt: "Elemen yang saling terhubung",
    title: "Elemen yang saling terhubung",
    desc: "Merepresentasikan kolaborasi, dan semangat saling melengkapi untuk mencapai tujuan bersama.",
  },
  {
    src: bentukDasar,
    alt: "Bentuk dasar huruf A",
    title: 'Bentuk dasar huruf "A"',
    desc: "Inisial Akasha sebagai identitas kabinet sekaligus simbol ruang yang menaungi keberagaman mahasiswa TIK.",
  },
  {
    src: menyebarDariPusat,
    alt: "Bentuk yang menyebar dari pusat",
    title: "Bentuk yang menyebar dari pusat",
    desc: "Pertumbuhan yang berawal dari ruang bersama. HIMATIK menjadi wadah bagi potensi untuk tumbuh dan berkembang.",
  },
];

const colorMeanings = [
  {
    name: "Electric Blue",
    barColor: "bg-[#564cf8]",
    description: "Identitas Jurusan TIK sebagai landasan dan jati diri HIMATIK",
  },
  {
    name: "Electric Pink",
    barColor: "bg-[#f786f8]",
    description:
      "Kreativitas, keterbukaan, dan kebebasan berekspresi dalam menyampaikan gagasan serta aspirasi",
  },
  {
    name: "Lime Green",
    barColor: "bg-[#cfffa3]",
    description:
      "Pertumbuhan, keberlanjutan, dan kemandirian dalam mengembangkan potensi serta membangun HIMATIK",
  },
];

export default function FilosofiLogoPage() {
  return (
    <div className="min-h-screen bg-white text-[#171717] overflow-x-hidden">
      <MobileNavbar />
      <NavbarSection />

      <main className="pt-[80px] min-[768px]:pt-[120px]">
        {/* Header Section */}
        <section className="relative py-12 sm:py-16 text-center overflow-hidden">
          {/* Dekorasi gradient strip kiri-kanan */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 top-4 hidden sm:block h-16 w-28 bg-gradient-to-r from-[#564cf8]/60 via-[#f786f8]/40 to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-12 hidden sm:block h-16 w-32 bg-gradient-to-l from-[#cfffa3]/70 via-[#564cf8]/30 to-transparent"
          />

          <div className="relative z-10 mx-auto max-w-4xl px-4">
            <h1 className="font-[Arial] font-bold text-4xl sm:text-6xl md:text-7xl text-[#564cf8] tracking-tight">
              Filosofi Logo
            </h1>
          </div>
        </section>

        {/* Section: Bentuk */}
        <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
          {/* Pill Header: Bentuk */}
          <div className="flex justify-center mb-10 sm:mb-12">
            <div className="inline-flex items-center justify-center bg-[#f786f8] px-12 py-3 shadow-[4px_4px_0_#564cf8] border-2 border-[#171717]">
              <h2 className="font-[Arial] font-bold text-2xl sm:text-3xl text-white tracking-wide">
                Bentuk
              </h2>
            </div>
          </div>

          {/* 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {shapeCards.map((card) => (
              <article
                key={card.title}
                className="flex flex-col items-center justify-between rounded-2xl border-2 border-[#f786f8] bg-[#171717] p-6 sm:p-8 text-center text-white shadow-[0_10px_30px_rgba(86,76,248,0.18)] transition-transform hover:-translate-y-1"
              >
                <div className="flex h-44 sm:h-52 w-full items-center justify-center p-2">
                  <img
                    src={card.src}
                    alt={card.alt}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-base sm:text-lg text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 font-['Plus_Jakarta_Sans:Regular'] text-xs sm:text-sm leading-relaxed text-white/80">
                    {card.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section: Warna */}
        <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          {/* Pill Header: Warna */}
          <div className="flex justify-center mb-10 sm:mb-12">
            <div className="inline-flex items-center justify-center bg-[#f786f8] px-12 py-3 shadow-[4px_4px_0_#564cf8] border-2 border-[#171717]">
              <h2 className="font-[Arial] font-bold text-2xl sm:text-3xl text-white tracking-wide">
                Warna
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {colorMeanings.map((item) => (
              <div key={item.name} className="flex items-stretch gap-5 sm:gap-6">
                <div className={`w-2 shrink-0 rounded-full ${item.barColor}`} />
                <div className="py-1">
                  <h3 className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-xl sm:text-2xl text-[#171717]">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 font-['Plus_Jakarta_Sans:Regular'] text-sm sm:text-base leading-relaxed text-[#171717]/80">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Chibi Vote2ForAkasha */}
        <Vote2Chibi />

        {/* Footer */}
        <DetailFooterSection />
      </main>
    </div>
  );
}
