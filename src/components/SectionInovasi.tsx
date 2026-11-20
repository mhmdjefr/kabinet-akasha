import Link from "next/link";
import { innovations } from "@/data/innovations";

export default function SectionInovasi() {
  return (
    <section id="inovasi" className="bg-brand-black px-6 py-28 text-white md:px-16">
      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-10 text-xs font-bold tracking-[0.3em] text-white">
          03 / PROGRAM INOVASI
        </p>
        <h2 className="headline mb-16 text-[clamp(2.6rem,8vw,7rem)] text-white">
          GERAKAN
          <br />
          INOVASI
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {innovations.map((innovation, index) => {
            const textColor =
              innovation.slug === "tiktrack" ? "text-white" : "text-brand-black";
            const offsetShadow = [
              "shadow-[6px_6px_0_var(--color-brand-lime)] hover:shadow-[3px_3px_0_var(--color-brand-lime)]",
              "shadow-[6px_6px_0_var(--color-brand-pink)] hover:shadow-[3px_3px_0_var(--color-brand-pink)]",
              "shadow-[6px_6px_0_var(--color-brand-blue)] hover:shadow-[3px_3px_0_var(--color-brand-blue)]",
            ][index];

            return (
              <Link
                key={innovation.slug}
                href={`/inovasi/${innovation.slug}`}
                aria-label={`Lihat detail inovasi ${innovation.title}`}
                className={`group flex min-h-64 flex-col border-4 border-brand-black p-5 transition duration-200 hover:translate-x-1 hover:translate-y-1 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-brand-lime sm:p-6 ${innovation.color} ${textColor} ${offsetShadow}`}
              >
                <span className="font-hand text-2xl leading-none">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                <h3 className="mt-7 font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
                  {innovation.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed sm:text-base">
                  {innovation.summary}
                </p>
                <span className="mt-auto flex w-fit items-center gap-3 border-2 border-brand-black bg-brand-black px-3 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-white shadow-[3px_3px_0_var(--color-brand-black)] transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5">
                  Lihat detail
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
