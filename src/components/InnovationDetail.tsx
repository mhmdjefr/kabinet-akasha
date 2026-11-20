import Link from "next/link";
import SimpleCarousel from "./SimpleCarousel";
import { innovations, type Innovation } from "@/data/innovations";

const THEMES = {
  tiktrack: {
    label: "SISTEM INFORMASI HIMATIK",
    hero: "bg-[#5C5CFF]",
    title: "text-white",
    accent: "text-[#B4F8C8]",
    marker: "bg-[#FF99FF]",
    button: "bg-[#B4F8C8]",
    features: [
      "md:col-span-2 bg-[#B4F8C8] text-[#1A1A1A]",
      "bg-[#FF99FF] text-[#1A1A1A]",
      "bg-white text-[#1A1A1A]",
      "bg-[#5C5CFF] text-white",
      "md:col-span-2 bg-[#FF99FF] text-[#1A1A1A]",
    ],
  },
  asah: {
    label: "PROGRAM PENDAMPINGAN AKADEMIK",
    hero: "bg-[#B4F8C8]",
    title: "text-[#1A1A1A]",
    accent: "text-[#5C5CFF]",
    marker: "bg-[#5C5CFF]",
    button: "bg-[#FF99FF]",
    features: [
      "md:col-span-2 bg-white text-[#1A1A1A]",
      "bg-[#5C5CFF] text-white",
      "bg-[#FF99FF] text-[#1A1A1A]",
      "bg-[#5C5CFF] text-white",
      "md:col-span-2 bg-white text-[#1A1A1A]",
    ],
  },
} as const;

type DetailSlug = keyof typeof THEMES;

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

function ZigZag({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 160 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="square"
    >
      <path d="m2 3 18 18L38 3l18 18L74 3l18 18 18-18 18 18 18-18" />
    </svg>
  );
}

function TikTrackDetail({
  innovation,
  number,
}: {
  innovation: Innovation;
  number: string;
}) {
  const theme = THEMES.tiktrack;
  const images =
    innovation.images ??
    innovation.carouselLabels.map(
      (_, index) =>
        `https://placehold.co/600x400/eeeeee/333333?text=GAMBAR+${index + 1}`,
    );

  return (
    <main className="min-h-screen overflow-hidden bg-brand-black px-4 pb-24 pt-8 text-white sm:px-6 lg:pb-32">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/#inovasi"
            className="inline-flex -rotate-2 items-center gap-3 border-4 border-brand-black bg-brand-lime px-4 py-3 text-sm font-black uppercase tracking-wide text-brand-black shadow-[6px_6px_0_#564cf8] transition-transform hover:translate-x-1 hover:translate-y-1"
          >
            <span aria-hidden="true">←</span>
            Semua inovasi
          </Link>
          <p className="font-sans text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">
            HIMATIK <span className="px-2 text-brand-pink">/</span> {number} — 03
          </p>
        </div>

        <header className="relative min-h-[30rem] overflow-hidden border-4 border-brand-black bg-brand-blue p-6 text-white shadow-[10px_10px_0_#cfffa3] sm:p-10 lg:min-h-[38rem] lg:p-14">
          <div className="absolute right-8 top-20 rotate-12 text-brand-pink">
            <StickerStar className="size-20 sm:size-32" />
          </div>
          <div className="relative z-10 max-w-6xl pt-10 sm:pt-14">
            <p className="mb-7 inline-flex -rotate-2 items-center gap-2 border-4 border-brand-black bg-brand-pink px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-brand-black shadow-[5px_5px_0_#1d1d1d] sm:text-xs">
              Sistem Informasi HIMATIK <span>✳</span> Inovasi {number}
            </p>
            <h1 className="relative font-display text-[clamp(4.5rem,15vw,13rem)] font-black uppercase leading-[0.78] tracking-[-0.08em] text-white">
              <span className="relative inline-block">
                <span aria-hidden="true" className="absolute left-1 top-1 select-none text-transparent [-webkit-text-stroke:2px_#f982fb]">TIK</span>
                <span className="relative z-10">TIK</span>
              </span>
              <br />
              <span className="relative ml-[9vw] inline-block text-brand-lime">
                <span aria-hidden="true" className="absolute left-1 top-1 select-none text-transparent [-webkit-text-stroke:2px_#ff99ff]">TRACK</span>
                <span className="relative z-10">TRACK</span>
              </span>
            </h1>
            <p className="mt-10 max-w-2xl border-l-8 border-brand-pink pl-5 text-sm font-bold leading-relaxed sm:text-base">
              {innovation.summary}
            </p>
          </div>
          <div className="absolute bottom-7 right-7 hidden rotate-3 border-4 border-brand-black bg-brand-lime px-4 py-3 text-center font-black uppercase text-brand-black shadow-[6px_6px_0_#1d1d1d] sm:block">
            <span className="block text-xs">Satu sistem.</span>
            <span className="block text-xl">Semua proses.</span>
          </div>
        </header>

        <div className="mt-10 lg:mt-14">
          <Link
            href="/inovasi/tiktrack/daftar"
            className="inline-flex items-center gap-3 border-4 border-brand-black bg-brand-lime px-6 py-4 text-base font-black uppercase tracking-wide text-brand-black shadow-brutal transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_var(--color-brand-black)] focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-brand-pink sm:text-lg"
          >
            Mulai daftar <span aria-hidden="true">→</span>
          </Link>
        </div>

        <section className="relative mt-14 lg:mt-24">
          <div className="pointer-events-none absolute -left-2 top-24 hidden h-64 border-l-4 border-dashed border-brand-pink lg:block" />
          <p className="absolute -left-8 top-36 hidden -rotate-90 font-black uppercase tracking-[0.25em] text-brand-pink lg:block">
            DETAIL / 01
          </p>
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-6">
            <div className="relative border-4 border-brand-black bg-brand-pink p-8 text-brand-black shadow-[8px_8px_0_#cfffa3] sm:p-10 lg:col-span-5 lg:-rotate-1">
              <div className="absolute -right-4 -top-5 rotate-12 text-brand-blue">
                <StickerStar className="size-14" />
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
                    Fitur
                    <br />
                    <span className="text-brand-pink">unggulan</span>
                  </h2>
                </div>
                <ZigZag className="mb-2 hidden w-28 text-brand-lime sm:block" />
              </div>
              <ul className="grid auto-rows-[minmax(10rem,auto)] grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
                {innovation.points.map((point, index) => {
                  const styles = [
                    "md:col-span-2 bg-brand-lime text-brand-black",
                    "bg-brand-pink text-brand-black",
                    "bg-brand-blue text-white",
                    "bg-brand-pink text-brand-black",
                    "bg-brand-blue text-brand-lime",
                  ];
                  return (
                    <li
                      key={point}
                      className={`relative border-4 border-brand-black p-5 font-semibold leading-relaxed shadow-[6px_6px_0_#1d1d1d] sm:p-6 ${styles[index]}`}
                    >
                      <span className="mb-5 block font-hand text-3xl font-black leading-none sm:text-4xl">
                        {String(index + 1).padStart(2, "0")}.
                      </span>
                      <p className="text-sm font-semibold leading-relaxed md:text-base">
                        {point}
                      </p>
                      <span className="absolute right-3 top-3 text-2xl opacity-80" aria-hidden="true">✳</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-24 border-t-4 border-dashed border-brand-pink pt-10 lg:mt-36 lg:pt-14">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <div>
              <h2 className="font-display text-5xl font-black uppercase tracking-tighter sm:text-8xl">
                {innovation.title}
              </h2>
            </div>
            <span className="rotate-2 border-4 border-brand-black bg-brand-pink px-4 py-3 text-xs font-black uppercase text-brand-black shadow-[5px_5px_0_#cfffa3]">
              Geser untuk melihat →
            </span>
          </div>
          <div className={`border-4 border-brand-black p-3 shadow-[10px_10px_0_#cfffa3] sm:p-6 lg:p-8 ${theme.hero}`}>
            <div className="border-4 border-brand-black bg-white p-3 sm:p-5">
              <SimpleCarousel
                images={images}
                labels={innovation.carouselLabels}
                imageClassName="h-auto max-h-[70vh] bg-white object-contain"
                controlColorClassName="bg-brand-pink"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default function InnovationDetail({ innovation }: { innovation: Innovation }) {
  const number = String(
    innovations.findIndex((item) => item.slug === innovation.slug) + 1,
  ).padStart(2, "0");
  if (innovation.slug === "tiktrack") {
    return <TikTrackDetail innovation={innovation} number={number} />;
  }
  const theme = THEMES[innovation.slug as DetailSlug] ?? THEMES.tiktrack;
  const images =
    innovation.images ??
    innovation.carouselLabels.map(
      (_, index) =>
        `https://placehold.co/600x400/eeeeee/333333?text=GAMBAR+${index + 1}`,
    );

  return (
    <main className="min-h-screen bg-[#1A1A1A] px-4 pb-20 pt-8 text-white sm:px-6 md:pb-28">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/#inovasi"
            className={`inline-flex items-center gap-3 border-4 border-black px-4 py-3 text-sm font-black uppercase tracking-wide text-[#1A1A1A] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white ${theme.button}`}
          >
            <span aria-hidden="true">←</span>
            Semua inovasi
          </Link>
          <p className="font-sans text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">
            HIMATIK <span className={`px-2 ${theme.accent}`}>/</span> {number} — 03
          </p>
        </div>

        <header className={`relative overflow-hidden border-4 border-black p-6 text-[#1A1A1A] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:p-10 lg:p-14 ${theme.hero}`}>
          <div className={`absolute -right-4 -top-5 rotate-12 sm:right-10 sm:top-8 ${theme.accent}`}>
            <StickerStar className="size-16 sm:size-24" />
          </div>
          <div className="relative z-10 max-w-5xl">
            <p className="mb-8 inline-flex items-center gap-2 border-2 border-black bg-black px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white sm:text-xs">
              {theme.label}
              <span className={theme.accent}>✳</span>
              INOVASI {number}
            </p>
            <h1 className={`font-display text-[clamp(3rem,12vw,10rem)] font-black uppercase leading-[0.8] tracking-tighter ${theme.title}`}>
              {innovation.title}
            </h1>
            <p className="mt-8 max-w-3xl border-l-4 border-black pl-4 text-sm font-semibold leading-relaxed sm:text-base">
              {innovation.summary}
            </p>
          </div>
        </header>

        <section className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
          <div className="self-start border-4 border-black bg-white p-8 text-[#1A1A1A] shadow-[6px_6px_0px_0px_rgba(180,248,200,1)] sm:p-10 lg:sticky lg:top-24">
            <div className="mb-6 flex items-center gap-3">
              <span className={`h-1 w-10 ${theme.marker}`} />
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#5C5CFF]">
                Tentang inovasi
              </p>
            </div>
            <p className="font-sans text-lg font-semibold leading-relaxed sm:text-xl">
              {innovation.description}
            </p>
            <div className="mt-8 border-t-2 border-dashed border-black pt-5">
              <p className="text-xs font-black uppercase tracking-[0.15em]">
                Fokus utama
              </p>
              <p className="mt-2 text-sm font-medium leading-relaxed sm:text-base">
                {innovation.summary}
              </p>
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className={`mb-2 text-xs font-black uppercase tracking-[0.2em] ${theme.accent}`}>
                  Dari ide sampai eksekusi
                </p>
                <h2 className="font-display text-3xl font-black uppercase tracking-tight sm:text-4xl">
                  Fitur unggulan
                </h2>
              </div>
              <StickerStar className={`mb-1 size-8 shrink-0 ${theme.accent}`} />
            </div>

            <ul className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
              {innovation.points.map((point, index) => (
                <li
                  key={point}
                  className={`relative min-h-40 border-4 border-black p-5 pt-6 font-semibold leading-relaxed shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:p-6 sm:pt-7 ${theme.features[index % theme.features.length]}`}
                >
                  <span className="mb-5 block font-hand text-2xl leading-none">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  <p className="text-sm font-semibold leading-relaxed md:text-base">{point}</p>
                  <span className="absolute right-3 top-3 text-lg leading-none opacity-70" aria-hidden="true">
                    ✳
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {innovation.slug !== "asah" && (
          <section className="mt-16 border-t-2 border-dashed border-white/40 pt-10 lg:mt-24 lg:pt-14">
            <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="font-display text-4xl font-black uppercase tracking-tighter sm:text-6xl">
                  {innovation.title}
                </h2>
              </div>
              <span className={`border-2 border-black px-3 py-2 text-xs font-black uppercase tracking-wide text-[#1A1A1A] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${theme.button}`}>
                Geser untuk melihat
              </span>
            </div>

            <div className={`border-4 border-black p-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:p-6 lg:p-8 ${theme.hero}`}>
              <div className="border-4 border-black bg-white p-3 sm:p-5">
                <SimpleCarousel
                  images={images}
                  labels={innovation.carouselLabels}
                  imageClassName="aspect-[2.2/1] bg-white object-cover"
                  controlColorClassName={theme.button}
                />
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
