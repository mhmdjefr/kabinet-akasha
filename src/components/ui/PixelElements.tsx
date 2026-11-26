import type { ReactNode } from "react";

/**
 * Kumpulan elemen dekoratif bergaya pixel/glitch yang dipakai di halaman detail
 * (Program, Inovasi, Filosofi Logo) agar tampilannya konsisten dengan desain.
 */

const TOP_STEPS =
  "M0 0 H120 V6 H114 V2 H108 V8 H101 V3 H95 V10 H88 V4 H81 V2 H74 V9 H67 V5 H60 V11 H53 V4 H46 V2 H39 V8 H32 V3 H25 V7 H18 V2 H11 V9 H4 V3 H0 Z";

const BOTTOM_STEPS =
  "M0 12 H120 V6 H114 V10 H108 V4 H101 V9 H95 V2 H88 V8 H81 V10 H74 V3 H67 V7 H60 V1 H53 V8 H46 V10 H39 V4 H32 V9 H25 V5 H18 V10 H11 V3 H4 V9 H0 Z";

export function PixelEdge({
  edge = "bottom",
  className = "",
}: {
  edge?: "top" | "bottom";
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 12"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-x-0 block h-full w-full ${className}`}
    >
      <path d={edge === "top" ? TOP_STEPS : BOTTOM_STEPS} fill="currentColor" />
    </svg>
  );
}

/** Kotak dengan outline bertingkat ala pixel (putih + aksen biru). */
export function PixelFrame({
  children,
  className = "",
  accentClassName = "bg-[#564cf8]",
}: {
  children: ReactNode;
  className?: string;
  accentClassName?: string;
}) {
  return (
    <div className="relative isolate">
      <span
        aria-hidden
        className={`absolute -inset-[13px] -z-10 [clip-path:polygon(0%_8%,5%_8%,5%_0%,95%_0%,95%_8%,100%_8%,100%_92%,95%_92%,95%_100%,5%_100%,5%_92%,0%_92%)] ${accentClassName}`}
      />
      <span
        aria-hidden
        className="absolute -inset-[7px] -z-10 bg-white [clip-path:polygon(0%_8%,4%_8%,4%_0%,96%_0%,96%_8%,100%_8%,100%_92%,96%_92%,96%_100%,4%_100%,4%_92%,0%_92%)]"
      />
      <div className={className}>{children}</div>
    </div>
  );
}

/** Pill judul section (Bentuk / Warna) dengan border pixel putih dan offset biru. */
export function PixelPill({ children }: { children: ReactNode }) {
  return (
    <div className="relative inline-flex items-center justify-center">
      <span
        aria-hidden
        className="absolute -inset-x-5 -inset-y-3 bg-[#564cf8] [clip-path:polygon(0%_22%,5%_22%,5%_8%,9%_8%,9%_0%,91%_0%,91%_8%,95%_8%,95%_22%,100%_22%,100%_78%,95%_78%,95%_92%,91%_92%,91%_100%,9%_100%,9%_92%,5%_92%,5%_78%,0%_78%)]"
      />
      <span
        aria-hidden
        className="absolute -inset-x-4 -inset-y-2 bg-white [clip-path:polygon(0%_22%,5%_22%,5%_8%,9%_8%,9%_0%,91%_0%,91%_8%,95%_8%,95%_22%,100%_22%,100%_78%,95%_78%,95%_92%,91%_92%,91%_100%,9%_100%,9%_92%,5%_92%,5%_78%,0%_78%)]"
      />
      <span className="relative flex h-[72px] w-[280px] items-center justify-center bg-[#f786f8] sm:h-[96px] sm:w-[420px] md:h-[128px] md:w-[560px]">
        {children}
      </span>
    </div>
  );
}

/** Strip gradasi lime → pink → biru dengan ujung bertingkat. */
export function PixelStripe({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute [clip-path:polygon(0_18%,6%_18%,6%_0,100%_0,100%_82%,94%_82%,94%_100%,0_100%)] [background:linear-gradient(90deg,#cfffa3_0%,#cfffa3_32%,#f786f8_55%,#564cf8_100%)] ${className}`}
    />
  );
}

/** Blok dekorasi gradasi di tepi kiri/kanan halaman. */
export function EdgeGlitch({
  side = "left",
  className = "",
}: {
  side?: "left" | "right";
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute hidden flex-col gap-1 sm:flex ${
        side === "left" ? "left-0 items-start" : "right-0 items-end"
      } ${className}`}
    >
      <span className="h-4 w-16 bg-[#cfffa3]" />
      <span
        className={`h-4 w-28 ${
          side === "left"
            ? "bg-gradient-to-r from-[#f786f8] via-[#564cf8]/70 to-transparent"
            : "bg-gradient-to-l from-[#f786f8] via-[#564cf8]/70 to-transparent"
        }`}
      />
      <span
        className={`h-3 w-20 ${
          side === "left"
            ? "bg-gradient-to-r from-[#cfffa3]/80 to-transparent"
            : "bg-gradient-to-l from-[#cfffa3]/80 to-transparent"
        }`}
      />
    </div>
  );
}
