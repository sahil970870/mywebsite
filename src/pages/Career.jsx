import { Link } from "react-router-dom";
import Banner from "../components/Banner.jsx";

const jobs = [
  { title: "Senior React Developer", location: "Dubai, UAE", type: "Full-time", dept: "Engineering" },
  { title: "iOS / Android Engineer", location: "Remote", type: "Full-time", dept: "Mobile" },
  { title: "Backend Developer (Node.js)", location: "Riyadh, KSA", type: "Full-time", dept: "Engineering" },
  { title: "UI/UX Designer", location: "Remote", type: "Contract", dept: "Design" },
  { title: "QA Engineer", location: "Doha, Qatar", type: "Full-time", dept: "Quality" },
];

const perks = [
  { icon: "🌍", title: "Remote-friendly", text: "Work from where you do your best work." },
  { icon: "📈", title: "Growth", text: "Real projects, mentorship, and room to level up." },
  { icon: "💡", title: "Modern stack", text: "Build with up-to-date tools and best practices." },
];

export default function Career() {
  return (
    <main>
      <section className="hero hero-sm">
        <div className="container">
          <div className="eyebrow">Careers</div>
          <h1>Build the future with us.</h1>
          <p className="lead">
            We're a growing team of engineers, designers, and problem-solvers.
            If you love building great software, we'd love to meet you.
          </p>
        </div>
      </section>

      <section className="pt-0">
        <div className="container">
          <div className="grid c3 mb-lg">
            {perks.map((p) => (
              <div className="card" key={p.title}>
                <div className="ico">{p.icon}</div>
                <h3>{p.title}</h3>
                <p className="muted">{p.text}</p>
              </div>
            ))}
          </div>

          <h2>Open positions</h2>
          {jobs.map((j) => (
            <div className="job" key={j.title}>
              <div>
                <h3>{j.title}</h3>
                <div className="tags">
                  <span className="tag">📍 {j.location}</span>
                  <span className="tag">🕒 {j.type}</span>
                  <span className="tag">🏷 {j.dept}</span>
                </div>
              </div>
              <Link
                to="/contact"
                state={{ subject: `Application: ${j.title}` }}
                className="btn ghost"
              >
                Apply →
              </Link>
            </div>
          ))}

          <div className="mt-lg">
            <Banner
              title="Don't see your role?"
              text="Send us your CV anyway — we're always looking for great people."
              buttonText="Send your CV"
              to="/contact"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
