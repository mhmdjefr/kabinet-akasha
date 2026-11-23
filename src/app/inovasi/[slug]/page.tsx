import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getInnovation, innovations } from "@/data/innovations";
import NavbarSection from "@/components/sections/NavbarSection";
import MobileNavbar from "@/components/sections/MobileNavbar";

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
      ? "text-[#cfffa3]"
      : innovation.slug === "asah"
      ? "text-[#f786f8]"
      : "text-[#cfffa3]";

  return (
    <div className="min-h-screen bg-[#171717] text-white overflow-x-hidden">
      {/* Universal Desktop & Mobile Navbars */}
      <MobileNavbar />
      <NavbarSection />

      {/* Main Content with top padding for Navbar */}
      <main className="pt-[110px] pb-24 min-[768px]:pb-16">
        {/* Back Link Bar */}
        <div className="mx-auto max-w-5xl px-4 pt-4 sm:px-6">
          <Link
            href="/#gerakan-inovasi"
            className="inline-flex items-center gap-2 p-2 pr-5 text-sm font-bold text-white transition-all hover:brightness-110 active:scale-95"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(247, 47, 251) 0%, rgba(147, 28, 149, 0) 95%)",
            }}
          >
            <span>← Kembali ke Gerakan Inovasi</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 sm:py-20">
          {/* Background glow */}
          <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#564cf8]/20 blur-3xl" />

          <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className={`px-3.5 py-1 text-xs font-bold uppercase tracking-wider ${badgeColor}`}>
                Inovasi {innovation.number}
              </span>
              <span className="font-['Plus_Jakarta_Sans:Medium'] text-xs uppercase tracking-wider text-white/60">
                {innovation.category}
              </span>
            </div>

            <h1 className="mt-6 font-['Sansation:Bold'] text-5xl font-black uppercase tracking-tight text-white sm:text-7xl lg:text-8xl">
              {innovation.title}
            </h1>

            <p className={`mt-3 font-['Plus_Jakarta_Sans:Bold'] text-xl font-bold sm:text-2xl ${accentColor}`}>
              {innovation.tagline}
            </p>

            <p className="mt-6 max-w-3xl font-['Plus_Jakarta_Sans:Regular'] text-base leading-relaxed text-white/80 sm:text-lg">
              {innovation.description}
            </p>
          </div>
        </section>

        {/* Features / Details Section */}
        <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-16">
          <div className="mb-10">
            <span className="font-['Plus_Jakarta_Sans:Bold'] text-xs uppercase tracking-widest text-[#cfffa3]">
              Poin Penting & Pelaksanaan
            </span>
            <h2 className="mt-2 font-['Sansation:Bold'] text-3xl font-bold text-white sm:text-4xl">
              Langkah & Mekanisme Program
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {innovation.points.map((point, index) => (
              <div
                key={index}
                className="group relative border border-white/10 bg-[#212121] p-6 transition-all hover:border-[#564cf8]/50 hover:bg-[#252525]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-['Audiowide:Regular'] text-3xl font-black text-white/20 group-hover:text-[#cfffa3]/40 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-2 w-2 bg-[#564cf8]" />
                </div>
                <p className="mt-4 font-['Plus_Jakarta_Sans:Regular'] text-sm leading-relaxed text-white/90 sm:text-base">
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
                <h2 className="mt-2 font-['Sansation:Bold'] text-3xl font-bold text-white sm:text-4xl">
                  Tampilan Layar & Sistem
                </h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {innovation.images.map((src, i) => (
                  <div
                    key={i}
                    className="overflow-hidden border border-white/10 bg-[#212121] transition-all hover:border-white/30"
                  >
                    <div className="relative aspect-[4/3] w-full bg-[#171717]">
                      <Image
                        src={src}
                        alt={innovation.carouselLabels[i] || `${innovation.title} preview ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-['Plus_Jakarta_Sans:Bold'] text-sm font-bold text-white">
                        {innovation.carouselLabels[i] || `Tahap ${i + 1}`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Navigation to Other Innovations */}
          <div className="mt-24 border-t border-white/10 pt-12">
            <p className="text-center font-['Plus_Jakarta_Sans:Medium'] text-sm text-white/60">
              Inovasi lainnya dari Kabinet Akasha
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              {innovations
                .filter((item) => item.slug !== innovation.slug)
                .map((item) => (
                  <Link
                    key={item.slug}
                    href={`/inovasi/${item.slug}`}
                    className="inline-flex items-center gap-2 border border-white/10 bg-[#212121] px-5 py-2.5 text-sm font-bold text-white transition-all hover:border-[#cfffa3] hover:text-[#cfffa3]"
                  >
                    {item.title} →
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/10 py-10 text-center">
          <p className="font-['Plus_Jakarta_Sans:Regular'] text-xs text-white/40">
            © 2026 Kabinet Akasha — Ruang untuk Semua, Tumbuh dan Berdiri Bersama.
          </p>
        </footer>
      </main>
    </div>
  );
}
