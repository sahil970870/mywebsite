import { useState } from "react";
import { useLocation } from "react-router-dom";

const info = [
  { icon: "✉️", title: "Email", text: "hello@amanahtechnologies.com" },
  { icon: "🌐", title: "Website", text: "amanahtechnologies.com" },
  { icon: "📍", title: "Serving", text: "UAE · Saudi Arabia · Qatar" },
  { icon: "🕒", title: "Hours", text: "Sun – Thu, 9:00 AM – 6:00 PM (GST)" },
];

export default function Contact() {
  const location = useLocation();
  const empty = { name: "", email: "", subject: "", message: "" };
  const [form, setForm] = useState({
    ...empty,
    subject: location.state?.subject || "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send `form` to your backend or a form service (e.g. Formspree, EmailJS)
    console.log("Contact form submitted:", form);
    setSent(true);
    setForm(empty);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <main>
      <section className="hero hero-sm">
        <div className="container">
          <div className="eyebrow">Contact</div>
          <h1>Let's talk.</h1>
          <p className="lead">
            Tell us about your project, ask a question, or just say hello. We
            usually reply within one business day.
          </p>
        </div>
      </section>

      <section className="pt-0">
        <div className="container contact-grid">
          <div>
            {info.map((i) => (
              <div className="info-row" key={i.title}>
                <div className="ico">{i.icon}</div>
                <div>
                  <h3>{i.title}</h3>
                  <p className="muted">{i.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card">
            {sent && (
              <div className="notice">
                ✓ Thanks! Your message has been sent. We'll be in touch soon.
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com" required />
              </div>
              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" value={form.subject} onChange={handleChange} placeholder="How can we help?" required />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project..." required />
              </div>
              <button className="btn full" type="submit">
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
