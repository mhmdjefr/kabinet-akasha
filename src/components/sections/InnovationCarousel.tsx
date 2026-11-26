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
      {/* Pill Header (button.png) */}
      <div className="mb-6 flex justify-center sm:mb-8">
        <div className="relative inline-flex aspect-[628/174] w-[175px] items-center justify-center sm:w-[215px] lg:w-[245px]">
          <img
            src={buttonPillBg}
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full object-contain"
          />
          <h2 className="relative z-10 font-[Arial] text-base font-bold tracking-wide text-white sm:text-lg lg:text-xl">
            Tampilan Program
          </h2>
        </div>
      </div>

      {/* Tab Pills Selector (gaya pill modern senada MobileNavbar) */}
      <div className="mb-6 flex justify-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-2xl bg-[#17171a] p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.18)] sm:rounded-full">
          {images.map((_, i) => {
            const isActive = i === index;
            const label = labels[i] ?? `Slide ${i + 1}`;
            return (
              <button
                key={label}
                type="button"
                onClick={() => stopAndGo(i)}
                className={`cursor-pointer rounded-full px-3.5 py-1.5 font-['Plus_Jakarta_Sans:Medium'] text-xs font-semibold transition-all duration-200 sm:px-4 sm:py-2 sm:text-sm ${
                  isActive
                    ? "bg-[#cfffa3] text-[#171717] shadow-sm"
                    : "text-white/75 hover:bg-white/10 hover:text-white"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Carousel Frame + Side Controls */}
      <div className="relative flex items-center gap-3 sm:gap-5">
        {/* Prev Button (Desktop / Tablet) */}
        <button
          type="button"
          onClick={() => stopAndGo(index - 1)}
          aria-label="Slide sebelumnya"
          className="hidden sm:grid size-11 md:size-12 shrink-0 cursor-pointer place-items-center rounded-full bg-[#17171a] text-white shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition-all duration-200 hover:bg-[#564cf8] hover:scale-105 active:scale-95"
        >
          <ChevronLeft className="size-5 md:size-6" />
        </button>

        {/* Image Viewport */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={() => {
            touchStartX.current = null;
          }}
          className="relative w-full overflow-hidden rounded-2xl border border-[#564cf8]/20 bg-gradient-to-b from-[#17171a] to-[#232136] p-2 shadow-[0_20px_50px_rgba(86,76,248,0.18)] sm:rounded-3xl sm:p-3 touch-pan-y"
        >
          <div className="relative flex h-[280px] w-full items-center justify-center overflow-hidden rounded-xl bg-white sm:h-[440px] sm:rounded-2xl md:h-[520px]">
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
          className="hidden sm:grid size-11 md:size-12 shrink-0 cursor-pointer place-items-center rounded-full bg-[#17171a] text-white shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition-all duration-200 hover:bg-[#564cf8] hover:scale-105 active:scale-95"
        >
          <ChevronRight className="size-5 md:size-6" />
        </button>
      </div>

      {/* Mobile Controls & Dots */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => stopAndGo(index - 1)}
          aria-label="Slide sebelumnya"
          className="grid sm:hidden size-10 cursor-pointer place-items-center rounded-full bg-[#17171a] text-white shadow-md transition-colors active:bg-[#564cf8]"
        >
          <ChevronLeft className="size-5" />
        </button>

        <div className="flex items-center gap-2">
          {images.map((_, i) => {
            const isActive = i === index;
            return (
              <button
                key={i}
                type="button"
                onClick={() => stopAndGo(i)}
                aria-label={`Pilih slide ${i + 1}`}
                className={`relative h-2 cursor-pointer overflow-hidden rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-10 bg-[#564cf8]/25"
                    : "w-2 bg-[#171717]/20 hover:bg-[#564cf8]/50"
                }`}
              >
                {isActive && (
                  <motion.span
                    key={`progress-${index}-${autoPlay}`}
                    initial={{ width: autoPlay ? "0%" : "100%" }}
                    animate={{ width: "100%" }}
                    transition={
                      autoPlay
                        ? { duration: 4, ease: "linear" }
                        : { duration: 0.2 }
                    }
                    className="block h-full rounded-full bg-[#564cf8]"
                  />
                )}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => stopAndGo(index + 1)}
          aria-label="Slide berikutnya"
          className="grid sm:hidden size-10 cursor-pointer place-items-center rounded-full bg-[#17171a] text-white shadow-md transition-colors active:bg-[#564cf8]"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </section>
  );
}
