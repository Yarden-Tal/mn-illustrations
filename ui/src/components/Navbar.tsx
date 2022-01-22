import React from "react";
import "../styles/Navbar.module.css";

const Navbar = (): JSX.Element => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Portfolio</li>
        <li>Prices</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
