import Image from "next/image";

const SRC = {
  boy: "/assets/char-boy.png",
  girl: "/assets/char-girl.png",
} as const;

// Kepala chibi hasil export Figma (PNG transparan).
export default function ChibiHead({
  variant,
  className = "",
}: {
  variant: keyof typeof SRC;
  className?: string;
}) {
  return (
    <Image
      src={SRC[variant]}
      alt=""
      width={1200}
      height={1200}
      className={className}
      aria-hidden
    />
  );
}
