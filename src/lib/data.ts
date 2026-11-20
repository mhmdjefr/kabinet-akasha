export type AgendaItem = {
  no: string;
  title: string;
  status: string;
  bg: "pinky" | "white" | "lime";
  rotate: string;
};

// Ubah konten agenda di sini aja, nggak perlu sentuh komponen.
export const agendaItems: AgendaItem[] = [
  { no: "01", title: "PERKENALAN KARAKTER", status: "SEGERA", bg: "pinky", rotate: "-rotate-2" },
  { no: "02", title: "DI BALIK LAYAR", status: "BERIKUTNYA", bg: "white", rotate: "rotate-1" },
  { no: "03", title: "EPISODE PERDANA", status: "COMING SOON", bg: "lime", rotate: "-rotate-1" },
];

export const navLinks = [
  { label: "TENTANG", href: "#tentang" },
  { label: "AGENDA", href: "#agenda" },
  { label: "INOVASI", href: "#inovasi" },
  { label: "TEASER", href: "#teaser" },
];
