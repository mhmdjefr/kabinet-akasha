"use client";

import { useEffect, useState } from "react";
import { Home, Orbit, LayoutGrid, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

interface NavItem {
  id: string;
  label: string;
  icon: typeof Home;
}

const navItems: NavItem[] = [
  { id: "beranda", label: "Beranda", icon: Home },
  { id: "program-unggulan", label: "Program Unggulan", icon: Orbit },
  { id: "gerakan-inovasi", label: "Gerakan Inovasi", icon: LayoutGrid },
  { id: "filosofi-logo", label: "Filosofi Logo", icon: Lightbulb },
];

export default function MobileNavbar() {
  const [activeTab, setActiveTab] = useState<string>("beranda");

  const scrollTo = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      // Check sections from bottom to top
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveTab(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-5 inset-x-0 z-[100] flex justify-center pointer-events-none min-[768px]:hidden px-2">
      <nav
        aria-label="Navigasi Bawah Mobile"
        className="pointer-events-auto flex w-full items-center justify-between gap-1.5 p-1.5 bg-[#17171a]/95 backdrop-blur-md rounded-full border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <motion.button
              key={item.id}
              layout
              transition={{ type: "spring", stiffness: 450, damping: 32 }}
              onClick={() => scrollTo(item.id)}
              aria-label={item.label}
              className={`flex items-center gap-2 rounded-full cursor-pointer select-none transition-colors duration-200 ${
                isActive
                  ? "bg-[#cfffa3] text-black px-4 py-2 font-semibold text-xs tracking-tight shadow-sm"
                  : "text-white/80 hover:text-white px-2.5 py-2"
              }`}
            >
              <Icon
                className={`w-[18px] h-[18px] shrink-0 ${
                  isActive ? "text-black stroke-[2.2]" : "text-white stroke-[1.8]"
                }`}
              />
              {isActive && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.18 }}
                  className="whitespace-nowrap font-medium text-[13px]"
                >
                  {item.label}
                </motion.span>
              )}
            </motion.button>
          );
        })}
      </nav>
    </div>
  );
}
