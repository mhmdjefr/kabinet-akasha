"use client";

import { identityTopPhoto, identityPhotoMask, identityBottomPhoto, identityKabinetLogo, identityUnionBackground, identityVectorShape } from "@/lib/assets";

export default function IdentitasSection() {
  return (
<div
        id="filosofi-logo"
        className="h-[1207px] relative shrink-0 w-full"
        data-node-id="1:677"
        data-name="02 · Identitas Kabinet"
      >
        <div
          className="absolute h-[1207px] left-[-505px] top-0 w-[2402px]"
          data-node-id="1:678"
          data-name="Union"
        >
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={identityUnionBackground} />
        </div>
        <div
          className="absolute contents left-[-505px] top-0"
          data-node-id="1:682"
          data-name="Mask group"
        >
          <div className="absolute h-[1348px] left-[-326px] mix-blend-darken top-[347px] w-[1910px]"
            data-node-id="1:687"
            >
            <div
              className="border-[#cfffa3] border-[0.174px] border-solid h-[1348px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-179px_-347px] mask-size-[2402px_1207px] relative w-[1910px]"
              style={{ maskImage: `url("${identityPhotoMask}")` }}
              data-name="DSC01743 2"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full"
                src={identityBottomPhoto}
              />
            </div>
          </div>
          <div
            className="absolute flex h-[946px] items-center justify-center left-[505px] mix-blend-darken top-[-169px] w-[1200px]"
            data-node-id="1:688"
          >
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[946px] relative w-[1200px]"
            >
                <div
                  className="border-[#cfffa3] border-[0.174px] border-solid h-[946px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1010px_169px] mask-size-[2402px_1207px] relative w-[1200px]"
                  style={{ maskImage: `url("${identityPhotoMask}")` }}
                  data-name="DSC01698 2"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full"
                    src={identityTopPhoto}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute flex h-[1583.35px] items-center justify-center left-[-481.85px] top-[-404.35px] w-[2418.731px]"
            data-node-id="1:690"
          >
            <div className="flex-none rotate-[18.29deg] scale-[1.45]">
              <div
                className="h-[926.838px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23.148px_254.35px] mask-size-[2402px_1207px] relative w-[2241.081px]"
                style={{ maskImage: `url("${identityPhotoMask}")` }}
                data-name="Vector"
              >
                <div className="absolute inset-[-0.65%_-0.27%]">
                  <img alt="" className="block max-w-none size-full" src={identityVectorShape} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center gap-[23px] px-6"
          data-node-id="1:691"
          data-name="Identitas Kabinet"
        >
          <div
            className="relative h-[469px] w-[344.259px] shrink-0"
            data-node-id="1:692"
          >
            <img
              alt="Logo Kabinet Akasha"
              className="absolute block inset-0 max-w-none size-full"
              src={identityKabinetLogo}
            />
          </div>
          <div
            className="[word-break:break-word] leading-[normal] text-black whitespace-nowrap"
            data-node-id="1:702"
          >
            <p
              className="font-['Plus_Jakarta_Sans:Medium'] font-medium text-[72.241px] leading-[1.1]"
              data-node-id="1:703"
            >
              Kabinet
            </p>
            <p
              className="mt-[6px] font-['Audiowide:Regular'] not-italic text-[101.823px] leading-[1]"
              data-node-id="1:704"
            >
              AKASHA
            </p>
          </div>
        </div>
      </div>
  );
}
