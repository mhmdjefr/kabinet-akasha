import { ArrowRight } from "lucide-react";

export default function SectionTentang() {
  return (
    <section id="tentang" className="relative overflow-hidden bg-lime px-6 py-28 md:px-16">
      <div className="relative mx-auto w-full max-w-5xl">
        <p className="mb-10 text-xs font-bold tracking-[0.3em]">01 / TENTANG KAMI</p>
        <div className="grid gap-16 md:grid-cols-2">
          <h2 className="headline text-[clamp(2.6rem,7vw,6rem)]">
            RUANG TUMBUH UNTUK CERITA YANG BELUM SELESAI.
          </h2>
          <div className="flex flex-col justify-end gap-8">
            <p className="max-w-sm text-sm font-medium leading-relaxed md:text-base">
              Kabinet Akasha hadir sebagai tempat bertemunya ide, karakter, dan
              eksperimen visual. Kami merangkai cerita lewat video, animasi, dan
              kejutan kecil.
            </p>
            <a href="#agenda" className="group inline-flex w-fit items-center gap-2 font-bold no-underline">
              <span className="underline decoration-2 underline-offset-4">Lihat perjalanan kami</span>
              <ArrowRight aria-hidden="true" size={18} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
            </a>
            <p className="-mt-4 self-end rotate-[-6deg] font-hand text-[clamp(4rem,8vw,7rem)] leading-none text-violet">
              cerita!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
