"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-black/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="#hero" className="flex items-center gap-3">
          <Image
            src="/assets/logo.svg"
            alt="Logo Kabinet Akasha"
            width={32}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
          <div className="flex flex-col">
            <span className="font-extrabold tracking-wider text-lg text-ink uppercase">
              AKASHA
            </span>
            <span className="text-[10px] tracking-widest text-zinc-500 font-semibold uppercase -mt-1">
              KABINET 2026/2027
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-bold tracking-wider text-zinc-700 hover:text-violet transition-colors uppercase"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#kandidat"
            className="rounded-full bg-violet px-5 py-2 text-xs font-bold text-white shadow-sm hover:bg-violet/90 transition-all active:scale-95"
          >
            Kenali Paslon
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-ink hover:bg-black/5"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-black/10 bg-white px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-bold text-zinc-800 hover:text-violet"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#kandidat"
            onClick={() => setIsOpen(false)}
            className="block text-center rounded-xl bg-violet py-2.5 text-xs font-bold text-white mt-4"
          >
            Kenali Paslon
          </Link>
        </div>
      )}
    </header>
  );
}
