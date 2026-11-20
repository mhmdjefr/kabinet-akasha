import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-white py-16 border-t-2 border-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/logo.svg"
                alt="Logo Kabinet Akasha"
                width={36}
                height={48}
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="text-xl font-black tracking-wider uppercase">
                KABINET AKASHA
              </span>
            </div>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              Membentangkan ruang gerak dan karya mahasiswa. Wadah kolaborasi inklusif, inovatif, dan solutif.
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-2">
              Navigasi
            </span>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Contact */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-2">
              Terhubung Bersama Kami
            </span>
            <p className="text-sm text-zinc-300">
              Ikuti perkembangan kampanye dan aspirasi terkini melalui media sosial resmi.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold hover:bg-white/20 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold hover:bg-white/20 transition-colors"
              >
                TikTok
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold hover:bg-white/20 transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© 2026 Tim Sukses Kabinet Akasha. Hak Cipta Dilindungi.</p>
          <p>Dibuat dengan Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
