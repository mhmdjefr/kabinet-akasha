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

export default function FigmaLandingPage() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 1440) {
        setScale(screenWidth / 1440);
      } else {
        setScale(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="campaign-shell flex justify-center bg-[#171717] min-h-screen overflow-x-hidden">
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top center",
          width: 1440,
          height: 12456 * scale,
          marginBottom: scale < 1 ? -(12456 * (1 - scale)) : 0,
        }}
        className="shrink-0 relative transition-transform duration-75"
      >
        <div
          className="bg-white content-stretch flex flex-col items-start pb-[1055px] relative w-[1440px]"
          data-node-id="1:648"
          data-name="Campaign Website - Landing Page — Rapih"
        >
          {/* 00 · Background Multi-layer Overlay */}
          <BackgroundOverlay />

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

          {/* Top Navbar */}
          <NavbarSection />
        </div>
      </div>
    </div>
  );
}
