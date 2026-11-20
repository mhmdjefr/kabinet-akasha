import { redirect } from "next/navigation";

export const metadata = {
  title: "Barnaby 2.0 — Karya dan Katalog",
  description:
    "Ruang portofolio mahasiswa TIK, merchandise komunitas, dan aplikasi digital dari Barnaby.",
};

export default function BarnabyPage() {
  redirect("/inovasi/barnaby");
}
