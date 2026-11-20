// app/inovasi/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getInnovation, innovations } from "@/data/innovations";
import InnovationDetail from "@/components/InnovationDetail";
import BarnabyDetail from "@/components/BarnabyDetail";
import AsahDetail from "@/components/AsahDetail";
import Navbar from "@/components/Navbar";

export function generateStaticParams() {
  return innovations.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const innovation = getInnovation(slug);
  if (!innovation) return {};
  return {
    title: `${innovation.title} — Kabinet Akasha`,
    description: innovation.description,
  };
}

export default async function InovasiPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const innovation = getInnovation(slug);

  if (!innovation) notFound();

  return (
    <>
      <Navbar isHomePage={false} />
      <div className="pt-16">
        {innovation.slug === "barnaby" ? (
          <BarnabyDetail innovation={innovation} />
        ) : innovation.slug === "asah" ? (
          <AsahDetail />
        ) : (
          <InnovationDetail innovation={innovation} />
        )}
      </div>
    </>
  );
}
