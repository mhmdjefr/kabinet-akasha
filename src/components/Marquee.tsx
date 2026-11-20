const items = ["KABINET AKASHA", "TEKNIK INFORMATIKA", "POLITEKNIK NEGERI JAKARTA", "CERITA", "ANIMASI", "VIDEO"];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="flex items-center overflow-hidden border-y-brutal border-ink bg-ink py-4">
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-8">
            {row.map((t, i) => (
              <span key={`${half}-${i}`} className="inline-flex items-center gap-5 font-display text-xl uppercase leading-none text-lime">
                {t}
                <span aria-hidden="true" className="inline-flex items-center leading-none text-pinky">&#10022;</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
