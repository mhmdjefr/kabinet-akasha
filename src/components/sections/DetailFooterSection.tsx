"use client";

import { useEffect, useState } from "react";
import FooterSection from "@/components/sections/FooterSection";
import { programKanan, stripFooter, vote2ForAkasha } from "@/lib/assets";

export function Vote2Chibi() {
  return (
    <div className="relative flex justify-center py-10 sm:py-16 bg-white overflow-hidden">
      {/* Dekorasi strip vertikal kiri bawah (strip-footer.png) & horizontal kanan bawah (program-kanan.png) */}
      <img
        src={stripFooter}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-0 bottom-0 w-[12vw] max-w-[150px] lg:max-w-[170px] h-auto object-contain"
      />
      <img
        src={programKanan}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-4 w-[20vw] max-w-[240px] lg:max-w-[260px] h-auto object-contain opacity-90"
      />
      <img
        src={vote2ForAkasha}
        alt="Vote 2 For Akasha"
        className="relative z-10 w-[75vw] max-w-[360px] sm:max-w-[440px] lg:max-w-[500px] h-auto object-contain"
      />
    </div>
  );
}

export default function DetailFooterSection() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setScale(screenWidth < 1440 ? screenWidth / 1440 : 1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="w-full overflow-hidden bg-[#171717] pb-16 min-[768px]:pb-0">
      <div className="flex justify-center">
        <div
          style={{
            width: 1440 * scale,
            height: 1055 * scale,
          }}
          className="relative shrink-0 overflow-hidden"
        >
          <div
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
            className="absolute left-0 top-0 w-[1440px] h-[1055px]"
          >
            <FooterSection />
          </div>
        </div>
      </div>
    </footer>
  );
}
