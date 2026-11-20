"use client";

import { imgArtworkScrollToTopDariCobain, imgEllipse253, imgGroup48099464, imgLine2, imgVector21, imgVector22 } from "@/lib/assets";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function FooterSection() {
  return (
<div
        className="absolute bottom-0 h-[1055px] left-0 right-0"
        data-node-id="1:885"
        data-name="09 · Penutup & Footer"
      >
        <div
          className="absolute bg-[#171717] h-[1058px] left-[-82px] top-[63px] w-[1574px]"
          data-node-id="1:886"
        />
        <div className="absolute contents left-[354.94px] top-[419px]" data-node-id="1:887">
          <div
            className="absolute h-[392.85px] left-[354.94px] top-[419px] w-[288.364px]"
            data-node-id="1:888"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgGroup48099464}
            />
          </div>
          <div
            className="[word-break:break-word] absolute contents leading-[normal] left-[662.57px] text-white top-[548.67px] whitespace-nowrap"
            data-node-id="1:898"
          >
            <p
              className="-translate-x-1/2 [text-box-edge:cap_alphabetic] [text-box-trim:trim-both] absolute font-['Plus_Jakarta_Sans:Medium'] font-medium left-[775.57px] text-[60.512px] text-center top-[548.67px]"
              data-node-id="1:899"
            >
              Kabinet
            </p>
            <p
              className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] absolute font-['Audiowide:Regular'] left-[662.57px] not-italic text-[85.292px] top-[623.41px]"
              data-node-id="1:900"
            >
              AKASHA
            </p>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute h-[351px] left-[calc(50%-0.5px)] top-[9px] w-[2131px]"
          data-node-id="1:901"
            >
          <div className="h-[351px] relative w-[2131px]" data-name="Vector">
            <div className="absolute inset-[-0.57%_0]">
              <img
                alt=""
                className="block max-w-none size-full"
                height="355"
                src={imgVector21}
                width="2135"
              />
            </div>
          </div>
        </div>
        <div
          className="absolute h-[369px] left-[-92px] top-0 w-[1536px]"
          data-node-id="1:902"
          data-name="Vector"
        >
          <div className="absolute inset-[-1.63%_-0.39%]">
            <img alt="" className="block max-w-none size-full" src={imgVector22} />
          </div>
        </div>
        <div
          className="-translate-x-1/2 absolute flex h-0 items-center justify-center left-1/2 top-[925px] w-[1298px]"
          data-node-id="1:903"
        >
          <div className="flex-none rotate-180">
            <div className="h-0 relative w-[1298px]">
              <div className="absolute inset-[-0.67px_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
        </div>
        <p
          className="[word-break:break-word] absolute font-['Plus_Jakarta_Sans:Medium'] font-medium leading-[normal] left-[calc(50%-496px)] text-[21.985px] text-white top-[975px] whitespace-nowrap"
          data-node-id="1:904"
        >
          © 2026 Kabinet Akasha | Ruang untuk Semua, Tumbuh dan Berdiri Bersama. All Rights
          Reserved.
        </p>
        <div
          className="-translate-x-1/2 absolute content-stretch flex items-center justify-between left-1/2 top-[869px] w-[832px]"
          data-node-id="1:905"
        >
          <p
            className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-[Arial] font-normal leading-[normal] not-italic relative shrink-0 text-[#dfdfdf] text-[24px] whitespace-nowrap"
            data-node-id="1:906"
          >
            Beranda
          </p>
          <div className="relative shrink-0 size-[6px]" data-node-id="1:907">
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse253}
            />
          </div>
          <p
            className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-[Arial] font-normal leading-[normal] not-italic relative shrink-0 text-[#dfdfdf] text-[24px] whitespace-nowrap"
            data-node-id="1:908"
          >
            Program Unggulan
          </p>
          <div className="relative shrink-0 size-[6px]" data-node-id="1:909">
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse253}
            />
          </div>
          <p
            className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-[Arial] font-normal leading-[normal] not-italic relative shrink-0 text-[#dfdfdf] text-[24px] whitespace-nowrap"
            data-node-id="1:910"
          >
            Gerakan Inovasi
          </p>
          <div className="relative shrink-0 size-[6px]" data-node-id="1:911">
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse253}
            />
          </div>
          <p
            className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-[Arial] font-normal leading-[normal] not-italic relative shrink-0 text-[#dfdfdf] text-[24px] whitespace-nowrap"
            data-node-id="1:912"
          >
            Filosofi Logo
          </p>
        </div>
        <li className="absolute left-[180px] list-none top-[138.58px] w-[1079px]">
          <span className="font-[Arial] font-bold leading-[117px] text-[#cfffa3] text-[102.038px]">
            Langkah Baru Dimulai
          </span>
        </li>
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
              src={imgArtworkScrollToTopDariCobain}
            />
          </div>
        </button>
      </div>
  );
}
