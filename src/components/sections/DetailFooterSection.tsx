"use client";

import Link from "next/link";
import {
  footerKabinetLogo,
  imgFooter,
  tombolAtas,
  vote2ForAkasha,
} from "@/lib/assets";

export function Vote2Chibi() {
  return (
    <div className="relative flex justify-center py-12 sm:py-20 bg-white overflow-hidden">
      <img
        src={vote2ForAkasha}
        alt="Vote 2 For Akasha"
        className="relative z-10 w-[90vw] max-w-[839px] h-auto object-contain"
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
      {/* Banner Langkah Baru Dimulai (1-group asset img-footer.png, utuh sesuai vector) */}
      <div className="relative w-full aspect-[2242/401] min-h-[120px] overflow-hidden bg-white">
        <img
          src={imgFooter}
          alt=""
          className="absolute inset-0 z-0 h-full w-full object-cover sm:object-contain object-center"
        />
        <div className="relative z-10 flex h-full w-full items-center justify-center px-4">
          <h2 className="font-[Arial] text-center text-[6.8vw] font-bold tracking-tight text-[#cfffa3] drop-shadow-md sm:text-5xl md:text-6xl lg:text-[96px]">
            Langkah Baru Dimulai
          </h2>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 py-12 sm:py-20">
        {/* Scroll to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Kembali ke atas"
          className="absolute right-4 sm:right-8 top-12 sm:top-16 cursor-pointer transition-transform hover:-translate-y-1 active:translate-y-0"
        >
          <img src={tombolAtas} alt="Ke atas" className="h-10 w-10 object-contain sm:h-12 sm:w-12" />
        </button>

        {/* Logo & Brand */}
        <Link href="/" className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 group">
          <img
            src={footerKabinetLogo}
            alt="Logo Kabinet Akasha"
            className="h-28 w-auto object-contain transition-transform group-hover:scale-105 sm:h-[280px]"
          />
          <div className="text-center sm:text-left">
            <span className="block font-['Plus_Jakarta_Sans:Medium'] text-xl text-white/90 sm:text-5xl">
              Kabinet
            </span>
            <strong className="block font-['Audiowide:Regular'] text-3xl tracking-wider text-white sm:text-6xl">
              AKASHA
            </strong>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav
          aria-label="Footer navigation"
          className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-['Plus_Jakarta_Sans:Medium'] text-xs text-white/80 sm:mt-16 sm:text-sm"
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
        <div className="mt-8 w-full max-w-3xl border-t border-white/15 sm:mt-12" />

        {/* Copyright */}
        <p className="mt-6 text-center font-['Plus_Jakarta_Sans:Regular'] text-[11px] text-white/60 sm:mt-10 sm:text-xs">
          © 2026 <strong className="text-white">Kabinet Akasha</strong> | Ruang untuk Semua, Tumbuh dan Berdiri Bersama. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
