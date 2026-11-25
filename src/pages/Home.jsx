import { Link } from "react-router-dom";
import Banner from "../components/Banner.jsx";

const services = [
  {
    icon: "🌐",
    title: "Website Development",
    text: "Fast, responsive, SEO-ready websites and web apps built with modern frameworks.",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    text: "Native and cross-platform iOS & Android apps with a polished user experience.",
  },
  {
    icon: "⚙️",
    title: "Software Solutions",
    text: "Custom ERP, CRM, e-commerce, and OMS platforms tailored to your workflow.",
  },
];

const stats = [
  { num: "50+", label: "Projects Delivered" },
  { num: "7", label: "Industry Domains" },
  { num: "3", label: "Gulf Markets Served" },
  { num: "100%", label: "Client Focused" },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="pill">Trusted technology partner in the Gulf</span>
          <h1>
            We build digital products
            <br />
            people trust.
          </h1>
          <p className="lead">
            Amanah Technologies delivers end-to-end web, mobile, and software
            solutions for B2C, B2B, banking, healthcare, and retail businesses
            across the UAE, Saudi Arabia, and Qatar.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn">
              Start a project →
            </Link>
            <Link to="/about" className="btn ghost">
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <section className="pt-sm">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">What we do</div>
            <h2>Services built to scale</h2>
            <p>From first line of code to launch and beyond — we cover the full stack.</p>
          </div>
          <div className="grid c3">
            {services.map((s) => (
              <div className="card" key={s.title}>
                <div className="ico">{s.icon}</div>
                <h3>{s.title}</h3>
                <p className="muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-sm">
        <div className="container">
          <div className="grid c4">
            {stats.map((s) => (
              <div className="card stat" key={s.label}>
                <div className="num">{s.num}</div>
                <div className="muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <Banner
            title="Have an idea? Let's build it."
            text="Tell us about your project and we'll get back to you with a plan."
            buttonText="Get in touch"
            to="/contact"
          />
        </div>
      </section>
    </main>
  );
}
