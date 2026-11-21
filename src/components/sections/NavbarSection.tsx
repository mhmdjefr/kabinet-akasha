"use client";

import { imgAksenBerandaLimeMiring, imgChevronDown16Px, imgGroup48099456, imgLine3, imgUnion1 } from "@/lib/assets";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function NavbarSection() {
  const handleNavClick = (id: string) => scrollToSection(id);

  return (
      <nav
        className="absolute left-0 top-0 z-50 hidden h-[109px] w-full min-[1024px]:block"
        data-node-id="1:923"
        data-name="Navbar"
      >
        {/* Background Union SVG */}
        <div
          className="absolute left-[-15px] top-0 h-[109px] w-[1470px] pointer-events-none"
          data-node-id="1:924"
          data-name="Union"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgUnion1}
          />
        </div>

        {/* Brand / Logo */}
        <div
          className="absolute left-[48px] top-[24px] z-10 flex h-[60px] items-center gap-[16px] cursor-pointer select-none"
          onClick={() => handleNavClick("beranda")}
          data-node-id="1:927"
          data-name="Identitas Akasha"
        >
          <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
            data-node-id="1:928"
          >
            <div
              className="col-1 h-[60px] ml-0 mt-0 relative row-1 w-[44.042px]"
              data-node-id="1:929"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full object-contain"
                src={imgGroup48099456}
              />
            </div>
            <div
              className="[word-break:break-word] col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[48.82px] mt-[14.4px] place-items-start relative row-1 text-white whitespace-nowrap"
              data-node-id="1:939"
            >
              <p
                className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] col-1 font-['Plus_Jakarta_Sans:Regular'] font-normal leading-[normal] ml-[1.18px] mt-0 relative row-1 text-[13.233px] text-center"
                data-node-id="1:940"
              >
                Kabinet
              </p>
              <p
                className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] col-1 font-[Arial] font-bold leading-[normal] ml-0 mt-[16.76px] not-italic relative row-1 text-[20.137px]"
                data-node-id="1:941"
              >
                Akasha
              </p>
            </div>
          </div>

          <div
            className="flex h-[50.271px] items-center justify-center relative shrink-0 w-[12.048px]"
            data-node-id="1:942"
          >
            <div className="flex-none rotate-[103.48deg]">
              <div className="h-0 relative w-[51.695px]">
                <div className="absolute inset-[-0.54px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine3} />
                </div>
              </div>
            </div>
          </div>

          <div
            className="[word-break:break-word] font-[Arial] font-bold leading-[0] not-italic relative shrink-0 text-[14.58px] text-white w-[208.65px] whitespace-pre-wrap"
            data-node-id="1:943"
          >
            <p className="leading-[normal] mb-0">{`Ruang untuk Semua, `}</p>
            <p className="leading-[normal]">Tumbuh dan Berdiri Bersama</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div
          className="absolute right-[48px] top-[14px] z-10 flex h-[44px] items-center gap-[16px]"
          data-node-id="1:944"
          data-name="Menu utama"
        >
          <button
            onClick={() => handleNavClick("beranda")}
            className="content-stretch cursor-pointer flex gap-[8px] h-[44px] items-center justify-center px-[16px] py-[10px] relative rounded-[2px] shrink-0 w-[144px]"
            data-node-id="1:945"
            data-name="Menu · Beranda"
          >
            <div
              className="absolute h-[71px] left-0 top-[-14px] w-[144px]"
              data-node-id="1:946"
              data-name="Aksen Beranda · lime miring"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgAksenBerandaLimeMiring}
              />
            </div>
            <p
              className="[word-break:break-word] font-[Arial] font-bold leading-[24px] not-italic relative shrink-0 text-[#1d1d1d] text-[20px] text-left whitespace-nowrap"
              data-node-id="1:947"
            >
              Beranda
            </p>
          </button>

          <button
            onClick={() => handleNavClick("program-unggulan")}
            className="content-stretch cursor-pointer flex gap-[8px] h-[44px] items-center px-[16px] py-[10px] relative shrink-0 transition-opacity hover:opacity-80 active:opacity-60"
            data-node-id="1:948"
            data-name="Menu · Program Unggulan"
          >
            <p
              className="[word-break:break-word] font-[Arial] font-bold leading-[24px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap"
              data-node-id="1:949"
            >
              Program Unggulan
            </p>
            <div
              className="relative shrink-0 size-[16px]"
              data-node-id="1:950"
              data-name="Chevron down · 16px"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgChevronDown16Px}
              />
            </div>
          </button>

          <button
            onClick={() => handleNavClick("gerakan-inovasi")}
            className="content-stretch cursor-pointer flex gap-[8px] h-[44px] items-center px-[16px] py-[10px] relative shrink-0 transition-opacity hover:opacity-80 active:opacity-60"
            data-node-id="1:953"
            data-name="Menu · Gerakan Inovasi"
          >
            <p
              className="[word-break:break-word] font-[Arial] font-bold leading-[24px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap"
              data-node-id="1:954"
            >
              Gerakan Inovasi
            </p>
            <div
              className="relative shrink-0 size-[16px]"
              data-node-id="1:955"
              data-name="Chevron down · 16px"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgChevronDown16Px}
              />
            </div>
          </button>

          <button
            onClick={() => handleNavClick("filosofi-logo")}
            className="content-stretch cursor-pointer flex h-[44px] items-center px-[16px] py-[10px] relative shrink-0 transition-opacity hover:opacity-80 active:opacity-60"
            data-node-id="1:958"
            data-name="Menu · Filosofi Logo"
          >
            <p
              className="[word-break:break-word] font-[Arial] font-bold leading-[24px] not-italic relative shrink-0 text-[20px] text-left text-white whitespace-nowrap"
              data-node-id="1:959"
            >
              Filosofi Logo
            </p>
          </button>
        </div>

      </nav>
  );
}
