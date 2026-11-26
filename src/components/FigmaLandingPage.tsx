"use client";

import { useEffect, useState } from "react";
import BackgroundOverlay from "./sections/BackgroundOverlay";
import NavbarSection from "./sections/NavbarSection";
import HeroSection from "./sections/HeroSection";
import IdentitasSection from "./sections/IdentitasSection";
import FilosofiSection from "./sections/FilosofiSection";
import VisiMisiSection from "./sections/VisiMisiSection";
import DuaSosokSection from "./sections/DuaSosokSection";
import GagasanAksiSection from "./sections/GagasanAksiSection";
import ProgramUnggulanSection from "./sections/ProgramUnggulanSection";
import GerakanInovasiSection from "./sections/GerakanInovasiSection";
import FooterSection from "./sections/FooterSection";
import ScrollToTop from "./sections/ScrollToTop";
import MobileNavbar from "./sections/MobileNavbar";

export default function FigmaLandingPage() {
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setIsMobile(w < 768);
      setIsCompact(w < 1024);
      if (w < 1440) {
        // <1440px: scale proporsional ke lebar layar
        setScale(w / 1440);
      } else {
        // ≥1440px: cap di 0.78 agar konten tidak terlalu besar di layar lebar
        setScale(0.78);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const footerHeight = isMobile ? 480 : isCompact ? 520 : 600;
  const canvasHeight = (isMobile ? 15585 : 11401) + footerHeight;

  return (
    <div className="campaign-shell flex justify-center bg-[#171717] min-h-screen overflow-x-hidden">
      <MobileNavbar />
      <NavbarSection />
      <div
        style={{
          width: 1440 * scale,
          height: canvasHeight * scale,
        }}
        className="desktop-canvas shrink-0 relative overflow-hidden transition-transform duration-75"
      >
        <div
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
          className="absolute left-0 top-0 bg-white content-stretch flex flex-col items-start w-[1440px]"
          data-node-id="1:648"
          data-name="Campaign Website - Landing Page - Rapih"
        >
          {/* 00 · Background Multi-layer Overlay */}
          <BackgroundOverlay isMobile={isMobile} />

          {/* 01 · Hero */}
          <HeroSection />

          {/* 02 · Identitas Kabinet */}
          <IdentitasSection />

          {/* 03 · Filosofi Akasha */}
          <FilosofiSection />

          {/* 04 · Visi & Misi */}
          <VisiMisiSection />

          {/* 05 · Dua Sosok, Satu Tujuan */}
          <DuaSosokSection />

          {/* 06 · Gagasan Jadi Aksi */}
          <GagasanAksiSection />

          {/* 07 · Program Unggulan */}
          <ProgramUnggulanSection />

          {/* 08 · Gerakan Inovasi */}
          <GerakanInovasiSection />

          {/* 09 · Penutup & Footer */}
          <FooterSection />

          {/* Tombol · Kembali ke atas */}
          <ScrollToTop />
        </div>
      </div>
    </div>
  );
}
