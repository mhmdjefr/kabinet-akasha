"use client";

import { useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  akashaLogo,
  chevronDownIcon,
  homeMenuAccent,
  navbarBackground,
  navbarDivider,
} from "@/lib/assets";
import { motion, AnimatePresence } from "framer-motion";

const programUnggulanItems = [
  { label: "ITechnoCup", id: "itechnocup" },
  { label: "SAUM", id: "saum" },
  { label: "TIK Games", id: "tik-games" },
];

const gerakanInovasiItems = [
  { label: "TIKTrack", href: "/inovasi/tiktrack" },
  { label: "ASAH", href: "/inovasi/asah" },
  { label: "Barnaby 2.0", href: "/inovasi/barnaby" },
];

export default function NavbarSection() {
  const [openDropdown, setOpenDropdown] = useState<"program" | "inovasi" | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();
  const pathname = usePathname();

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

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 hidden h-[109px] min-[768px]:block"
      data-node-id="1:923"
      data-name="Navbar"
    >
      <div
        className="pointer-events-none absolute left-0 top-0 h-[109px] w-full overflow-hidden"
        data-node-id="1:924"
        data-name="Navbar background"
      >
        <img
          alt=""
          className="absolute inset-0 block h-full w-full max-w-none object-fill"
          src={navbarBackground}
        />
      </div>

      <div
        className="absolute left-[clamp(18px,3.33vw,48px)] top-[22px] z-10 flex h-[60px] cursor-pointer select-none items-center gap-[16px]"
        onClick={() => navigate("beranda")}
        data-node-id="1:927"
        data-name="Identitas Akasha"
      >
        {/* Logo & Teks Akasha */}
        <div className="flex items-center gap-[12px] shrink-0">
          <img
            alt="Logo Kabinet Akasha"
            className="h-[56px] w-auto object-contain shrink-0"
            src={akashaLogo}
          />
          <div className="flex flex-col justify-center text-white leading-none">
            <span className="font-['Plus_Jakarta_Sans:Regular'] text-[13.5px] font-medium leading-none text-white/90">
              Kabinet
            </span>
            <span className="mt-[5px] font-[Arial] text-[22px] font-bold leading-none tracking-wide text-white">
              Akasha
            </span>
          </div>
        </div>

        <div
          className="flex h-[50px] w-[14px] shrink-0 items-center justify-center"
          data-node-id="1:942"
        >
          <div className="flex-none rotate-[103.48deg]">
            <div className="relative h-0 w-[51.695px]">
              <div className="absolute inset-[-0.54px_0]">
                <img alt="" className="block max-w-none size-full" src={navbarDivider} />
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-[215px] shrink-0 whitespace-pre-wrap font-[Arial] text-[14.5px] font-bold text-white leading-[1.25]"
          data-node-id="1:943"
        >
          <p className="m-0">Ruang untuk Semua,</p>
          <p className="m-0">Tumbuh dan Berdiri Bersama</p>
        </div>
      </div>

      <div
        className="absolute right-[clamp(14px,3.33vw,48px)] top-[14px] z-10 flex h-[44px] origin-right scale-[0.72] items-center gap-[16px] min-[900px]:scale-[0.82] min-[1100px]:scale-90 min-[1280px]:scale-100"
        data-node-id="1:944"
        data-name="Menu utama"
      >
        <button
          onClick={() => navigate("beranda")}
          className="relative flex h-[44px] w-[144px] shrink-0 cursor-pointer items-center justify-center rounded-[2px] px-[16px] py-[10px]"
          data-node-id="1:945"
          data-name="Menu · Beranda"
        >
          <img
            alt=""
            className="absolute left-0 top-[-14px] h-[71px] w-[144px]"
            src={homeMenuAccent}
          />
          <span className="relative z-10 whitespace-nowrap font-[Arial] text-[20px] font-bold text-[#1d1d1d]">
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
            onClick={() => navigate("program-unggulan")}
            className="flex h-[44px] shrink-0 cursor-pointer items-center gap-[8px] px-[16px] py-[10px] transition-opacity hover:opacity-80 active:opacity-60"
            data-node-id="1:948"
            data-name="Menu · Program Unggulan"
            aria-expanded={openDropdown === "program"}
            aria-haspopup="true"
          >
            <span className="whitespace-nowrap font-[Arial] text-[20px] font-bold text-white">
              Program Unggulan
            </span>
            <img
              alt=""
              className={`size-[16px] shrink-0 transition-transform duration-200 ${
                openDropdown === "program" ? "rotate-180" : ""
              }`}
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
                className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50"
              >
                <div className="w-[200px] bg-[#17171a]/95 backdrop-blur-md border border-white/15 rounded-md shadow-[0_16px_40px_rgba(0,0,0,0.75)] p-2 flex flex-col gap-1">
                  {programUnggulanItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => navigate(item.id)}
                      className="w-full text-left px-3.5 py-2 rounded-sm font-['Plus_Jakarta_Sans:Medium',Arial] text-[15px] font-semibold text-white/90 hover:text-[#17171a] hover:bg-[#cfffa3] transition-colors duration-150 cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ))}
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
            onClick={() => navigate("gerakan-inovasi")}
            className="flex h-[44px] shrink-0 cursor-pointer items-center gap-[8px] px-[16px] py-[10px] transition-opacity hover:opacity-80 active:opacity-60"
            data-node-id="1:953"
            data-name="Menu · Gerakan Inovasi"
            aria-expanded={openDropdown === "inovasi"}
            aria-haspopup="true"
          >
            <span className="whitespace-nowrap font-[Arial] text-[20px] font-bold text-white">
              Gerakan Inovasi
            </span>
            <img
              alt=""
              className={`size-[16px] shrink-0 transition-transform duration-200 ${
                openDropdown === "inovasi" ? "rotate-180" : ""
              }`}
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
                className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50"
              >
                <div className="w-[200px] bg-[#17171a]/95 backdrop-blur-md border-xl border-white/15 rounded-md shadow-[0_16px_40px_rgba(0,0,0,0.75)] p-2 flex flex-col gap-1">
                  {gerakanInovasiItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => {
                        setOpenDropdown(null);
                        router.push(item.href);
                      }}
                      className="w-full text-left px-3.5 py-2 rounded-sm font-['Plus_Jakarta_Sans:Medium',Arial] text-[15px] font-semibold text-white/90 hover:text-[#17171a] hover:bg-[#cfffa3] transition-colors duration-150 cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button
          onClick={() => navigate("filosofi-logo")}
          className="flex h-[44px] shrink-0 cursor-pointer items-center px-[16px] py-[10px] transition-opacity hover:opacity-80 active:opacity-60"
          data-node-id="1:958"
          data-name="Menu · Filosofi Logo"
        >
          <span className="whitespace-nowrap text-left font-[Arial] text-[20px] font-bold text-white">
            Filosofi Logo
          </span>
        </button>
      </div>
    </nav>
  );
}
