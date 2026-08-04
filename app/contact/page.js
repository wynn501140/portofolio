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
              <div className="contact-row soon">
                <span className="ico">🐙</span> GitHub — username menyusul
              </div>
              <div className="contact-row soon">
                <span className="ico">📸</span> Instagram — username menyusul
              </div>
              <div className="contact-row soon">
                <span className="ico">✈️</span> Telegram (kerja/freelance) — username menyusul
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
