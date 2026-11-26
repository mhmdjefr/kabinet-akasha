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

const DESKTOP_BANDS = [
  { top: 0, height: 974, color: "#f786f8" },      // Hero
  { top: 974, height: 1207, color: "#ffffff" },   // Identitas
  { top: 2181, height: 2083, color: "#564cf8" },  // Filosofi
  { top: 4264, height: 2782, color: "#171717" },  // Visi & Misi
  { top: 7046, height: 1197, color: "#bbf189" },  // Dua Sosok + Gagasan Aksi
  { top: 8243, height: 3158, color: "#ffffff" },  // Program Unggulan + Gerakan Inovasi
  { top: 11401, height: 1055, color: "#171717" }, // Footer
] as const;

export default function FigmaLandingPage() {
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const mobile = screenWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setScale(screenWidth / 1440);
      } else {
        // Skala nyaman agar konten tidak ngezoom di 1024px–1920px,
        // sementara warna & aset tetap full-bleed di kiri-kanan
        setScale(Math.min(screenWidth / 1680, 0.92));
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="campaign-shell relative flex justify-center bg-[#171717] min-h-screen overflow-x-hidden">
      {/* Full-bleed background bands untuk desktop agar kiri-kanan penuh tanpa memotong aset */}
      {!isMobile && (
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 z-0">
          {DESKTOP_BANDS.map((band) => (
            <div
              key={band.top}
              className="absolute inset-x-0"
              style={{
                top: band.top * scale,
                height: band.height * scale + 2,
                backgroundColor: band.color,
              }}
            />
          ))}
        </div>
      )}

      <MobileNavbar />
      <NavbarSection />
      <div
        style={{
          width: 1440 * scale,
          height: (isMobile ? 16640 : 12456) * scale,
        }}
        className="desktop-canvas z-10 shrink-0 relative transition-transform duration-75"
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
