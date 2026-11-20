"use client";

import Link from "next/link";
import { useRef, useState, type TouchEvent } from "react";

const PAGES = [
  { label: "Portofolio Mahasiswa", href: "/inovasi/barnaby/portofolio" },
  { label: "Merchandise", href: "/inovasi/barnaby/merch" },
  { label: "Aplikasi", href: "/inovasi/barnaby/aplikasi" },
];

export default function BarnabyPageCarousel() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const page = PAGES[index];

  const move = (direction: -1 | 1) => {
    setIndex((current) => (current + direction + PAGES.length) % PAGES.length);
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(distance) > 40) move(distance < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  return (
    <div className="mx-auto w-full">
      <div className="grid grid-cols-[2.75rem_minmax(0,1fr)_2.75rem] items-center gap-2 sm:grid-cols-[3.5rem_minmax(0,1fr)_3.5rem] sm:gap-4">
        <button
          type="button"
          onClick={() => move(-1)}
          aria-label="Halaman Barnaby sebelumnya"
          className="grid size-11 place-items-center border-4 border-brand-black text-2xl font-black leading-none text-brand-black shadow-brutal-sm transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-brand-black)] focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-blue sm:size-14 sm:text-3xl bg-brand-pink"
        >
          &lt;
        </button>

        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={() => {
            touchStartX.current = null;
          }}
          className="min-w-0 touch-pan-y border-4 border-brand-black bg-white p-2 shadow-brutal sm:p-3"
        >
          <div
            role="img"
            aria-label={`Placeholder gambar halaman ${page.label}`}
            className="mx-auto h-[min(72vh,56rem)] w-full max-w-4xl bg-[#f6f6f2]"
          />
        </div>

        <button
          type="button"
          onClick={() => move(1)}
          aria-label="Halaman Barnaby berikutnya"
          className="grid size-11 place-items-center border-4 border-brand-black text-2xl font-black leading-none text-brand-black shadow-brutal-sm transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-brand-black)] focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-blue sm:size-14 sm:text-3xl bg-brand-pink"
        >
          &gt;
        </button>
      </div>

      <div aria-live="polite" className="mx-auto mt-5 w-fit max-w-full">
        <Link
          href={page.href}
          className="inline-flex items-center gap-2 border-4 border-brand-black bg-brand-lime px-5 py-2 text-center text-base font-extrabold text-brand-black shadow-brutal-sm transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-brand-black)] focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-blue sm:text-lg"
        >
          {page.label} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
