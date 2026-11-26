"use client";

import { useEffect, useRef, useState, type TouchEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type ShapeCard = {
  src: string;
  alt: string;
  title: string;
  desc: string;
};

export default function FilosofiShapeCarousel({ cards }: { cards: ShapeCard[] }) {
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const total = cards.length;

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

  const card = cards[index];

  return (
    <div className="px-5 md:hidden">
      {/* Carousel Card */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={() => {
          touchStartX.current = null;
        }}
        className="mx-auto w-full max-w-[340px] touch-pan-y"
      >
        <AnimatePresence mode="wait">
          <motion.article
            key={card.title}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex h-[420px] w-full flex-col items-center justify-center gap-5 overflow-hidden rounded-[18px] border-4 border-[#f786f8] bg-[#171717] px-6 py-6 text-center text-white shadow-[0_12px_32px_rgba(86,76,248,0.18)]"
          >
            <div className="flex h-56 w-full shrink-0 items-center justify-center">
              <img src={card.src} alt={card.alt} className="h-full w-auto object-contain scale-105" />
            </div>
            <div>
              <h3 className="font-['Plus_Jakarta_Sans:Bold'] text-base font-bold text-white">
                {card.title}
              </h3>
              <p className="mt-2 font-['Plus_Jakarta_Sans:Regular'] text-sm leading-relaxed text-white/80">
                {card.desc}
              </p>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      {/* Dots Progress Indicator (1 warna #564cf8) */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {cards.map((_, i) => {
          const isActive = i === index;
          return (
            <button
              key={i}
              type="button"
              onClick={() => stopAndGo(i)}
              aria-label={`Pilih kartu ${i + 1}`}
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
    </div>
  );
}
