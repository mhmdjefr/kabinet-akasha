import { navLinks } from "@/lib/data";

export default function Navbar({ isHomePage = true }: { isHomePage?: boolean }) {
  const sectionHref = (href: string) => (isHomePage ? href : `/${href}`);

  return (
    <header className="fixed left-1/2 top-3 z-50 w-[min(94vw,900px)] -translate-x-1/2 md:w-[min(70vw,900px)]">
      <nav className="flex min-h-11 items-center justify-between gap-3 rounded-full border-2 border-ink bg-cream px-3 py-2 shadow-[0_4px_0_var(--color-ink)] sm:px-5 md:min-h-12">
        <a href={isHomePage ? "#" : "/"} className="shrink-0 font-hand text-base leading-none sm:text-xl">
          Kabinet Akasha
        </a>
        <div className="hidden items-center gap-5 md:flex lg:gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={sectionHref(l.href)}
              className="font-sans text-[10px] font-semibold tracking-wide transition hover:-translate-y-0.5 lg:text-xs"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={sectionHref("#teaser")}
          className="shrink-0 rounded-full border border-ink bg-ink px-3 py-1.5 text-[9px] font-semibold tracking-wide text-white transition hover:scale-[1.03] sm:px-4 sm:text-[10px]"
        >
          INTIP CERITA
        </a>
      </nav>
    </header>
  );
}
