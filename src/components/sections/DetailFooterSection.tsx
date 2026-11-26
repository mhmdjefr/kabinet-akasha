import FooterSection from "@/components/sections/FooterSection";
import { programKanan, stripFooter, vote2ForAkasha } from "@/lib/assets";

export function Vote2Chibi() {
  return (
    <div className="relative flex justify-center py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      {/* Dekorasi strip vertikal kiri bawah (strip-footer.png) & horizontal kanan bawah (program-kanan.png) */}
      <img
        src={stripFooter}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-0 bottom-0 w-[12vw] max-w-[140px] lg:max-w-[160px] h-auto object-contain"
      />
      <img
        src={programKanan}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-4 w-[20vw] max-w-[220px] lg:max-w-[240px] h-auto object-contain opacity-90"
      />
      <img
        src={vote2ForAkasha}
        alt="Vote 2 For Akasha"
        className="relative z-10 w-[75vw] max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] h-auto object-contain"
      />
    </div>
  );
}

export default function DetailFooterSection() {
  return <FooterSection />;
}
