import Link from "next/link";
import { getInnovation } from "@/data/innovations";

const innovation = getInnovation("asah")!;
const featureStyles = [
  "md:col-span-2 bg-brand-lime text-brand-black",
  "bg-brand-pink text-brand-black",
  "bg-brand-lime text-brand-black",
  "bg-brand-pink text-brand-black",
  "md:col-span-2 bg-brand-blue text-white",
];

function Star({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" className={className} fill="currentColor">
      <path d="M20 0 24.6 14.2 40 10 25.8 19.4 36 32 22 24.8 16 40 17.8 23.7 2 28 16.3 19 5 7.5 19.1 14.7z" />
    </svg>
  );
}

function ZigZag() {
  return (
    <svg aria-hidden="true" viewBox="0 0 160 24" className="mb-2 hidden w-28 text-brand-blue sm:block" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="square">
      <path d="m2 3 18 18L38 3l18 18L74 3l18 18 18-18 18 18 18-18" />
    </svg>
  );
}

export default function AsahDetail() {
  return (
    <main className="min-h-screen overflow-hidden bg-brand-black px-4 pb-24 pt-8 text-white sm:px-6 lg:pb-32">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link href="/#inovasi" className="inline-flex -rotate-2 items-center gap-3 border-4 border-brand-black bg-brand-lime px-4 py-3 text-sm font-black uppercase tracking-wide text-brand-black shadow-[6px_6px_0_#564cf8] transition-transform hover:translate-x-1 hover:translate-y-1">
            <span aria-hidden="true">←</span>
            Semua inovasi
          </Link>
          <p className="font-sans text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">
            HIMATIK <span className="px-2 text-brand-pink">/</span> 02 — 03
          </p>
        </div>

        <header className="relative min-h-[30rem] overflow-hidden border-4 border-brand-black bg-brand-lime p-6 text-brand-black shadow-[10px_10px_0_#564cf8] sm:p-10 lg:min-h-[38rem] lg:p-14">
          <div className="absolute right-8 top-20 rotate-12 text-brand-blue">
            <Star className="size-20 sm:size-32" />
          </div>
          <div className="relative z-10 max-w-6xl pt-10 sm:pt-14">
            <p className="mb-7 inline-flex -rotate-2 items-center gap-2 border-4 border-brand-black bg-brand-pink px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-brand-black shadow-[5px_5px_0_#1d1d1d] sm:text-xs">
              Program Pendampingan Akademik <span>✳</span> Inovasi 02
            </p>
            <h1 className="font-display text-[clamp(4.5rem,15vw,13rem)] font-black uppercase leading-[0.78] tracking-[-0.08em]">
              <span className="relative inline-block">
                <span aria-hidden="true" className="absolute left-1 top-1 select-none text-transparent [-webkit-text-stroke:2px_#5c5cff]">ASAH</span>
                <span className="relative z-10">ASAH</span>
              </span>
            </h1>
            <p className="mt-10 max-w-2xl border-l-8 border-brand-pink pl-5 text-sm font-bold leading-relaxed sm:text-base">
              {innovation.summary}
            </p>
          </div>
          <div className="absolute bottom-7 right-7 hidden rotate-3 border-4 border-brand-black bg-brand-blue px-4 py-3 text-center font-black uppercase text-white shadow-[6px_6px_0_#1d1d1d] sm:block">
            <span className="block text-xs">Belajar bareng.</span>
            <span className="block text-xl text-brand-lime">Tumbuh bareng.</span>
          </div>
        </header>

        <section className="relative mt-14 lg:mt-24">
          <div className="pointer-events-none absolute -left-2 top-24 hidden h-64 border-l-4 border-dashed border-brand-pink lg:block" />
          <p className="absolute -left-8 top-36 hidden -rotate-90 font-black uppercase tracking-[0.25em] text-brand-pink lg:block">DETAIL / 02</p>
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-6">
            <div className="relative border-4 border-brand-black bg-brand-pink p-8 text-brand-black shadow-[8px_8px_0_#cfffa3] sm:p-10 lg:col-span-5 lg:-rotate-1">
              <div className="absolute -right-4 -top-5 rotate-12 text-brand-blue">
                <Star className="size-14" />
              </div>
              <p className="mb-6 font-hand text-3xl">Tentang inovasi</p>
              <p className="font-sans text-lg font-semibold leading-relaxed sm:text-xl">
                {innovation.description}
              </p>
              <div className="mt-10 border-t-4 border-brand-black pt-5">
                <p className="text-xs font-black uppercase tracking-[0.15em]">Fokus utama</p>
                <p className="mt-2 text-base font-semibold leading-relaxed sm:text-lg">{innovation.summary}</p>
              </div>
            </div>

            <div className="relative lg:col-span-7">
              <div className="mb-8 flex items-end justify-between gap-4">
                <div>
                  <h2 className="font-display text-5xl font-black uppercase leading-[0.8] tracking-tighter sm:text-7xl">
                    Fitur<br /><span className="text-brand-blue">unggulan</span>
                  </h2>
                </div>
                <ZigZag />
              </div>
              <ul className="grid auto-rows-[minmax(10rem,auto)] grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
                {innovation.points.map((point, index) => (
                  <li key={point} className={`relative border-4 border-brand-black p-5 font-semibold leading-relaxed shadow-[6px_6px_0_#1d1d1d] sm:p-6 ${featureStyles[index]}`}>
                    <span className="mb-5 block font-hand text-3xl font-black leading-none sm:text-4xl">{String(index + 1).padStart(2, "0")}.</span>
                    <p className="text-sm font-semibold leading-relaxed md:text-base">{point}</p>
                    <span className="absolute right-3 top-3 text-2xl opacity-80" aria-hidden="true">✳</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
