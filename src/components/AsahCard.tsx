import { getInnovation } from "@/data/innovations";

const innovation = getInnovation("asah")!;

export default function AsahCard() {
  return (
    <article className="border-4 border-brand-black bg-brand-black p-6 text-white shadow-brutal-lime sm:p-8 lg:p-10">
      <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">
        Program Pendampingan Akademik
      </p>
      <h2 className="font-display text-5xl font-black leading-none text-brand-lime sm:text-6xl lg:text-7xl">
        {innovation.title}
      </h2>
      <p className="mt-6 max-w-4xl text-base font-semibold leading-relaxed sm:text-lg">
        {innovation.description}
      </p>
      <ul className="mt-6 grid gap-x-10 gap-y-3 text-sm leading-relaxed sm:text-base lg:grid-cols-2">
        {innovation.points.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <span aria-hidden="true" className="mt-1 text-brand-lime">✳</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
