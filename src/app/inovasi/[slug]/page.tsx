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
        {/* Header Banner (gerakan-inovasi.png 1512x325, full width) */}
        <section className="relative w-full aspect-[1512/325] min-h-[130px] max-h-[240px] overflow-hidden bg-white">
          <img
            src={gerakanInovasiBanner}
            alt=""
            className="absolute inset-0 z-0 h-full w-full object-cover object-center"
          />
          <div className="relative z-10 flex h-full w-full items-center justify-center px-4 pt-8 min-[768px]:pt-10">
            <h1 className="font-[Arial] font-bold text-3xl sm:text-5xl lg:text-6xl text-white text-center tracking-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.4)]">
              {innovation.title}
            </h1>
          </div>
        </section>

        {/* Description Box (bg-detail-inovasi.png 1217x193) */}
        <section className="mx-auto max-w-4xl px-4 pt-8 pb-6 sm:px-6 sm:pt-12">
          <div className="relative mx-auto flex min-h-[110px] max-w-full items-center justify-center px-6 py-5 sm:min-h-[140px] sm:px-12 sm:py-6">
            <img
              src={bgDetailInovasi}
              alt=""
              aria-hidden
              className="pointer-events-none absolute inset-0 z-0 h-full w-full object-fill"
            />
            <p className="relative z-10 text-center font-['Plus_Jakarta_Sans:Bold'] text-sm font-bold leading-relaxed text-white sm:text-lg lg:text-xl">
              {innovation.description}
            </p>
          </div>
        </section>

        {/* Numbered Points (Alternating Kiri/Kanan, proporsional di layar lebar) */}
        <section className="mx-auto w-full max-w-6xl px-0 py-8 sm:py-12">
          <div className="flex flex-col gap-7 sm:gap-10 lg:gap-12">
            {innovation.points.map((point, index) => {
              const num = index + 1;
              const isEven = num % 2 === 0;

              return (
                <article
                  key={index}
                  className={`flex items-center gap-4 sm:gap-7 lg:gap-10 ${
                    isEven
                      ? "flex-row-reverse pl-4 sm:pl-10 lg:pl-12"
                      : "flex-row pr-4 sm:pr-10 lg:pr-12"
                  }`}
                >
                  {/* Number Badge with bg-nomor-inovasi.png */}
                  <div className="relative flex h-20 w-20 shrink-0 items-center justify-center sm:h-24 sm:w-24 lg:h-[130px] lg:w-[130px]">
                    <img
                      src={bgNomorInovasi}
                      alt=""
                      aria-hidden
                      className={`pointer-events-none absolute inset-0 h-full w-full object-contain ${
                        isEven ? "-scale-x-100" : ""
                      }`}
                    />
                    <span className="relative z-10 font-[Arial] text-4xl font-black text-white drop-shadow-[0_2px_6px_rgba(86,76,248,0.6)] [-webkit-text-stroke:2px_#564cf8] sm:text-5xl lg:text-7xl">
                      {num}
                    </span>
                  </div>

                  {/* Point Text */}
                  <p
                    className={`flex-1 font-['Plus_Jakarta_Sans:Medium'] text-sm font-medium leading-relaxed text-[#171717] sm:text-lg lg:text-2xl ${
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
