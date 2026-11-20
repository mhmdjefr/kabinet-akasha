"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function TiktrackDaftarPage() {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    nim: "",
    kelas: "",
    divisi: "",
    email: "",
    whatsapp: "",
    motivasi: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
                <div className="border-4 border-brand-black bg-brand-lime p-4 text-brand-black shadow-brutal">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-black uppercase tracking-wider text-brand-blue">
                      Tahap 01
                    </span>
                    <span className="border-2 border-brand-black bg-brand-black px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-white">
                      Proses
                    </span>
                  </div>
                  <p className="mt-2 font-display text-lg font-black uppercase">
                    Daftar
                  </p>
                </div>
                <Link
                  href="/inovasi/tiktrack/verifikasi"
                  className="border-4 border-brand-black bg-white p-4 text-brand-black shadow-brutal transition hover:translate-x-0.5 hover:translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-black/70">
                      Tahap 02
                    </span>
                  </div>
                  <p className="mt-2 font-display text-lg font-black uppercase">
                    Verifikasi Berkas
                  </p>
                </Link>
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

            {/* Konten Utama */}
            <section className="mt-8 border-4 border-brand-black bg-white p-5 shadow-brutal-lime sm:p-8 lg:p-12">
              <div className="mx-auto max-w-4xl">
                {/* Form Pendaftaran */}
                <div>
                  <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-blue">
                    Tahap 01 • Alur Seleksi
                  </p>
                  <h2 className="mb-6 font-display text-2xl font-black uppercase text-brand-black sm:text-3xl">
                    Isi Data Pendaftar
                  </h2>

                  {submitted ? (
                    <div className="border-4 border-brand-black bg-brand-lime p-6 shadow-brutal">
                      <span className="inline-block border-2 border-brand-black bg-brand-black px-3 py-1 font-mono text-xs font-bold uppercase text-white">
                        BERHASIL TERKIRIM
                      </span>
                      <h3 className="mt-4 font-display text-2xl font-black uppercase text-brand-black">
                        Pendaftaran Telah Diterima!
                      </h3>
                      <p className="mt-2 text-sm font-medium leading-relaxed text-brand-black">
                        Terima kasih, <strong className="font-bold">{formData.nama || "Pendaftar"}</strong> (NIM: {formData.nim || "-"}). Berkas pendaftaranmu untuk divisi <strong className="font-bold">{formData.divisi || "-"}</strong> sudah masuk ke sistem TIKTrack.
                      </p>
                      <div className="mt-4 border-2 border-brand-black bg-white p-4">
                        <p className="font-mono text-xs font-bold text-brand-black/70">
                          KODE REGISTRASI TIKTRACK:
                        </p>
                        <p className="font-mono text-xl font-black text-brand-blue">
                          TIK-{formData.nim ? formData.nim.slice(-4) : "2026"}-OK
                        </p>
                      </div>
                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <Link
                          href="/inovasi/tiktrack/verifikasi"
                          className="border-2 border-brand-black bg-brand-blue px-4 py-2 font-display text-xs font-black uppercase text-white shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5"
                        >
                          Pantau Verifikasi Berkas →
                        </Link>
                        <button
                          type="button"
                          onClick={() => {
                            setSubmitted(false);
                            setAgreed(false);
                          }}
                          className="border-2 border-brand-black bg-white px-4 py-2 font-display text-xs font-black uppercase text-brand-black shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5"
                        >
                          Kirim Pendaftaran Lain
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block font-mono text-xs font-bold uppercase text-brand-black">
                            Nama Lengkap *
                          </label>
                          <input
                            type="text"
                            name="nama"
                            required
                            placeholder="Contoh: Muhammad Jeffri"
                            value={formData.nama}
                            onChange={handleChange}
                            className="w-full border-2 border-brand-black bg-white p-3 font-sans text-sm font-medium text-brand-black shadow-[3px_3px_0_var(--color-brand-black)] focus:outline-none focus:ring-2 focus:ring-brand-blue"
                          />
                        </div>
                        <div>
                          <label className="mb-1.5 block font-mono text-xs font-bold uppercase text-brand-black">
                            NIM (Nomor Induk Mahasiswa) *
                          </label>
                          <input
                            type="text"
                            name="nim"
                            required
                            placeholder="Contoh: 2507411001"
                            value={formData.nim}
                            onChange={handleChange}
                            className="w-full border-2 border-brand-black bg-white p-3 font-sans text-sm font-medium text-brand-black shadow-[3px_3px_0_var(--color-brand-black)] focus:outline-none focus:ring-2 focus:ring-brand-blue"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block font-mono text-xs font-bold uppercase text-brand-black">
                            Kelas *
                          </label>
                          <input
                            type="text"
                            name="kelas"
                            required
                            placeholder="Contoh: TI-3A / TMJ-3A / TMD-3A / RKS-3A"
                            value={formData.kelas}
                            onChange={handleChange}
                            className="w-full border-2 border-brand-black bg-white p-3 font-sans text-sm font-medium text-brand-black shadow-[3px_3px_0_var(--color-brand-black)] focus:outline-none focus:ring-2 focus:ring-brand-blue"
                          />
                        </div>
                        <div>
                          <label className="mb-1.5 block font-mono text-xs font-bold uppercase text-brand-black">
                            Pilihan Divisi *
                          </label>
                          <select
                            name="divisi"
                            value={formData.divisi}
                            onChange={handleChange}
                            className="w-full border-2 border-brand-black bg-white p-3 font-sans text-sm font-medium text-brand-black shadow-[3px_3px_0_var(--color-brand-black)] focus:outline-none focus:ring-2 focus:ring-brand-blue"
                          >
                            <option value="">-- Pilih Divisi --</option>
                            <option value="event-management">Divisi Event Management</option>
                            <option value="creative">Divisi Creative</option>
                            <option value="partnership-and-revenue">Divisi Partnership & Revenue</option>
                            <option value="it-ac">Divisi IT/AC</option>
                            <option value="competition">Divisi Competition</option>
                            <option value="public-relations">Divisi Public Relations</option>
                            <option value="secretariat">Divisi Secretariat</option>
                            <option value="finance">Divisi Finance</option>
                            <option value="operational">Divisi Operational</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block font-mono text-xs font-bold uppercase text-brand-black">
                            Email Kampus / Aktif *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="Contoh: email@stu.pnj.ac.id"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border-2 border-brand-black bg-white p-3 font-sans text-sm font-medium text-brand-black shadow-[3px_3px_0_var(--color-brand-black)] focus:outline-none focus:ring-2 focus:ring-brand-blue"
                          />
                        </div>
                        <div>
                          <label className="mb-1.5 block font-mono text-xs font-bold uppercase text-brand-black">
                            Nomor WhatsApp *
                          </label>
                          <input
                            type="tel"
                            name="whatsapp"
                            required
                            placeholder="Contoh: 081234567890"
                            value={formData.whatsapp}
                            onChange={handleChange}
                            className="w-full border-2 border-brand-black bg-white p-3 font-sans text-sm font-medium text-brand-black shadow-[3px_3px_0_var(--color-brand-black)] focus:outline-none focus:ring-2 focus:ring-brand-blue"
                          />
                        </div>
                      </div>

                      {/* Essai / Motivasi (textarea) */}
                      <div>
                        <label className="mb-1.5 block font-mono text-xs font-bold uppercase text-brand-black">
                          Essai / Motivasi *
                        </label>
                        <textarea
                          name="motivasi"
                          rows={4}
                          required
                          placeholder="Tuliskan motivasi, alasan memilih divisi, dan gagasan yang ingin Anda bawa..."
                          value={formData.motivasi}
                          onChange={handleChange}
                          className="w-full border-2 border-brand-black bg-white p-3 font-sans text-sm font-medium text-brand-black shadow-[3px_3px_0_var(--color-brand-black)] focus:outline-none focus:ring-2 focus:ring-brand-blue"
                        />
                      </div>

                      {/* Checkbox Ketentuan Wajib */}
                      <div className="pt-2">
                        <label className="flex cursor-pointer select-none items-start gap-3">
                          <input
                            type="checkbox"
                            required
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            className="mt-0.5 size-5 shrink-0 cursor-pointer border-2 border-brand-black accent-brand-blue"
                          />
                          <span className="font-sans text-xs font-semibold leading-relaxed text-brand-black sm:text-sm">
                            Saya berjanji bertanggung jawab atas keikutsertaan saya dalam acara yang akan saya ikuti ini. *
                          </span>
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="mt-6 w-full border-4 border-brand-black bg-brand-blue px-6 py-4 font-display text-base font-black uppercase tracking-wider text-white shadow-brutal transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-brand-blue sm:text-lg"
                      >
                        Kirim Pendaftaran Sekarang →
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
