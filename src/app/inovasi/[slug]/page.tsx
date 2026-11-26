import { notFound } from "next/navigation";
import { getInnovation, innovations } from "@/data/innovations";
import NavbarSection from "@/components/sections/NavbarSection";
import MobileNavbar from "@/components/sections/MobileNavbar";
import DetailFooterSection, { Vote2Chibi } from "@/components/sections/DetailFooterSection";
import InnovationCarousel from "@/components/sections/InnovationCarousel";
import {
  bgDetailInovasi,
  bgNomorInovasi,
  gerakanInovasiBanner,
} from "@/lib/assets";

export function generateStaticParams() {
  return innovations.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const innovation = getInnovation(slug);
  if (!innovation) return {};
  return {
    title: `${innovation.title} - Gerakan Inovasi`,
    description: innovation.description,
  };
}

export default async function InovasiDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const innovation = getInnovation(slug);

  if (!innovation) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-[#171717] overflow-x-hidden">
      <MobileNavbar />
      <NavbarSection />

      {/* Tanpa padding-top agar banner langsung menempel dengan navbar tanpa gap */}
      <main>
        {/* Header Banner (gerakan-inovasi.png 1512x325, utuh sesuai vector) */}
        <section className="relative w-full aspect-[1512/325] min-h-[130px] overflow-hidden bg-white lg:h-[340px] lg:aspect-auto">
          <img
            src={gerakanInovasiBanner}
            alt=""
            className="absolute inset-0 z-0 h-full w-full object-cover sm:object-contain object-center"
          />
          <div className="relative z-10 flex h-full w-full items-center justify-center px-4 pt-8 min-[768px]:pt-12">
            <h1 className="font-[Arial] font-bold text-[10.5vw] sm:text-7xl md:text-8xl text-white text-center tracking-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.4)]">
              {innovation.title}
            </h1>
          </div>
        </section>

        {/* Description Box (bg-detail-inovasi.png 1217x193) */}
        <section className="mx-auto max-w-[1217px] px-4 pt-10 pb-8 sm:px-6 sm:pt-14 lg:px-0 lg:pt-[102px]">
          <div className="relative mx-auto flex min-h-[120px] max-w-full items-center justify-center px-6 py-6 sm:min-h-[160px] sm:px-14 sm:py-8 lg:h-[180px] lg:px-16 lg:py-0">
            <img
              src={bgDetailInovasi}
              alt=""
              aria-hidden
              className="pointer-events-none absolute inset-0 z-0 h-full w-full object-fill"
            />
            <p className="relative z-10 text-center font-['Plus_Jakarta_Sans:Bold'] text-sm font-bold leading-relaxed text-white sm:text-lg md:text-[30px]">
              {innovation.description}
            </p>
          </div>
        </section>

        {/* Numbered Points (Alternating Mentok Kiri/Kanan di Mobile & Desktop) */}
        <section className="w-full px-0 py-10 sm:py-14 lg:pt-[49px]">
          <div className="flex flex-col gap-8 sm:gap-14 lg:gap-20">
            {innovation.points.map((point, index) => {
              const num = index + 1;
              const isEven = num % 2 === 0;

              return (
                <article
                  key={index}
                  className={`flex items-center gap-4 sm:gap-8 lg:gap-12 ${
                    isEven
                      ? "flex-row-reverse pl-4 sm:pl-8 lg:pl-16"
                      : "flex-row pr-4 sm:pr-8 lg:pr-16"
                  }`}
                >
                  {/* Number Badge with bg-nomor-inovasi.png */}
                  <div className="relative flex h-20 w-20 shrink-0 items-center justify-center sm:h-28 sm:w-28 lg:h-[200px] lg:w-[200px]">
                    <img
                      src={bgNomorInovasi}
                      alt=""
                      aria-hidden
                      className={`pointer-events-none absolute inset-0 h-full w-full object-contain ${
                        isEven ? "-scale-x-100" : ""
                      }`}
                    />
                    <span className="relative z-10 font-[Arial] text-5xl font-black text-white drop-shadow-[0_2px_6px_rgba(86,76,248,0.6)] [-webkit-text-stroke:2px_#564cf8] sm:text-6xl lg:text-[128px]">
                      {num}
                    </span>
                  </div>

                  {/* Point Text */}
                  <p
                    className={`flex-1 font-['Plus_Jakarta_Sans:Medium'] text-sm font-medium leading-relaxed text-[#171717] sm:text-xl lg:text-[32px] xl:text-[36px] ${
                      isEven ? "text-right" : "text-left"
                    }`}
                  >
                    {point}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Preview Carousel (TIKTrack & Barnaby 2.0) */}
        {innovation.images && innovation.images.length > 0 && (
          <InnovationCarousel
            images={innovation.images}
            labels={innovation.carouselLabels}
            title={innovation.title}
          />
        )}

        {/* Chibi Vote2ForAkasha */}
        <Vote2Chibi />

        {/* Footer */}
        <DetailFooterSection />
      </main>
    </div>
  );
}
