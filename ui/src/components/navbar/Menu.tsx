import React from "react";
import { Link } from "react-router-dom";
import "../../styles/css/Navbar.css";

const Menu = () => {
  return (
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
  );
};

export default Menu;
