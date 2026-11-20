"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 md:py-24">
      {/* Background Graphic */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <Image
          src="/assets/bg-hero.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center opacity-40 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream/50 to-cream" />
      </div>

      <div className="mx-auto max-w-7xl px-6 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/10 px-4 py-1.5 text-xs font-bold text-violet backdrop-blur-sm"
          >
            <span>✨</span>
            <span>SELAMAT DATANG DI RUANG TEMU & AKSI</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-ink leading-[1.05]"
          >
            MEMBENTANGKAN RUANG, <br />
            <span className="text-violet underline decoration-wavy decoration-pinky underline-offset-8">
              MENEBAR KARYA
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-zinc-600 max-w-2xl font-medium leading-relaxed"
          >
            Kabinet Akasha hadir sebagai akselerator gerak mahasiswa—menyatukan keberagaman aspirasi, membakar semangat inovasi, dan mengukir jejak langkah bersama.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <Link
              href="#visimisi"
              className="rounded-2xl bg-violet px-7 py-3.5 text-sm font-bold text-white shadow-brutal transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Lihat Visi & Misi
            </Link>
            <Link
              href="#kandidat"
              className="rounded-2xl bg-white border-2 border-ink px-7 py-3.5 text-sm font-bold text-ink shadow-brutal transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Kenali Paslon 01
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
