"use client";

import { imgImg53693, imgVector3, imgVector4, imgVector5, imgVector6 } from "@/lib/assets";

export default function HeroSection() {
  return (
<div
        id="beranda"
        className="h-[974px] relative shrink-0 w-full"
        data-node-id="1:667"
        data-name="01 · Hero"
      >
        <div
          className="absolute bg-[#f786f8] h-[1044px] left-[-19px] top-[-13px] w-[1474px]"
          data-node-id="1:668"
        />
        <div
          className="absolute h-[1086px] left-[-290px] mix-blend-soft-light top-[-55px] w-[1936px]"
          data-node-id="1:669"
          data-name="IMG_5369 3"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            height="1086"
            src={imgImg53693}
            width="1936"
          />
        </div>
        <div
          className="absolute h-[2019.182px] left-[817px] top-[-1065px] w-[2338px]"
          data-node-id="1:670"
          data-name="Vector"
        >
          <div className="absolute inset-[-0.25%_-0.21%]">
            <img alt="" className="block max-w-none size-full" src={imgVector3} />
          </div>
        </div>
        <div
          className="absolute flex h-[2338px] items-center justify-center left-[-1821px] top-[-386.41px] w-[2019.182px]"
          data-node-id="1:671"
        >
          <div className="flex-none rotate-90">
            <div className="h-[2019.182px] relative w-[2338px]" data-name="Vector">
              <div className="absolute inset-[-0.25%_-0.21%]">
                <img alt="" className="block max-w-none size-full" src={imgVector4} />
              </div>
            </div>
          </div>
        </div>
        <p
          className="[word-break:break-word] absolute font-['Sansation:Bold'] leading-[177.549px] left-[calc(50%-390px)] not-italic text-[192.988px] text-white top-[430px] tracking-[-12.5442px] uppercase whitespace-nowrap"
          data-node-id="1:672"
        >
          AKASHA
        </p>
        <p
          className="[word-break:break-word] absolute font-['Plus_Jakarta_Sans:Medium'] font-medium leading-[normal] left-[625px] text-[50.847px] text-white top-[366px] whitespace-nowrap"
          data-node-id="1:673"
        >
          Kabinet
        </p>
        <p
          className="-translate-x-1/2 [word-break:break-word] absolute font-[Arial] font-bold leading-[normal] left-1/2 not-italic text-[26.973px] text-center text-white top-[620px] whitespace-pre"
          data-node-id="1:674"
        >{`Ruang untuk Semua,  Tumbuh dan Berdiri Bersama`}</p>
        <div
          className="absolute flex inset-[66.84%_2.83%_5.31%_79.51%] items-center justify-center"
          data-node-id="1:675"
          style={{ containerType: "size" }}
        >
          <div className="flex-none h-[hypot(-24.1605cqw,79.823cqh)] rotate-[15.84deg] w-[hypot(75.8395cqw,20.177cqh)]">
            <div className="relative size-full" data-name="Vector">
              <div className="absolute inset-[-3.42%_-4.96%_-9.29%_-3.84%]">
                <img alt="" className="block max-w-none size-full" src={imgVector5} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute flex inset-[16.94%_75.58%_53.33%_2.78%] items-center justify-center"
          data-node-id="1:676"
          style={{ containerType: "size" }}
        >
          <div className="flex-none h-[hypot(24.1626cqw,69.4548cqh)] rotate-[-20.52deg] w-[hypot(75.8374cqw,-30.5452cqh)]">
            <div className="relative size-full" data-name="Vector">
              <div className="absolute inset-[-7.14%_-7.53%_-6.97%_-9.98%]">
                <img alt="" className="block max-w-none size-full" src={imgVector6} />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
