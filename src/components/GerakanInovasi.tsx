"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GerakanInovasi() {
  return (
    <section id="inovasi" className="py-24 bg-violet text-white relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none w-96 h-96">
        <Image
          src="/assets/bg-tikrex.png"
          alt="Graphic Tikrex"
          fill
          className="object-contain"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-bold text-white backdrop-blur-sm">
            EKOSISTEM DIGITAL
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            GERAKAN INOVASI & TEKNOLOGI
          </h2>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed">
            Menghadirkan platform terintegrasi untuk mempermudah birokrasi, transparansi, serta kolaborasi antar organisasi dan mahasiswa di lingkungan kampus.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm p-6">
              <span className="text-lime font-black text-2xl block mb-1">01</span>
              <h3 className="font-extrabold text-lg text-white">Sistem Satu Pintu</h3>
              <p className="text-sm text-white/70 mt-2">
                Penyederhanaan perizinan kegiatan dan penyaluran aspirasi digital tanpa birokrasi berbelit.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm p-6">
              <span className="text-pinky font-black text-2xl block mb-1">02</span>
              <h3 className="font-extrabold text-lg text-white">Hub Karya Mahasiswa</h3>
              <p className="text-sm text-white/70 mt-2">
                Etalase digital showcase karya dan portofolio prestasi mahasiswa untuk membuka peluang karier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
