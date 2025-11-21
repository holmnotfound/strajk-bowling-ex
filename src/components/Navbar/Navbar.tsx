import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../../App.css";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className="hamburger-btn-wrapper">
        <button
          className={`hamburger-btn ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </button>
      </section>

      <div className={`overlay ${isOpen ? "open" : ""}`}>
        <nav className="overlay-nav">
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/confirmation" onClick={toggleMenu}>
            Confirmation
          </Link>
        </nav>
      </div>
    </>
  );
}

export default HamburgerMenu;
