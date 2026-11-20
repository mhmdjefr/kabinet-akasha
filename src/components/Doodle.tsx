import Image from "next/image";

// Doodle garis hasil export Figma (Vector 22-31), di-rename jadi doodle-XX.png.
// Vector 27 warna putih — cocok dipakai di atas background gelap.
export default function Doodle({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <Image
      src={`/assets/${name}`}
      alt=""
      width={400}
      height={400}
      className={`pointer-events-none select-none ${className}`}
      aria-hidden
    />
  );
}
