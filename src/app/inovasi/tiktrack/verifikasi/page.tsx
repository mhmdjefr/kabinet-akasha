"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function TiktrackVerifikasiPage() {
  return (
    <>
      <Navbar isHomePage={false} />
      <div className="pt-16">
        <div className="min-h-screen bg-brand-black px-4 pb-20 pt-8 sm:px-6 md:pb-28">
          <div className="mx-auto w-full max-w-7xl">
            {/* Tombol Kembali */}
            <div className="mb-8 flex flex-wrap items-center gap-4">
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

                {/* Tahap 02 (Aktif: Verifikasi Berkas) */}
                <div className="border-4 border-brand-black bg-brand-lime p-4 text-brand-black shadow-brutal">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-black uppercase tracking-wider text-brand-blue">
                      Tahap 02
                    </span>
                    <span className="border-2 border-brand-black bg-brand-black px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-white">
                      Proses
                    </span>
                  </div>
                  <p className="mt-2 font-display text-lg font-black uppercase">
                    Verifikasi Berkas
                  </p>
                </div>

                {/* Tahap 03 */}
                <Link
                  href="/inovasi/tiktrack/wawancara"
                  className="border-4 border-brand-black bg-white p-4 text-brand-black shadow-brutal transition hover:translate-x-0.5 hover:translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-black/70">
                      Tahap 03
                    </span>
                  </div>
                  <p className="mt-2 font-display text-lg font-black uppercase">
                    Wawancara
                  </p>
                </Link>

                {/* Tahap 04 */}
                <Link
                  href="/inovasi/tiktrack/diterima"
                  className="border-4 border-brand-black bg-white p-4 text-brand-black shadow-brutal transition hover:translate-x-0.5 hover:translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-black/70">
                      Tahap 04
                    </span>
                  </div>
                  <p className="mt-2 font-display text-lg font-black uppercase">
                    Pengumuman
                  </p>
                </Link>
              </div>
            </div>

            {/* Konten Utama: Status Verifikasi Berkas */}
            <section className="mt-8 border-4 border-brand-black bg-white p-5 shadow-brutal-lime sm:p-8 lg:p-12">
              <div className="mx-auto max-w-4xl space-y-8">
                {/* Header Section */}
                <div>
                  <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-blue">
                    Tahap 02 • Alur Seleksi
                  </p>
                  <h2 className="font-display text-2xl font-black uppercase text-brand-black sm:text-3xl">
                    Verifikasi Berkas
                  </h2>
                </div>

                {/* Banner Status Utama: Berkas Sedang Diverifikasi */}
                <div className="border-4 border-brand-black bg-brand-lime/20 p-6 shadow-brutal sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-block border-2 border-brand-black bg-brand-pink px-3 py-1 font-mono text-xs font-black uppercase tracking-wider text-brand-black shadow-[2px_2px_0_var(--color-brand-black)]">
                      STATUS PENDAFTARAN
                    </span>
                    <span className="inline-flex items-center gap-1.5 border-2 border-brand-black bg-white px-3 py-1 font-mono text-xs font-bold text-brand-black">
                      <span className="inline-block size-2 animate-pulse rounded-full bg-brand-blue" />
                      SEDANG DIPROSES
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-black uppercase text-brand-black sm:text-3xl">
                    Berkas Sedang Diverifikasi oleh Admin
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-relaxed text-brand-black/90 sm:text-base">
                    Formulir dan berkas pendaftaran Anda telah berhasil tercatat di sistem TIKTrack. Saat ini, berkas Anda sedang dalam antrean pemeriksaan administratif oleh tim admin dan panitia penyeleksi ITechno Cup.
                  </p>

                  {/* Info Box Alur */}
                  <div className="mt-6 grid gap-4 border-2 border-brand-black bg-white p-4 sm:grid-cols-2 sm:p-5">
                    <div>
                      <span className="font-mono text-[10px] font-bold uppercase text-brand-black/60">
                        ESTIMASI WAKTU
                      </span>
                      <p className="mt-1 font-display text-sm font-black text-brand-black sm:text-base">
                        1 - 3 Hari Kerja
                      </p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] font-bold uppercase text-brand-black/60">
                        TIM VERIFIKATOR
                      </span>
                      <p className="mt-1 font-display text-sm font-black text-brand-black sm:text-base">
                        Admin / Panitia
                      </p>
                    </div>
                  </div>

                  {/* Navigasi ke Tahap Berikutnya */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t-2 border-brand-black pt-5">
                    <span className="font-mono text-xs text-brand-black/75">
                      Tahap selanjutnya: Wawancara (Tahap 03)
                    </span>
                    <Link
                      href="/inovasi/tiktrack/wawancara"
                      className="inline-flex items-center gap-2 border-2 border-brand-black bg-brand-lime px-4 py-2 font-display text-xs font-black uppercase tracking-wider text-brand-black shadow-brutal-sm transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none focus-visible:outline-4 focus-visible:outline-brand-black"
                    >
                      <span>Lihat Jadwal Wawancara</span>
                      <span aria-hidden="true">→</span>
                    </Link>
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
