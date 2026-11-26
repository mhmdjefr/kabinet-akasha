import { notFound } from "next/navigation";
import { getInnovation, innovations } from "@/data/innovations";
import NavbarSection from "@/components/sections/NavbarSection";
import MobileNavbar from "@/components/sections/MobileNavbar";
import DetailFooterSection, { Vote2Chibi } from "@/components/sections/DetailFooterSection";
import { innovationBackgroundPhoto } from "@/lib/assets";

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
        <section className="relative w-full h-[180px] sm:h-[230px] md:h-[260px] overflow-hidden bg-[#564cf8]">
          <img
            src={innovationBackgroundPhoto}
            alt=""
            className="h-full w-full object-cover opacity-45 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#4137e2]/80 via-[#564cf8]/60 to-[#564cf8]/80 flex items-center justify-center px-4">
            <h1 className="font-[Arial] font-bold text-5xl sm:text-7xl md:text-8xl text-white text-center tracking-tight drop-shadow-lg">
              {innovation.title}
            </h1>
          </div>
          {/* Bottom gradient strip */}
          <div className="absolute bottom-0 inset-x-0 h-3 bg-gradient-to-r from-[#cfffa3] via-[#564cf8] to-[#f786f8]" />
        </section>

        {/* Description Box */}
        <section className="mx-auto max-w-4xl px-4 pt-12 pb-8 sm:px-6 sm:pt-16">
          <div className="relative mx-auto max-w-2xl bg-[#564cf8] px-6 py-6 sm:px-10 sm:py-8 text-center text-white shadow-[6px_6px_0_#cfffa3] border-2 border-[#171717]">
            <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-sm sm:text-lg leading-relaxed">
              {innovation.description}
            </p>
          </div>
        </section>

        {/* Numbered Points (Alternating Left/Right) */}
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
                  {/* Number Badge with Gradient Strip */}
                  <div
                    className={`relative flex h-24 w-32 sm:h-28 sm:w-40 shrink-0 items-center justify-center ${
                      isEven
                        ? "bg-gradient-to-l from-[#f786f8]/60 via-[#564cf8]/30 to-transparent"
                        : "bg-gradient-to-r from-[#cfffa3]/70 via-[#564cf8]/30 to-transparent"
                    }`}
                  >
                    <span className="font-[Arial] font-black text-6xl sm:text-7xl text-white drop-shadow-[0_2px_6px_rgba(86,76,248,0.6)] [-webkit-text-stroke:2px_#564cf8]">
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
