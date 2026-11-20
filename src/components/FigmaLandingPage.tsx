"use client";

const assetPathPrefix = "/assets";
import { useEffect, useState } from "react";
const imgImg18452 = `${assetPathPrefix}/61754.png`;
const imgDsc045881 = `${assetPathPrefix}/18fa4.png`;
const imgGrading32 = `${assetPathPrefix}/49a83.png`;
const imgImg53693 = `${assetPathPrefix}/6236b.png`;
const imgDsc17433 = `${assetPathPrefix}/70503.png`;
const imgDsc016982 = `${assetPathPrefix}/36442.png`;
const imgVector9 = `${assetPathPrefix}/d0907.png`;
const imgVector13 = `${assetPathPrefix}/a7856.png`;
const imgVector16 = `${assetPathPrefix}/f410e.png`;
const imgVector19 = `${assetPathPrefix}/00271.png`;
const imgItek = `${assetPathPrefix}/ce016.png`;
const imgImage896 = `${assetPathPrefix}/a0345.png`;
const imgTikgem = `${assetPathPrefix}/d15af.png`;
const imgRectangle40244 = `${assetPathPrefix}/a4ea3.png`;
const imgRectangle40235 = `${assetPathPrefix}/f034c.png`;
const imgRectangle40241 = `${assetPathPrefix}/14524.png`;
const imgRectangle40243 = `${assetPathPrefix}/8dc34.png`;
const imgVector21 = `${assetPathPrefix}/74217.png`;
const imgImg18451 = `${assetPathPrefix}/65c37.svg`;
const imgVector = `${assetPathPrefix}/dbd14.svg`;
const imgEllipse158 = `${assetPathPrefix}/cae3f.svg`;
const imgEllipse159 = `${assetPathPrefix}/6ea7b.svg`;
const imgVector1 = `${assetPathPrefix}/5d2cd.svg`;
const imgVector2 = `${assetPathPrefix}/96f94.svg`;
const imgVector3 = `${assetPathPrefix}/0ee72.svg`;
const imgVector4 = `${assetPathPrefix}/7b574.svg`;
const imgVector5 = `${assetPathPrefix}/d5997.svg`;
const imgVector6 = `${assetPathPrefix}/a11c9.svg`;
const imgUnion = `${assetPathPrefix}/ad056.svg`;
const imgDsc017432 = `${assetPathPrefix}/b6df5.svg`;
const imgVector7 = `${assetPathPrefix}/3dbd0.svg`;
const imgGroup48099463 = `${assetPathPrefix}/e55d6.svg`;
const imgVector8 = `${assetPathPrefix}/3b352.svg`;
const imgFrame48100505 = `${assetPathPrefix}/99047.svg`;
const imgFrame48100502 = `${assetPathPrefix}/e9d11.svg`;
const imgFrame48100503 = `${assetPathPrefix}/76c10.svg`;
const imgFrame48100504 = `${assetPathPrefix}/6c06b.svg`;
const imgVector10 = `${assetPathPrefix}/3046d.svg`;
const imgLine1 = `${assetPathPrefix}/3c788.svg`;
const imgVector11 = `${assetPathPrefix}/a0bfc.svg`;
const imgVector12 = `${assetPathPrefix}/0a2de.svg`;
const imgVector14 = `${assetPathPrefix}/45b3b.svg`;
const imgVector15 = `${assetPathPrefix}/61523.svg`;
const imgVector17 = `${assetPathPrefix}/b5be3.svg`;
const imgVector18 = `${assetPathPrefix}/b249c.svg`;
const imgVector20 = `${assetPathPrefix}/6b3d8.svg`;
const imgLine12 = `${assetPathPrefix}/934e4.svg`;
const imgGroup48099464 = `${assetPathPrefix}/d5689.svg`;
const imgVector22 = `${assetPathPrefix}/91719.svg`;
const imgLine2 = `${assetPathPrefix}/f8097.svg`;
const imgEllipse253 = `${assetPathPrefix}/cb4cf.svg`;
const imgArtworkScrollToTopDariCobain = `${assetPathPrefix}/84cbe.svg`;
const imgUnion1 = `${assetPathPrefix}/11d9d.svg`;
const imgGroup48099456 = `${assetPathPrefix}/972fc.svg`;
const imgLine3 = `${assetPathPrefix}/f8bd1.svg`;
const imgAksenBerandaLimeMiring = `${assetPathPrefix}/8a709.svg`;
const imgChevronDown16Px = `${assetPathPrefix}/bb4c0.svg`;

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function FigmaLandingPage() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 1440) {
        setScale(screenWidth / 1440);
      } else {
        setScale(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="campaign-shell flex justify-center bg-[#171717] min-h-screen overflow-x-hidden">
      <div 
        style={{ 
          transform: `scale(${scale})`, 
          transformOrigin: 'top center',
          width: 1440,
          height: 12456 * scale,
          marginBottom: scale < 1 ? -(12456 * (1 - scale)) : 0
        }}
        className="shrink-0 relative transition-transform duration-75"
      >
        <div
          className="bg-white content-stretch flex flex-col items-start pb-[1055px] relative w-[1440px]"
      data-node-id="1:648"
      data-name="Campaign Website - Landing Page — Rapih"
    >
      <div
        className="absolute h-[12456px] left-0 top-0 w-[1440px]"
        data-node-id="1:649"
        data-name="00 · Latar lintas section"
      >
        <div
          className="absolute bg-[#fcfdfb] h-[1037px] left-[-82px] top-[8243px] w-[1611px]"
          data-node-id="1:650"
        />
        <div
          className="absolute bg-[#bbf189] h-[985px] left-[-95px] top-[7046px] w-[1563px]"
          data-node-id="1:651"
        />
        <div
          className="absolute contents left-[-95px] top-[7046px]"
          data-node-id="1:652"
          data-name="Mask group"
        >
          <div className="absolute blur-[2px] h-[1166.787px] left-[-189px] top-[7148px] w-[1749.967px]"
            data-node-id="1:654"
            >
            <div
              className="h-[1166.787px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[94px_-102px] mask-size-[1563px_985px] opacity-30 relative w-[1749.967px]"
              style={{ maskImage: `url("${imgImg18451}")` }}
              data-name="IMG_1845 1"
            >
              <div aria-hidden className="absolute inset-0 pointer-events-none">
                <img
                  alt=""
                  className="absolute max-w-none object-cover size-full"
                  src={imgImg18452}
                />
                <div className="absolute bg-[#cfffa3] inset-0 mix-blend-multiply" />
              </div>
            </div>
          </div>
          <div
            className="absolute h-[2019.182px] left-[-483px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[388px_-224px] mask-size-[1563px_985px] top-[7270px] w-[2338px]"
            data-node-id="1:657"
            style={{ maskImage: `url("${imgImg18451}")` }}
            data-name="Vector"
          >
            <div className="absolute inset-[-0.25%_-0.21%]">
              <img alt="" className="block max-w-none size-full" src={imgVector} />
            </div>
          </div>
          <div
            className="absolute h-[715px] left-[-10px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-85px_-516px] mask-size-[1563px_985px] top-[7562px] w-[651px]"
            data-node-id="1:658"
            style={{ maskImage: `url("${imgImg18451}")` }}
          >
            <div className="absolute inset-[-38.45%_-42.23%]">
              <img alt="" className="block max-w-none size-full" src={imgEllipse158} />
            </div>
          </div>
          <div
            className="absolute h-[715px] left-[853px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-948px_-458px] mask-size-[1563px_985px] top-[7504px] w-[651px]"
            data-node-id="1:659"
            style={{ maskImage: `url("${imgImg18451}")` }}
          >
            <div className="absolute inset-[-38.45%_-42.23%]">
              <img alt="" className="block max-w-none size-full" src={imgEllipse159} />
            </div>
          </div>
          <div
            className="absolute h-[1134px] left-[843px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-938px_74px] mask-size-[1563px_985px] top-[6972px] w-[756px]"
            data-node-id="1:660"
            style={{ maskImage: `url("${imgImg18451}")` }}
            data-name="DSC04588 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgDsc045881}
            />
          </div>
          <div
            className="absolute flex h-[965.379px] items-center justify-center left-0 top-[7229px] w-[455.756px]"
            data-node-id="1:661"
          >
            <div className="flex-none rotate-[2.36deg]">
              <div
                className="h-[949px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-95px_-183px] mask-size-[1563px_985px] relative w-[417px]"
                style={{ maskImage: `url("${imgImg18451}")` }}
                data-name="Grading (3) 2"
              >
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full"
                  src={imgGrading32}
                />
              </div>
            </div>
          </div>
          <div
            className="absolute h-[1496px] left-[347px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-442px_445px] mask-size-[1563px_985px] top-[6601px] w-[816px]"
            data-node-id="1:662"
            style={{ maskImage: `url("${imgImg18451}")` }}
            data-name="Vector"
          >
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
          </div>
          <div
            className="absolute h-[1496px] left-[347px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-442px_445px] mask-size-[1563px_985px] top-[6601px] w-[816px]"
            data-node-id="1:663"
            style={{ maskImage: `url("${imgImg18451}")` }}
            data-name="Vector"
          >
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
          </div>
        </div>
        <div
          className="absolute flex h-[452px] items-center justify-center left-[-481px] top-[6724px] w-[2402px]"
          data-node-id="1:664"
        >
          <div className="-scale-y-100 flex-none">
            <div className="h-[452px] relative w-[2402px]" data-name="Vector">
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector2}
              />
            </div>
          </div>
        </div>
        <div
          className="-translate-x-1/2 absolute bg-[#171717] h-[2551px] left-1/2 top-[4588px] w-[1460px]"
          data-node-id="1:665"
        />
        <div
          className="-translate-x-1/2 absolute bg-gradient-to-b from-[#564cf8] h-[2359px] left-[calc(50%+0.5px)] to-[#463bf5] top-[2061px] w-[1471px]"
          data-node-id="1:666"
        />
      </div>
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
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUnion} />
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
              style={{ maskImage: `url("${imgDsc017432}")` }}
              data-name="DSC01743 2"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full"
                src={imgDsc17433}
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
                  style={{ maskImage: `url("${imgDsc017432}")` }}
                  data-name="DSC01698 2"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full"
                    src={imgDsc016982}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute flex h-[1583.35px] items-center justify-center left-[-481.85px] top-[-254.35px] w-[2418.731px]"
            data-node-id="1:690"
          >
            <div className="flex-none rotate-[18.29deg]">
              <div
                className="h-[926.838px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23.148px_254.35px] mask-size-[2402px_1207px] relative w-[2241.081px]"
                style={{ maskImage: `url("${imgDsc017432}")` }}
                data-name="Vector"
              >
                <div className="absolute inset-[-0.65%_-0.27%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector7} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[284.25px] top-[263px]" data-node-id="1:691">
          <div
            className="absolute h-[469px] left-[284.25px] top-[263px] w-[344.259px]"
            data-node-id="1:692"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgGroup48099463}
            />
          </div>
          <div
            className="[word-break:break-word] absolute contents leading-[normal] left-[651.51px] text-black top-[417.8px] whitespace-nowrap"
            data-node-id="1:702"
          >
            <p
              className="-translate-x-1/2 [text-box-edge:cap_alphabetic] [text-box-trim:trim-both] absolute font-['Plus_Jakarta_Sans:Medium'] font-medium left-[786.51px] text-[72.241px] text-center top-[417.8px]"
              data-node-id="1:703"
            >
              Kabinet
            </p>
            <p
              className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] absolute font-['Audiowide:Regular'] left-[651.51px] not-italic text-[101.823px] top-[507.03px]"
              data-node-id="1:704"
            >
              AKASHA
            </p>
          </div>
        </div>
      </div>
      <div
        className="h-[2083px] relative shrink-0 w-full"
        data-node-id="1:705"
        data-name="03 · Filosofi Akasha"
      >
        <div
          className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium gap-[33px] items-center leading-[0] left-1/2 text-[38.854px] text-center text-white top-[342px] w-[1270px]"
          data-node-id="1:706"
        >
          <p className="relative shrink-0 w-[1146.122px]" data-node-id="1:707">
            <span className="leading-[normal]">{`Akasha berasal dari bahasa Sanskerta yang berarti `}</span>
            <span className="font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal]">r</span>
            <span className="font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] text-[#cfffa3]">
              uang, langit, atau eter.
            </span>
            <span className="leading-[normal]">{` Sebuah filosofi tentang ruang tanpa batas yang menaungi, menghubungkan, dan berdiri mandiri.`}</span>
          </p>
          <p className="min-w-full relative shrink-0 w-[min-content]" data-node-id="1:708">
            <span className="leading-[normal]">{`Dari makna inilah Kabinet Akasha hadir, membawa harapan untuk menjadikan HIMATIK `}</span>
            <span className="font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] text-[#cfffa3]">
              sebagai ruang yang terbuka bagi seluruh mahasiswa TIK.
            </span>
            <span className="leading-[normal]">{` Tempat setiap suara didengar, setiap potensi diberi kesempatan, dan setiap individu dapat tumbuh bersama.`}</span>
          </p>
        </div>
        <li className="absolute left-[273px] list-none top-[102px] w-[894px] text-center">
          <span className="font-[Arial] font-bold leading-[72px] text-[62.368px] text-white">
            Lebih dari Sekadar Nama, Ada Makna yang Kami Bawa
          </span>
        </li>
        <li className="absolute left-[273px] list-none top-[906px] w-[894px] text-center">
          <span className="font-[Arial] font-bold leading-[72px] text-[62.368px] text-white">
            Satu Ruang, Empat Makna yang Menyatukan.
          </span>
        </li>
        <div
          className="absolute flex h-[134.99px] items-center justify-center left-[377.45px] top-[740px] w-[684.106px]"
          data-node-id="1:711"
        >
          <div className="flex-none rotate-[-0.5deg]">
            <div className="h-[129px] relative w-[683px]" />
          </div>
        </div>
        <div
          className="absolute h-[2019.182px] left-[859px] top-[-1239px] w-[2338px]"
          data-node-id="1:712"
          data-name="Vector"
        >
          <div className="absolute inset-[-0.25%_-0.21%]">
            <img alt="" className="block max-w-none size-full" src={imgVector8} />
          </div>
        </div>
        <li
          aria-hidden
          className="absolute left-[-35px] list-none top-[1001px] w-[308px] text-center"
        >
          <span className="font-[Arial] font-bold leading-[318px] text-[276.203px] text-transparent">
            01
          </span>
        </li>
        <li
          aria-hidden
          className="absolute left-[1157px] list-none top-[1226px] w-[308px] text-center"
        >
          <span className="font-[Arial] font-bold leading-[318px] text-[276.203px] text-transparent">
            02
          </span>
        </li>
        <li
          aria-hidden
          className="absolute left-[-35px] list-none top-[1479px] w-[308px] text-center"
        >
          <span className="font-[Arial] font-bold leading-[318px] text-[276.203px] text-transparent">
            03
          </span>
        </li>
        <li
          aria-hidden
          className="absolute left-[1148px] list-none top-[1689px] w-[308px] text-center"
        >
          <span className="font-[Arial] font-bold leading-[318px] text-[276.203px] text-transparent">
            04
          </span>
        </li>
        <div
          className="absolute content-stretch flex flex-col gap-[80px] items-center left-[281px] top-[1146px] w-[877px]"
          data-node-id="1:717"
        >
          <div
            className="content-stretch flex flex-col gap-[3px] items-center justify-center relative shrink-0 w-full"
            data-node-id="1:718"
          >
            <li className="list-none">
              <span className="font-[Arial] font-bold leading-[72px] text-[#cfffa3] text-[62.368px]">
                Ruang Tanpa Sekat
              </span>
            </li>
            <p
              className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium'] font-medium leading-[normal] relative shrink-0 text-[32.988px] text-center text-white w-[875px]"
              data-node-id="1:720"
            >
              Merangkul seluruh mahasiswa TIK tanpa membeda-bedakan program studi maupun angkatan.
            </p>
          </div>
          <div
            className="content-stretch flex flex-col gap-[3px] items-center justify-center relative shrink-0 w-full"
            data-node-id="1:721"
          >
            <li className="list-none">
              <span className="font-[Arial] font-bold leading-[72px] text-[#cfffa3] text-[62.368px]">
                Tempat Potensi Bermula
              </span>
            </li>
            <p
              className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium'] font-medium leading-[normal] relative shrink-0 text-[32.988px] text-center text-white w-[875px]"
              data-node-id="1:723"
            >
              Menjadi wadah bagi mahasiswa untuk mengembangkan kemampuan, gagasan, dan
              kontribusinya.
            </p>
          </div>
          <div
            className="content-stretch flex flex-col gap-[3px] items-center justify-center relative shrink-0 w-full"
            data-node-id="1:724"
          >
            <li className="list-none">
              <span className="font-[Arial] font-bold leading-[72px] text-[#cfffa3] text-[62.368px]">
                Setiap Suara Punya Tempat
              </span>
            </li>
            <p
              className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium'] font-medium leading-[normal] relative shrink-0 text-[32.988px] text-center text-white w-[875px]"
              data-node-id="1:726"
            >
              Menghubungkan aspirasi mahasiswa melalui komunikasi yang terbuka dan transparan.
            </p>
          </div>
          <div
            className="content-stretch flex flex-col gap-[3px] items-center justify-center relative shrink-0 w-full"
            data-node-id="1:727"
          >
            <li className="list-none">
              <span className="font-[Arial] font-bold leading-[72px] text-[#cfffa3] text-[62.368px]">
                Tumbuh dengan Kemandirian
              </span>
            </li>
            <p
              className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium'] font-medium leading-[normal] relative shrink-0 text-[32.988px] text-center text-white w-[875px]"
              data-node-id="1:729"
            >
              Membangun organisasi yang mampu berkembang melalui sumber daya dan kerja sama
              berkelanjutan.
            </p>
          </div>
        </div>
        <div className="absolute h-[18px] left-0 top-[1175px] w-[1443px]" data-node-id="1:730">
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgFrame48100505}
          />
        </div>
        <div
          className="absolute h-[18px] left-[-64px] top-[1412px] w-[1565px]"
          data-node-id="1:741"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgFrame48100502}
          />
        </div>
        <div
          className="-translate-x-1/2 absolute h-[18px] left-[calc(50%-0.5px)] top-[1660px] w-[1693px]"
          data-node-id="1:752"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgFrame48100503}
          />
        </div>
        <div
          className="-translate-x-1/2 absolute h-[18px] left-[calc(50%-0.5px)] top-[1890px] w-[1737px]"
          data-node-id="1:763"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgFrame48100504}
          />
        </div>
      </div>
      <div
        className="h-[2782px] relative shrink-0 w-full"
        data-node-id="1:774"
        data-name="04 · Visi & Misi"
      >
        <p
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Plus_Jakarta_Sans:Medium'] font-medium leading-[normal] left-[calc(50%-2.5px)] text-[32.988px] text-center text-white top-[621px] w-[1169px]"
          data-node-id="1:775"
        >
          Mewujudkan HIMATIK sebagai ruang yang terbuka, setara, transparan, dan mandiri bagi
          seluruh mahasiswa TIK untuk berkembang bersama.
        </p>
        <div
          className="absolute h-[351px] left-[-333px] top-[32px] w-[2131px]"
          data-node-id="1:776"
          data-name="Vector"
        >
          <div className="absolute inset-[-0.57%_0]">
            <img
              alt=""
              className="block max-w-none size-full"
              height="355"
              src={imgVector9}
              width="2135"
            />
          </div>
        </div>
        <div
          className="absolute h-[416px] left-[-80px] top-0 w-[1536px]"
          data-node-id="1:777"
          data-name="Vector"
        >
          <div className="absolute inset-[-1.44%_-0.39%]">
            <img alt="" className="block max-w-none size-full" src={imgVector10} />
          </div>
        </div>
        <li className="absolute left-[292px] list-none top-[123.477px] w-[855px]">
          <span className="font-[Arial] font-bold leading-[163px] text-[#cfffa3] text-[141.441px]">
            Visi dan Misi
          </span>
        </li>
        <p
          className="[word-break:break-word] absolute font-[Arial] font-bold leading-[normal] left-[calc(50%-207.02px)] not-italic text-[91.112px] text-white top-[492px] whitespace-nowrap"
          data-node-id="1:779"
        >
          Visi Kami
        </p>
        <p
          className="[word-break:break-word] absolute font-[Arial] font-bold leading-[normal] left-[calc(50%-464px)] not-italic text-[91.112px] text-white top-[885px] whitespace-nowrap"
          data-node-id="1:780"
        >
          Empat Langkah Kami
        </p>
        <div
          className="-translate-x-1/2 absolute flex h-0 items-center justify-center left-[calc(50%-0.5px)] top-[777px] w-[855px]"
          data-node-id="1:781"
        >
          <div className="flex-none rotate-180">
            <div className="h-0 relative w-[855px]">
              <div className="absolute inset-[-2px_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine1} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute h-[1610px] left-[93.5px] top-[1076px] w-[1253px]"
          data-node-id="1:782"
          data-name="Misi · 2 × 2 / margin simetris 94px"
        >
          <div
            className="absolute h-[767px] left-0 top-0 w-[581px]"
            data-node-id="1:783"
            data-name="01 · Transparansi"
          >
            <div
              className="absolute h-[767px] left-0 top-0 w-[581px]"
              data-node-id="1:784"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector11}
              />
            </div>
            <div
              className="absolute flex h-[767px] items-center justify-center left-0 top-0 w-[581px]"
              data-node-id="1:785"
            >
              <div className="-scale-y-100 flex-none">
                <div className="h-[767px] relative w-[581px]" data-name="Vector">
                  <div className="absolute inset-[-0.26%_-0.34%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector12} />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute h-[351px] left-0 top-0 w-[581px]"
              data-node-id="1:786"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                height="351"
                src={imgVector13}
                width="581"
              />
            </div>
            <p
              className="[word-break:break-word] absolute font-[Arial] font-bold leading-[normal] left-[calc(50%-195.06px)] not-italic text-[55.09px] text-white top-[156px] w-[374.1px]"
              data-node-id="1:787"
            >
              Transparansi yang Nyata
            </p>
            <li className="absolute left-[95px] list-none top-0 w-[165px] text-center">
              <span className="font-[Arial] font-bold leading-[170px] opacity-[0.48] text-[#cfffa3] text-[147.656px]">
                01
              </span>
            </li>
            <p
              className="-translate-x-1/2 [word-break:break-word] absolute font-['Plus_Jakarta_Sans:SemiBold'] font-semibold leading-[normal] left-[calc(50%-3px)] text-[32.988px] text-center text-white top-[384px] w-[491px]"
              data-node-id="1:789"
            >
              Mewujudkan tata kelola organisasi yang transparan dan akuntabel, mulai dari proses
              seleksi, kegiatan, hingga pengelolaan keuangan.
            </p>
          </div>
          <div
            className="absolute h-[767px] left-[672px] top-0 w-[581px]"
            data-node-id="1:790"
            data-name="02 · Kesempatan Setara"
          >
            <div
              className="absolute h-[767px] left-0 top-0 w-[581px]"
              data-node-id="1:791"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector14}
              />
            </div>
            <div
              className="absolute flex h-[767px] items-center justify-center left-0 top-0 w-[581px]"
              data-node-id="1:792"
            >
              <div className="-scale-y-100 flex-none">
                <div className="h-[767px] relative w-[581px]" data-name="Vector">
                  <div className="absolute inset-[-0.26%_-0.34%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector15} />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute h-[351px] left-0 top-0 w-[581px]"
              data-node-id="1:793"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                height="351"
                src={imgVector16}
                width="581"
              />
            </div>
            <p
              className="-translate-x-1/2 [word-break:break-word] absolute font-[Arial] font-bold leading-[normal] left-[calc(50%-8.01px)] not-italic text-[55.09px] text-center text-white top-[156px] w-[374.1px]"
              data-node-id="1:794"
            >
              Kesempatan yang Setara
            </p>
            <li className="absolute left-[117px] list-none top-0 w-[165px] text-center">
              <span className="font-[Arial] font-bold leading-[170px] opacity-[0.48] text-[#cfffa3] text-[147.656px]">
                02
              </span>
            </li>
            <p
              className="-translate-x-1/2 [word-break:break-word] absolute font-['Plus_Jakarta_Sans:SemiBold'] font-semibold leading-[normal] left-[calc(50%-3px)] text-[32.988px] text-center text-white top-[384px] w-[491px]"
              data-node-id="1:796"
            >
              Membuka ruang bagi seluruh mahasiswa TIK untuk terlibat, berkontribusi, dan
              menyampaikan aspirasi secara adil dan terbuka.
            </p>
          </div>
          <div
            className="absolute h-[767px] left-0 top-[843px] w-[581px]"
            data-node-id="1:797"
            data-name="03 · Bertumbuh Bersama"
          >
            <div
              className="absolute h-[767px] left-0 top-0 w-[581px]"
              data-node-id="1:798"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector14}
              />
            </div>
            <div
              className="absolute flex h-[767px] items-center justify-center left-0 top-0 w-[581px]"
              data-node-id="1:799"
            >
              <div className="-scale-y-100 flex-none">
                <div className="h-[767px] relative w-[581px]" data-name="Vector">
                  <div className="absolute inset-[-0.26%_-0.34%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector17} />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute h-[351px] left-0 top-0 w-[581px]"
              data-node-id="1:800"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                height="351"
                src={imgVector16}
                width="581"
              />
            </div>
            <p
              className="[word-break:break-word] absolute font-[Arial] font-bold leading-[normal] left-[calc(50%-195.06px)] not-italic text-[55.09px] text-white top-[156px] w-[374.1px]"
              data-node-id="1:801"
            >
              Bertumbuh Bersama
            </p>
            <li className="absolute left-[95px] list-none top-0 w-[165px] text-center">
              <span className="font-[Arial] font-bold leading-[170px] opacity-[0.48] text-[#cfffa3] text-[147.656px]">
                03
              </span>
            </li>
            <p
              className="-translate-x-1/2 [word-break:break-word] absolute font-['Plus_Jakarta_Sans:SemiBold'] font-semibold leading-[normal] left-[calc(50%-3px)] text-[32.988px] text-center text-white top-[384px] w-[491px]"
              data-node-id="1:803"
            >
              Menghadirkan program pengembangan kompetensi akademik dan nonakademik yang
              berkelanjutan.
            </p>
          </div>
          <div
            className="absolute h-[767px] left-[672px] top-[843px] w-[581px]"
            data-node-id="1:804"
            data-name="04 · Kemandirian"
          >
            <div
              className="absolute h-[767px] left-0 top-0 w-[581px]"
              data-node-id="1:805"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector11}
              />
            </div>
            <div
              className="absolute h-[351px] left-0 top-0 w-[581px]"
              data-node-id="1:806"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                height="351"
                src={imgVector13}
                width="581"
              />
            </div>
            <p
              className="[word-break:break-word] absolute font-[Arial] font-bold leading-[normal] left-[calc(50%-217.5px)] not-italic text-[55.09px] text-white top-[156px] w-[460px]"
              data-node-id="1:807"
            >
              Mandiri untuk Terus Melangkah
            </p>
            <li className="absolute left-[73px] list-none top-0 w-[165px] text-center">
              <span className="font-[Arial] font-bold leading-[170px] opacity-[0.48] text-[#cfffa3] text-[147.656px]">
                04
              </span>
            </li>
            <p
              className="-translate-x-1/2 [word-break:break-word] absolute font-['Plus_Jakarta_Sans:SemiBold'] font-semibold leading-[normal] left-[calc(50%-3px)] text-[32.988px] text-center text-white top-[384px] w-[495px]"
              data-node-id="1:809"
            >
              Membangun kemandirian pendanaan melalui pengembangan sumber daya dan kerja sama yang
              berkelanjutan.
            </p>
            <div
              className="absolute flex h-[767px] items-center justify-center left-0 top-0 w-[581px]"
              data-node-id="1:810"
            >
              <div className="-scale-y-100 flex-none">
                <div className="h-[767px] relative w-[581px]" data-name="Vector">
                  <div className="absolute inset-[-0.26%_-0.34%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-[883px] relative shrink-0 w-full"
        data-node-id="1:811"
        data-name="05 · Dua Sosok, Satu Tujuan"
      >
        <p
          className="[word-break:break-word] absolute font-[Arial] font-bold leading-[0] left-[calc(50%-250px)] not-italic text-[131.446px] text-white top-[130px] w-[515px]"
          data-node-id="1:812"
        >
          <span className="leading-[normal] text-[#cfffa3]">Dua</span>
          <span className="leading-[normal]">{` Sosok`}</span>
        </p>
        <p
          className="-translate-x-full [word-break:break-word] absolute font-[Arial] font-bold leading-[0] left-[calc(50%+217.27px)] not-italic text-[130.58px] text-right text-white top-[516px] w-[435.268px]"
          data-node-id="1:813"
        >
          <span className="leading-[normal] text-[#cfffa3]">{`Satu `}</span>
          <span className="leading-[normal]">Tujuan</span>
        </p>
        <div
          className="absolute content-stretch flex h-[45px] items-center justify-center left-[70px] p-[10px] top-[707px]"
          data-node-id="1:814"
          style={{
            backgroundImage:
              "linear-gradient(90.16417084281264deg, rgb(247, 47, 251) 0%, rgba(147, 28, 149, 0) 93.286%)",
          }}
        >
          <p
            className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-[Arial] font-bold leading-[normal] not-italic relative shrink-0 text-[43.409px] text-white whitespace-nowrap"
            data-node-id="1:815"
          >
            M. Jeffri
          </p>
        </div>
        <div
          className="absolute bg-gradient-to-r content-stretch flex from-[#f72ffb] h-[45px] items-center justify-center left-[1098px] p-[10px] to-[rgba(147,28,149,0)] top-[708px]"
          data-node-id="1:816"
        >
          <p
            className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-[Arial] font-bold leading-[normal] not-italic relative shrink-0 text-[43.409px] text-white whitespace-nowrap"
            data-node-id="1:817"
          >
            P. Anisa La A.
          </p>
        </div>
        <div
          className="absolute bg-gradient-to-r content-stretch flex from-[#564cf8] items-center justify-center left-[118px] p-[10px] to-[rgba(41,29,238,0)] top-[752px]"
          data-node-id="1:818"
        >
          <p
            className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-[Arial] font-bold leading-[normal] not-italic relative shrink-0 text-[25.177px] text-white whitespace-nowrap"
            data-node-id="1:819"
          >
            Calon Ketua HIMATIK
          </p>
        </div>
        <div
          className="absolute bg-gradient-to-r content-stretch flex from-[#564cf8] items-center justify-center left-[1024px] p-[10px] to-[rgba(41,29,238,0)] top-[753px]"
          data-node-id="1:820"
        >
          <p
            className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-[Arial] font-bold leading-[normal] not-italic relative shrink-0 text-[25.177px] text-white whitespace-nowrap"
            data-node-id="1:821"
          >
            Calon Wakil Ketua HIMATIK
          </p>
        </div>
        <div
          className="absolute bg-gradient-to-r content-stretch flex from-[#adf070] h-[25px] items-center justify-center left-[257px] p-[10px] to-[rgba(124,208,47,0)] top-[790px]"
          data-node-id="1:822"
        >
          <p
            className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-[Arial] font-normal leading-[normal] not-italic relative shrink-0 text-[16.162px] text-white whitespace-nowrap"
            data-node-id="1:823"
          >
            Periode 2027 - 2028
          </p>
        </div>
        <div
          className="absolute bg-gradient-to-r content-stretch flex from-[#adf070] h-[25px] items-center justify-center left-[1000px] p-[10px] to-[rgba(124,208,47,0)] top-[791px]"
          data-node-id="1:824"
        >
          <p
            className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-[Arial] font-normal leading-[normal] not-italic relative shrink-0 text-[16.162px] text-white whitespace-nowrap"
            data-node-id="1:825"
          >
            Periode 2027 - 2028
          </p>
        </div>
      </div>
      <div
        className="h-[416px] relative shrink-0 w-full"
        data-node-id="1:826"
        data-name="06 · Gagasan Jadi Aksi"
      >
        <div
          className="absolute flex h-[403px] items-center justify-center left-[-82px] top-[-3px] w-[1536px]"
          data-node-id="1:827"
        >
          <div className="-scale-y-100 flex-none">
            <div className="h-[403px] relative w-[1536px]" data-name="Vector">
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                height="403"
                src={imgVector19}
                width="1536"
              />
            </div>
          </div>
        </div>
        <div
          className="absolute h-[416px] left-[-95px] top-0 w-[1536px]"
          data-node-id="1:828"
          data-name="Vector"
        >
          <div className="absolute inset-[-1.44%_-0.39%]">
            <img alt="" className="block max-w-none size-full" src={imgVector20} />
          </div>
        </div>
        <li className="absolute left-[202px] list-none top-[132px] w-[1036px]">
          <span className="font-[Arial] font-bold leading-[134px] text-[#cfffa3] text-[116.79px] whitespace-nowrap">
            Gagasan Jadi Aksi
          </span>
        </li>
      </div>
      <div
        id="program-unggulan"
        className="h-[879px] relative shrink-0 w-full"
        data-node-id="1:830"
        data-name="07 · Program Unggulan"
      >
        <p
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Plus_Jakarta_Sans:Medium'] font-medium leading-[normal] left-[calc(50%-0.5px)] text-[#564cf8] text-[32.988px] text-center top-[243px] w-[1029px]"
          data-node-id="1:831"
        >
          Melalui program unggulan, Akasha membuka ruang bagi mahasiswa TIK untuk berkolaborasi,
          mengembangkan potensi, dan menciptakan dampak nyata.
        </p>
        <p
          className="-translate-x-1/2 [word-break:break-word] absolute font-[Arial] font-bold leading-[normal] left-[calc(50%-0.5px)] not-italic text-[#564cf8] text-[76.393px] text-center top-[123px] whitespace-nowrap"
          data-node-id="1:832"
        >
          Program Unggulan
        </p>
        <div className="absolute h-0 left-[501px] top-[648px] w-[451px]" data-node-id="1:833">
          <div className="absolute inset-[-5px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine12} />
          </div>
        </div>
        <div
          className="-translate-x-1/2 absolute content-stretch flex gap-[40px] items-center leading-[0] left-[calc(50%+0.03px)] top-[476px]"
          data-node-id="1:834"
        >
          <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
            data-node-id="1:835"
          >
            <div
              className="col-1 flex items-center justify-center ml-0 mt-0 relative row-1 size-[337.352px]"
              data-node-id="1:836"
            >
              <div className="flex-none rotate-45">
                <div
                  className="border-[#f982fb] border-[5.893px] border-solid relative size-[238.544px]"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 238.54 238.54' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-0.42532 13.564 -13.564 -0.42532 119.27 119.27)'><stop stop-color='rgba(75,73,73,1)' offset='0'/><stop stop-color='rgba(49,48,48,1)' offset='0.5'/><stop stop-color='rgba(36,35,35,1)' offset='0.75'/><stop stop-color='rgba(23,23,23,1)' offset='1'/></radialGradient></defs></svg>\")",
                  }}
                />
              </div>
            </div>
            <div
              className="col-1 ml-[55.02px] mt-[58.69px] relative row-1 shadow-[0.093px_0.373px_1.67px_0px_rgba(0,0,0,0.95)] size-[221.416px]"
              data-node-id="1:837"
              data-name="ITEK"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  alt=""
                  className="absolute h-full left-[-5.55%] max-w-none top-0 w-[111.09%]"
                  src={imgItek}
                />
              </div>
            </div>
          </div>
          <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
            data-node-id="1:838"
          >
            <div
              className="col-1 flex items-center justify-center ml-0 mt-0 relative row-1 size-[337.352px]"
              data-node-id="1:839"
            >
              <div className="flex-none rotate-45">
                <div
                  className="border-[#f982fb] border-[5.893px] border-solid relative size-[238.544px]"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 238.54 238.54' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-0.42532 13.564 -13.564 -0.42532 119.27 119.27)'><stop stop-color='rgba(75,73,73,1)' offset='0'/><stop stop-color='rgba(49,48,48,1)' offset='0.5'/><stop stop-color='rgba(36,35,35,1)' offset='0.75'/><stop stop-color='rgba(23,23,23,1)' offset='1'/></radialGradient></defs></svg>\")",
                  }}
                />
              </div>
            </div>
            <div
              className="col-1 ml-[90.65px] mt-[90px] relative row-1 size-[157px]"
              data-node-id="1:840"
              data-name="image 896"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                src={imgImage896}
              />
            </div>
          </div>
          <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
            data-node-id="1:841"
          >
            <div
              className="col-1 flex items-center justify-center ml-0 mt-0 relative row-1 size-[337.352px]"
              data-node-id="1:842"
            >
              <div className="flex-none rotate-45">
                <div
                  className="border-[#f982fb] border-[5.893px] border-solid relative size-[238.544px]"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 238.54 238.54' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-0.42532 13.564 -13.564 -0.42532 119.27 119.27)'><stop stop-color='rgba(75,73,73,1)' offset='0'/><stop stop-color='rgba(49,48,48,1)' offset='0.5'/><stop stop-color='rgba(36,35,35,1)' offset='0.75'/><stop stop-color='rgba(23,23,23,1)' offset='1'/></radialGradient></defs></svg>\")",
                  }}
                />
              </div>
            </div>
            <div
              className="col-1 ml-[42.94px] mt-[43.53px] relative row-1 size-[251.01px]"
              data-node-id="1:843"
              data-name="TIKGEM"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                src={imgTikgem}
              />
            </div>
          </div>
        </div>
        <div
          className="-translate-x-1/2 absolute content-stretch flex items-center justify-between leading-[0] left-[calc(50%-0.5px)] top-[144px] w-[1545px]"
          data-node-id="1:844"
        >
          <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
            data-node-id="1:845"
          >
            <div
              className="bg-gradient-to-r col-1 from-[#f982fb] h-[23px] ml-0 mt-0 relative row-1 to-[rgba(148,77,149,0)] w-[352px]"
              data-node-id="1:846"
            />
            <div
              className="bg-gradient-to-r col-1 from-[#ceffa3] h-[22px] ml-[101px] mt-[23px] relative row-1 to-[rgba(206,255,163,0)] w-[297px]"
              data-node-id="1:847"
            />
          </div>
          <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
            data-node-id="1:848"
          >
            <div
              className="col-1 flex h-[23px] items-center justify-center ml-[46px] mt-0 relative row-1 w-[352px]"
              data-node-id="1:849"
            >
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="bg-gradient-to-r from-[#f982fb] h-[23px] relative to-[rgba(148,77,149,0)] w-[352px]" />
              </div>
            </div>
            <div
              className="col-1 flex h-[22px] items-center justify-center ml-0 mt-[23px] relative row-1 w-[297px]"
              data-node-id="1:850"
            >
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="bg-gradient-to-r from-[#ceffa3] h-[22px] relative to-[rgba(206,255,163,0)] w-[297px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="gerakan-inovasi"
        className="h-[2177px] relative shrink-0 w-full"
        data-node-id="1:851"
        data-name="08 · Gerakan Inovasi"
      >
        <p
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Plus_Jakarta_Sans:Medium'] font-medium leading-[normal] left-1/2 text-[#564cf8] text-[32.988px] text-center top-[177px] w-[936px]"
          data-node-id="1:852"
        >
          Akasha menghadirkan inovasi untuk membuka peluang baru, menjawab kebutuhan mahasiswa TIK,
          dan mendorong HIMATIK terus berkembang.
        </p>
        <p
          className="-translate-x-1/2 [word-break:break-word] absolute font-[Arial] font-bold leading-[normal] left-[calc(50%-0.5px)] not-italic text-[#564cf8] text-[76.393px] text-center top-[57px] whitespace-nowrap"
          data-node-id="1:853"
        >
          Gerakan Inovasi
        </p>
        <div
          className="absolute contents left-[-2px] top-[308px]"
          data-node-id="1:854"
          data-name="01 · TIKTrack"
        >
          <div className="absolute h-[90px] left-[-2px] top-[505px] w-[835px]" data-node-id="1:855">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgRectangle40244}
            />
          </div>
          <div className="absolute h-[265px] left-0 top-[595px] w-[1440px]" data-node-id="1:856">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <img
                alt=""
                className="absolute max-w-none object-bottom size-full"
                src={imgRectangle40235}
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(88.46839198414189deg, rgb(65, 55, 226) 22.165%, rgba(0, 0, 0, 0) 99.755%)",
                }}
              />
              <div className="absolute bg-[rgba(86,76,248,0.24)] inset-0 mix-blend-color" />
            </div>
          </div>
          <div
            className="[word-break:break-word] absolute content-stretch flex flex-col gap-[16px] items-start leading-[normal] left-[79px] text-white top-[637px] w-[1114.286px]"
            data-node-id="1:857"
          >
            <p
              className="font-['Plus_Jakarta_Sans:Bold'] font-bold relative shrink-0 text-[54.194px] w-full"
              data-node-id="1:858"
            >
              Informasi dalam Genggaman
            </p>
            <p
              className="font-['Plus_Jakarta_Sans:Medium'] font-medium relative shrink-0 text-[39.271px] w-full"
              data-node-id="1:859"
            >
              Sistem informasi terintegrasi untuk mempermudah akses informasi kegiatan dan
              kepengurusan HIMATIK.
            </p>
          </div>
          <p
            className="-translate-x-1/2 [word-break:break-word] absolute font-[Arial] font-bold leading-[normal] left-[402.5px] not-italic text-[#171717] text-[187.51px] text-center top-[388px] whitespace-nowrap"
            data-node-id="1:860"
          >
            TIKTrack
          </p>
          <li
            aria-hidden
            className="absolute left-[1195px] list-none top-[308px] w-[238px] text-center"
          >
            <span className="font-[Arial] font-bold leading-[246px] text-[213.667px] text-transparent">
              01
            </span>
          </li>
        </div>
        <div
          className="absolute contents left-[-2px] top-[300px]"
          data-node-id="1:862"
          data-name="03 · Barnaby 2.0"
        >
          <div
            className="absolute h-[90px] left-[-2px] top-[1514px] w-[1146px]"
            data-node-id="1:863"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgRectangle40241}
            />
          </div>
          <div className="absolute h-[265px] left-0 top-[1604px] w-[1440px]" data-node-id="1:864">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <img
                alt=""
                className="absolute max-w-none object-bottom size-full"
                src={imgRectangle40235}
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(88.46839198414189deg, rgb(65, 55, 226) 22.165%, rgba(0, 0, 0, 0) 99.755%)",
                }}
              />
              <div className="absolute bg-[rgba(86,76,248,0.24)] inset-0 mix-blend-color" />
            </div>
          </div>
          <div
            className="[word-break:break-word] absolute content-stretch flex flex-col gap-[16px] items-start leading-[normal] left-[79px] text-white top-[1646px] w-[1114.286px]"
            data-node-id="1:865"
          >
            <p
              className="font-['Plus_Jakarta_Sans:Bold'] font-bold relative shrink-0 text-[54.194px] whitespace-nowrap"
              data-node-id="1:866"
            >
              Mandiri, Terus Berkembang
            </p>
            <p
              className="font-['Plus_Jakarta_Sans:Medium'] font-medium min-w-full relative shrink-0 text-[39.271px] w-[min-content]"
              data-node-id="1:867"
            >
              Pengembangan unit usaha HIMATIK melalui layanan dan proyek digital untuk mendukung
              kemandirian organisasi.
            </p>
          </div>
          <p
            className="-translate-x-1/2 [word-break:break-word] absolute font-[Arial] font-bold leading-[normal] left-[538.5px] not-italic text-[#171717] text-[187.51px] text-center top-[1397px] whitespace-nowrap"
            data-node-id="1:868"
          >
            Barnaby 2.0
          </p>
          <li
            aria-hidden
            className="absolute left-[1195px] list-none top-[1309px] w-[238px] text-center"
          >
            <span className="font-[Arial] font-bold leading-[246px] text-[213.667px] text-transparent">
              03
            </span>
          </li>
        </div>
        <div
          className="-translate-x-1/2 absolute content-stretch flex items-center justify-between leading-[0] left-[calc(50%-0.5px)] top-[86px] w-[1545px]"
          data-node-id="1:870"
        >
          <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
            data-node-id="1:871"
          >
            <div
              className="bg-gradient-to-r col-1 from-[#564cf8] h-[23px] ml-0 mt-0 relative row-1 to-[rgba(148,77,149,0)] w-[352px]"
              data-node-id="1:872"
            />
            <div
              className="bg-gradient-to-r col-1 from-[#ceffa3] h-[22px] ml-[101px] mt-[23px] relative row-1 to-[rgba(249,130,251,0)] w-[297px]"
              data-node-id="1:873"
            />
          </div>
          <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
            data-node-id="1:874"
          >
            <div
              className="col-1 flex h-[23px] items-center justify-center ml-[46px] mt-0 relative row-1 w-[352px]"
              data-node-id="1:875"
            >
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="bg-gradient-to-r from-[#564cf8] h-[23px] relative to-[rgba(148,77,149,0)] w-[352px]" />
              </div>
            </div>
            <div
              className="col-1 flex h-[22px] items-center justify-center ml-0 mt-[23px] relative row-1 w-[297px]"
              data-node-id="1:876"
            >
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="bg-gradient-to-r from-[#ceffa3] h-[22px] relative to-[rgba(249,130,251,0)] w-[297px]" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute h-[534px] left-0 top-[863px] w-[1440px]"
          data-node-id="1:877"
          data-name="02 · ASAH"
        >
          <div
            className="absolute h-[90px] left-[848px] top-[117px] w-[592px]"
            data-node-id="1:878"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgRectangle40243}
            />
          </div>
          <div
            className="absolute flex h-[265px] items-center justify-center left-0 top-[207px] w-[1440px]"
            data-node-id="1:879"
          >
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[265px] relative w-[1440px]">
                <div aria-hidden className="absolute inset-0 pointer-events-none">
                  <img
                    alt=""
                    className="absolute max-w-none object-bottom size-full"
                    src={imgRectangle40235}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(88.46839198414189deg, rgb(65, 55, 226) 22.165%, rgba(0, 0, 0, 0) 99.755%)",
                    }}
                  />
                  <div className="absolute bg-[rgba(86,76,248,0.24)] inset-0 mix-blend-color" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="[word-break:break-word] absolute content-stretch flex flex-col gap-[16px] items-end leading-[normal] left-[242px] text-white top-[249px] w-[1114.286px]"
            data-node-id="1:880"
          >
            <p
              className="font-['Plus_Jakarta_Sans:Bold'] font-bold relative shrink-0 text-[54.194px] whitespace-nowrap"
              data-node-id="1:881"
            >
              Ruang untuk Berkembang
            </p>
            <p
              className="font-['Plus_Jakarta_Sans:Medium'] font-medium relative shrink-0 text-[39.271px] text-right w-[1211px]"
              data-node-id="1:882"
            >
              Program pendampingan akademik yang mendukung mahasiswa TIK dalam mengembangkan
              kemampuan dan potensinya.
            </p>
          </div>
          <p
            className="-translate-x-1/2 [word-break:break-word] absolute font-[Arial] font-bold leading-[normal] left-[1159px] not-italic text-[#171717] text-[187.51px] text-center top-0 whitespace-nowrap"
            data-node-id="1:883"
          >
            ASAH
          </p>
          <li
            aria-hidden
            className="absolute left-[35px] list-none top-[288px] w-[238px] text-center"
          >
            <span className="font-[Arial] font-bold leading-[246px] text-[213.667px] text-transparent">
              02
            </span>
          </li>
        </div>
      </div>
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
      <div
        className="absolute content-stretch flex h-[109px] items-center justify-end left-0 pb-[51px] pt-[14px] px-[48px] right-0 top-0"
        data-node-id="1:923"
        data-name="Navbar"
      >
        <div
          className="absolute h-[109px] left-[-15px] top-0 w-[1470px]"
          data-node-id="1:924"
          data-name="Union"
        >
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUnion1} />
        </div>
        <div
          className="absolute content-stretch flex gap-[16px] h-[60px] items-center left-[48px] top-[24px]"
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
                className="absolute block inset-0 max-w-none size-full"
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
        <div
          className="content-stretch flex gap-[16px] h-[44px] items-center relative shrink-0"
          data-node-id="1:944"
          data-name="Menu utama"
        >
          <button
            onClick={() => scrollToSection("beranda")}
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
            onClick={() => scrollToSection("program-unggulan")}
            className="content-stretch cursor-pointer flex gap-[8px] h-[44px] items-center px-[16px] py-[10px] relative rounded-[2px] shrink-0 transition-colors hover:bg-white/10"
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
            onClick={() => scrollToSection("gerakan-inovasi")}
            className="content-stretch cursor-pointer flex gap-[8px] h-[44px] items-center px-[16px] py-[10px] relative rounded-[2px] shrink-0 transition-colors hover:bg-white/10"
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
            onClick={() => scrollToSection("filosofi-logo")}
            className="content-stretch cursor-pointer flex h-[44px] items-center px-[16px] py-[10px] relative rounded-[2px] shrink-0 transition-colors hover:bg-white/10"
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
      </div>
        </div>
      </div>
    </div>
  );
}