"use client";

import Link from "next/link";
import {
  akashaLogo,
  candidateAnisaPhoto,
  candidateJeffriPhoto,
  heroBackgroundPhoto,
  identityBottomPhoto,
  identityKabinetLogo,
  identityTopPhoto,
  itekProgramLogo,
  innovationBackgroundPhoto,
  tikgemProgramLogo,
  tikgemProgramLogoImage,
} from "@/lib/assets";

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

export default function MobileCampaign() {
  const missions = [
    ["01", "Transparansi yang Nyata", "Mewujudkan tata kelola organisasi yang transparan dan akuntabel, mulai dari proses seleksi, kegiatan, hingga pengelolaan keuangan."],
    ["02", "Kesempatan Setara", "Membuka ruang bagi seluruh mahasiswa TIK untuk terlibat, berkontribusi, dan menyampaikan aspirasi secara adil dan terbuka."],
    ["03", "Bertumbuh Bersama", "Menghadirkan program pengembangan kompetensi akademik dan nonakademik yang berkelanjutan."],
    ["04", "Mandiri untuk Terus Melangkah", "Membangun kemandirian pendanaan melalui pengembangan sumber daya dan kerja sama yang berkelanjutan."],
  ] as const;

  const innovations = [
    ["01", "TIKTrack", "Informasi dalam Genggaman", "Sistem informasi terintegrasi untuk mempermudah akses informasi kegiatan dan kepengurusan HIMATIK.", "tiktrack"],
    ["02", "ASAH", "Ruang untuk Berkembang", "Program pendampingan akademik yang mendukung mahasiswa TIK dalam mengembangkan kemampuan dan potensinya.", "asah"],
    ["03", "Barnaby 2.0", "Mandiri, Terus Berkembang", "Pengembangan unit usaha HIMATIK melalui layanan dan proyek digital untuk mendukung kemandirian organisasi.", "barnaby"],
  ] as const;

  return (
    <main className="mobile-campaign">
      <section id="beranda" className="mobile-hero">
        <img className="mobile-hero-photo" src={heroBackgroundPhoto} alt="" />
        <div className="mobile-hero-brand">
          <span>Kabinet</span>
          <strong>AKASHA</strong>
          <p>Ruang untuk Semua, Tumbuh dan Berdiri Bersama</p>
        </div>
      </section>

      <section id="filosofi-logo" className="mobile-identity">
        <div className="mobile-identity-photos">
          <img src={identityTopPhoto} alt="" />
          <img src={identityBottomPhoto} alt="" />
        </div>
        <div className="mobile-identity-brand">
          <img src={identityKabinetLogo} alt="" />
          <div><small>Kabinet</small><strong>AKASHA</strong></div>
        </div>
      </section>

      <section className="mobile-philosophy">
        <div className="mobile-kicker">Lebih dari Sekadar Nama</div>
        <h2>Lebih dari Sekadar Nama,<br />Ada Makna yang Kami Bawa</h2>
        <p><strong>Akasha</strong> berasal dari bahasa Sanskerta yang berarti <b>ruang, langit, atau eter.</b> Sebuah filosofi tentang ruang tanpa batas yang menaungi, menghubungkan, dan berdiri mandiri.</p>
        <p>Dari makna inilah Kabinet Akasha hadir, membawa harapan untuk menjadikan HIMATIK <b>sebagai ruang yang terbuka bagi seluruh mahasiswa TIK.</b></p>

        <h2>Satu Ruang,<br />Empat Makna yang Menyatukan</h2>
        <div className="mobile-philosophy-grid">
          {[
            ["01", "Ruang Tanpa Sekat", "Merangkul seluruh mahasiswa TIK tanpa membeda-bedakan program studi maupun angkatan."],
            ["02", "Tempat Potensi Bermula", "Menjadi wadah bagi mahasiswa untuk mengembangkan kemampuan, gagasan, dan kontribusinya."],
            ["03", "Setiap Suara Punya Tempat", "Menghubungkan aspirasi mahasiswa melalui komunikasi yang terbuka dan transparan."],
            ["04", "Tumbuh dengan Kemandirian", "Membangun organisasi yang mampu berkembang melalui sumber daya dan kerja sama berkelanjutan."],
          ].map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mobile-missions">
        <h2>Visi dan Misi</h2>
        <h3>Visi Kami</h3>
        <p>Mewujudkan HIMATIK sebagai ruang yang terbuka, setara, transparan, dan mandiri bagi seluruh mahasiswa TIK untuk berkembang bersama.</p>
        <div className="mobile-divider" />
        <h3>Empat Langkah Kami</h3>
        <div className="mobile-mission-grid">
          {missions.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mobile-candidates">
        <h2><span>Dua</span> Sosok</h2>
        <h2 className="mobile-candidates-right"><span>Satu</span> Tujuan</h2>
        <div className="mobile-candidate-grid">
          <article>
            <img src={candidateJeffriPhoto} alt="M. Jeffri" />
            <strong>M. Jeffri</strong>
            <small>Calon Ketua HIMATIK</small>
            <em>Periode 2026 - 2027</em>
          </article>
          <article>
            <img src={candidateAnisaPhoto} alt="P. Anisa La A." />
            <strong>P. Anisa La A.</strong>
            <small>Calon Wakil Ketua HIMATIK</small>
            <em>Periode 2026 - 2027</em>
          </article>
        </div>
      </section>

      <section className="mobile-gagasan"><h2>Gagasan Jadi Aksi</h2></section>

      <section id="program-unggulan" className="mobile-programs">
        <h2>Program Unggulan</h2>
        <p>Melalui program unggulan, Akasha membuka ruang bagi mahasiswa TIK untuk berkolaborasi, mengembangkan potensi, dan menciptakan dampak nyata.</p>
        <div className="mobile-program-grid">
          <article><img src={itekProgramLogo} alt="ITEK" /></article>
          <article><img src={tikgemProgramLogoImage} alt="TIKGAMES" /></article>
          <article><img src={tikgemProgramLogo} alt="TIKGEM" /></article>
        </div>
      </section>

      <section id="gerakan-inovasi" className="mobile-innovations">
        <h2>Gerakan Inovasi</h2>
        <p>Akasha menghadirkan inovasi untuk membuka peluang baru, menjawab kebutuhan mahasiswa TIK, dan mendorong HIMATIK terus berkembang.</p>
        <div className="mobile-innovation-list">
          {innovations.map(([number, name, title, text, slug]) => (
            <article key={number}>
              <div className="mobile-innovation-number">{number}</div>
              <h3>{name}</h3>
              <Link
                href={`/inovasi/${slug}`}
                aria-label={`Lihat detail inovasi ${name}`}
                className="mobile-innovation-card focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#cfffa3]"
              >
                <img src={innovationBackgroundPhoto} alt="" />
                <div>
                  <strong>{title}</strong>
                  <p>{text}</p>
                  <span
                    className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/70 px-4 py-2 text-xs font-bold text-white shadow-lg transition-all hover:brightness-110 active:scale-95"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, rgb(247, 47, 251) 0%, rgba(147, 28, 149, 0) 95%)",
                    }}
                  >
                    <span>Lihat Detail Inovasi →</span>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <footer className="mobile-footer">
        <h2>Langkah Baru Dimulai</h2>
        <div className="mobile-footer-brand">
          <img src={identityKabinetLogo} alt="" />
          <div><small>Kabinet</small><strong>AKASHA</strong></div>
        </div>
        <nav aria-label="Navigasi mobile bawah">
          <button onClick={scrollToTop}>Beranda</button>
          <button onClick={() => document.getElementById("program-unggulan")?.scrollIntoView({ behavior: "smooth" })}>Program Unggulan</button>
          <button onClick={() => document.getElementById("gerakan-inovasi")?.scrollIntoView({ behavior: "smooth" })}>Gerakan Inovasi</button>
        </nav>
        <button className="mobile-footer-up" onClick={scrollToTop} aria-label="Kembali ke atas">↑</button>
        <p>© 2026 Kabinet Akasha. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
