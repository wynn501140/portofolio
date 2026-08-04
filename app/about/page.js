export const metadata = {
  title: "About — Muhammad Syech Shahab",
};

export default function AboutPage() {
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <div className="avatar-box">
          {/* TODO: ganti div ini dengan <Image src="/foto-profil.jpg" ... /> pas foto udah siap */}
          <span className="initials">MS</span>
          <div className="avatar-badge">📷 foto menyusul</div>
        </div>

        <div>
          <div className="about-eyebrow">// about me</div>
          <h2>Bridging project delivery with technical execution.</h2>
          <p>
            Saya mahasiswa Information Technology Systems dengan pengalaman langsung di
            project management dan field supervision. Fokus saya sekarang di full-stack web
            development dan AI-driven tools — membawa disiplin delivery yang nyata ke setiap
            proses build, mulai dari UI/UX sampai backend database systems.
          </p>
          <div className="check-list">
            <div className="check-item">
              <span className="check-icon">✓</span> 1–2 tahun pengalaman teknis & project
            </div>
            <div className="check-item">
              <span className="check-icon">✓</span> React, Next.js, Node.js, Python, SQL, Supabase
            </div>
            <div className="check-item">
              <span className="check-icon">✓</span> Latar belakang project management & komunikasi klien
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
