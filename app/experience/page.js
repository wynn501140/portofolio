export const metadata = {
  title: "Experience — Muhammad Syech Shahab",
};

const experiences = [
  {
    date: "Jan 2026 – May 2026",
    role: "Project Manager Intern",
    org: "AT Press · Remote, Jakarta",
    desc: "Managed day-to-day project workflows and served as primary liaison between technical teams and clients, translating requirements into actionable dev tasks.",
  },
  {
    date: "Jan 2024 – Dec 2024",
    role: "Field Supervisor & Project Coordinator",
    org: "Amana Living · Jakarta",
    desc: "Supervised on-site interior design project lifecycles, aligned deliverables with client blueprints, and compiled daily progress reports.",
  },
];

export default function ExperiencePage() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">career so far</div>
          <h2>Experience</h2>
          <div className="rule"></div>
        </div>

        <div className="exp-list">
          {experiences.map((exp) => (
            <div className="exp-item" key={exp.role}>
              <div className="exp-date">{exp.date}</div>
              <div>
                <div className="exp-role">{exp.role}</div>
                <div className="exp-org">{exp.org}</div>
                <div className="exp-desc">{exp.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
