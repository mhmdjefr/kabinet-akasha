import type { Metadata } from "next";
import NavbarSection from "@/components/sections/NavbarSection";
import MobileNavbar from "@/components/sections/MobileNavbar";
import DetailFooterSection, { Vote2Chibi } from "@/components/sections/DetailFooterSection";
import FilosofiShapeCarousel from "@/components/sections/FilosofiShapeCarousel";
import {
  bentukDasar,
  buttonPillBg,
  elemenTerhubung,
  kartu3,
  kartu4,
  kartu5,
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
        <section className="relative overflow-hidden py-12 text-center sm:py-16 md:pb-16 md:pt-[144px]">
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
          <div className="mb-16 flex justify-center sm:mb-6">
            <div className="relative inline-flex aspect-[628/174] w-[220px] items-center justify-center sm:w-[320px] md:w-[560px]">
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

          {/* Mobile: Auto-play Carousel + Dots Progress (tanpa tab pills) */}
          <FilosofiShapeCarousel cards={shapeCards} />

          {/* Desktop: 5 Kartu Perspektif (Kartu 3 & 5 diperbesar di pinggir melewati layar, 3 kartu tengah dengan teks perspektif) */}
          <div className="relative hidden w-full items-center justify-center gap-3 overflow-hidden py-4 md:flex lg:gap-5 xl:gap-7">
            {/* Kartu Pinggir Kiri (Kartu 3 lebih besar, melewati tepi kiri layar) */}
            <img
              src={kartu3}
              alt=""
              aria-hidden
              className="-ml-[190px] h-[460px] w-auto shrink-0 object-contain lg:-ml-[250px] lg:h-[580px] xl:-ml-[340px] xl:h-[780px]"
            />

            {/* Kartu 3 (Kiri: Elemen yang saling terhubung) */}
            <article className="relative h-[380px] shrink-0 transition-transform duration-300 hover:scale-[1.02] lg:h-[460px] xl:h-[640px]">
              <img src={kartu3} alt="" className="h-full w-auto object-contain" />
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 px-6 py-8 text-center text-white lg:gap-5 lg:px-8 lg:py-10 xl:gap-6 xl:px-10 xl:py-14">
                <div className="flex h-[56%] w-full items-center justify-center">
                  <img
                    src={shapeCards[0].src}
                    alt={shapeCards[0].alt}
                    className="h-full w-auto object-contain scale-105"
                  />
                </div>
                <div
                  style={{ transform: "perspective(800px) rotateY(16deg)" }}
                >
                  <h3 className="font-['Plus_Jakarta_Sans:Bold'] text-sm font-bold text-white lg:text-base xl:text-xl">
                    {shapeCards[0].title}
                  </h3>
                  <p className="mt-1.5 font-['Plus_Jakarta_Sans:Regular'] text-[11px] leading-relaxed text-white/85 lg:text-xs xl:text-sm">
                    {shapeCards[0].desc}
                  </p>
                </div>
              </div>
            </article>

            {/* Kartu 4 (Tengah: Bentuk dasar huruf "A") */}
            <article className="relative h-[310px] shrink-0 transition-transform duration-300 hover:scale-[1.02] lg:h-[380px] xl:h-[520px]">
              <img src={kartu4} alt="" className="h-full w-auto object-contain" />
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-5 py-6 text-center text-white lg:gap-4 lg:px-7 lg:py-8 xl:gap-5 xl:px-8 xl:py-10">
                <div className="flex h-[56%] w-full items-center justify-center">
                  <img
                    src={shapeCards[1].src}
                    alt={shapeCards[1].alt}
                    className="h-full w-auto object-contain scale-105"
                  />
                </div>
                <div>
                  <h3 className="font-['Plus_Jakarta_Sans:Bold'] text-sm font-bold text-white lg:text-base xl:text-lg">
                    {shapeCards[1].title}
                  </h3>
                  <p className="mt-1.5 font-['Plus_Jakarta_Sans:Regular'] text-[10px] leading-relaxed text-white/85 lg:text-xs xl:text-sm">
                    {shapeCards[1].desc}
                  </p>
                </div>
              </div>
            </article>

            {/* Kartu 5 (Kanan: Bentuk yang menyebar dari pusat) */}
            <article className="relative h-[380px] shrink-0 transition-transform duration-300 hover:scale-[1.02] lg:h-[460px] xl:h-[640px]">
              <img src={kartu5} alt="" className="h-full w-auto object-contain" />
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 px-6 py-8 text-center text-white lg:gap-5 lg:px-8 lg:py-10 xl:gap-6 xl:px-10 xl:py-14">
                <div className="flex h-[56%] w-full items-center justify-center">
                  <img
                    src={shapeCards[2].src}
                    alt={shapeCards[2].alt}
                    className="h-full w-auto object-contain scale-105"
                  />
                </div>
                <div
                  style={{ transform: "perspective(800px) rotateY(-16deg)" }}
                >
                  <h3 className="font-['Plus_Jakarta_Sans:Bold'] text-sm font-bold text-white lg:text-base xl:text-xl">
                    {shapeCards[2].title}
                  </h3>
                  <p className="mt-1.5 font-['Plus_Jakarta_Sans:Regular'] text-[11px] leading-relaxed text-white/85 lg:text-xs xl:text-sm">
                    {shapeCards[2].desc}
                  </p>
                </div>
              </div>
            </article>

            {/* Kartu Pinggir Kanan (Kartu 5 lebih besar, melewati tepi kanan layar) */}
            <img
              src={kartu5}
              alt=""
              aria-hidden
              className="-mr-[190px] h-[460px] w-auto shrink-0 object-contain lg:-mr-[250px] lg:h-[580px] xl:-mr-[340px] xl:h-[780px]"
            />
          </div>
        </section>

        {/* Section: Warna */}
        <section className="relative mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-16">
          {/* Pill Header: Warna */}
          <div className="mb-12 flex justify-center sm:mb-14">
            <div className="relative inline-flex aspect-[628/174] w-[220px] items-center justify-center sm:w-[320px] md:w-[560px]">
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
                  <h3 className="font-['Plus_Jakarta_Sans:Bold'] text-xl font-bold text-[#171717] sm:text-2xl md:text-[40px]">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 font-['Plus_Jakarta_Sans:Regular'] text-base leading-relaxed text-[#171717]/80 md:text-[28px]">
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
