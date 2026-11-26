"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  akashaLogo,
  chevronDownIcon,
  navbarDivider,
} from "@/lib/assets";
import { motion, AnimatePresence } from "framer-motion";

const programUnggulanItems = [
  { label: "ITechnoCup", href: "/program/itechnocup" },
  { label: "SAUM", href: "/program/saum" },
  { label: "TIK Games", href: "/program/tik-games" },
];

const gerakanInovasiItems = [
  { label: "TIKTrack", href: "/inovasi/tiktrack" },
  { label: "ASAH", href: "/inovasi/asah" },
  { label: "Barnaby 2.0", href: "/inovasi/barnaby" },
];

function ActiveAccent() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute -inset-x-1.5 -top-[14px] h-[70px] bg-[#cfffa3] [clip-path:polygon(14%_0,100%_0,86%_100%,0%_100%)] lg:-inset-x-2"
    />
  );
}

export default function NavbarSection() {
  const [openDropdown, setOpenDropdown] = useState<"program" | "inovasi" | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleOutside = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenDropdown(null);
    };

    document.addEventListener("pointerdown", handleOutside);
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("pointerdown", handleOutside);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const isHomeActive = pathname === "/";
  const isProgramActive = pathname.startsWith("/program");
  const isInovasiActive = pathname.startsWith("/inovasi");
  const isFilosofiActive = pathname.startsWith("/filosofi-logo");

  const handleMouseEnter = (menu: "program" | "inovasi") => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const navigate = (id: string) => {
    setOpenDropdown(null);
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      router.push(`/#${id}`);
    }
  };

  const handleDropdownButtonClick = (menu: "program" | "inovasi", sectionId: string) => {
    if (openDropdown !== menu) {
      setOpenDropdown(menu);
      return;
    }
    navigate(sectionId);
  };

  return (
    <nav
      ref={navRef}
      className="fixed inset-x-0 top-0 z-50 hidden min-[768px]:block pointer-events-none drop-shadow-[0_6px_18px_rgba(0,0,0,0.32)]"
      data-node-id="1:923"
      data-name="Navbar"
    >
      {/* Bar Atas Penuh */}
      <div className="relative h-[71px] w-full bg-[#1D1D1D] pointer-events-auto">
        <div className="flex h-full w-full items-start justify-between pr-[clamp(12px,2.5vw,48px)]">
          {/* Kiri: Notch Dinamis dengan Sudut Rounded Asli Figma */}
          <div
            onClick={() => navigate("beranda")}
            data-node-id="1:927"
            data-name="Identitas Akasha"
            className="relative z-10 inline-flex h-[96px] lg:h-[109px] shrink-0 cursor-pointer select-none items-stretch"
          >
            {/* Konten Identitas (otomatis menyesuaikan lebar Logo + Akasha [+ Tagline di >=1024px]) */}
            <div className="flex items-center gap-3 bg-[#1D1D1D] pl-[clamp(18px,2.8vw,48px)] pr-5 lg:gap-4 lg:pr-6">
              {/* Logo & Teks Akasha */}
              <div className="flex shrink-0 items-center gap-2.5 lg:gap-3">
                <img
                  alt="Logo Kabinet Akasha"
                  className="h-[44px] w-auto shrink-0 object-contain lg:h-[52px] xl:h-[56px]"
                  src={akashaLogo}
                />
                <div className="flex flex-col justify-center leading-none text-white">
                  <span className="font-['Plus_Jakarta_Sans:Regular'] text-[11px] font-medium leading-none text-white/90 lg:text-[13px]">
                    Kabinet
                  </span>
                  <span className="mt-1 font-[Arial] text-[18px] font-bold leading-none tracking-wide text-white lg:text-[20px] xl:text-[22px]">
                    Akasha
                  </span>
                </div>
              </div>

              {/* Divider & Tagline: hanya tampil di >=1024px */}
              <div
                className="hidden h-[50px] w-[14px] shrink-0 items-center justify-center lg:flex"
                data-node-id="1:942"
              >
                <div className="flex-none rotate-[103.48deg]">
                  <div className="relative h-0 w-[44px] xl:w-[51.695px]">
                    <div className="absolute inset-[-0.54px_0]">
                      <img alt="" className="block max-w-none size-full" src={navbarDivider} />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="hidden shrink-0 whitespace-nowrap font-[Arial] text-[12px] font-bold leading-[1.3] text-white lg:block xl:text-[14.5px]"
                data-node-id="1:943"
              >
                <p className="m-0">Ruang untuk Semua,</p>
                <p className="m-0">Tumbuh dan Berdiri Bersama</p>
              </div>
            </div>

            {/* Ekor Sudut Miring + Rounded Asli dari SVG Figma (11d9d.svg) */}
            <svg
              aria-hidden
              viewBox="0 0 65 109"
              preserveAspectRatio="none"
              className="-ml-[1px] h-full w-[58px] shrink-0 lg:w-[65px]"
              fill="none"
            >
              <path
                d="M0 0H65V71H63C57 71 51 73 47 77L19 101C13 107 7 109 0 109V0Z"
                fill="#1D1D1D"
              />
            </svg>
          </div>

          {/* Kanan: Menu Utama */}
          <div
            className="flex h-[71px] items-center gap-1 lg:gap-2 xl:gap-4"
            data-node-id="1:944"
            data-name="Menu utama"
          >
            <button
              onClick={() => navigate("beranda")}
              className="relative flex h-[44px] shrink-0 cursor-pointer items-center justify-center px-3 py-2 lg:px-3.5 xl:w-[144px]"
              data-node-id="1:945"
              data-name="Menu · Beranda"
            >
              {isHomeActive && <ActiveAccent />}
              <span
                className={`relative z-10 whitespace-nowrap font-[Arial] text-[14px] font-bold lg:text-[15.5px] xl:text-[20px] ${
                  isHomeActive ? "text-[#1d1d1d]" : "text-white"
                }`}
              >
                Beranda
              </span>
            </button>

            {/* Dropdown Program Unggulan */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("program")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleDropdownButtonClick("program", "program-unggulan")}
                className="relative flex h-[44px] shrink-0 cursor-pointer items-center gap-1.5 px-2.5 py-2 transition-opacity hover:opacity-85 active:opacity-70 lg:gap-2 lg:px-3.5 xl:px-4"
                data-node-id="1:948"
                data-name="Menu · Program Unggulan"
                aria-expanded={openDropdown === "program"}
                aria-haspopup="true"
              >
                {isProgramActive && <ActiveAccent />}
                <span
                  className={`relative z-10 whitespace-nowrap font-[Arial] text-[14px] font-bold lg:text-[15.5px] xl:text-[20px] ${
                    isProgramActive ? "text-[#1d1d1d]" : "text-white"
                  }`}
                >
                  Program Unggulan
                </span>
                <img
                  alt=""
                  className={`relative z-10 size-[13px] shrink-0 transition-transform duration-200 lg:size-[15px] xl:size-[16px] ${
                    openDropdown === "program" ? "rotate-180" : ""
                  } ${isProgramActive ? "invert" : ""}`}
                  src={chevronDownIcon}
                />
              </button>

              <AnimatePresence>
                {openDropdown === "program" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.95 }}
                    transition={{ duration: 0.16, ease: "easeOut" }}
                    className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2.5"
                  >
                    <div className="flex w-[190px] flex-col gap-1 rounded-md border border-white/15 bg-[#17171a]/95 p-2 shadow-[0_16px_40px_rgba(0,0,0,0.75)] backdrop-blur-md lg:w-[200px]">
                      {programUnggulanItems.map((item) => (
                        <button
                          key={item.href}
                          onClick={() => {
                            setOpenDropdown(null);
                            router.push(item.href);
                          }}
                          className="w-full cursor-pointer rounded-sm px-3.5 py-2 text-left font-['Plus_Jakarta_Sans:Medium',Arial] text-[14px] font-semibold text-white/90 transition-colors duration-150 hover:bg-[#cfffa3] hover:text-[#17171a] lg:text-[15px]"
                        >
                          {item.label}
                        </button>
                      ))}
                      <button
                        onClick={() => navigate("program-unggulan")}
                        className="mt-1 border-t border-white/10 pt-2 pb-1 text-center font-['Plus_Jakarta_Sans:Medium',Arial] text-xs font-medium text-white/60 transition-colors hover:text-[#cfffa3] cursor-pointer"
                      >
                        Lihat di Beranda
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dropdown Gerakan Inovasi */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("inovasi")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleDropdownButtonClick("inovasi", "gerakan-inovasi")}
                className="relative flex h-[44px] shrink-0 cursor-pointer items-center gap-1.5 px-2.5 py-2 transition-opacity hover:opacity-85 active:opacity-70 lg:gap-2 lg:px-3.5 xl:px-4"
                data-node-id="1:953"
                data-name="Menu · Gerakan Inovasi"
                aria-expanded={openDropdown === "inovasi"}
                aria-haspopup="true"
              >
                {isInovasiActive && <ActiveAccent />}
                <span
                  className={`relative z-10 whitespace-nowrap font-[Arial] text-[14px] font-bold lg:text-[15.5px] xl:text-[20px] ${
                    isInovasiActive ? "text-[#1d1d1d]" : "text-white"
                  }`}
                >
                  Gerakan Inovasi
                </span>
                <img
                  alt=""
                  className={`relative z-10 size-[13px] shrink-0 transition-transform duration-200 lg:size-[15px] xl:size-[16px] ${
                    openDropdown === "inovasi" ? "rotate-180" : ""
                  } ${isInovasiActive ? "invert" : ""}`}
                  src={chevronDownIcon}
                />
              </button>

              <AnimatePresence>
                {openDropdown === "inovasi" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.95 }}
                    transition={{ duration: 0.16, ease: "easeOut" }}
                    className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2.5"
                  >
                    <div className="flex w-[190px] flex-col gap-1 rounded-md border border-white/15 bg-[#17171a]/95 p-2 shadow-[0_16px_40px_rgba(0,0,0,0.75)] backdrop-blur-md lg:w-[200px]">
                      {gerakanInovasiItems.map((item) => (
                        <button
                          key={item.href}
                          onClick={() => {
                            setOpenDropdown(null);
                            router.push(item.href);
                          }}
                          className="w-full cursor-pointer rounded-sm px-3.5 py-2 text-left font-['Plus_Jakarta_Sans:Medium',Arial] text-[14px] font-semibold text-white/90 transition-colors duration-150 hover:bg-[#cfffa3] hover:text-[#17171a] lg:text-[15px]"
                        >
                          {item.label}
                        </button>
                      ))}
                      <button
                        onClick={() => navigate("gerakan-inovasi")}
                        className="mt-1 border-t border-white/10 pt-2 pb-1 text-center font-['Plus_Jakarta_Sans:Medium',Arial] text-xs font-medium text-white/60 transition-colors hover:text-[#cfffa3] cursor-pointer"
                      >
                        Lihat di Beranda
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => {
                setOpenDropdown(null);
                router.push("/filosofi-logo");
              }}
              className="relative flex h-[44px] shrink-0 cursor-pointer items-center px-3 py-2 transition-opacity hover:opacity-85 active:opacity-70 lg:px-3.5 xl:px-4"
              data-node-id="1:958"
              data-name="Menu · Filosofi Logo"
            >
              {isFilosofiActive && <ActiveAccent />}
              <span
                className={`relative z-10 whitespace-nowrap text-left font-[Arial] text-[14px] font-bold lg:text-[15.5px] xl:text-[20px] ${
                  isFilosofiActive ? "text-[#1d1d1d]" : "text-white"
                }`}
              >
                Filosofi Logo
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
