import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container container">

        {/* Brand Name on the left */}
        <div className="brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          &lt;/&gt; Parveez &lt;/&gt;
        </div>

        {/* Navigation links on the right */}
        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li><a href="#hero" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
          <li><a href="#resume" onClick={handleLinkClick}>Resume</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>

        {/* Hamburger menu */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}
