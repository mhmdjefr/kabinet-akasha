import Link from "next/link";
import Navbar from "./Navbar";

type CatalogType = "merch" | "aplikasi" | "portofolio";

const CATALOGS = {
  merch: {
    index: "02",
    eyebrow: "TOKO BARNABY / MERCHANDISE",
    title: "Merchandise",
    intro:
      "Katalog produk komunitas HIMATIK. Pilih kategori untuk melihat rilisan yang tersedia.",
    accent: "bg-brand-pink",
    items: [
      { name: "Apparel", detail: "Kaos dan pakaian komunitas", mark: "WEAR", color: "bg-brand-lime" },
      { name: "Aksesori", detail: "Pelengkap untuk keseharian", mark: "GOODS", color: "bg-brand-blue text-white" },
      { name: "Rilisan Barnaby", detail: "Produk pilihan dari unit usaha", mark: "DROP", color: "bg-brand-pink" },
    ],
    note: "Informasi produk, harga, dan stok dikonfirmasi oleh tim Barnaby.",
  },
  aplikasi: {
    index: "03",
    eyebrow: "TOKO BARNABY / APLIKASI DIGITAL",
    title: "Aplikasi premium",
    intro:
      "Temukan pilihan akun premium dan aplikasi online untuk mendukung kebutuhan belajar, berkarya, dan produktivitas.",
    accent: "bg-brand-blue",
    items: [
      { name: "Kreativitas", detail: "Aplikasi untuk desain dan produksi konten", mark: "CREATE", color: "bg-brand-pink" },
      { name: "Produktivitas", detail: "Tools untuk kerja dan kolaborasi", mark: "WORK", color: "bg-brand-lime" },
      { name: "Digital lainnya", detail: "Pilihan layanan online sesuai kebutuhan", mark: "MORE", color: "bg-brand-blue text-white" },
    ],
    note: "Pilihan aplikasi, durasi, dan ketersediaan mengikuti katalog Barnaby.",
  },
  portofolio: {
    index: "01",
    eyebrow: "RUANG KARYA / PORTOFOLIO MAHASISWA",
    title: "Portofolio mahasiswa",
    intro:
      "Barnaby mempertemukan mahasiswa TIK dengan kebutuhan proyek digital dari lingkungan kampus maupun eksternal.",
    accent: "bg-brand-lime",
    items: [
      { name: "Website", detail: "Pengembangan halaman dan situs web", mark: "WEB", color: "bg-brand-blue text-white" },
      { name: "Sistem informasi", detail: "Solusi digital untuk alur kerja", mark: "SYSTEM", color: "bg-brand-pink" },
      { name: "Desain digital", detail: "Kebutuhan visual untuk produk dan komunikasi", mark: "DESIGN", color: "bg-brand-lime" },
    ],
    note: "Karya mahasiswa akan ditambahkan bertahap saat portofolionya siap dipublikasikan.",
  },
} satisfies Record<CatalogType, {
  index: string;
  eyebrow: string;
  title: string;
  intro: string;
  accent: string;
  items: { name: string; detail: string; mark: string; color: string }[];
  note: string;
}>;

const LINKS = [
  { label: "Beranda", href: "/inovasi/barnaby" },
  { label: "Portofolio", href: "/inovasi/barnaby/portofolio" },
  { label: "Merch", href: "/inovasi/barnaby/merch" },
  { label: "Aplikasi", href: "/inovasi/barnaby/aplikasi" },
];

export default function BarnabyCatalogPage({ type }: { type: CatalogType }) {
  const catalog = CATALOGS[type];

  return (
    <>
      <Navbar isHomePage={false} />
      <main className="min-h-screen bg-[#f6f6f2] px-4 pb-24 pt-24 text-brand-black sm:px-6 sm:pt-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Navigasi Barnaby" className="mb-8 flex flex-wrap gap-2">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={link.href === `/inovasi/barnaby/${type}` ? "page" : undefined}
                className={`border-2 border-brand-black px-3 py-2 text-xs font-black uppercase tracking-wide transition-colors hover:bg-brand-lime ${link.href === `/inovasi/barnaby/${type}` ? "bg-brand-black text-white" : "bg-white"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <section className="grid gap-8 border-4 border-brand-black bg-white p-6 shadow-brutal sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end lg:p-12">
            <div>
              <p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.2em] text-brand-blue">
                {catalog.index} / {catalog.eyebrow}
              </p>
              <h1 className="font-display text-5xl font-black uppercase leading-[0.88] tracking-tight sm:text-7xl lg:text-8xl">
                {catalog.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed sm:text-lg">
                {catalog.intro}
              </p>
            </div>
            <Link
              href="/inovasi/barnaby"
              className={`inline-flex w-fit items-center gap-3 border-4 border-brand-black px-5 py-3 text-sm font-black uppercase shadow-[5px_5px_0_var(--color-brand-black)] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_var(--color-brand-black)] ${catalog.accent}`}
            >
              ← Barnaby
            </Link>
          </section>

          <section className="mt-10">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="font-mono text-xs font-black uppercase tracking-[0.2em] text-brand-blue">
                  {type === "portofolio" ? "Area karya" : "Katalog Barnaby"}
                </p>
                <h2 className="mt-2 font-display text-3xl font-black uppercase sm:text-4xl">
                  {type === "portofolio" ? "Ruang untuk berkembang" : "Jelajahi kategori"}
                </h2>
              </div>
              <span className="border-2 border-brand-black bg-brand-lime px-3 py-2 font-mono text-[10px] font-black uppercase tracking-wide">
                {catalog.items.length} kategori
              </span>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {catalog.items.map((item, index) => (
                <article key={item.name} className="flex min-h-[22rem] flex-col border-4 border-brand-black bg-white p-4 shadow-brutal sm:p-5">
                  <div className={`relative grid min-h-48 place-items-center overflow-hidden border-4 border-brand-black ${item.color}`}>
                    <span className="absolute left-3 top-3 border-2 border-brand-black bg-white px-2 py-1 font-mono text-[10px] font-black uppercase text-brand-black">
                      {catalog.index} / {String(index + 1).padStart(2, "0")}
                    </span>
                    <span aria-hidden="true" className="font-display text-5xl font-black uppercase tracking-tight sm:text-6xl">
                      {item.mark}
                    </span>
                    <span aria-hidden="true" className="absolute -bottom-5 -right-3 size-20 rotate-12 border-4 border-brand-black bg-brand-pink" />
                  </div>
                  <div className="flex flex-1 flex-col pt-5">
                    <h3 className="font-display text-2xl font-black uppercase">{item.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-black/75">{item.detail}</p>
                    <div className="mt-auto border-t-2 border-dashed border-brand-black pt-4">
                      <p className="text-xs font-bold leading-relaxed">Info produk dan ketersediaan melalui tim Barnaby.</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="mt-10 border-4 border-brand-black bg-brand-lime p-5 shadow-brutal sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-7">
            <div>
              <p className="font-mono text-xs font-black uppercase tracking-[0.18em]">Info katalog</p>
              <p className="mt-2 max-w-3xl text-sm font-semibold leading-relaxed sm:text-base">{catalog.note}</p>
            </div>
            <Link href="/inovasi/barnaby" className="mt-4 inline-flex shrink-0 items-center gap-2 border-2 border-brand-black bg-white px-4 py-3 text-xs font-black uppercase shadow-[3px_3px_0_var(--color-brand-black)] sm:mt-0">
              Kembali ke beranda <span aria-hidden="true">→</span>
            </Link>
          </aside>
        </div>
      </main>
    </>
  );
}
