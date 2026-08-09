export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              SYECH<span>.DEV</span>
            </div>
            <p>Full-Stack Web Developer &amp; AI Engineer</p>
          </div>

          <div className="footer-contacts">
            <div className="contact-row">
              <span className="ico">Email:</span> ibnsyech04@gmail.com
            </div>
            <div className="contact-row">
              <span className="ico">LinkedIn:</span> linkedin.com/in/ibn-syech-b35018397
            </div>
            <a href="https://github.com/wynn501140" target="_blank" rel="noopener noreferrer" className="contact-row">
              <span className="ico">Github:</span> github.com/wynn501140
            </a>
            <a href="https://instagram.com/ibn.syahab._" target="_blank" rel="noopener noreferrer" className="contact-row">
              <span className="ico">Instagram:</span> @ibn.syahab._
            </a>
            <a href="https://t.me/Mywynn" target="_blank" rel="noopener noreferrer" className="contact-row">
              <span className="ico">Telegram:</span>  @Mywynn 
            </a>
          </div>
        </div>

        <div className="footer-bottom">© 2026 Muhammad Syech Shahab. All rights reserved.</div>
      </div>
    </footer>
  );
}
