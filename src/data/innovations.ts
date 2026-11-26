import {
  asahHeaderStrip,
  barnabyHeaderStrip,
  tikTrackHeaderStrip,
} from "@/lib/assets";

export type Innovation = {
  slug: string;
  title: string;
  headerStrip: string;
  tagline: string;
  number: string;
  category: string;
  summary: string;
  description: string;
  points: string[];
  carouselLabels: string[];
  images?: string[];
};

export const innovations: Innovation[] = [
  {
    slug: "tiktrack",
    title: "TIKTrack",
    headerStrip: tikTrackHeaderStrip,
    tagline: "Informasi dalam Genggaman",
    number: "01",
    category: "Sistem Informasi HIMATIK",
    summary:
      "Sistem informasi terintegrasi untuk mengelola seleksi kepanitiaan dan kepengurusan HIMATIK.",
    description:
      "Sistem informasi terintegrasi dengan website HIMATIK untuk mengelola seleksi kepanitiaan dan kepengurusan.",
    points: [
      "Cakupan: kepengurusan dan program kerja seperti TIK Games, SAUM, dan ITechno Cup, serta EXPECTIK yang merupakan kegiatan jurusan berkolaborasi dengan HIMATIK.",
      "Pendaftar dapat login dan memantau sendiri status berkas, jadwal wawancara, sampai pengumuman hasil.",
      "Pendaftar yang tidak lolos tetap mendapat feedback singkat tentang hal yang perlu dikembangkan.",
      "Hasil evaluasi hanya dapat diakses pendaftar yang bersangkutan.",
    ],
    carouselLabels: ["Daftar", "Verifikasi Berkas", "Wawancara", "Pengumuman Diterima", "Pengumuman Ditolak"],
    images: [
      "/assets/tiktrack-daftar.png",
      "/assets/tiktrack-verifikasi-berkas.png",
      "/assets/tiktrack-wawancara.png",
      "/assets/tiktrack-pengumuman-diterima.png",
      "/assets/tiktrack-pengumuman-ditolak.png"
    ],
  },
  {
    slug: "asah",
    title: "ASAH",
    headerStrip: asahHeaderStrip,
    tagline: "Ruang untuk Berkembang",
    number: "02",
    category: "Program Pendampingan Akademik",
    summary:
      "Program pendampingan mata kuliah sulit dan praktik kerja IT untuk mahasiswa baru Jurusan TIK.",
    description:
      "Mendampingi mata kuliah yang dinilai sulit serta perangkat dan praktik kerja IT yang belum diajarkan di kelas.",
    points: [
      "Tutor berasal dari Departemen Pendidikan dan Teknologi bersama dua kelompok studi, CSC dan SPNJ.",
      "Satu tutor memegang satu kelompok kecil yang terbentuk dari pendaftaran minat.",
      "Empat pertemuan selama satu semester.",
      "Format hybrid: tatap muka untuk pendampingan personal, daring untuk fleksibilitas waktu.",
      "Sasaran: mahasiswa baru Jurusan TIK.",
    ],
    carouselLabels: ["Pendampingan", "Sesi Tutor", "Belajar Bersama"],
  },
  {
    slug: "barnaby",
    title: "Barnaby 2.0",
    headerStrip: barnabyHeaderStrip,
    tagline: "Mandiri, Terus Berkembang",
    number: "03",
    category: "Unit Usaha & Layanan Digital",
    summary:
      "Unit usaha HIMATIK yang mengembangkan merchandise, akun premium, dan layanan proyek digital.",
    description:
      "Unit usaha Departemen Bisnis dan Kemitraan yang menjual merchandise dan akun premium kepada mahasiswa dan masyarakat luas, kini ditambah lini jasa proyek digital.",
    points: [
      "Bismit memfasilitasi permintaan proyek kepada mahasiswa TIK yang berminat dan kompeten.",
      "Dosen atau alumni mendampingi untuk menjaga standar hasil kerja.",
      "Kesepakatan kerja dan pembagian hasil antara pekerja dan HIMATIK ditulis dan disepakati sebelum proyek dimulai.",
      "Pengembangan lini jasa dilaksanakan bertahap, dimulai dari skema kerja sama informal antara mahasiswa dan pihak yang membutuhkan, dengan fasilitasi HIMATIK.",
    ],
    carouselLabels: [
      "Portofolio Mahasiswa",
      "Merchandise",
      "Aplikasi Online",
    ],
    images: [
      "/assets/barnaby-portofolio.png",
      "/assets/barnaby-merch.png",
      "/assets/barnaby-aplikasi.png",
    ],
  },
];

export function getInnovation(slug: string) {
  return innovations.find((innovation) => innovation.slug === slug);
}
