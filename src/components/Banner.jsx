import { Link } from "react-router-dom";

export default function Banner({ title, text, buttonText, to }) {
  return (
    <div className="banner">
      <h2>{title}</h2>
      <p className="muted">{text}</p>
      <Link to={to} className="btn">
        {buttonText}
      </Link>
    </div>
  );
}
