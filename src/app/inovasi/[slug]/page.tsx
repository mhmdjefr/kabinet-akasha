import { notFound } from "next/navigation";
import { getInnovation, innovations } from "@/data/innovations";
import NavbarSection from "@/components/sections/NavbarSection";
import MobileNavbar from "@/components/sections/MobileNavbar";
import DetailFooterSection, { Vote2Chibi } from "@/components/sections/DetailFooterSection";
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
    title: `${innovation.title} — Gerakan Inovasi`,
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
        {/* Header Banner (gerakan-inovasi.png 1512x325) */}
        <section className="relative w-full min-h-[160px] sm:min-h-[220px] md:min-h-[260px] aspect-[1512/325] overflow-hidden bg-white">
          <img
            src={gerakanInovasiBanner}
            alt=""
            className="absolute inset-0 z-0 h-full w-full object-cover object-center"
          />
          <div className="relative z-10 flex h-full w-full items-center justify-center px-4 pt-10 min-[768px]:pt-16">
            <h1 className="font-[Arial] font-bold text-[11vw] sm:text-7xl md:text-8xl text-white text-center tracking-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.4)]">
              {innovation.title}
            </h1>
          </div>
        </section>

        {/* Description Box (bg-detail-inovasi.png 1217x193) */}
        <section className="mx-auto max-w-5xl px-4 pt-10 pb-8 sm:px-6 sm:pt-14">
          <div className="relative mx-auto flex min-h-[120px] sm:min-h-[160px] max-w-4xl items-center justify-center px-6 py-6 sm:px-14 sm:py-8">
            <img
              src={bgDetailInovasi}
              alt=""
              aria-hidden
              className="pointer-events-none absolute inset-0 z-0 h-full w-full object-fill"
            />
            <p className="relative z-10 text-center font-['Plus_Jakarta_Sans:Bold'] font-bold text-sm sm:text-lg md:text-xl leading-relaxed text-white">
              {innovation.description}
            </p>
          </div>
        </section>

        {/* Numbered Points (Alternating Left/Right, bg-nomor-inovasi.png 208x210) */}
        <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 sm:gap-14">
            {innovation.points.map((point, index) => {
              const num = index + 1;
              const isEven = num % 2 === 0;

              return (
                <article
                  key={index}
                  className={`flex flex-col sm:flex-row items-center gap-5 sm:gap-8 ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Number Badge with bg-nomor-inovasi.png */}
                  <div className="relative flex h-24 w-24 sm:h-32 sm:w-32 shrink-0 items-center justify-center">
                    <img
                      src={bgNomorInovasi}
                      alt=""
                      aria-hidden
                      className={`pointer-events-none absolute inset-0 h-full w-full object-contain ${
                        isEven ? "-scale-x-100" : ""
                      }`}
                    />
                    <span className="relative z-10 font-[Arial] font-black text-6xl sm:text-7xl text-white drop-shadow-[0_2px_6px_rgba(86,76,248,0.6)] [-webkit-text-stroke:2px_#564cf8]">
                      {num}
                    </span>
                  </div>

                  {/* Point Text */}
                  <p
                    className={`flex-1 font-['Plus_Jakarta_Sans:Medium'] font-medium text-base sm:text-xl leading-relaxed text-[#171717] text-center ${
                      isEven ? "sm:text-right" : "sm:text-left"
                    }`}
                  >
                    {point}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Chibi Vote2ForAkasha */}
        <Vote2Chibi />

        {/* Footer */}
        <DetailFooterSection />
      </main>
    </div>
  );
}
