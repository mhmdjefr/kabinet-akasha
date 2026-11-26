"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Home, Orbit, LayoutGrid, Lightbulb } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  id: string;
  label: string;
  icon: typeof Home;
  subItems?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { id: "beranda", label: "Beranda", icon: Home },
  {
    id: "program-unggulan",
    label: "Program Unggulan",
    icon: Orbit,
    subItems: [
      { label: "ITechnoCup", href: "/program/itechnocup" },
      { label: "SAUM", href: "/program/saum" },
      { label: "TIK Games", href: "/program/tik-games" },
    ],
  },
  {
    id: "gerakan-inovasi",
    label: "Gerakan Inovasi",
    icon: LayoutGrid,
    subItems: [
      { label: "TIKTrack", href: "/inovasi/tiktrack" },
      { label: "ASAH", href: "/inovasi/asah" },
      { label: "Barnaby 2.0", href: "/inovasi/barnaby" },
    ],
  },
  { id: "filosofi-logo", label: "Filosofi Logo", icon: Lightbulb },
];

// Visual order from bottom to top of page
const trackedSectionsBottomToTop = [
  "gerakan-inovasi",
  "program-unggulan",
  "filosofi-logo",
  "beranda",
];

function getRouteTab(pathname: string): string | null {
  if (pathname.startsWith("/program")) return "program-unggulan";
  if (pathname.startsWith("/inovasi")) return "gerakan-inovasi";
  if (pathname.startsWith("/filosofi-logo")) return "filosofi-logo";
  return null;
}

export default function MobileNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const routeTab = getRouteTab(pathname);

  const [scrollTab, setScrollTab] = useState<string>("beranda");
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const isClickScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const activeTab = routeTab ?? scrollTab;

  const finishClickScroll = () => {
    isClickScrollingRef.current = false;
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = null;
    }
  };

  const navigateToSection = (id: string) => {
    setOpenMenu(null);
    if (pathname !== "/") {
      router.push(id === "beranda" ? "/" : `/#${id}`);
      return;
    }

    setScrollTab(id);
    isClickScrollingRef.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior: ScrollBehavior = prefersReducedMotion ? "auto" : "smooth";
    const element = id === "beranda" ? null : document.getElementById(id);
    const targetY = element
      ? Math.max(0, window.scrollY + element.getBoundingClientRect().top - 20)
      : 0;

    window.scrollTo({ top: targetY, behavior });

    scrollTimeoutRef.current = setTimeout(() => {
      finishClickScroll();
    }, 2000);
  };

  const handleTabClick = (item: NavItem) => {
    if (item.id === "filosofi-logo") {
      setOpenMenu(null);
      router.push("/filosofi-logo");
      return;
    }

    if (item.subItems) {
      setOpenMenu((prev) => (prev === item.id ? null : item.id));
      return;
    }

    navigateToSection(item.id);
  };

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      if (isClickScrollingRef.current) return;

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        setScrollTab("gerakan-inovasi");
        return;
      }

      if (window.scrollY < 100) {
        setScrollTab("beranda");
        return;
      }

      const threshold = Math.min(window.innerHeight * 0.35, 200);

      for (const id of trackedSectionsBottomToTop) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold) {
            setScrollTab(id);
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

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchOrWheel);
      window.removeEventListener("wheel", handleTouchOrWheel);
      window.removeEventListener("scrollend", handleScrollEnd);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [pathname]);

  const activeSubMenu = navItems.find((item) => item.id === openMenu);

  return (
    <div className="fixed bottom-4 inset-x-0 z-[100] flex flex-col items-center pointer-events-none min-[768px]:hidden px-3">
      {/* Popover Sub-menu untuk Program Unggulan & Gerakan Inovasi */}
      <AnimatePresence>
        {activeSubMenu?.subItems && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="pointer-events-auto mb-2.5 w-full max-w-[340px] rounded-2xl border border-white/15 bg-[#17171a]/95 p-2 shadow-[0_12px_32px_rgba(0,0,0,0.65)] backdrop-blur-md"
          >
            <div className="flex flex-col gap-1">
              {activeSubMenu.subItems.map((sub) => (
                <button
                  key={sub.href}
                  type="button"
                  onClick={() => {
                    setOpenMenu(null);
                    router.push(sub.href);
                  }}
                  className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-sm font-semibold transition-colors ${
                    pathname === sub.href
                      ? "bg-[#cfffa3] text-[#17171a]"
                      : "text-white/90 hover:bg-white/10"
                  }`}
                >
                  <span>{sub.label}</span>
                  <span aria-hidden>→</span>
                </button>
              ))}
              <button
                type="button"
                onClick={() => navigateToSection(activeSubMenu.id)}
                className="mt-1 border-t border-white/10 pt-2 pb-1 text-center text-xs font-medium text-white/60 hover:text-[#cfffa3]"
              >
                Lihat section di Beranda
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Bar */}
      <nav
        aria-label="Navigasi Bawah Mobile"
        className="pointer-events-auto flex w-full max-w-[420px] items-center justify-between gap-1 p-1.5 bg-[#17171a]/95 backdrop-blur-md rounded-full border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <motion.button
              key={item.id}
              layout
              transition={{ type: "spring", stiffness: 450, damping: 32 }}
              onClick={() => handleTabClick(item)}
              aria-label={item.label}
              aria-expanded={item.subItems ? openMenu === item.id : undefined}
              className={`flex items-center gap-1.5 rounded-full cursor-pointer select-none transition-colors duration-200 ${
                isActive
                  ? "bg-[#cfffa3] text-black px-3.5 py-2 font-semibold text-xs tracking-tight shadow-sm"
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
                  className="whitespace-nowrap font-medium text-[12px]"
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
