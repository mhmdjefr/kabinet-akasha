import Image from "next/image";
import Doodle from "./Doodle";

// Hero memakai asset full-section hasil export Figma (komposisi + teks sudah final).
export default function Hero() {
  return (
    <section className="relative aspect-[4/3] overflow-hidden bg-violet sm:aspect-[2/1] lg:aspect-auto lg:min-h-[100svh]">
      <Image
        src="/assets/hero-section.png"
        alt="Kabinet Akasha — Coming Soon"
        fill
        priority
        sizes="100vw"
        className="object-contain object-center lg:object-cover"
      />

      {/* Video auto-play di dalam area greenscreen */}
      <div
        className="pointer-events-none absolute left-1/2 top-[50.8%] z-10 aspect-[2089/1059] w-[32.24%] overflow-hidden lg:h-[max(16.34vw,39.22svh)] lg:w-[max(32.24vw,77.38svh)]"
        style={{
          transform: "translate(-50%, -50%)",
          clipPath: "ellipse(50% 50% at 50% 50%)",
        }}
      >
        <video
          src="/assets/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />
      </div>

      <Doodle name="doodle-22.png" className="absolute left-[3%] top-[10%] z-20 w-[clamp(1.5rem,3vw,2.5rem)] -rotate-12 opacity-40" />
      <Doodle name="doodle-23.png" className="absolute left-[13%] top-[8%] z-20 w-[clamp(1.5rem,3vw,2.5rem)] rotate-6 opacity-40" />
      <Doodle name="doodle-24.png" className="absolute left-[24%] top-[12%] z-20 w-[clamp(1.5rem,3vw,2.5rem)] -rotate-12 opacity-40" />
      <Doodle name="doodle-25.png" className="absolute left-[35%] top-[8%] z-20 w-[clamp(1.5rem,3vw,2.5rem)] rotate-12 opacity-40" />
      <Doodle name="doodle-26.png" className="absolute right-[35%] top-[8%] z-20 w-[clamp(1.5rem,3vw,2.5rem)] rotate-6 opacity-40" />
      <Doodle name="doodle-27.png" className="absolute right-[24%] top-[12%] z-20 w-[clamp(1.5rem,3vw,2.5rem)] -rotate-6 opacity-40" />
      <Doodle name="doodle-28.png" className="absolute right-[13%] top-[8%] z-20 w-[clamp(1.5rem,3vw,2.5rem)] rotate-12 opacity-40" />
      <Doodle name="doodle-29.png" className="absolute right-[3%] top-[10%] z-20 w-[clamp(1.5rem,3vw,2.5rem)] rotate-6 opacity-40" />
      <Doodle name="doodle-30.png" className="absolute left-[45%] top-[8%] z-20 w-[clamp(1.5rem,3vw,2.5rem)] -rotate-12 opacity-40" />
      <Doodle name="doodle-31.png" className="absolute right-[45%] top-[8%] z-20 w-[clamp(1.5rem,3vw,2.5rem)] rotate-6 opacity-40" />
    </section>
  );
}