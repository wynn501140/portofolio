
import Image from "next/image";

export const metadata = {
  title: "Work — Muhammad Syech Shahab",
};

const projects = [
  {
    icon: "🌐",
    tags: ["Node.js", "Tailwind"],
    title: "Full-Stack Web Development Project",
    desc: "Custom-coded website with responsive layouts and backend logic, built collaboratively in a group project.",

    link: "https://github.com/askiafp/digital-wardrobe", // TODO: ganti dengan link GitHub asli
    linkLabel: "View on GitHub →",
  },
  {
    icon: "🧠",
    tags: ["Python", "Telegram API"],
    title: "Smart Device Assistant App",
    desc: "All-in-one device assistant with app/file management and remote access via Telegram, with IP-based security.",
    link: "https://github.com/wynn501140/my-assistant", // TODO: ganti dengan link GitHub asli
    linkLabel: "View on GitHub →",
  },
  {
    icon: "🎨",
    tags: ["Figma", "UI/UX"],
    title: "Healthcare Web UI/UX Design",
    desc: "High-fidelity, user-centered UI design for a healthcare web app, from user flows to accessible interfaces.",
    link: "https://lnkd.in/p/exiD6aAw", // TODO: ganti dengan link LinkedIn post/prototype
    linkLabel: "View Prototype on LinkedIn →",
  },
  {
    icon: "🗄️",
    tags: ["SQL", "Supabase"],
    title: "Public Service Big Data System",
    desc: "Proof-of-concept backend & big data architecture to monitor real-time public service performance.",
    link: "https://matter-hug-02318433.figma.site/",
    linkLabel: "View live demo dashboard →",
  },
];

const skills = [
  { icon: "🖥️", name: "Web Development", stack: "REACT · NEXT.JS\nNODE.JS · TAILWIND" },
  { icon: "🤖", name: "AI & Backend", stack: "PYTHON · SQL\nTELEGRAM API" },
  { icon: "🗄️", name: "Database", stack: "SQL · SUPABASE\nDATA ARCHITECTURE" },
  { icon: "📐", name: "Design & Delivery", stack: "FIGMA · UI/UX\nPROJECT MANAGEMENT" },
];

export default function WorkPage() {
  return (
    <>
      <section className="section" id="work">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">selected work</div>
            <h2>Portfolio</h2>
            <div className="rule"></div>
          </div>

          <div className="portfolio-grid">
            {projects.map((p) => (
              <div className="proj-card" key={p.title}>
                <div className="proj-thumb">
                  <span className="proj-icon">{p.icon}</span>
                </div>
                <div className="proj-body">
                  <div className="proj-tags">
                    {p.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  {p.link ? (
                    <a href={p.link} className="proj-link" target="_blank" rel="noopener noreferrer">
                      {p.linkLabel}
                    </a>
                  ) : (
                    <span className="proj-link soon">{p.linkLabel}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="skills">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">toolbox</div>
            <h2>Skills</h2>
            <div className="rule"></div>
          </div>

          <div className="skills-grid">
            {skills.map((s) => (
              <div className="skill-card" key={s.name}>
                <div className="service-icon">{s.icon}</div>
                <h4>{s.name}</h4>
                <p style={{ whiteSpace: "pre-line" }}>{s.stack}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
