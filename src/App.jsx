import { useState } from "react";

import Logo from "./assets/logo.svg";
import IconCart from "./assets/icon-cart.svg";
import ImgAvatar from "./assets/image-avatar.png";
import IconMenu from "./assets/icon-menu.svg";
import IconClose from "./assets/icon-close.svg";

import "./App.css";

function App() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      <nav className="navbar">
        <ul>
          <span
            className={`nav-leftpart ${
              hamburgerOpen ? "nav-leftpart-column" : ""
            }`}
          >
            {hamburgerOpen ? (
              <img
                className="icon-close"
                src={IconClose}
                alt="Icone Close"
                onClick={toggleHamburger}
              />
            ) : (
              <img
                className="icon-menu"
                src={IconMenu}
                alt="Icone Menu"
                onClick={toggleHamburger}
              />
            )}
            <img
              className={`logo ${hamburgerOpen ? "hide" : ""}`}
              src={Logo}
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
            <img className="icon-cart" src={IconCart} alt="Icon Cart" />
            <img className="avatar" src={ImgAvatar} alt="Avatar" />
          </span>
        </ul>
      </nav>
    </>
  );
}

export default App;
