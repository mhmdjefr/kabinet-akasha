import type { Metadata } from "next";
import NavbarSection from "@/components/sections/NavbarSection";
import MobileNavbar from "@/components/sections/MobileNavbar";
import DetailFooterSection, { Vote2Chibi } from "@/components/sections/DetailFooterSection";
import {
  bentukDasar,
  elemenTerhubung,
  menyebarDariPusat,
} from "@/lib/assets";
import { EdgeGlitch, PixelPill } from "@/components/ui/PixelElements";

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

const cardClip =
  "[clip-path:polygon(0_7%,4%_7%,4%_0,100%_0,100%_93%,96%_93%,96%_100%,0_100%)]";

export default function FilosofiLogoPage() {
  return (
    <div className="min-h-screen bg-white text-[#171717] overflow-x-hidden">
      <MobileNavbar />
      <NavbarSection />

      <main className="pt-[60px] min-[768px]:pt-[90px]">
        {/* Header Section */}
        <section className="relative py-12 sm:py-16 text-center overflow-hidden">
          {/* Blok dekorasi pixel di tepi halaman */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 h-5 w-5 bg-[#cfffa3]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-10 h-4 w-24 bg-gradient-to-l from-[#f786f8] via-[#564cf8]/70 to-transparent"
          />
          <EdgeGlitch side="left" className="top-6" />
          <EdgeGlitch side="right" className="top-24" />

          <div className="relative z-10 mx-auto max-w-4xl px-4">
            <h1 className="font-[Arial] font-bold text-5xl sm:text-6xl md:text-7xl text-[#564cf8] tracking-tight">
              Filosofi Logo
            </h1>
          </div>
        </section>

        {/* Section: Bentuk */}
        <section className="relative mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-12">
          {/* Pill Header: Bentuk */}
          <div className="flex justify-center mb-12 sm:mb-14">
            <PixelPill>
              <h2 className="font-[Arial] font-bold text-2xl sm:text-3xl text-white tracking-wide">
                Bentuk
              </h2>
            </PixelPill>
          </div>

          {/* 3 Cards — carousel di mobile, sejajar di desktop */}
          <div className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-3 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 md:gap-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {shapeCards.map((card) => (
              <article
                key={card.title}
                className={`relative h-full w-[80%] shrink-0 snap-center sm:w-auto ${cardClip}`}
              >
                {/* border pink */}
                <div className={`absolute inset-0 bg-[#f786f8] ${cardClip}`} />
                <div
                  className={`relative m-[3px] flex h-[calc(100%-6px)] flex-col items-center bg-[#171717] p-5 text-center text-white sm:p-7 ${cardClip}`}
                >
                  <div className="flex h-44 w-full items-center justify-center sm:h-52 lg:h-60">
                    <img
                      src={card.src}
                      alt={card.alt}
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                  <div className="mt-5">
                    <h3 className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-base sm:text-lg text-white">
                      {card.title}
                    </h3>
                    <p className="mt-2 font-['Plus_Jakarta_Sans:Regular'] text-xs sm:text-sm leading-relaxed text-white/80">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section: Warna */}
        <section className="relative mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
          <EdgeGlitch side="left" className="top-1/3" />

          {/* Pill Header: Warna */}
          <div className="flex justify-center mb-12 sm:mb-14">
            <PixelPill>
              <h2 className="font-[Arial] font-bold text-2xl sm:text-3xl text-white tracking-wide">
                Warna
              </h2>
            </PixelPill>
          </div>

          <div className="flex flex-col gap-8 sm:gap-10">
            {colorMeanings.map((item) => (
              <div key={item.name} className="flex items-stretch gap-5 sm:gap-6">
                <div className={`w-1.5 shrink-0 sm:w-2 ${item.barColor}`} />
                <div className="py-0.5">
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
