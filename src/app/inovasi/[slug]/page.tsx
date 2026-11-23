import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getInnovation, innovations } from "@/data/innovations";
import NavbarSection from "@/components/sections/NavbarSection";
import MobileNavbar from "@/components/sections/MobileNavbar";
import {
  innovationBackgroundPhoto,
  tikTrackHeaderStrip,
  asahHeaderStrip,
  barnabyHeaderStrip,
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
    title: `${innovation.title} — Gerakan Inovasi Kabinet Akasha`,
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

  const badgeColor =
    innovation.slug === "tiktrack"
      ? "bg-[#564cf8] text-white"
      : innovation.slug === "asah"
      ? "bg-[#f786f8] text-[#171717]"
      : "bg-[#cfffa3] text-[#171717]";

  const accentColor =
    innovation.slug === "tiktrack"
      ? "text-[#564cf8]"
      : innovation.slug === "asah"
      ? "text-[#f786f8]"
      : "text-[#564cf8]";

  const headerStrip =
    innovation.slug === "tiktrack"
      ? tikTrackHeaderStrip
      : innovation.slug === "asah"
      ? asahHeaderStrip
      : barnabyHeaderStrip;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fcfdfb] text-[#171717]">
      {/* Universal Desktop & Mobile Navbars */}
      <MobileNavbar />
      <NavbarSection />

      {/* Main Content with top padding for Navbar */}
      <main className="pt-[110px] pb-24 min-[768px]:pb-16">
        {/* Back Link Bar */}
        <div className="mx-auto max-w-5xl px-4 pt-4 sm:px-6">
          <Link
            href="/#gerakan-inovasi"
            className="inline-flex items-center gap-2 p-2 pr-5 text-sm font-bold text-[#171717] transition-all hover:brightness-95 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#564cf8] active:scale-95"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(247, 47, 251, 0.28) 0%, rgba(247, 47, 251, 0) 95%)",
            }}
          >
            <span>← Kembali ke Gerakan Inovasi</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 sm:py-20">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-full max-w-[760px] opacity-[0.09]">
            <Image
              src={innovationBackgroundPhoto}
              alt=""
              fill
              className="object-cover object-right"
              sizes="760px"
            />
          </div>
          <Image
            src={headerStrip}
            alt=""
            aria-hidden="true"
            width={592}
            height={90}
            className="pointer-events-none absolute right-0 top-8 h-[90px] w-[44%] min-w-[320px] max-w-[592px] object-cover"
          />

          <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className={`px-3.5 py-1 text-xs font-bold uppercase tracking-wider ${badgeColor}`}>
                Inovasi {innovation.number}
              </span>
              <span className="font-['Plus_Jakarta_Sans:Medium'] text-xs uppercase tracking-wider text-[#171717]/60">
                {innovation.category}
              </span>
            </div>

            <h1 className="mt-6 font-['Sansation:Bold'] text-5xl font-black uppercase tracking-tight text-[#171717] sm:text-7xl lg:text-8xl">
              {innovation.title}
            </h1>

            <p className={`mt-3 font-['Plus_Jakarta_Sans:Bold'] text-xl font-bold sm:text-2xl ${accentColor}`}>
              {innovation.tagline}
            </p>

            <p className="mt-6 max-w-3xl font-['Plus_Jakarta_Sans:Regular'] text-base leading-relaxed text-[#171717]/80 sm:text-lg">
              {innovation.description}
            </p>
          </div>
        </section>

        {/* Features / Details Section */}
        <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-16">
          <div className="mb-10">
            <span className="font-['Plus_Jakarta_Sans:Bold'] text-xs uppercase tracking-widest text-[#564cf8]">
              Poin Penting & Pelaksanaan
            </span>
            <h2 className="mt-2 font-['Sansation:Bold'] text-3xl font-bold text-[#171717] sm:text-4xl">
              Langkah & Mekanisme Program
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {innovation.points.map((point, index) => (
              <div
                key={index}
                className="group relative border border-[#171717]/10 bg-white p-6 shadow-sm transition-all hover:border-[#564cf8]/50 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="font-['Audiowide:Regular'] text-3xl font-black text-[#564cf8]/20 transition-colors group-hover:text-[#564cf8]/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={`h-2 w-2 ${innovation.slug === "asah" ? "bg-[#f786f8]" : innovation.slug === "barnaby" ? "bg-[#cfffa3]" : "bg-[#564cf8]"}`} />
                </div>
                <p className="mt-4 font-['Plus_Jakarta_Sans:Regular'] text-sm leading-relaxed text-[#171717]/85 sm:text-base">
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* Gallery / Mockups if available */}
          {innovation.images && innovation.images.length > 0 && (
            <div className="mt-20">
              <div className="mb-8">
                <span className="font-['Plus_Jakarta_Sans:Bold'] text-xs uppercase tracking-widest text-[#f786f8]">
                  Alur & Antarmuka
                </span>
                <h2 className="mt-2 font-['Sansation:Bold'] text-3xl font-bold text-[#171717] sm:text-4xl">
                  Tampilan Layar & Sistem
                </h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {innovation.images.map((src, i) => (
                  <div
                    key={i}
                    className="overflow-hidden border border-[#171717]/10 bg-white shadow-sm transition-all hover:border-[#564cf8]/40 hover:shadow-md"
                  >
                    <div className="relative aspect-[4/3] w-full bg-[#f3f4ef]">
                      <Image
                        src={src}
                        alt={innovation.carouselLabels[i] || `${innovation.title} preview ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-['Plus_Jakarta_Sans:Bold'] text-sm font-bold text-[#171717]">
                        {innovation.carouselLabels[i] || `Tahap ${i + 1}`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Navigation to Other Innovations */}
          <div className="mt-24 border-t border-[#171717]/10 pt-12">
            <p className="text-center font-['Plus_Jakarta_Sans:Medium'] text-sm text-[#171717]/60">
              Inovasi lainnya dari Kabinet Akasha
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              {innovations
                .filter((item) => item.slug !== innovation.slug)
                .map((item) => (
                  <Link
                    key={item.slug}
                    href={`/inovasi/${item.slug}`}
                    className="inline-flex items-center gap-2 border border-[#564cf8]/25 bg-white px-5 py-2.5 text-sm font-bold text-[#564cf8] transition-all hover:border-[#564cf8] hover:bg-[#564cf8] hover:text-white focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#564cf8]"
                  >
                    {item.title}
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-[#171717]/10 py-10 text-center">
          <p className="font-['Plus_Jakarta_Sans:Regular'] text-xs text-[#171717]/50">
            © 2026 Kabinet Akasha — Ruang untuk Semua, Tumbuh dan Berdiri Bersama.
          </p>
        </footer>
      </main>
    </div>
  );
}
