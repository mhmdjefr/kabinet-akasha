import { notFound } from "next/navigation";
import { getProgram, programs } from "@/data/programs";
import NavbarSection from "@/components/sections/NavbarSection";
import MobileNavbar from "@/components/sections/MobileNavbar";
import DetailFooterSection, { Vote2Chibi } from "@/components/sections/DetailFooterSection";
import { EdgeGlitch } from "@/components/ui/PixelElements";
import { vectorProgram } from "@/lib/assets";

export function generateStaticParams() {
  return programs.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return {};
  return {
    title: `${program.title} — Program Unggulan`,
    description: program.description,
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgram(slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-[#171717] overflow-x-hidden">
      <MobileNavbar />
      <NavbarSection />

      <main className="pt-[60px] min-[768px]:pt-[90px]">
        {/* Header Banner (stack bannerImage + vector-program, rasio 1:1 tanpa stretch) */}
        <section className="relative w-full aspect-[1512/511] overflow-hidden bg-white">
          <img
            src={program.bannerImage}
            alt=""
            className="absolute inset-0 z-0 h-full w-full object-contain"
          />
          <img
            src={vectorProgram}
            alt=""
            className="pointer-events-none absolute inset-0 z-10 h-full w-full object-contain"
          />
          <div className="relative z-20 flex h-full w-full items-center justify-center px-4">
            <h1 className="font-[Arial] font-bold text-[10vw] sm:text-7xl md:text-8xl text-[#cfffa3] text-center tracking-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">
              {program.title}
            </h1>
          </div>
        </section>

        {/* Diamond Logo & Description */}
        <section className="relative mx-auto max-w-4xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20">
          {/* Dekorasi gradient strip kiri-kanan, sejajar tengah diamond */}
          <EdgeGlitch side="left" className="top-1/2 -translate-y-1/2" />
          <EdgeGlitch side="right" className="top-1/2 -translate-y-1/2" />

          {/* Diamond Box */}
          <div className="relative z-10 flex justify-center">
            <div className="rotate-45 border-[6px] border-[#f786f8] bg-white p-[4px] shadow-[0_18px_45px_rgba(86,76,248,0.22)]">
              <div className="flex h-[180px] w-[180px] items-center justify-center bg-[#171717] sm:h-[236px] sm:w-[236px] md:h-[264px] md:w-[264px]">
                <img
                  src={program.logo}
                  alt={program.title}
                  className="h-auto w-auto max-h-[115px] sm:max-h-[150px] md:max-h-[170px] max-w-[115px] sm:max-w-[150px] md:max-w-[170px] -rotate-45 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="mx-auto mt-20 sm:mt-24 max-w-2xl text-center font-['Plus_Jakarta_Sans:Medium'] font-medium text-base sm:text-xl leading-relaxed text-[#171717]">
            {program.description}
          </p>
        </section>

        {/* Chibi Vote2ForAkasha */}
        <Vote2Chibi />

        {/* Footer */}
        <DetailFooterSection />
      </main>
    </div>
  );
}
