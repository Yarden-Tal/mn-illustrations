import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/css/MobileNavbar.css";

const MobileMenu = () => {
  return (
    <ul className="mobile-nav__list">
      <div className="li-container">
        <li className="mobile-nav__list__item">
          <Link className="mobile-nav__list__item__link" to="/">
            HOME
          </Link>
        </li>
      </div>
      <div className="li-container">
        <li className="mobile-nav__list__item">
          <Link className="mobile-nav__list__item__link" to="/portfolio">
            PORTFOLIO
          </Link>
        </li>
      </div>
      <div className="li-container">
        <li className="mobile-nav__list__item">
          <Link className="mobile-nav__list__item__link" to="/prices">
            PRICES
          </Link>
        </li>
      </div>
      <div className="li-container">
        <li className="mobile-nav__list__item">
          <Link className="mobile-nav__list__item__link" to="/about">
            ABOUT
          </Link>
        </li>
      </div>
    </ul>
  );
};

export default MobileMenu;
