"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { visiData } from "@/lib/data";

export default function VisiMisi() {
  return (
    <section id="visimisi" className="relative py-24 bg-white overflow-hidden border-t border-ink/10">
      {/* Background vector */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 -z-10 opacity-30 pointer-events-none w-[600px] h-[600px]">
        <Image
          src="/assets/bg-vector-visimisi.png"
          alt="Vector Visi Misi"
          fill
          className="object-contain"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-cream px-4 py-1 text-xs font-bold text-ink">
            ARAH STRATEGIS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-ink uppercase tracking-tight">
            VISI & MISI
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            Komitmen dan roadmap konkrit menuju organisasi mahasiswa yang berdaya saing.
          </p>
        </div>

        {/* Visi Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border-2 border-ink bg-violet text-white p-8 md:p-12 shadow-brutal mb-12 relative overflow-hidden"
        >
          <div className="max-w-3xl">
            <span className="inline-block rounded-lg bg-lime text-ink font-black text-xs px-3 py-1 uppercase tracking-wider mb-4">
              Visi Utama
            </span>
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug">
              &ldquo;{visiData.visi}&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Misi List */}
        <div>
          <h3 className="text-xl font-black text-ink uppercase mb-6 tracking-tight flex items-center gap-2">
            <span>MISI KABINET</span>
            <span className="h-0.5 w-12 bg-ink" />
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visiData.misi.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4 rounded-2xl border-2 border-ink bg-cream p-6 shadow-brutal-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink text-white font-black text-sm">
                  0{idx + 1}
                </div>
                <p className="text-zinc-700 text-sm sm:text-base font-medium leading-relaxed pt-1">
                  {m}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
