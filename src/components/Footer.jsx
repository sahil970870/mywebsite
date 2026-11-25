import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container foot">
        <div>
          <div className="logo" style={{ marginBottom: 10 }}>
            <span className="mark">A</span>
            <span>Amanah Technologies</span>
          </div>
          <p className="muted" style={{ fontSize: ".9rem", maxWidth: 320 }}>
            Full-stack web, mobile, and software solutions for businesses across
            the Gulf.
          </p>
        </div>
        <div className="foot-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/career">Career</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="container copyright">
        © {new Date().getFullYear()} Amanah Technologies. All rights reserved.
      </div>
    </footer>
  );
}
