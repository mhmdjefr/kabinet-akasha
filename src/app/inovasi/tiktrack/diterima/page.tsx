"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function TiktrackDiterimaPage() {
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

                {/* Tahap 04 (Aktif: Diterima Hijau) */}
                <div className="border-4 border-brand-black bg-brand-lime p-4 text-brand-black shadow-brutal">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-black uppercase tracking-wider text-brand-blue">
                      Tahap 04
                    </span>
                    <span className="border-2 border-brand-black bg-brand-black px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-white">
                      Diterima ✓
                    </span>
                  </div>
                  <p className="mt-2 font-display text-lg font-black uppercase">
                    Pengumuman
                  </p>
                </div>
              </div>
            </div>

            {/* Konten Utama: Pengumuman Diterima */}
            <section className="mt-8 border-4 border-brand-black bg-white p-5 shadow-brutal-lime sm:p-8 lg:p-12">
              <div className="mx-auto max-w-4xl space-y-8">
                {/* Header Section */}
                <div>
                  <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-blue">
                    Tahap 04 • Hasil Seleksi Akhir
                  </p>
                  <h2 className="font-display text-2xl font-black uppercase text-brand-black sm:text-3xl">
                    Pengumuman Hasil Seleksi
                  </h2>
                </div>

                {/* Banner Utama: Selamat Diterima */}
                <div className="relative border-4 border-brand-black bg-brand-lime p-6 shadow-brutal sm:p-8 lg:p-10">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-block border-2 border-brand-black bg-brand-pink px-3 py-1 font-mono text-xs font-black uppercase tracking-wider text-brand-black shadow-[2px_2px_0_var(--color-brand-black)]">
                      STATUS KELULUSAN
                    </span>
                    <span className="inline-flex items-center gap-1.5 border-2 border-brand-black bg-white px-3 py-1 font-mono text-xs font-bold text-brand-black">
                      <span className="inline-block size-2 rounded-full bg-brand-black" />
                      LOLOS / DITERIMA
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-black uppercase text-brand-black sm:text-4xl">
                    🎉 Selamat! Anda Resmi Diterima Sebagai Panitia ITechno Cup
                  </h3>

                  <p className="mt-4 text-sm font-medium leading-relaxed text-brand-black sm:text-base">
                    Berdasarkan hasil verifikasi berkas dan rangkaian wawancara yang telah Anda jalani, Tim Seleksi Departemen Pendidikan dan Teknologi menyatakan bahwa Anda <strong>LOLOS</strong> dan resmi menjadi bagian dari kepanitiaan <strong>ITechno Cup</strong>.
                  </p>

                  {/* Ringkasan Informasi Penerimaan */}
                  <div className="mt-6 grid gap-4 border-2 border-brand-black bg-white p-5 sm:grid-cols-2">
                    <div>
                      <span className="font-mono text-[10px] font-black uppercase tracking-wider text-brand-black/60">
                        KEPANITIAAN
                      </span>
                      <p className="mt-1 font-display text-base font-black text-brand-black">
                        ITechno Cup
                      </p>
                      <p className="mt-0.5 font-mono text-xs text-brand-black/75">
                        Pendidikan & Teknologi
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] font-black uppercase tracking-wider text-brand-black/60">
                        STATUS SELEKSI
                      </span>
                      <p className="mt-1 font-display text-base font-black text-brand-blue">
                        Lolos Tahap Akhir
                      </p>
                    </div>
                  </div>

                  {/* Hasil Penilaian */}
                  <div className="mt-8 border-4 border-brand-black bg-white p-5 shadow-brutal sm:p-7">
                    <span className="font-mono text-xs font-black uppercase tracking-wider text-brand-blue">
                      Evaluasi Individu
                    </span>
                    <h4 className="mt-2 font-display text-xl font-black uppercase text-brand-black sm:text-2xl">
                      Hasil Penilaian
                    </h4>
                    <p className="mt-1 text-xs font-medium text-brand-black/80 sm:text-sm">
                      Berikut adalah akumulasi evaluasi berkas dan sesi wawancara Anda oleh tim seleksi ITechno Cup:
                    </p>

                    <div className="mt-5 grid gap-4 sm:grid-cols-3">
                      <div className="border-2 border-brand-black bg-brand-lime/20 p-4 shadow-[2px_2px_0_var(--color-brand-black)]">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] font-black uppercase tracking-wider text-brand-black/70">Kriteria 01</span>
                          <span className="font-mono text-xs font-black text-brand-black">92 / 100</span>
                        </div>
                        <p className="mt-2 font-display text-base font-black text-brand-black">Pemahaman Standar</p>
                        <div className="mt-2 h-2.5 w-full border border-brand-black bg-white"><div className="h-full bg-brand-blue" style={{ width: "92%" }} /></div>
                        <p className="mt-2 text-[11px] font-medium leading-relaxed text-brand-black/75">Pemahaman yang kuat terhadap alur kerja, teknis lomba, dan standar kepanitiaan.</p>
                      </div>

                      <div className="border-2 border-brand-black bg-brand-pink/20 p-4 shadow-[2px_2px_0_var(--color-brand-black)]">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] font-black uppercase tracking-wider text-brand-black/70">Kriteria 02</span>
                          <span className="font-mono text-xs font-black text-brand-black">95 / 100</span>
                        </div>
                        <p className="mt-2 font-display text-base font-black text-brand-black">Motivasi</p>
                        <div className="mt-2 h-2.5 w-full border border-brand-black bg-white"><div className="h-full bg-brand-pink" style={{ width: "95%" }} /></div>
                        <p className="mt-2 text-[11px] font-medium leading-relaxed text-brand-black/75">Menunjukkan komitmen, antusiasme, dan kesiapan berkontribusi yang sangat baik.</p>
                      </div>

                      <div className="border-2 border-brand-black bg-brand-blue/15 p-4 shadow-[2px_2px_0_var(--color-brand-black)]">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] font-black uppercase tracking-wider text-brand-black/70">Kriteria 03</span>
                          <span className="font-mono text-xs font-black text-brand-black">90 / 100</span>
                        </div>
                        <p className="mt-2 font-display text-base font-black text-brand-black">Soft Skill</p>
                        <div className="mt-2 h-2.5 w-full border border-brand-black bg-white"><div className="h-full bg-brand-lime" style={{ width: "90%" }} /></div>
                        <p className="mt-2 text-[11px] font-medium leading-relaxed text-brand-black/75">Komunikasi, kolaborasi, dan respons adaptif yang baik selama wawancara.</p>
                      </div>
                    </div>

                    <div className="mt-6 border-2 border-brand-black bg-brand-black/5 p-4 sm:p-5">
                      <span className="inline-flex items-center gap-2 font-mono text-xs font-black uppercase text-brand-black">
                        <svg aria-hidden="true" className="size-4 text-brand-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 3.9a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
                        </svg>
                        Umpan Balik Kualitatif:
                      </span>
                      <ul className="mt-3 space-y-2.5 text-xs font-medium text-brand-black/90 sm:text-sm">
                        <li className="flex items-start gap-2.5">
                          <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center border border-brand-black bg-brand-lime font-mono text-[10px] font-bold">1</span>
                          <span><strong>Kesiapan:</strong> Anda menunjukkan pemahaman yang baik terhadap tanggung jawab dan alur kerja kepanitiaan.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center border border-brand-black bg-brand-pink font-mono text-[10px] font-bold">2</span>
                          <span><strong>Kolaborasi:</strong> Sikap komunikatif dan terbuka menjadi nilai positif selama proses wawancara.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center border border-brand-black bg-brand-blue font-mono text-[10px] font-bold text-white">3</span>
                          <span><strong>Selamat bergabung:</strong> Pertahankan semangat belajar dan kontribusi positif Anda bersama tim ITechno Cup.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Section CTA: Join WhatsApp Group Langsung */}
                  <div className="mt-8 border-4 border-brand-black bg-white p-6 text-center shadow-brutal sm:p-8">
                    <span className="inline-block border-2 border-brand-black bg-brand-yellow px-3 py-1 font-mono text-xs font-black uppercase text-brand-black shadow-[2px_2px_0_var(--color-brand-black)]">
                      Langkah Wajib
                    </span>

                    <h4 className="mt-3 font-display text-xl font-black uppercase text-brand-black sm:text-2xl">
                      Bergabung ke Grup WhatsApp Panitia
                    </h4>

                    <p className="mx-auto mt-2 max-w-xl text-xs font-medium text-brand-black/80 sm:text-sm">
                      Silakan langsung klik tombol di bawah untuk masuk ke grup WhatsApp resmi panitia ITechno Cup untuk koordinasi teknis, pembagian divisi, dan jadwal First Gathering.
                    </p>

                    <div className="mt-6">
                      <a
                        href="https://chat.whatsapp.com/invite/itechnocup"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 border-4 border-brand-black bg-[#25D366] px-8 py-4 font-display text-base font-black uppercase tracking-wide text-brand-black shadow-brutal transition hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0_var(--color-brand-black)] active:translate-x-0 active:translate-y-0 sm:text-lg"
                      >
                        <span className="text-2xl" aria-hidden="true">💬</span>
                        <span>Join Grup WhatsApp Panitia</span>
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>

                    <p className="mt-4 font-mono text-xs font-bold text-brand-black/70">
                      *Wajib bergabung paling lambat 1x24 jam setelah pengumuman ini diterima.
                    </p>
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
