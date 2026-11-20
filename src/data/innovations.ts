export type Innovation = {
  slug: string;
  title: string;
  color: string;
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
    color: "bg-brand-blue",
    summary:
      "Sistem informasi terintegrasi untuk mengelola seleksi kepanitiaan dan kepengurusan HIMATIK.",
    description:
      "Sistem informasi terintegrasi dengan website HIMATIK untuk mengelola seleksi kepanitiaan dan kepengurusan.",
    points: [
      "Cakupan: kepengurusan dan program kerja seperti TIK Games, SAUM, dan ITechno Cup, serta EXPECTIK yang merupakan kegiatan jurusan berkolaborasi dengan HIMATIK.",
      "Pendaftar dapat login dan memantau sendiri status berkas, jadwal wawancara, sampai pengumuman hasil.",
      "Pendaftar yang tidak lolos tetap mendapat feedback singkat tentang hal yang perlu dikembangkan.",
      "Rubrik penilaian terstandar di semua divisi, dengan kriteria khusus yang disesuaikan kebutuhan masing-masing departemen.",
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
    color: "bg-brand-lime",
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
    color: "bg-brand-pink",
    summary:
      "Unit usaha HIMATIK yang mengembangkan merchandise, akun premium, dan layanan proyek digital.",
    description:
      "Unit usaha Departemen Bisnis dan Kemitraan yang menjual merchandise dan akun premium kepada mahasiswa dan masyarakat luas, kini ditambah lini jasa proyek digital.",
    points: [
      "Lini baru: pengerjaan proyek digital seperti pembuatan situs web, sistem informasi, dan kebutuhan desain untuk lingkungan kampus maupun eksternal.",
      "Bismit memfasilitasi permintaan proyek kepada mahasiswa TIK yang berminat dan kompeten.",
      "Dosen atau alumni mendampingi untuk menjaga standar hasil kerja.",
      "Kesepakatan kerja dan pembagian hasil antara pekerja dan HIMATIK ditulis dan disepakati sebelum proyek dimulai.",
      "Pengembangan lini jasa dilaksanakan bertahap, dimulai dari skema kerja sama informal antara mahasiswa dan pihak yang membutuhkan, dengan fasilitasi HIMATIK.",
    ],
    carouselLabels: [
      "Deskripsi Mahasiswa TIK",
      "Jualan Merchandise",
      "Jualan Aplikasi Online",
    ],
  },
];

export function getInnovation(slug: string) {
  return innovations.find((innovation) => innovation.slug === slug);
}
