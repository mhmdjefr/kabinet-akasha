"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  scrollToTopIcon,
  footerNavigationDot,
  footerKabinetLogo,
  footerDivider,
  footerTopWave,
  footerBackgroundVector,
} from "@/lib/assets";

export default function FooterSection() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (id: string) => {
    if (id === "filosofi-logo" && pathname !== "/") {
      router.push("/filosofi-logo");
      return;
    }
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      router.push(id === "beranda" ? "/" : `/#${id}`);
    }
  };

  return (
    <footer
      className="relative isolate flex h-[480px] w-full shrink-0 flex-col overflow-hidden bg-[#171717] px-5 pb-6 pt-16 text-white sm:h-[520px] sm:px-8 sm:pt-16 lg:h-[600px] lg:px-12 lg:pt-20"
      data-name="09 · Penutup & Footer"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[120px] sm:h-[20vw] lg:h-[clamp(10rem,15.2vw,14rem)]"
      >
        <img
          alt=""
          className="absolute left-1/2 top-0 h-auto w-[180%] max-w-none -translate-x-1/2 sm:w-full lg:w-[min(92%,81rem)]"
          src={footerTopWave}
        />
        <img
          alt=""
          className="absolute left-1/2 top-0 h-auto w-[74%] max-w-none -translate-x-1/2 sm:w-[60%] lg:w-[min(60%,52rem)]"
          src={footerBackgroundVector}
        />
      </div>

      <h2 className="relative mx-auto max-w-full text-center font-[Arial] text-[clamp(1.5rem,5vw,4.75rem)] font-bold leading-tight text-[#cfffa3]">
        Langkah Baru Dimulai
      </h2>

      <div className="relative mx-auto flex w-full max-w-3xl flex-1 items-center justify-center gap-5 py-5 sm:gap-9">
        <img
          alt=""
          className="h-auto w-20 shrink-0 object-contain sm:w-28 lg:w-36"
          src={footerKabinetLogo}
        />
        <div className="min-w-0 max-w-full text-center">
          <p className="font-['Plus_Jakarta_Sans:Medium'] text-[clamp(1rem,2.4vw,2rem)] font-medium leading-tight">
            Kabinet
          </p>
          <p className="max-w-full overflow-hidden font-['Audiowide:Regular'] text-[clamp(1.5rem,5vw,3.5rem)] leading-tight whitespace-nowrap">
            AKASHA
          </p>
        </div>
      </div>

      <nav
        aria-label="Navigasi footer"
        className="relative mx-auto flex w-full max-w-5xl flex-wrap items-center justify-center gap-x-3 gap-y-3 font-[Arial] text-sm sm:gap-x-5 sm:text-base"
      >
        <button
          onClick={() => scrollToSection("beranda")}
          className="cursor-pointer bg-transparent p-0 text-[#dfdfdf] transition-colors hover:text-[#cfffa3] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#cfffa3]"
        >
          Beranda
        </button>
        <img alt="" aria-hidden className="size-1.5" src={footerNavigationDot} />
        <button
          onClick={() => scrollToSection("program-unggulan")}
          className="cursor-pointer bg-transparent p-0 text-[#dfdfdf] transition-colors hover:text-[#cfffa3] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#cfffa3]"
        >
          Program Unggulan
        </button>
        <img alt="" aria-hidden className="size-1.5" src={footerNavigationDot} />
        <button
          onClick={() => scrollToSection("gerakan-inovasi")}
          className="cursor-pointer bg-transparent p-0 text-[#dfdfdf] transition-colors hover:text-[#cfffa3] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#cfffa3]"
        >
          Gerakan Inovasi
        </button>
        <img alt="" aria-hidden className="size-1.5" src={footerNavigationDot} />
        <button
          onClick={() => scrollToSection("filosofi-logo")}
          className="cursor-pointer bg-transparent p-0 text-[#dfdfdf] transition-colors hover:text-[#cfffa3] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#cfffa3]"
        >
          Filosofi Logo
        </button>
        <img alt="" aria-hidden className="size-1.5" src={footerNavigationDot} />
        <a
          href="https://www.instagram.com/kabinet.akasha/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#dfdfdf] transition-colors hover:text-[#cfffa3] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#cfffa3]"
        >
          More Information
        </a>
        <button
          aria-label="Kembali ke atas"
          onClick={() => scrollToSection("beranda")}
          className="grid size-9 shrink-0 cursor-pointer place-items-center transition-transform hover:-translate-y-1 focus-visible:outline-4 focus-visible:outline-[#cfffa3] sm:size-10"
          data-name="Tombol · Kembali ke atas"
        >
          <img alt="" className="size-full" src={scrollToTopIcon} />
        </button>
      </nav>

      <div className="relative mx-auto mt-5 h-px w-full max-w-5xl">
        <img alt="" className="h-full w-full object-fill" src={footerDivider} />
      </div>
      <p className="relative mx-auto mt-4 max-w-5xl text-center font-['Plus_Jakarta_Sans:Medium'] text-xs leading-relaxed text-white sm:text-sm">
        © 2026 Kabinet Akasha | Ruang untuk Semua, Tumbuh dan Berdiri Bersama. All Rights Reserved.
      </p>
    </footer>
  );
}
