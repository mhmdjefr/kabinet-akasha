"use client";

import Link from "next/link";
import {
  footerKabinetLogo,
  langkahBaruFooter,
  tombolAtas,
  vote2ForAkasha,
} from "@/lib/assets";

export function Vote2Chibi() {
  return (
    <div className="relative flex justify-center py-12 sm:py-16 bg-white overflow-hidden">
      {/* Dekorasi gradient strip kiri-kanan */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 bottom-4 hidden sm:block h-12 w-36 bg-gradient-to-r from-[#564cf8]/60 via-[#f786f8]/40 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-4 hidden sm:block h-12 w-36 bg-gradient-to-l from-[#cfffa3]/80 via-[#f786f8]/40 to-transparent"
      />
      <img
        src={vote2ForAkasha}
        alt="Vote 2 For Akasha"
        className="relative z-10 w-[260px] sm:w-[360px] md:w-[420px] h-auto object-contain"
      />
    </div>
  );
}

export default function DetailFooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#171717] text-white overflow-hidden">
      {/* Banner Langkah Baru Dimulai */}
      <div className="relative w-full h-[140px] sm:h-[200px] md:h-[240px] overflow-hidden">
        <img
          src={langkahBaruFooter}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#171717]/40 flex items-center justify-center px-4">
          <h2 className="font-[Arial] font-bold text-3xl sm:text-5xl md:text-6xl text-[#cfffa3] text-center tracking-tight drop-shadow-md">
            Langkah Baru Dimulai
          </h2>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative mx-auto max-w-5xl px-4 py-12 sm:py-16 flex flex-col items-center">
        {/* Scroll to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Kembali ke atas"
          className="absolute right-4 sm:right-8 top-12 sm:top-16 cursor-pointer transition-transform hover:-translate-y-1 active:translate-y-0"
        >
          <img src={tombolAtas} alt="Ke atas" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
        </button>

        {/* Logo & Brand */}
        <Link href="/" className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 group">
          <img
            src={footerKabinetLogo}
            alt="Logo Kabinet Akasha"
            className="h-28 sm:h-36 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="text-center sm:text-left">
            <span className="block font-['Plus_Jakarta_Sans:Medium'] text-xl sm:text-2xl text-white/90">
              Kabinet
            </span>
            <strong className="block font-['Audiowide:Regular'] text-3xl sm:text-4xl tracking-wider text-white">
              AKASHA
            </strong>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav
          aria-label="Footer navigation"
          className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm font-['Plus_Jakarta_Sans:Medium'] text-white/80"
        >
          <Link href="/" className="hover:text-[#cfffa3] transition-colors">
            Beranda
          </Link>
          <span className="text-white/40">•</span>
          <Link href="/#program-unggulan" className="hover:text-[#cfffa3] transition-colors">
            Program Unggulan
          </Link>
          <span className="text-white/40">•</span>
          <Link href="/#gerakan-inovasi" className="hover:text-[#cfffa3] transition-colors">
            Gerakan Inovasi
          </Link>
          <span className="text-white/40">•</span>
          <Link href="/filosofi-logo" className="hover:text-[#cfffa3] transition-colors">
            Filosofi Logo
          </Link>
        </nav>

        {/* Divider */}
        <div className="mt-8 w-full max-w-3xl border-t border-white/15" />

        {/* Copyright */}
        <p className="mt-6 text-center font-['Plus_Jakarta_Sans:Regular'] text-[11px] sm:text-xs text-white/60">
          © 2026 <strong className="text-white">Kabinet Akasha</strong> | Ruang untuk Semua, Tumbuh dan Berdiri Bersama. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
