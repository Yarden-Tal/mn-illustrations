import React from "react";
// Styles
import "../../styles/css/Navbar.css";
// Routing
import LogoOnPage from "./LogoOnPage";
import Menu from "./Menu";

const Navbar = (): JSX.Element => {
  return (
    <nav className="main-nav">
      <LogoOnPage />
      <Menu />
    </nav>
  );
};

export default Navbar;
