import SimpleCarousel from "./SimpleCarousel";
import { getInnovation } from "@/data/innovations";

const innovation = getInnovation("barnaby")!;
const images = innovation.carouselLabels.map(
  (_, index) =>
    `https://placehold.co/600x400/eeeeee/333333?text=GAMBAR+${index + 1}`,
);

export default function BarnabyCard() {
  return (
    <article className="border-4 border-brand-black bg-brand-pink p-5 text-brand-black shadow-brutal-pink sm:p-8 lg:p-10">
      <div className="space-y-8 sm:space-y-10">
        <div>
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em]">
            Bisnis dan Kemitraan
          </p>
          <h2 className="font-display text-5xl font-black leading-[0.9] sm:text-6xl lg:text-7xl">
            {innovation.title}
          </h2>
          <p className="mt-6 text-base font-semibold leading-relaxed sm:text-lg">
            {innovation.description}
          </p>
          <ul className="mt-5 grid list-disc gap-x-10 gap-y-2 pl-5 text-sm leading-relaxed sm:text-base lg:grid-cols-2">
            {innovation.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <SimpleCarousel images={images} labels={innovation.carouselLabels} />
      </div>
    </article>
  );
}
