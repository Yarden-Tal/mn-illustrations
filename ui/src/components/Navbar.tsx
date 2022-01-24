import React from "react";
// Styles
import "../styles/Navbar.module.css";
// Routing
import { Link } from "react-router-dom";
import LogoOnPage from "./LogoOnPage";

const Navbar = (): JSX.Element => {
  return (
    <nav>
      <LogoOnPage />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/prices">Prices</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
