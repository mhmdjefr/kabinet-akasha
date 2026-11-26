import { notFound } from "next/navigation";
import { getInnovation, innovations } from "@/data/innovations";
import NavbarSection from "@/components/sections/NavbarSection";
import MobileNavbar from "@/components/sections/MobileNavbar";
import DetailFooterSection, { Vote2Chibi } from "@/components/sections/DetailFooterSection";
import { innovationBackgroundPhoto } from "@/lib/assets";
import { PixelEdge, PixelFrame, PixelStripe } from "@/components/ui/PixelElements";

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

      <main className="pt-[60px] min-[768px]:pt-[90px]">
        {/* Header Banner */}
        <section className="relative w-full h-[200px] sm:h-[260px] md:h-[310px] overflow-hidden bg-[#8c1fac]">
          <img
            src={innovationBackgroundPhoto}
            alt=""
            className="h-full w-full object-cover opacity-80 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2c0a3a]/70 via-[#8c1fac]/45 to-[#2c0a3a]/85" />
          <div className="relative z-10 flex h-full items-center justify-center px-4 pb-5">
            <h1 className="bg-gradient-to-b from-white via-[#ece8ff] to-[#b6adff] bg-clip-text font-[Arial] font-bold text-5xl sm:text-7xl md:text-8xl text-center text-transparent tracking-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)]">
              {innovation.title}
            </h1>
          </div>

          {/* Pixelated top border */}
          <div className="absolute inset-x-0 top-0 h-3 sm:h-4 text-white">
            <PixelEdge edge="top" />
          </div>

          {/* Lime band + pixelated bottom border */}
          <div className="absolute bottom-4 inset-x-0 h-2 sm:h-3 bg-[#cfffa3]" />
          <div className="absolute bottom-0 inset-x-0 h-5 sm:h-7 text-[#564cf8]">
            <PixelEdge edge="bottom" />
          </div>
          <div className="absolute bottom-0 inset-x-0 h-4 sm:h-6 text-white">
            <PixelEdge edge="bottom" />
          </div>
        </section>

        {/* Description Box */}
        <section className="mx-auto max-w-4xl px-6 pb-10 pt-14 sm:px-6 sm:pt-20">
          <div className="mx-auto max-w-2xl">
            <PixelFrame className="bg-[#564cf8] px-6 py-6 sm:px-10 sm:py-8 text-center text-white">
              <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-sm sm:text-lg leading-relaxed">
                {innovation.description}
              </p>
            </PixelFrame>
          </div>
        </section>

        {/* Numbered Points (Alternating Left/Right) */}
        <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="flex flex-col gap-12 sm:gap-16">
            {innovation.points.map((point, index) => {
              const num = index + 1;
              const isEven = num % 2 === 0;

              return (
                <article
                  key={index}
                  className={`flex items-center gap-4 sm:gap-10 ${
                    isEven ? "flex-row-reverse" : ""
                  }`}
                >
                  {/* Number Badge with Gradient Strip */}
                  <div className="relative flex h-[104px] w-[104px] shrink-0 items-center justify-center sm:h-[150px] sm:w-[170px]">
                    <PixelStripe
                      className={`top-3 h-8 w-[150%] sm:h-11 ${
                        isEven ? "right-0 rotate-180" : "left-0"
                      }`}
                    />
                    <PixelStripe
                      className={`top-11 h-3 w-[120%] opacity-80 sm:top-14 ${
                        isEven ? "right-2 rotate-180" : "left-2"
                      }`}
                    />
                    <span
                      className="relative z-10 bg-gradient-to-b from-white via-[#ece8ff] to-[#a9a0ff] bg-clip-text font-[Arial] font-black text-[78px] sm:text-[112px] leading-none text-transparent [-webkit-text-stroke:3px_#564cf8] drop-shadow-[0_4px_10px_rgba(86,76,248,0.45)]"
                    >
                      {num}
                    </span>
                  </div>

                  {/* Point Text */}
                  <p
                    className={`flex-1 font-['Plus_Jakarta_Sans:Medium'] font-medium text-base sm:text-xl leading-relaxed text-[#171717] ${
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

        {/* Chibi Vote2ForAkasha */}
        <Vote2Chibi />

        {/* Footer */}
        <DetailFooterSection />
      </main>
    </div>
  );
}
