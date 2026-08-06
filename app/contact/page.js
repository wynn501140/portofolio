import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Muhammad Syech Shahab",
};

export default function ContactPage() {
  return (
    <section className="section" id="contact-page">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">get in touch</div>
          <h2>Contact</h2>
          <div className="rule"></div>
        </div>

        <div className="contact-grid">
          <div>
            <p style={{ color: "var(--ink-soft)", marginBottom: 24, maxWidth: 420 }}>
              Ada project atau posisi yang cocok? Kirim pesan lewat form ini, atau langsung
              hubungi lewat kontak di bawah.
            </p>

            <div className="footer-contacts">
              <div className="contact-row">
                <span className="ico">✉️</span> ibnsyech04@gmail.com
              </div>
              <div className="contact-row">
                <span className="ico">💼</span> linkedin.com/in/ibn-syech-b35018397
              </div>

              <a href="https://github.com/wynn501140" target="_blank" rel="noopener noreferrer" className="contact-row">
                <span className="ico">🐙</span> github.com/wynn501140
              </a>
              <a href="https://instagram.com/ibn.syahab._" target="_blank" rel="noopener noreferrer" className="contact-row">
                <span className="ico">📸</span> @ibn.syahab._
              </a>
              <a href="https://t.me/Mywynn" target="_blank" rel="noopener noreferrer" className="contact-row">
                <span className="ico">✈️</span> Telegram — @Mywynn (kerja/freelance)
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
