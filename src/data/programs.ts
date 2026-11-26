import {
  itechnoBanner,
  itekProgramLogo,
  saumBanner,
  tikgamesBanner,
  tikgemProgramLogo,
  tikgemProgramLogoImage,
} from "@/lib/assets";

export type Program = {
  slug: string;
  title: string;
  bannerImage: string;
  logo: string;
  description: string;
};

export const programs: Program[] = [
  {
    slug: "itechnocup",
    title: "ITechno Cup",
    bannerImage: itechnoBanner,
    logo: itekProgramLogo,
    description:
      "ITechno Cup (Informatics Technologies and Computer Cup) adalah program kerja Departemen Pendidikan dan Teknologi, berupa kompetisi di bidang Teknologi Informatika dan Komputer yang berfokus pada pengembangan potensi mahasiswa berskala internasional, serta siswa SMA/SMK-sederajat berskala nasional di seluruh Indonesia.",
  },
  {
    slug: "saum",
    title: "SAUM",
    bannerImage: saumBanner,
    logo: tikgemProgramLogo,
    description:
      "SAUM (Satu Aksi Untuk Masyarakat) adalah program kerja Departemen Sosial Mahasiswa yang mengajak dan mewadahi mahasiswa TIK untuk merealisasikan Tri Dharma Perguruan Tinggi yaitu pengabdian kepada masyarakat dengan kegiatan yang bermanfaat dan berdampak.",
  },
  {
    slug: "tik-games",
    title: "TIK Games",
    bannerImage: tikgamesBanner,
    logo: tikgemProgramLogoImage,
    description:
      "TIKGames adalah program kerja Departemen Kesehatan Mahasiswa yang berupa kompetisi di bidang olahraga guna mengembangkan minat dan bakat mahasiswa TIK. TIKGames juga dapat meningkatkan solidaritas sesama mahasiswa TIK.",
  },
];

export function getProgram(slug: string) {
  return programs.find((p) => p.slug === slug);
}
