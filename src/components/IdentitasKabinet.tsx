"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function IdentitasKabinet() {
  return (
    <section id="identitas" className="relative py-20 bg-white border-y border-ink/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Logo / Vector Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center p-8 bg-gradient-to-tr from-violet/10 via-pinky/10 to-transparent rounded-3xl border-2 border-ink shadow-brutal">
              <Image
                src="/assets/logo-kabinet.svg"
                alt="Identitas Logo Kabinet Akasha"
                width={280}
                height={380}
                className="w-full h-auto object-contain max-h-64 drop-shadow-md"
              />
            </div>
          </motion.div>

          {/* Explanation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-lg bg-pinky/20 px-3 py-1 text-xs font-bold text-ink">
              IDENTITAS KABINET
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-ink uppercase tracking-tight">
              KABINET AKASHA
            </h2>

            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
              Nama <strong>Akasha</strong> diambil dari bahasa Sanskerta yang merepresentasikan elemen ruang dan angkasa luas. Ruang di mana setiap gagasan memiliki tempat untuk tumbuh, setiap suara memiliki frekuensi untuk didengar, dan setiap potensi memiliki bentang langit untuk mengangkasa.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="rounded-xl border border-ink/10 bg-cream p-4">
                <span className="block text-2xl font-black text-violet">01</span>
                <span className="text-xs font-bold text-ink mt-1 block">Inklusif</span>
                <p className="text-[11px] text-zinc-500 mt-1">Terbuka untuk semua elemen mahasiswa.</p>
              </div>
              <div className="rounded-xl border border-ink/10 bg-cream p-4">
                <span className="block text-2xl font-black text-pinky">02</span>
                <span className="text-xs font-bold text-ink mt-1 block">Adaptif</span>
                <p className="text-[11px] text-zinc-500 mt-1">Cepat merespons dinamika zaman.</p>
              </div>
              <div className="rounded-xl border border-ink/10 bg-cream p-4">
                <span className="block text-2xl font-black text-emerald-500">03</span>
                <span className="text-xs font-bold text-ink mt-1 block">Solutif</span>
                <p className="text-[11px] text-zinc-500 mt-1">Menghadirkan aksi konkret dan terukur.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
