import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main>
      <section className="hero">
        <div className="container center">
          <div className="eyebrow">404</div>
          <h1>Page not found</h1>
          <p className="lead mx-auto">The page you're looking for doesn't exist.</p>
          <div className="hero-actions justify-center">
            <Link to="/" className="btn">Back to home</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
