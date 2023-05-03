import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        AADHAR
      </Link>
      <ul>
        <li>
          <Link to="/login">Client</Link>
        </li>
      </ul>
    </nav>
  );
}
