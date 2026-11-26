import { notFound } from "next/navigation";
import { getProgram, programs } from "@/data/programs";
import NavbarSection from "@/components/sections/NavbarSection";
import MobileNavbar from "@/components/sections/MobileNavbar";
import DetailFooterSection, { Vote2Chibi } from "@/components/sections/DetailFooterSection";

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
        {/* Header Banner */}
        <section className="relative w-full h-[180px] sm:h-[240px] md:h-[280px] overflow-hidden bg-[#564cf8]">
          <img
            src={program.bannerImage}
            alt=""
            className="h-full w-full object-cover opacity-60 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#564cf8]/60 via-[#564cf8]/50 to-[#171717]/70 flex items-center justify-center px-4">
            <h1 className="font-[Arial] font-bold text-4xl sm:text-6xl md:text-7xl text-[#cfffa3] text-center tracking-tight drop-shadow-lg">
              {program.title}
            </h1>
          </div>
          {/* Bottom pixelated border accent */}
          <div className="absolute bottom-0 inset-x-0 h-3 bg-white [clip-path:polygon(0_100%,15%_100%,15%_0,35%_0,35%_100%,60%_100%,60%_0,85%_0,85%_100%,100%_100%)]" />
        </section>

        {/* Diamond Logo & Description */}
        <section className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
          {/* Dekorasi gradient strip kiri-kanan */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 top-24 hidden sm:block h-20 w-36 bg-gradient-to-r from-[#cfffa3]/70 via-[#564cf8]/40 to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-24 hidden sm:block h-20 w-36 bg-gradient-to-l from-[#f786f8]/70 via-[#564cf8]/40 to-transparent"
          />

          {/* Diamond Box */}
          <div className="relative z-10 flex justify-center my-6 sm:my-10">
            <div className="relative flex h-48 w-48 sm:h-56 sm:w-56 items-center justify-center rotate-45 border-[5px] border-[#f786f8] bg-[#171717] shadow-[0_14px_35px_rgba(0,0,0,0.22)]">
              <div className="-rotate-45 flex items-center justify-center p-6 w-full h-full">
                <img
                  src={program.logo}
                  alt={program.title}
                  className="max-h-32 sm:max-h-36 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="mx-auto mt-14 sm:mt-16 max-w-2xl text-center font-['Plus_Jakarta_Sans:Medium'] font-medium text-base sm:text-xl leading-relaxed text-[#171717]">
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
