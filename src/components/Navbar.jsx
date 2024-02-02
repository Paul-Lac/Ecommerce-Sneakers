import { useState } from "react";

import "./Navbar.css";

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
    document.body.classList.add("hide-overflow");
  };

  return (
    <nav className="navbar">
      <div className={`${hamburgerOpen ? "mobile-overlay" : ""}`} />
      <ul>
        <span
          className={`nav-leftpart ${
            hamburgerOpen ? "nav-leftpart-column" : ""
          }`}
        >
          {hamburgerOpen ? (
            <img
              className="icon-close"
              src="../../public/icon-close.svg"
              alt="Icone Close"
              onClick={toggleHamburger}
            />
          ) : (
            <img
              className="icon-menu"
              src="../../icon-menu.svg"
              alt="Icone Menu"
              onClick={toggleHamburger}
            />
          )}
          <img
            className={`logo ${hamburgerOpen ? "hide" : ""}`}
            src="../../logo.svg"
            alt="Logo"
          />
          <span
            className={`nav-links ${
              hamburgerOpen ? "nav-links-show" : "nav-links-hide"
            }`}
          >
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </span>
        </span>
        <span className={`nav-rightpart ${hamburgerOpen ? "hide" : ""}`}>
          <img
            className="icon-cart"
            src="../../public/icon-cart.svg"
            alt="Icon Cart"
          />
          <img
            className="avatar"
            src="../../public/image-avatar.png"
            alt="Avatar"
          />
        </span>
      </ul>
      <hr className="hz-line hz-line-hide" />
    </nav>
  );
}

export default Navbar;
