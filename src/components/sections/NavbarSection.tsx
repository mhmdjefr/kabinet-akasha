"use client";

import {
  akashaLogo,
  chevronDownIcon,
  homeMenuAccent,
  navbarBackground,
  navbarDivider,
} from "@/lib/assets";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default function NavbarSection() {
  const navigate = (id: string) => scrollToSection(id);

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
        className="absolute left-[clamp(18px,3.33vw,48px)] top-[24px] z-10 flex h-[60px] origin-left scale-[0.8] cursor-pointer select-none items-center gap-[16px] min-[1100px]:scale-90 min-[1280px]:scale-100"
        onClick={() => navigate("beranda")}
        data-node-id="1:927"
        data-name="Identitas Akasha"
      >
        <div className="relative inline-grid h-[60px] shrink-0 grid-cols-[max-content] grid-rows-[max-content] leading-[0]">
          <div className="col-1 row-1 h-[60px] w-[44.042px]">
            <img
              alt="Logo Kabinet Akasha"
              className="absolute inset-0 block size-full object-contain"
              src={akashaLogo}
            />
          </div>
          <div className="col-1 row-1 ml-[48.82px] mt-[14.4px] whitespace-nowrap text-white">
            <p className="ml-[1.18px] font-['Plus_Jakarta_Sans:Regular'] text-[13.233px]">
              Kabinet
            </p>
            <p className="mt-[16.76px] font-[Arial] text-[20.137px] font-bold">
              Akasha
            </p>
          </div>
        </div>

        <div className="flex h-[50.271px] w-[12.048px] shrink-0 items-center justify-center">
          <div className="rotate-[103.48deg]">
            <div className="relative h-0 w-[51.695px]">
              <img alt="" className="block max-w-none size-full" src={navbarDivider} />
            </div>
          </div>
        </div>

        <div className="w-[208.65px] shrink-0 whitespace-pre-wrap font-[Arial] text-[14.58px] font-bold text-white">
          <p>Ruang untuk Semua,</p>
          <p>Tumbuh dan Berdiri Bersama</p>
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

        <button
          onClick={() => navigate("program-unggulan")}
          className="flex h-[44px] shrink-0 cursor-pointer items-center gap-[8px] px-[16px] py-[10px] transition-opacity hover:opacity-80 active:opacity-60"
          data-node-id="1:948"
          data-name="Menu · Program Unggulan"
        >
          <span className="whitespace-nowrap font-[Arial] text-[20px] font-bold text-white">
            Program Unggulan
          </span>
          <img alt="" className="size-[16px] shrink-0" src={chevronDownIcon} />
        </button>

        <button
          onClick={() => navigate("gerakan-inovasi")}
          className="flex h-[44px] shrink-0 cursor-pointer items-center gap-[8px] px-[16px] py-[10px] transition-opacity hover:opacity-80 active:opacity-60"
          data-node-id="1:953"
          data-name="Menu · Gerakan Inovasi"
        >
          <span className="whitespace-nowrap font-[Arial] text-[20px] font-bold text-white">
            Gerakan Inovasi
          </span>
          <img alt="" className="size-[16px] shrink-0" src={chevronDownIcon} />
        </button>

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
