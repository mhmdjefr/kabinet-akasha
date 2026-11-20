"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { leaders } from "@/lib/data";

export default function DuaSosok() {
  return (
    <section id="kandidat" className="py-24 bg-cream relative overflow-hidden border-t border-ink/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-1 text-xs font-bold text-ink shadow-sm">
            KEPEMIMPINAN
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-ink uppercase tracking-tight">
            DUA SOSOK, SATU TUJUAN
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            Kolaborasi kepemimpinan yang berakar pada integritas, empati, dan keberanian bertindak.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {leaders.map((leader, idx) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="rounded-3xl border-2 border-ink bg-white overflow-hidden shadow-brutal flex flex-col group"
            >
              {/* Image Frame */}
              <div className="relative h-96 w-full bg-gradient-to-b from-violet/20 via-cream to-white flex items-end justify-center overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={340}
                  height={420}
                  className="h-full w-auto object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-ink px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider">
                    {leader.role}
                  </span>
                </div>
              </div>

              {/* Detail Content */}
              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black text-ink">{leader.name}</h3>
                  <p className="text-xs font-bold text-violet uppercase tracking-wider mt-1">
                    {leader.nim}
                  </p>
                  <p className="text-zinc-600 text-sm italic mt-4 border-l-2 border-violet/40 pl-4 py-1">
                    &ldquo;{leader.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-400 font-semibold uppercase">
                  <span>Kabinet Akasha</span>
                  <span>Paslon 01</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
