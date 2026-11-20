"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function TiktrackDitolakPage() {
  return (
    <>
      <Navbar isHomePage={false} />
      <div className="pt-16">
        <div className="min-h-screen bg-brand-black px-4 pb-20 pt-8 sm:px-6 md:pb-28">
          <div className="mx-auto w-full max-w-7xl">
            {/* Tombol Kembali */}
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/inovasi/tiktrack"
                  className="inline-flex items-center gap-2 border-4 border-brand-black bg-brand-lime px-4 py-2 text-sm font-extrabold uppercase tracking-wide text-brand-black shadow-[4px_4px_0_var(--color-brand-pink)] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-brand-pink)] focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <span aria-hidden="true">←</span>
                  Kembali ke TIKTrack
                </Link>
                <Link
                  href="/inovasi/tiktrack"
                  className="inline-flex items-center gap-2 border-4 border-brand-black bg-white px-4 py-2 text-sm font-extrabold uppercase tracking-wide text-brand-black shadow-[4px_4px_0_var(--color-brand-blue)] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-brand-blue)] focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  TIKTrack
                </Link>
              </div>
            </div>

            {/* Informasi Lomba: ITechno Cup */}
            <div className="relative border-4 border-brand-black bg-brand-blue p-6 text-white shadow-brutal-pink sm:p-8 lg:p-10">
              <span
                aria-hidden="true"
                className="absolute right-4 top-4 size-3.5 border-2 border-brand-black bg-brand-lime sm:right-6 sm:top-6 sm:size-4"
              />

              <div className="flex flex-wrap items-center gap-2">
                <span className="border-2 border-brand-black bg-brand-lime px-2.5 py-0.5 font-mono text-xs font-black uppercase text-brand-black shadow-[2px_2px_0_var(--color-brand-black)]">
                  Departemen
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                  — Pendidikan dan Teknologi
                </span>
              </div>

              <h1 className="mt-3 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-black uppercase leading-none tracking-tight text-white">
                ITECHNO CUP
              </h1>

              <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-white/90 sm:text-base">
                ITechno Cup adalah program kerja Departemen Pendidikan dan Teknologi, yang berupa kompetisi di bidang Teknologi Informatika dan Komputer berskala internasional, serta berfokus kepada pengembangan potensi mahasiswa atau siswa SMA/SMK-sederajat seluruh Indonesia.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="https://itechnocup.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-brand-black bg-brand-pink px-4 py-2 font-mono text-xs font-black uppercase text-brand-black shadow-[3px_3px_0_var(--color-brand-black)] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none focus-visible:outline-4 focus-visible:outline-white"
                >
                  <span>Kunjungi Website Resmi: itechnocup.id</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            {/* Alur Seleksi Stepper dengan Garis Penghubung */}
            <div className="relative mt-8">
              {/* Garis Horizontal Penghubung (Desktop / Tablet) */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-8 right-8 top-1/2 hidden -translate-y-1/2 border-t-4 border-brand-lime sm:block"
              />

              {/* Garis Vertikal Penghubung (Mobile: Atas ke Bawah) */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-8 left-1/2 top-8 -translate-x-1/2 border-l-4 border-brand-lime sm:hidden"
              />

              <div className="relative z-10 grid grid-cols-1 gap-3 sm:grid-cols-4 sm:gap-6">
                {/* Tahap 01 (Selesai: Hijau) */}
                <Link
                  href="/inovasi/tiktrack/daftar"
                  className="border-4 border-brand-black bg-brand-lime p-4 text-brand-black shadow-brutal transition hover:translate-x-0.5 hover:translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-black/70">
                      Tahap 01
                    </span>
                    <span className="border-2 border-brand-black bg-brand-black px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-white">
                      Selesai ✓
                    </span>
                  </div>
                  <p className="mt-2 font-display text-lg font-black uppercase">
                    Daftar
                  </p>
                </Link>

                {/* Tahap 02 (Selesai: Hijau) */}
                <Link
                  href="/inovasi/tiktrack/verifikasi"
                  className="border-4 border-brand-black bg-brand-lime p-4 text-brand-black shadow-brutal transition hover:translate-x-0.5 hover:translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-black/70">
                      Tahap 02
                    </span>
                    <span className="border-2 border-brand-black bg-brand-black px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-white">
                      Selesai ✓
                    </span>
                  </div>
                  <p className="mt-2 font-display text-lg font-black uppercase">
                    Verifikasi Berkas
                  </p>
                </Link>

                {/* Tahap 03 (Selesai: Hijau) */}
                <Link
                  href="/inovasi/tiktrack/wawancara"
                  className="border-4 border-brand-black bg-brand-lime p-4 text-brand-black shadow-brutal transition hover:translate-x-0.5 hover:translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-black/70">
                      Tahap 03
                    </span>
                    <span className="border-2 border-brand-black bg-brand-black px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-white">
                      Selesai ✓
                    </span>
                  </div>
                  <p className="mt-2 font-display text-lg font-black uppercase">
                    Wawancara
                  </p>
                </Link>

                {/* Tahap 04 (Aktif: Ditolak Pink) */}
                <div className="border-4 border-brand-black bg-brand-pink p-4 text-brand-black shadow-brutal">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-black uppercase tracking-wider text-brand-black/70">
                      Tahap 04
                    </span>
                    <span className="border-2 border-brand-black bg-brand-black px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-white">
                      Belum Lolos
                    </span>
                  </div>
                  <p className="mt-2 font-display text-lg font-black uppercase">
                    Pengumuman
                  </p>
                </div>
              </div>
            </div>

            {/* Konten Utama: Pengumuman Ditolak & Pesan Semangat */}
            <section className="mt-8 border-4 border-brand-black bg-white p-5 shadow-brutal-pink sm:p-8 lg:p-12">
              <div className="mx-auto max-w-4xl space-y-8">
                {/* Header Section */}
                <div>
                  <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-pink">
                    Tahap 04 • Hasil Seleksi Akhir
                  </p>
                  <h2 className="font-display text-2xl font-black uppercase text-brand-black sm:text-3xl">
                    Pengumuman Hasil Seleksi
                  </h2>
                </div>

                {/* Banner Utama: Penyemangat */}
                <div className="relative border-4 border-brand-black bg-brand-pink/20 p-6 shadow-brutal sm:p-8 lg:p-10">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-block border-2 border-brand-black bg-brand-pink px-3 py-1 font-mono text-xs font-black uppercase tracking-wider text-brand-black shadow-[2px_2px_0_var(--color-brand-black)]">
                      STATUS KELULUSAN
                    </span>
                    <span className="inline-flex items-center gap-1.5 border-2 border-brand-black bg-white px-3 py-1 font-mono text-xs font-bold text-brand-black">
                      <span className="inline-block size-2 rounded-full bg-brand-pink" />
                      BELUM LOLOS SELEKSI
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-black uppercase text-brand-black sm:text-4xl">
                    🌟 Tetap Semangat! Perjalananmu Masih Sangat Panjang
                  </h3>

                  <div className="mt-4 space-y-3 text-sm font-medium leading-relaxed text-brand-black/90 sm:text-base">
                    <p>
                      Terima kasih yang sebesar-besarnya atas partisipasi, energi positif, dan antusiasme luar biasa yang telah Anda dedikasikan sepanjang proses seleksi panitia <strong>ITechno Cup</strong>.
                    </p>
                    <p>
                      Setelah melalui pertimbangan yang sangat ketat dan mendalam terhadap tingginya antusiasme pendaftar serta keterbatasan kuota kepanitiaan, dengan berat hati kami menginformasikan bahwa <strong>Anda belum dapat bergabung</strong> dalam kepanitiaan ITechno Cup periode ini.
                    </p>
                    <p>
                      Keputusan ini tidak sedikit pun mengurangi nilai, talenta, dan potensi hebat yang Anda miliki. Kompetisi seleksi ini sangat ketat, dan kami sangat mengagumi komitmen Anda dalam mengikuti setiap tahapannya.
                    </p>
                  </div>

                  {/* Hasil Penilaian & Umpan Balik Kualitatif */}
                  <div className="mt-8 border-4 border-brand-black bg-white p-5 shadow-brutal sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="font-mono text-xs font-black uppercase tracking-wider text-brand-blue">
                        Evaluasi Individu
                      </span>
                    </div>

                    <h4 className="mt-2 font-display text-xl font-black uppercase text-brand-black sm:text-2xl">
                      Hasil Penilaian
                    </h4>
                    <p className="mt-1 text-xs font-medium text-brand-black/80 sm:text-sm">
                      Berikut adalah akumulasi evaluasi berkas dan sesi wawancara Anda oleh tim seleksi ITechno Cup:
                    </p>

                    {/* Point Penilaian: Pemahaman Standar, Motivasi, Soft Skill */}
                    <div className="mt-5 grid gap-4 sm:grid-cols-3">
                      {/* Pemahaman Standar */}
                      <div className="border-2 border-brand-black bg-brand-lime/20 p-4 shadow-[2px_2px_0_var(--color-brand-black)]">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] font-black uppercase tracking-wider text-brand-black/70">
                            Kriteria 01
                          </span>
                          <span className="font-mono text-xs font-black text-brand-black">
                            75 / 100
                          </span>
                        </div>
                        <p className="mt-2 font-display text-base font-black text-brand-black">
                          Pemahaman Standar
                        </p>
                        <div className="mt-2 h-2.5 w-full border border-brand-black bg-white">
                          <div className="h-full bg-brand-blue" style={{ width: "75%" }} />
                        </div>
                        <p className="mt-2 text-[11px] font-medium leading-relaxed text-brand-black/75">
                          Tingkat pemahaman terhadap alur kerja, teknis lomba, dan standar kepanitiaan.
                        </p>
                      </div>

                      {/* Motivasi */}
                      <div className="border-2 border-brand-black bg-brand-pink/20 p-4 shadow-[2px_2px_0_var(--color-brand-black)]">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] font-black uppercase tracking-wider text-brand-black/70">
                            Kriteria 02
                          </span>
                          <span className="font-mono text-xs font-black text-brand-black">
                            84 / 100
                          </span>
                        </div>
                        <p className="mt-2 font-display text-base font-black text-brand-black">
                          Motivasi
                        </p>
                        <div className="mt-2 h-2.5 w-full border border-brand-black bg-white">
                          <div className="h-full bg-brand-pink" style={{ width: "84%" }} />
                        </div>
                        <p className="mt-2 text-[11px] font-medium leading-relaxed text-brand-black/75">
                          Komitmen, kegigihan, dan antusiasme tinggi untuk berkontribusi di divisi pilihan.
                        </p>
                      </div>

                      {/* Soft Skill */}
                      <div className="border-2 border-brand-black bg-brand-blue/15 p-4 shadow-[2px_2px_0_var(--color-brand-black)]">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] font-black uppercase tracking-wider text-brand-black/70">
                            Kriteria 03
                          </span>
                          <span className="font-mono text-xs font-black text-brand-black">
                            78 / 100
                          </span>
                        </div>
                        <p className="mt-2 font-display text-base font-black text-brand-black">
                          Soft Skill
                        </p>
                        <div className="mt-2 h-2.5 w-full border border-brand-black bg-white">
                          <div className="h-full bg-brand-lime" style={{ width: "78%" }} />
                        </div>
                        <p className="mt-2 text-[11px] font-medium leading-relaxed text-brand-black/75">
                          Kemampuan komunikasi, kolaborasi tim, serta respon adaptif saat wawancara.
                        </p>
                      </div>
                    </div>

                    {/* Umpan Balik Kualitatif (2-3 Point Deskripsi Singkat) */}
                    <div className="mt-6 border-2 border-brand-black bg-brand-black/5 p-4 sm:p-5">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-2 font-mono text-xs font-black uppercase text-brand-black">
                          <svg aria-hidden="true" className="size-4 text-brand-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 3.9a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
                          </svg>
                          Umpan Balik Kualitatif:
                        </span>
                      </div>
                      <ul className="mt-3 space-y-2.5 text-xs font-medium text-brand-black/90 sm:text-sm">
                        <li className="flex items-start gap-2.5">
                          <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center border border-brand-black bg-brand-lime font-mono text-[10px] font-bold">
                            1
                          </span>
                          <span>
                            <strong>Kesiapan & Antusiasme:</strong> Anda memiliki energi dan dorongan belajar yang sangat baik, serta menunjukkan sikap komunikatif dan terbuka selama proses seleksi.
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center border border-brand-black bg-brand-pink font-mono text-[10px] font-bold">
                            2
                          </span>
                          <span>
                            <strong>Kedalaman Standar Teknis:</strong> Masih diperlukan penguatan pada penguasaan alur kerja spesifik divisi serta manajemen beban kerja proyek skala besar.
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center border border-brand-black bg-brand-blue font-mono text-[10px] font-bold text-white">
                            3
                          </span>
                          <span>
                            <strong>Rekomendasi Pengembangan:</strong> Sangat disarankan untuk memperbanyak portofolio melalui kepanitiaan tingkat jurusan atau program inkubasi kampus untuk persiapan seleksi berikutnya.
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* Tombol Aksi Navigasi */}
                    <div className="mt-6 flex flex-wrap items-center gap-3 border-t-2 border-brand-black pt-5">
                      <Link
                        href="/inovasi/tiktrack"
                        className="inline-flex w-full items-center justify-center gap-2 border-2 border-brand-black bg-brand-blue px-5 py-3 font-display text-xs font-black uppercase tracking-wider text-white shadow-brutal-sm transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none focus-visible:outline-4 focus-visible:outline-brand-blue"
                      >
                        <span>Kembali ke TIKTrack</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
