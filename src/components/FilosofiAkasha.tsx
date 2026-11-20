"use client";

import { motion } from "framer-motion";
import { cabinetValues } from "@/lib/data";

export default function FilosofiAkasha() {
  return (
    <section id="filosofi" className="py-24 bg-cream relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-1 text-xs font-bold text-ink shadow-sm">
            NILAI & PONDASI
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-ink uppercase tracking-tight">
            FILOSOFI GERAKAN
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            Tiga pilar esensial yang menuntun arah langkah Kabinet Akasha dalam mengabdi dan berkarya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cabinetValues.map((val, idx) => (
            <motion.div
              key={val.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative rounded-3xl border-2 border-ink bg-white p-8 shadow-brutal flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div>
                <span className="text-5xl font-black text-violet/20 block mb-4">
                  {val.number}
                </span>
                <h3 className="text-xl font-bold text-ink mb-3">{val.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {val.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                  Pilar Utama
                </span>
                <span className="h-2 w-2 rounded-full bg-violet" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
