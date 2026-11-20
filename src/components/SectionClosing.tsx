import Image from "next/image";
import ChibiHead from "./ChibiHead";

export default function SectionClosing() {
  return (
    <section id="teaser" className="bg-pinky">
      <div className="relative mx-auto flex min-h-[80vh] w-full max-w-5xl flex-col items-center justify-center overflow-hidden px-6 py-28 text-center">
        <p className="mb-12 text-xs font-bold tracking-[0.3em] text-ink/70">04 / JANGAN KE MANA-MANA</p>

        <ChibiHead variant="boy" className="absolute left-[2%] top-1/2 w-[clamp(10rem,25vw,25rem)] -translate-y-1/2 xl:left-[-8%]" />
        <ChibiHead variant="girl" className="absolute right-[2%] top-1/2 w-[clamp(10rem,25vw,25rem)] -translate-y-1/2 xl:right-[-8%]" />
        <h2 className="headline mx-auto max-w-[10ch] text-[clamp(2.4rem,7vw,5.5rem)]">
          SESUATU YANG SERU SEDANG DIRACIK.
        </h2>
        <p className="mt-8 max-w-md text-sm font-medium leading-relaxed">
          Ikuti perjalanan kami dan jadi yang pertama melihat ceritanya.
        </p>
        <a href="#" className="mt-10 text-xs font-bold underline decoration-2 underline-offset-4">
          Kembali ke atas &uarr;
        </a>
      </div>

      <footer className="border-t border-ink bg-ink px-6 py-3">
        <div className="mx-auto flex w-full max-w-[515px] flex-col items-center justify-between gap-2 sm:flex-row sm:gap-4">
          <p className="font-display text-[clamp(1.5rem,5vw,3rem)] font-normal leading-none text-white">
            COMING SOON
          </p>
          <p className="shrink-0 font-sans text-[12px] text-white/80 sm:order-first">&copy; 2026 Kabinet Akasha</p>
        </div>
      </footer>
    </section>
  );
}
