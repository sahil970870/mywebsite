import Banner from "../components/Banner.jsx";

const values = [
  {
    icon: "🤝",
    title: "Trust",
    text: "Amanah means trust. Transparency and reliability guide every engagement.",
  },
  {
    icon: "🎯",
    title: "Quality",
    text: "Clean code, thorough testing, and attention to detail in everything we ship.",
  },
  {
    icon: "🚀",
    title: "Innovation",
    text: "We stay current with the tools and practices that move projects forward.",
  },
];

const domains = ["B2C", "B2B", "Banking", "Healthcare", "ERP", "CRM", "E-commerce", "OMS"];

export default function About() {
  return (
    <main>
      <section className="hero hero-sm">
        <div className="container">
          <div className="eyebrow">About us</div>
          <h1>Technology, built on trust.</h1>
          <p className="lead">
            Amanah Technologies is a full-stack IT services company helping
            businesses design, build, and scale software that works.
          </p>
        </div>
      </section>

      <section className="pt-0">
        <div className="container grid c2 align-center">
          <div>
            <h2>Our mission</h2>
            <p className="muted mb">
              We partner with organizations across the Middle East to turn ideas
              into dependable digital products. Whether it's a customer-facing
              app, an internal ERP, or a complete e-commerce platform, we bring
              the engineering and the care to deliver it right.
            </p>
            <p className="muted">
              Our team works across industries — from banking and healthcare to
              retail and logistics — adapting to the standards and expectations
              of each one.
            </p>
          </div>
          <div className="card">
            <h3>Domains we work in</h3>
            <div className="tags">
              {domains.map((d) => (
                <span className="tag" key={d}>
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">What drives us</div>
            <h2>Our values</h2>
          </div>
          <div className="grid c3">
            {values.map((v) => (
              <div className="card" key={v.title}>
                <div className="ico">{v.icon}</div>
                <h3>{v.title}</h3>
                <p className="muted">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-0">
        <div className="container">
          <Banner
            title="Want to work with us?"
            text="We're always happy to talk about new projects and partnerships."
            buttonText="Contact us"
            to="/contact"
          />
        </div>
      </section>
    </main>
  );
}
