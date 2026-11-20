export interface LeaderInfo {
  name: string;
  role: string;
  nim?: string;
  quote: string;
  image: string;
}

export interface ValueItem {
  number: string;
  title: string;
  description: string;
  accentColor: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

export const navLinks = [
  { label: "BERANDA", href: "#hero" },
  { label: "TENTANG", href: "#identitas" },
  { label: "FILOSOFI", href: "#filosofi" },
  { label: "VISI & MISI", href: "#visimisi" },
  { label: "KANDIDAT", href: "#kandidat" },
  { label: "PROGRAM", href: "#program" },
  { label: "INOVASI", href: "#inovasi" },
];

export const cabinetValues: ValueItem[] = [
  {
    number: "01",
    title: "Akasha (Ruang & Angkasa)",
    description: "Melambangkan ruang tak terbatas untuk berkembang, berkreasi, dan menampung aspirasi seluruh mahasiswa.",
    accentColor: "from-blue-500/20 to-indigo-500/10",
  },
  {
    number: "02",
    title: "Harmoni & Kolaborasi",
    description: "Sinergi erat antara setiap elemen untuk mewujudkan cita-cita bersama tanpa meninggalkan siapapun.",
    accentColor: "from-pink-500/20 to-purple-500/10",
  },
  {
    number: "03",
    title: "Inovasi Berkelanjutan",
    description: "Menghadirkan terobosan teknologi dan kegiatan yang berdampak nyata, relevan, serta berkelanjutan.",
    accentColor: "from-emerald-500/20 to-teal-500/10",
  },
];

export const visiData = {
  visi: "Mewujudkan BEM / Himpunan sebagai akselerator ruang tumbuh mahasiswa yang inklusif, adaptif, solutif, serta berdaya saing global melalui kolaborasi nyata dan inovasi berkelanjutan.",
  misi: [
    "Membangun tata kelola organisasi yang transparan, akuntabel, dan berorientasi pada pelayanan mahasiswa.",
    "Mengembangkan ekosistem akademik dan teknologi yang suportif untuk mengasah potensi dan karya.",
    "Mengoptimalkan ruang advokasi dan penyaluran aspirasi yang cepat, tepat sasaran, dan responsif.",
    "Memperluas jejaring kemitraan strategis dengan alumni, industri, dan civitas akademika.",
  ],
};

export const leaders: LeaderInfo[] = [
  {
    name: "M. Jeffri",
    role: "Calon Ketua",
    nim: "Teknik Informatika",
    quote: "Menjadi wadah untuk mendengar, menyatukan gagasan, dan bergerak bersama demi perubahan nyata.",
    image: "/assets/foto-m-jeffri.png",
  },
  {
    name: "P. Anisa",
    role: "Calon Wakil Ketua",
    nim: "Sistem Informasi",
    quote: "Dedikasi untuk menciptakan sinergi harmonis dan mengantarkan karya mahasiswa ke panggung terbaik.",
    image: "/assets/foto-p-anisa.png",
  },
];

export const programUnggulan: ProgramItem[] = [
  {
    id: "itechno",
    title: "ITECHNO",
    category: "Teknologi & Kompetisi",
    description: "Platform kompetisi dan konferensi teknologi terbesar untuk mengasah talenta digital masa depan.",
    image: "/assets/ITECHNO.png",
    tags: ["Hackathon", "Seminar", "Workshop"],
  },
  {
    id: "saum",
    title: "SAUM",
    category: "Aksi Sosial & Mahasiswa",
    description: "Gerakan kebersamaan mahasiswa dalam pengabdian masyarakat, kepedulian sosial, dan pemberdayaan.",
    image: "/assets/SAUM.png",
    tags: ["Pengabdian", "Sosial", "Kolaborasi"],
  },
  {
    id: "tikgames",
    title: "TIKGAMES",
    category: "Olahraga & Esports",
    description: "Ajang apresiasi sportivitas dan kompetisi gaming interaktif antar mahasiswa.",
    image: "/assets/TIKGAMES.png",
    tags: ["Esports", "Sportivitas", "Turnamen"],
  },
];
