"use client";

import { useEffect, useState, useRef } from "react";
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

// Visual order from bottom to top of page
const trackedSectionsBottomToTop = [
  "gerakan-inovasi",
  "program-unggulan",
  "filosofi-logo",
  "beranda",
];

export default function MobileNavbar() {
  const [activeTab, setActiveTab] = useState<string>("beranda");
  const isClickScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const finishClickScroll = () => {
    isClickScrollingRef.current = false;
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = null;
    }
  };

  const scrollTo = (id: string) => {
    setActiveTab(id);
    isClickScrollingRef.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior: ScrollBehavior = prefersReducedMotion ? "auto" : "smooth";
    const element = id === "beranda" ? null : document.getElementById(id);
    const targetY = element
      ? Math.max(0, window.scrollY + element.getBoundingClientRect().top - 20)
      : 0;

    window.scrollTo({ top: targetY, behavior });

    // Smooth scrolling can take longer than a fixed timeout on mobile.
    // Use scrollend when supported and retain a bounded fallback for Safari.
    scrollTimeoutRef.current = setTimeout(() => {
      finishClickScroll();
    }, 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrollingRef.current) return;

      // If near the bottom of page, activate the last section
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        setActiveTab("gerakan-inovasi");
        return;
      }

      // If at the very top of page
      if (window.scrollY < 100) {
        setActiveTab("beranda");
        return;
      }

      const threshold = Math.min(window.innerHeight * 0.35, 200);

      for (const id of trackedSectionsBottomToTop) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold) {
            setActiveTab(id);
            break;
          }
        }
      }
    };

    const handleTouchOrWheel = finishClickScroll;
    const handleScrollEnd = finishClickScroll;

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("touchstart", handleTouchOrWheel, { passive: true });
    window.addEventListener("wheel", handleTouchOrWheel, { passive: true });
    window.addEventListener("scrollend", handleScrollEnd);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchOrWheel);
      window.removeEventListener("wheel", handleTouchOrWheel);
      window.removeEventListener("scrollend", handleScrollEnd);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
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
