"use client";

import { useEffect, useRef, useState, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { buttonPillBg } from "@/lib/assets";

type InnovationCarouselProps = {
  images: string[];
  labels: string[];
  title: string;
};

export default function InnovationCarousel({
  images,
  labels,
  title,
}: InnovationCarouselProps) {
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const total = images.length;

  useEffect(() => {
    if (!autoPlay || total <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 4000);

    return () => clearInterval(timer);
  }, [autoPlay, total]);

  if (total === 0) return null;

  const stopAndGo = (nextIndex: number) => {
    setAutoPlay(false);
    setIndex((nextIndex + total) % total);
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const distance = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(distance) > 35) {
      stopAndGo(distance < 0 ? index + 1 : index - 1);
    }
    touchStartX.current = null;
  };

  const currentLabel = labels[index] ?? `${title} ${index + 1}`;

  return (
    <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16">
      {/* Pill Header */}
      <div className="mb-8 flex justify-center sm:mb-10">
        <div className="relative inline-flex aspect-[628/174] w-[220px] items-center justify-center sm:w-[300px] md:w-[360px]">
          <img
            src={buttonPillBg}
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full object-contain"
          />
          <h2 className="relative z-10 font-[Arial] text-xl font-bold tracking-wide text-white sm:text-2xl md:text-3xl">
            Tampilan Program
          </h2>
        </div>
      </div>

      {/* Tab Pills Selector */}
      <div className="mb-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {images.map((_, i) => {
          const isActive = i === index;
          const label = labels[i] ?? `Slide ${i + 1}`;
          return (
            <button
              key={label}
              type="button"
              onClick={() => stopAndGo(i)}
              className={`cursor-pointer border-2 px-3.5 py-1.5 font-['Plus_Jakarta_Sans:Bold'] text-xs font-bold transition-all sm:px-4 sm:py-2 sm:text-sm ${
                isActive
                  ? "border-[#171717] bg-[#cfffa3] text-[#171717] shadow-[3px_3px_0_#171717]"
                  : "border-[#171717]/20 bg-white text-[#171717]/75 hover:border-[#564cf8] hover:text-[#564cf8]"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Carousel Frame + Side Controls */}
      <div className="relative flex items-center gap-3 sm:gap-5">
        {/* Prev Button (Desktop / Tablet) */}
        <button
          type="button"
          onClick={() => stopAndGo(index - 1)}
          aria-label="Slide sebelumnya"
          className="hidden sm:grid size-11 md:size-12 shrink-0 cursor-pointer place-items-center border-2 border-[#171717] bg-[#cfffa3] text-[#171717] shadow-[4px_4px_0_#171717] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#171717] active:translate-y-1"
        >
          <ChevronLeft className="size-6 stroke-[2.5]" />
        </button>

        {/* Image Viewport */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={() => {
            touchStartX.current = null;
          }}
          className="relative w-full overflow-hidden border-2 border-[#171717] bg-[#171717] p-2 shadow-[6px_6px_0_#564cf8] sm:p-3 sm:shadow-[10px_10px_0_#564cf8] touch-pan-y"
        >
          <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden bg-white sm:h-[440px] md:h-[520px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={images[index]}
                src={images[index]}
                alt={currentLabel}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="h-full w-full object-contain"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Next Button (Desktop / Tablet) */}
        <button
          type="button"
          onClick={() => stopAndGo(index + 1)}
          aria-label="Slide berikutnya"
          className="hidden sm:grid size-11 md:size-12 shrink-0 cursor-pointer place-items-center border-2 border-[#171717] bg-[#cfffa3] text-[#171717] shadow-[4px_4px_0_#171717] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#171717] active:translate-y-1"
        >
          <ChevronRight className="size-6 stroke-[2.5]" />
        </button>
      </div>

      {/* Mobile Controls & Dots */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => stopAndGo(index - 1)}
          aria-label="Slide sebelumnya"
          className="grid sm:hidden size-10 cursor-pointer place-items-center border-2 border-[#171717] bg-[#cfffa3] text-[#171717] shadow-[3px_3px_0_#171717] active:translate-y-0.5"
        >
          <ChevronLeft className="size-5 stroke-[2.5]" />
        </button>

        <div className="flex items-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => stopAndGo(i)}
              aria-label={`Pilih slide ${i + 1}`}
              className={`h-2.5 cursor-pointer rounded-full transition-all ${
                i === index
                  ? "w-8 bg-[#564cf8]"
                  : "w-2.5 bg-[#171717]/20 hover:bg-[#564cf8]/50"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => stopAndGo(index + 1)}
          aria-label="Slide berikutnya"
          className="grid sm:hidden size-10 cursor-pointer place-items-center border-2 border-[#171717] bg-[#cfffa3] text-[#171717] shadow-[3px_3px_0_#171717] active:translate-y-0.5"
        >
          <ChevronRight className="size-5 stroke-[2.5]" />
        </button>
      </div>
    </section>
  );
}
