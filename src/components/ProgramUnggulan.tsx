"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { programUnggulan } from "@/lib/data";

export default function ProgramUnggulan() {
  return (
    <section id="program" className="py-24 bg-white relative overflow-hidden border-t border-ink/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-cream px-4 py-1 text-xs font-bold text-ink">
            GAGASAN JADI AKSI
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-ink uppercase tracking-tight">
            PROGRAM UNGGULAN
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            Inisiatif strategis yang dirancang untuk memberikan dampak riil dan berkelanjutan bagi mahasiswa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programUnggulan.map((prog, idx) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="rounded-3xl border-2 border-ink bg-cream overflow-hidden shadow-brutal flex flex-col justify-between hover:-translate-y-1 transition-transform group"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-48 w-full bg-zinc-900/5 flex items-center justify-center p-6 border-b-2 border-ink">
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    width={200}
                    height={120}
                    className="max-h-36 w-auto object-contain drop-shadow group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-md bg-white border border-ink px-2.5 py-1 text-[11px] font-bold text-ink uppercase">
                      {prog.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-black text-ink">{prog.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {prog.description}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="p-6 pt-0 flex flex-wrap gap-2">
                {prog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white border border-ink/20 px-3 py-0.5 text-xs font-semibold text-zinc-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
