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
      <header className="flex h-16 items-center justify-between border-b border-white/20 bg-[#171717]/75 px-4 shadow-[0_10px_30px_rgba(0,0,0,0.24)] backdrop-blur-xl">
        <button onClick={() => navigate("beranda")} className="flex items-center gap-2 text-left" aria-label="Ke beranda">
          <img src={imgGroup48099456} alt="Logo Kabinet Akasha" className="h-10 w-8 object-contain" />
          <span className="leading-none text-white"><small className="block text-[10px] font-medium">Kabinet</small><strong className="text-sm">Akasha</strong></span>
        </button>
        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-xl border border-white/20 bg-white/10 text-white transition active:scale-95"
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </header>

      {open && (
        <div className="border-b border-white/15 bg-[#171717]/90 px-5 pb-6 pt-3 shadow-2xl backdrop-blur-2xl">
          <nav aria-label="Navigasi mobile" className="grid gap-1">
            {links.map(([label, id]) => (
              <button key={id} onClick={() => navigate(id)} className="flex min-h-12 items-center justify-between border-b border-white/10 px-2 text-left text-base font-bold text-white last:border-0">
                {label}<span className="text-[#cfffa3]">→</span>
              </button>
            ))}
          </nav>
          <p className="mt-4 text-center text-xs font-medium text-white/60">Ruang untuk Semua, Tumbuh dan Berdiri Bersama</p>
        </div>
      )}
    </div>
  );
}
