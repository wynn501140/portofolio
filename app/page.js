import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">hello_world</div>
            <h1>
              Hi, I&apos;m Syech —<br />
              I build systems, <span className="accent">web &amp; AI</span>, end to end.
            </h1>
            <div className="hero-role">Front-end Web Developer &amp; AI Engineer</div>
            <p className="hero-desc">
              IT Systems student with hands-on experience managing real project lifecycles —
              now channeling that into building frontend web apps and AI-driven tools, from
              database to deployment.
            </p>
            <div className="btn-row">
              <Link href="/contact" className="btn btn-primary">
                Hire Me
              </Link>
              <Link href="/work" className="btn btn-outline">
                View My Work
              </Link>
            </div>
          </div>

          <div className="terminal">
            <div className="terminal-bar">
              <span className="terminal-dot" style={{ background: "#FF5F57" }}></span>
              <span className="terminal-dot" style={{ background: "#FEBC2E" }}></span>
              <span className="terminal-dot" style={{ background: "#28C840" }}></span>
            </div>
            <div className="terminal-body">
              <div><span className="prompt">$</span> whoami</div>
              <div className="out">Muhammad Syech Shahab</div>
              <div><span className="prompt">$</span> role --current</div>
              <div className="out">Front-end Developer &amp; AI Engineer</div>
              <div><span className="prompt">$</span> stack</div>
              <div className="out val">React · Next.js · Node.js · Python · SQL</div>
              <div><span className="prompt">$</span> status.open_to_work</div>
              <div className="out">
                <span className="true">true</span>
                <span className="cursor"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="section" id="services">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">capabilities</div>
            <h2>What I Do</h2>
            <div className="rule"></div>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🖥️</div>
              <h3>Front-end Web Development</h3>
              <p>
                Building responsive, production-ready web apps with React/Next.js on the
                front-end and Node.js.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🤖</div>
              <h3>AI Engineering</h3>
              <p>
                Designing and integrating AI-driven tools and automation — from API
                integrations to Python-based intelligent systems.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3>Project Delivery</h3>
              <p>
                Real project management experience — planning timelines, client
                communication, and shipping deliverables on scope and on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta">
            <h2>Have a project in mind? Let&apos;s build something great together.</h2>
            <div className="btn-row">
              <Link href="/contact" className="btn btn-primary">
                Hire Me
              </Link>
              <Link href="/work" className="btn btn-outline">
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
