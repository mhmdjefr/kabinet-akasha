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
    title: `${program.title} - Program Unggulan`,
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
        {/* Header Banner (1-group asset itechno.png / saum.png / tikgames.png, full width) */}
        <section className="relative w-full aspect-[1636/569] min-h-[160px] max-h-[340px] overflow-hidden bg-white">
          <img
            src={program.bannerImage}
            alt=""
            className="absolute inset-0 z-0 h-full w-full object-cover object-center"
          />
          <div className="relative z-10 flex h-full w-full items-center justify-center px-4 pt-8 min-[768px]:pt-10">
            <h1 className="font-[Arial] text-center text-4xl font-bold tracking-tight text-[#cfffa3] drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-6xl">
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
            className="pointer-events-none absolute left-0 top-[96px] sm:top-[116px] w-[22vw] max-w-[320px] h-auto object-contain"
          />
          <img
            src={programKanan}
            alt=""
            aria-hidden
            className="pointer-events-none absolute right-0 top-[96px] sm:top-[116px] w-[22vw] max-w-[320px] h-auto object-contain"
          />

          <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
            {/* Diamond Box */}
            <div className="flex justify-center">
              <div className="rotate-45 border-[5px] border-[#f786f8] bg-white p-[3px] shadow-[0_14px_35px_rgba(86,76,248,0.2)]">
                <div className="flex h-[160px] w-[160px] items-center justify-center bg-[#171717] sm:h-[210px] sm:w-[210px] lg:h-[240px] lg:w-[240px]">
                  <img
                    src={program.logo}
                    alt={program.title}
                    className="h-auto w-auto max-h-[100px] sm:max-h-[135px] lg:max-h-[155px] max-w-[100px] sm:max-w-[135px] lg:max-w-[155px] -rotate-45 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="mx-auto mt-16 max-w-3xl text-center font-['Plus_Jakarta_Sans:Medium'] text-base font-medium leading-relaxed text-[#171717] sm:mt-20 sm:text-lg lg:text-[22px]">
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
