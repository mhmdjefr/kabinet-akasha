import SimpleCarousel from "./SimpleCarousel";
import { getInnovation } from "@/data/innovations";

const innovation = getInnovation("tiktrack")!;
const images =
  innovation.images ??
  innovation.carouselLabels.map(
    (_, index) =>
      `https://placehold.co/600x400/eeeeee/333333?text=GAMBAR+${index + 1}`,
  );

export default function TikTrackCard() {
  return (
    <article className="border-4 border-brand-black bg-white p-5 text-brand-black shadow-brutal sm:p-8 lg:p-10">
      <div className="space-y-8 sm:space-y-10">
        <div>
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-black/70">
            Sistem Informasi HIMATIK
          </p>
          <h2 className="font-display text-5xl font-black leading-[0.9] text-brand-blue sm:text-6xl lg:text-7xl">
            {innovation.title}
          </h2>
          <p className="mt-6 text-base font-semibold leading-relaxed sm:text-lg">
            {innovation.description}
          </p>
          <ul className="mt-5 grid list-disc gap-x-10 gap-y-3 pl-5 text-sm leading-relaxed sm:text-base lg:grid-cols-2">
            {innovation.points.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>

        <SimpleCarousel
          images={images}
          labels={innovation.carouselLabels}
          imageClassName="h-auto w-full"
        />
      </div>
    </article>
  );
}
