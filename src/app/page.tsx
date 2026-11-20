import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionTentang from "@/components/SectionTentang";
import Marquee from "@/components/Marquee";
import SectionAgenda from "@/components/SectionAgenda";
import SectionInovasi from "@/components/SectionInovasi";
import SectionClosing from "@/components/SectionClosing";

export default function Home() {
  return (
    <main className="overflow-x-clip bg-violet text-ink">
      <Navbar />
      <Hero />
      <SectionTentang />
      <Marquee />
      <SectionAgenda />
      <SectionInovasi />
      <SectionClosing />
    </main>
  );
}
