"use client";

import Image from "next/image";
import { useRef, useState, type TouchEvent } from "react";

type SimpleCarouselProps = {
  images: string[];
  labels: string[];
  imageClassName?: string;
  controlColorClassName?: string;
};

export default function SimpleCarousel({
  images,
  labels,
  imageClassName = "aspect-[3/2] object-cover",
  controlColorClassName = "bg-brand-lime",
}: SimpleCarouselProps) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const total = Math.max(images.length, labels.length, 1);
  const currentLabel = labels[index] ?? `Gambar ${index + 1}`;
  const image =
    images[index] ??
    `https://placehold.co/600x400/eeeeee/333333?text=GAMBAR+${index + 1}`;

  const goTo = (direction: -1 | 1) => {
    setIndex((current) => (current + direction + total) % total);
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const distance = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(distance) > 40) goTo(distance < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  return (
    <div className="mx-auto w-full">
      <div className="grid grid-cols-[2.75rem_minmax(0,1fr)_2.75rem] items-center gap-2 sm:grid-cols-[3.5rem_minmax(0,1fr)_3.5rem] sm:gap-4">
        <button
          type="button"
          onClick={() => goTo(-1)}
          aria-label="Gambar sebelumnya"
          className={`grid size-11 place-items-center border-4 border-brand-black text-2xl font-black leading-none text-brand-black shadow-brutal-sm transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-brand-black)] focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-blue sm:size-14 sm:text-3xl ${controlColorClassName}`}
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
          <Image
            src={image}
            alt={currentLabel}
            width={600}
            height={400}
            unoptimized
            className={`w-full ${imageClassName}`}
          />
        </div>

        <button
          type="button"
          onClick={() => goTo(1)}
          aria-label="Gambar berikutnya"
          className={`grid size-11 place-items-center border-4 border-brand-black text-2xl font-black leading-none text-brand-black shadow-brutal-sm transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-brand-black)] focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-blue sm:size-14 sm:text-3xl ${controlColorClassName}`}
        >
          &gt;
        </button>
      </div>

      <p
        aria-live="polite"
        className="mx-auto mt-5 w-fit max-w-full border-4 border-brand-black bg-brand-lime px-5 py-2 text-center text-base font-extrabold text-brand-black shadow-brutal-sm sm:text-lg"
      >
        {currentLabel}
      </p>
    </div>
  );
}
