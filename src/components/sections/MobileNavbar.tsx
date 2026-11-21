"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { imgGroup48099456 } from "@/lib/assets";

const links = [
  ["Beranda", "beranda"],
  ["Program Unggulan", "program-unggulan"],
  ["Gerakan Inovasi", "gerakan-inovasi"],
  ["Filosofi Logo", "filosofi-logo"],
] as const;

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const navigate = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed inset-x-0 top-0 z-[100] min-[1024px]:hidden">
      <header className="relative flex h-[67px] items-center bg-[#1d1d1d] pl-[18px] pr-[78px] shadow-[0_6px_18px_rgba(0,0,0,0.28)] [clip-path:polygon(0_0,100%_0,100%_100%,40%_100%,37%_87%,0_87%)]">
        <button onClick={() => navigate("beranda")} className="relative z-10 flex items-center gap-[7px] text-left" aria-label="Ke beranda">
          <img src={imgGroup48099456} alt="Logo Kabinet Akasha" className="h-[48px] w-[35px] object-contain" />
          <span className="leading-none text-white"><small className="block text-[11px] font-medium">Kabinet</small><strong className="text-[16px]">Akasha</strong></span>
        </button>
        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="absolute right-[16px] top-0 z-20 grid h-[67px] w-[62px] place-items-center bg-[#cfffa3] text-[#1d1d1d] transition active:brightness-90 [clip-path:polygon(25%_0,100%_0,75%_100%,0_100%)]"
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </header>

      {open && (
        <div className="border-b-2 border-[#564cf8] bg-[#1d1d1d] px-5 pb-6 pt-3 shadow-2xl">
          <nav aria-label="Navigasi mobile" className="grid gap-1">
            {links.map(([label, id]) => (
              <button key={id} onClick={() => navigate(id)} className="flex min-h-12 items-center justify-between border-b border-white/10 px-2 text-left text-base font-bold text-white last:border-0">
                {label}<span className="text-[#f982fb]">→</span>
              </button>
            ))}
          </nav>
          <p className="mt-4 text-center text-xs font-medium text-white/60">Ruang untuk Semua, Tumbuh dan Berdiri Bersama</p>
        </div>
      )}
    </div>
  );
}
