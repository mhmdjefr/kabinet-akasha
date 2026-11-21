"use client";

import { scrollToTopIcon } from "@/lib/assets";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function ScrollToTop() {
  return (
<button
          aria-label="Kembali ke atas"
          onClick={() => scrollToSection("beranda")}
          className="absolute block bottom-[316px] cursor-pointer overflow-clip right-[48px] size-[56px] transition-transform hover:-translate-y-1 focus-visible:outline-4 focus-visible:outline-[#cfffa3]"
          data-node-id="1:914"
          data-name="Tombol · Kembali ke atas"
        >
          <div
            className="absolute left-0 size-[56px] top-0"
            data-node-id="1:915"
            data-name="Artwork · Scroll to top dari Cobain"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={scrollToTopIcon}
            />
          </div>
        </button>
  );
}
