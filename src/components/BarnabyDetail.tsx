import Link from "next/link";
import BarnabyPageCarousel from "./BarnabyPageCarousel";
import type { Innovation } from "@/data/innovations";

const FEATURE_STYLES = [
  "md:col-span-2 bg-[#FF99FF] text-[#1A1A1A]",
  "bg-[#B4F8C8] text-[#1A1A1A]",
  "bg-[#5C5CFF] text-white",
  "bg-[#5C5CFF] text-white",
  "bg-[#B4F8C8] text-[#1A1A1A]",
];

function StickerStar({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 40 40"
      className={className}
      fill="currentColor"
    >
      <path d="M20 0 24.6 14.2 40 10 25.8 19.4 36 32 22 24.8 16 40 17.8 23.7 2 28 16.3 19 5 7.5 19.1 14.7z" />
    </svg>
  );
}

export default function BarnabyDetail({ innovation }: { innovation: Innovation }) {
  return (
    <main className="min-h-screen bg-[#1A1A1A] px-4 pb-20 pt-8 text-white sm:px-6 md:pb-28">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/#inovasi"
            className="inline-flex items-center gap-3 border-4 border-black bg-[#B4F8C8] px-4 py-3 text-sm font-black uppercase tracking-wide text-[#1A1A1A] shadow-[6px_6px_0px_0px_#5C5CFF] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_#5C5CFF] focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <span aria-hidden="true">←</span>
            Semua inovasi
          </Link>
          <p className="font-sans text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">
            HIMATIK <span className="px-2 text-[#FF99FF]">/</span> 03 — 03
          </p>
        </div>

        <header className="relative min-h-[30rem] overflow-hidden border-4 border-black bg-[#FF99FF] p-6 text-[#1A1A1A] shadow-[10px_10px_0_#5c5cff] sm:p-10 lg:min-h-[38rem] lg:p-14">
          <div className="absolute right-8 top-20 rotate-12 text-[#5C5CFF]">
            <StickerStar className="size-20 sm:size-32" />
          </div>
          <div className="relative z-10 max-w-6xl pt-10 sm:pt-14">
            <p className="mb-7 inline-flex -rotate-2 items-center gap-2 border-4 border-black bg-[#B4F8C8] px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#1A1A1A] shadow-[5px_5px_0_#1d1d1d] sm:text-xs">
              Bisnis dan Kemitraan <span>✳</span> Inovasi 03
            </p>
            <h1 className="font-display text-[clamp(4.5rem,15vw,13rem)] font-black uppercase leading-[0.78] tracking-[-0.08em]">
              BARNABY
              <br />
              <span className="relative inline-block text-[#5C5CFF]">
                <span aria-hidden="true" className="absolute left-1 top-1 select-none text-transparent [-webkit-text-stroke:2px_#1a1a1a]">2.0</span>
                <span className="relative z-10">2.0</span>
              </span>
            </h1>
            <p className="mt-10 max-w-2xl border-l-8 border-[#B4F8C8] pl-5 text-sm font-bold leading-relaxed sm:text-base">
              {innovation.summary}
            </p>
          </div>
          <div className="absolute bottom-7 right-7 hidden rotate-3 border-4 border-black bg-[#5C5CFF] px-4 py-3 text-center font-black uppercase text-white shadow-[6px_6px_0_#1d1d1d] sm:block">
            <span className="block text-xs">Karya lokal.</span>
            <span className="block text-xl text-[#B4F8C8]">Dampak digital.</span>
          </div>
        </header>

        <div className="mt-10 lg:mt-14">
          <Link
            href="/inovasi/barnaby/portofolio"
            className="inline-flex items-center gap-3 border-4 border-black bg-[#B4F8C8] px-6 py-4 text-sm font-black uppercase tracking-wide text-[#1A1A1A] shadow-[6px_6px_0_#1d1d1d] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_#1d1d1d] focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base"
          >
            Jelajahi ruang karya <span aria-hidden="true">→</span>
          </Link>
        </div>

        <section className="relative mt-14 lg:mt-24">
          <div className="pointer-events-none absolute -left-2 top-24 hidden h-64 border-l-4 border-dashed border-[#FF99FF] lg:block" />
          <p className="absolute -left-8 top-36 hidden -rotate-90 font-black uppercase tracking-[0.25em] text-[#FF99FF] lg:block">DETAIL / 03</p>
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-6">
            <div className="relative border-4 border-black bg-[#B4F8C8] p-8 text-[#1A1A1A] shadow-[8px_8px_0_#ff99ff] sm:p-10 lg:col-span-5 lg:-rotate-1">
              <div className="absolute -right-4 -top-5 rotate-12 text-[#5C5CFF]">
                <StickerStar className="size-14" />
              </div>
              <p className="mb-6 font-hand text-3xl">Tentang inovasi</p>
              <p className="font-sans text-lg font-semibold leading-relaxed sm:text-xl">
                {innovation.description}
              </p>
              <div className="mt-10 border-t-4 border-black pt-5">
                <p className="text-xs font-black uppercase tracking-[0.15em]">Fokus utama</p>
                <p className="mt-2 text-base font-semibold leading-relaxed sm:text-lg">Membuka ruang kolaborasi bisnis dan karya digital bagi mahasiswa TIK.</p>
              </div>
            </div>

            <div className="relative lg:col-span-7">
              <div className="mb-8 flex items-end justify-between gap-4">
                <div>
                  <h2 className="font-display text-5xl font-black uppercase leading-[0.8] tracking-tighter sm:text-7xl">Fitur<br /><span className="text-[#5C5CFF]">unggulan</span></h2>
                </div>
                <StickerStar className="mb-2 hidden size-10 text-[#B4F8C8] sm:block" />
              </div>
              <ul className="grid auto-rows-[minmax(10rem,auto)] grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
              {innovation.points.map((point, index) => (
                <li
                  key={point}
                  className={`relative border-4 border-black p-5 font-semibold leading-relaxed shadow-[6px_6px_0_#1d1d1d] sm:p-6 ${FEATURE_STYLES[index % FEATURE_STYLES.length]}`}
                >
                  <span className="mb-5 block font-hand text-3xl font-black leading-none sm:text-4xl">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  <p className="text-sm font-semibold leading-relaxed md:text-base">{point}</p>
                  <span className="absolute right-3 top-3 text-2xl opacity-80" aria-hidden="true">✳</span>
                </li>
              ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-24 border-t-4 border-dashed border-[#FF99FF] pt-10 lg:mt-36 lg:pt-14">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <h2 className="font-display text-5xl font-black uppercase tracking-tighter sm:text-8xl">
              Barnaby 2.0
            </h2>
            <span className="rotate-2 border-4 border-black bg-[#FF99FF] px-4 py-3 text-xs font-black uppercase text-[#1A1A1A] shadow-[5px_5px_0_#b4f8c8]">
              Geser untuk melihat →
            </span>
          </div>
          <div className="border-4 border-black bg-[#5C5CFF] p-3 shadow-[10px_10px_0_#b4f8c8] sm:p-6 lg:p-8">
            <div className="border-4 border-black bg-white p-3 sm:p-5">
              <BarnabyPageCarousel />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
