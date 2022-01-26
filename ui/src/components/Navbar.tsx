import React from "react";
// Styles
import "../styles/css/Navbar.css";
// Routing
import { Link } from "react-router-dom";
import LogoOnPage from "./LogoOnPage";

const Navbar = (): JSX.Element => {
  return (
    <nav className="main-nav">
      <LogoOnPage />
      <ul className="main-nav__list">
        <div className="li-container">
          <li className="main-nav__list__item">
            <Link className="main-nav__list__item__link" to="/">
              HOME
            </Link>
          </li>
        </div>
        <div className="li-container">
          <li className="main-nav__list__item">
            <Link className="main-nav__list__item__link" to="/portfolio">
              PORTFOLIO
            </Link>
          </li>
        </div>
        <div className="li-container">
          <li className="main-nav__list__item">
            <Link className="main-nav__list__item__link" to="/prices">
              PRICES
            </Link>
          </li>
        </div>
        <div className="li-container">
          <li className="main-nav__list__item">
            <Link className="main-nav__list__item__link" to="/about">
              ABOUT
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
