import { notFound } from "next/navigation";
import { getProgram, programs } from "@/data/programs";
import NavbarSection from "@/components/sections/NavbarSection";
import MobileNavbar from "@/components/sections/MobileNavbar";
import DetailFooterSection, { Vote2Chibi } from "@/components/sections/DetailFooterSection";
import { programKanan, programKiri } from "@/lib/assets";

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

      {/* Tanpa padding-top agar banner langsung menempel dengan navbar tanpa gap */}
      <main>
        {/* Header Banner (1-group asset itechno.png / saum.png / tikgames.png) */}
        <section className="relative w-full min-h-[200px] sm:min-h-[280px] md:min-h-[340px] aspect-[1636/569] overflow-hidden bg-white">
          <img
            src={program.bannerImage}
            alt=""
            className="absolute inset-0 z-0 h-full w-full object-cover object-center"
          />
          <div className="relative z-10 flex h-full w-full items-center justify-center px-4 pt-10 min-[768px]:pt-16">
            <h1 className="font-[Arial] font-bold text-[10vw] sm:text-7xl md:text-8xl text-[#cfffa3] text-center tracking-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">
              {program.title}
            </h1>
          </div>
        </section>

        {/* Diamond Logo & Description */}
        <section className="relative w-full py-12 sm:py-16">
          {/* Dekorasi strip kiri-kanan menggunakan asset program-kiri.png & program-kanan.png */}
          <img
            src={programKiri}
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-0 top-[110px] sm:top-[130px] w-[28vw] max-w-[380px] h-auto object-contain"
          />
          <img
            src={programKanan}
            alt=""
            aria-hidden
            className="pointer-events-none absolute right-0 top-[110px] sm:top-[130px] w-[28vw] max-w-[380px] h-auto object-contain"
          />

          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
            {/* Diamond Box */}
            <div className="flex justify-center">
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
