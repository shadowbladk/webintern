import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import navlogo from "../assets/logo2.svg";
import englogo from "../assets/eng.svg";

import "../styles/Navbar.css";

import MainMenu from "./mainMenu";
import Nekoinfo from "./Neko";
import Service from "./service";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <Router>
      <nav className={color ? "navbar navbar-scroll" : "navbar"}>
        <div className="container">
          <div className="logo">
            <Link smooth to="#mainMenu" onClick={closeMobileMenu}>
              <img src={navlogo} alt="navlogo" />
            </Link>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link
                smooth
                to="#about"
                className="menutext"
                onClick={closeMobileMenu}
              >
                about
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="#product"
                className="menutext"
                onClick={closeMobileMenu}
              >
                product
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="#service"
                className="menutext"
                onClick={closeMobileMenu}
              >
                service
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="#partner"
                className="menutext"
                onClick={closeMobileMenu}
              >
                partner
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="#careers"
                className="menutext"
                onClick={closeMobileMenu}
              >
                careers
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="#contact"
                className="menutext"
                onClick={closeMobileMenu}
              >
                contact us
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="#th"
                className="menulang"
                onClick={closeMobileMenu}
              >
                <img src={englogo} alt="englogo" />
                EN
              </Link>
            </li>
          </ul>
          <div className="menu-toggle" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </Router>
  );
}

export default Navbar;
