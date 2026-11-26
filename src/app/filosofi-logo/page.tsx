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

      <main className="pt-[60px] min-[768px]:pt-[72px]">
        {/* Header Section */}
        <section className="relative overflow-hidden py-8 text-center sm:py-10 lg:py-12">
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
            <h1 className="font-[Arial] text-3xl font-bold tracking-tight text-[#564cf8] sm:text-4xl lg:text-5xl">
              Filosofi Logo
            </h1>
          </div>
        </section>

        {/* Section: Bentuk */}
        <section className="relative w-full px-0 py-4 sm:py-8">
          {/* Pill Header: Bentuk */}
          <div className="mb-8 flex justify-center sm:mb-6">
            <div className="relative inline-flex aspect-[628/174] w-[170px] items-center justify-center sm:w-[210px] lg:w-[240px]">
              <img
                src={buttonPillBg}
                alt=""
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full object-contain"
              />
              <h2 className="relative z-10 font-[Arial] text-lg font-bold tracking-wide text-white sm:text-xl lg:text-2xl">
                Bentuk
              </h2>
            </div>
          </div>

          {/* Mobile: Auto-play Carousel + Dots Progress (tanpa tab pills) */}
          <FilosofiShapeCarousel cards={shapeCards} />

          {/* Desktop: 3 Kartu Utama di Tengah + 2 Kartu Pinggir Terpotong Elegan di Tepi Layar */}
          <div className="relative hidden w-full items-center justify-center overflow-hidden py-6 md:flex">
            {/* Kartu Pinggir Kiri (selalu terpotong elegan di tepi kiri) */}
            <img
              src={kartu3}
              alt=""
              aria-hidden
              className="pointer-events-none absolute left-0 h-[400px] w-auto -translate-x-[68%] object-contain lg:h-[480px] xl:h-[540px]"
            />

            <div className="relative z-10 flex items-center justify-center gap-4 lg:gap-6 xl:gap-8">
              {/* Kartu 3 (Kiri: Elemen yang saling terhubung) */}
              <article className="relative h-[330px] shrink-0 transition-transform duration-300 hover:scale-[1.02] lg:h-[390px] xl:h-[450px]">
                <img src={kartu3} alt="" className="h-full w-auto object-contain" />
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-5 py-7 text-center text-white lg:gap-4 lg:px-7 lg:py-9 xl:gap-5 xl:px-8 xl:py-10">
                  <div className="flex h-[54%] w-full items-center justify-center">
                    <img
                      src={shapeCards[0].src}
                      alt={shapeCards[0].alt}
                      className="h-full w-auto object-contain scale-105"
                    />
                  </div>
                  <div
                    style={{ transform: "perspective(800px) rotateY(16deg)" }}
                  >
                    <h3 className="font-['Plus_Jakarta_Sans:Bold'] text-xs font-bold text-white lg:text-sm xl:text-base">
                      {shapeCards[0].title}
                    </h3>
                    <p className="mt-1 font-['Plus_Jakarta_Sans:Regular'] text-[10px] leading-relaxed text-white/85 lg:text-xs xl:text-[13px]">
                      {shapeCards[0].desc}
                    </p>
                  </div>
                </div>
              </article>

              {/* Kartu 4 (Tengah: Bentuk dasar huruf "A") */}
              <article className="relative h-[270px] shrink-0 transition-transform duration-300 hover:scale-[1.02] lg:h-[325px] xl:h-[375px]">
                <img src={kartu4} alt="" className="h-full w-auto object-contain" />
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2.5 px-4 py-5 text-center text-white lg:gap-3 lg:px-6 lg:py-7 xl:gap-4 xl:px-7 xl:py-8">
                  <div className="flex h-[54%] w-full items-center justify-center">
                    <img
                      src={shapeCards[1].src}
                      alt={shapeCards[1].alt}
                      className="h-full w-auto object-contain scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans:Bold'] text-xs font-bold text-white lg:text-sm xl:text-base">
                      {shapeCards[1].title}
                    </h3>
                    <p className="mt-1 font-['Plus_Jakarta_Sans:Regular'] text-[10px] leading-relaxed text-white/85 lg:text-[11px] xl:text-xs">
                      {shapeCards[1].desc}
                    </p>
                  </div>
                </div>
              </article>

              {/* Kartu 5 (Kanan: Bentuk yang menyebar dari pusat) */}
              <article className="relative h-[330px] shrink-0 transition-transform duration-300 hover:scale-[1.02] lg:h-[390px] xl:h-[450px]">
                <img src={kartu5} alt="" className="h-full w-auto object-contain" />
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-5 py-7 text-center text-white lg:gap-4 lg:px-7 lg:py-9 xl:gap-5 xl:px-8 xl:py-10">
                  <div className="flex h-[54%] w-full items-center justify-center">
                    <img
                      src={shapeCards[2].src}
                      alt={shapeCards[2].alt}
                      className="h-full w-auto object-contain scale-105"
                    />
                  </div>
                  <div
                    style={{ transform: "perspective(800px) rotateY(-16deg)" }}
                  >
                    <h3 className="font-['Plus_Jakarta_Sans:Bold'] text-xs font-bold text-white lg:text-sm xl:text-base">
                      {shapeCards[2].title}
                    </h3>
                    <p className="mt-1 font-['Plus_Jakarta_Sans:Regular'] text-[10px] leading-relaxed text-white/85 lg:text-xs xl:text-[13px]">
                      {shapeCards[2].desc}
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* Kartu Pinggir Kanan (selalu terpotong elegan di tepi kanan) */}
            <img
              src={kartu5}
              alt=""
              aria-hidden
              className="pointer-events-none absolute right-0 h-[400px] w-auto translate-x-[68%] object-contain lg:h-[480px] xl:h-[540px]"
            />
          </div>
        </section>

        {/* Section: Warna */}
        <section className="relative mx-auto max-w-2xl px-5 py-8 sm:px-6 sm:py-12">
          {/* Pill Header: Warna */}
          <div className="mb-8 flex justify-center sm:mb-10">
            <div className="relative inline-flex aspect-[628/174] w-[170px] items-center justify-center sm:w-[210px] lg:w-[240px]">
              <img
                src={buttonPillBg}
                alt=""
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full object-contain"
              />
              <h2 className="relative z-10 font-[Arial] text-lg font-bold tracking-wide text-white sm:text-xl lg:text-2xl">
                Warna
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-6 sm:gap-7">
            {colorMeanings.map((item) => (
              <div key={item.name} className="flex items-stretch gap-4">
                <div className={`w-1.5 shrink-0 ${item.barColor}`} />
                <div className="py-0.5">
                  <h3 className="font-['Plus_Jakarta_Sans:Bold'] text-lg font-bold text-[#171717] sm:text-xl lg:text-[22px]">
                    {item.name}
                  </h3>
                  <p className="mt-1 font-['Plus_Jakarta_Sans:Regular'] text-sm leading-relaxed text-[#171717]/80 sm:text-base">
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
