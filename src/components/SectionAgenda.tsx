import { agendaItems } from "@/lib/data";

const bgClass = { pinky: "bg-brand-pink", white: "bg-white", lime: "bg-brand-lime" } as const;

export default function SectionAgenda() {
  return (
    <section id="agenda" className="relative overflow-hidden bg-violet px-6 py-28 text-white md:px-16">
      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-10 text-xs font-bold tracking-[0.3em] text-white/70">02 / YANG AKAN DATANG</p>
        <h2 className="headline mb-16 text-[clamp(2.6rem,8vw,7rem)] text-white">
          CATAT
          <br />
          TANGGALNYA
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {agendaItems.map((item) => (
            <article
              key={item.no}
              className={`${bgClass[item.bg]} ${item.rotate} flex min-h-[280px] flex-col justify-between border-brutal border-ink p-6 text-ink shadow-[6px_6px_0_var(--color-brand-lime)] transition duration-200 ease-out hover:rotate-0 hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal`}
            >
              <span className="font-hand text-lg leading-none">{item.no}</span>
              <h3 className="headline text-2xl sm:text-3xl">{item.title}</h3>
              <span className="mt-6 w-fit rounded-full border-2 border-ink bg-ink px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-white">
                {item.status}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
