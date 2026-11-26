import type { Metadata } from "next";
import NavbarSection from "@/components/sections/NavbarSection";
import MobileNavbar from "@/components/sections/MobileNavbar";
import DetailFooterSection, { Vote2Chibi } from "@/components/sections/DetailFooterSection";
import {
  bentukDasar,
  buttonPillBg,
  elemenTerhubung,
  menyebarDariPusat,
} from "@/lib/assets";
import { EdgeGlitch } from "@/components/ui/PixelElements";

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
    desc: "Kebersamaan, kolaborasi, dan semangat saling melengkapi untuk mencapai tujuan bersama.",
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
    desc: "Pertumbuhan yang berawal dari ruang bersama, HIMATIK menjadi wadah bagi potensi untuk tumbuh ke beragam arah.",
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
            <h1 className="font-[Arial] text-5xl font-bold tracking-tight text-[#564cf8] sm:text-6xl md:text-7xl lg:text-[128px]">
              Filosofi Logo
            </h1>
          </div>
        </section>

        {/* Section: Bentuk */}
        <section className="relative w-full px-0 py-8 sm:py-12">
          {/* Pill Header: Bentuk */}
          <div className="mb-16 flex justify-center sm:mb-20">
            <div className="relative inline-flex items-center justify-center w-[220px] sm:w-[320px] md:w-[400px] aspect-[628/174]">
              <img
                src={buttonPillBg}
                alt=""
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full object-contain"
              />
              <h2 className="relative z-10 font-[Arial] text-2xl font-bold tracking-wide text-white sm:text-3xl md:text-5xl">
                Bentuk
              </h2>
            </div>
          </div>

          <div className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-3 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {shapeCards.map((card) => (
              <article
                key={card.title}
                className="flex h-[460px] w-[80vw] shrink-0 snap-center flex-col items-center overflow-hidden rounded-[18px] border-4 border-[#f786f8] bg-[#171717] px-5 pt-4 text-center text-white"
              >
                <div className="flex h-52 w-full shrink-0 items-center justify-center">
                  <img src={card.src} alt={card.alt} className="max-h-full w-auto object-contain" />
                </div>
                <div className="mt-4">
                  <h3 className="font-['Plus_Jakarta_Sans:Bold'] text-base font-bold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 font-['Plus_Jakarta_Sans:Regular'] text-sm leading-relaxed text-white/80">
                    {card.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="relative hidden h-[680px] overflow-hidden md:block">
            <div className="absolute left-[calc(50%-1120px)] top-0 flex items-center gap-5">
              {[shapeCards[2], shapeCards[0], shapeCards[1], shapeCards[2], shapeCards[0]].map(
                (card, index) => (
                  <article
                    key={`${card.title}-${index}`}
                    className={`relative flex shrink-0 flex-col items-center overflow-hidden rounded-[22px] border-4 border-[#f786f8] bg-[#171717] px-8 text-center text-white ${
                      index === 2
                        ? "mt-[65px] h-[550px] w-[400px] pt-6"
                        : `h-[640px] w-[440px] pt-8 ${
                            index === 1 ? "rotate-[6deg]" : index === 3 ? "-rotate-[6deg]" : ""
                          }`
                    }`}
                  >
                  <div className="flex h-[300px] w-full shrink-0 items-center justify-center">
                    <img
                      src={card.src}
                      alt={card.alt}
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                  <div className="mt-5">
                    <h3 className="font-['Plus_Jakarta_Sans:Bold'] text-2xl font-bold text-white">
                      {card.title}
                    </h3>
                    <p className="mt-3 font-['Plus_Jakarta_Sans:Regular'] text-lg leading-relaxed text-white/80">
                      {card.desc}
                    </p>
                  </div>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Section: Warna */}
        <section className="relative mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-16">
          <EdgeGlitch side="left" className="top-1/3" />

          {/* Pill Header: Warna */}
          <div className="mb-12 flex justify-center sm:mb-14">
            <div className="relative inline-flex items-center justify-center w-[220px] sm:w-[320px] md:w-[400px] aspect-[628/174]">
              <img
                src={buttonPillBg}
                alt=""
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full object-contain"
              />
              <h2 className="relative z-10 font-[Arial] text-2xl font-bold tracking-wide text-white sm:text-3xl md:text-5xl">
                Warna
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-8 sm:gap-10">
            {colorMeanings.map((item) => (
              <div key={item.name} className="flex items-stretch gap-5 sm:gap-6">
                <div className={`w-1.5 shrink-0 sm:w-2 ${item.barColor}`} />
                <div className="py-0.5">
                  <h3 className="font-['Plus_Jakarta_Sans:Bold'] text-xl font-bold text-[#171717] sm:text-2xl md:text-3xl">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 font-['Plus_Jakarta_Sans:Regular'] text-base leading-relaxed text-[#171717]/80 md:text-xl">
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
