import React, { useState } from "react";
// Components
import BurgerMenu from "../BurgerMenu";
import LogoOnPage from "../LogoOnPage";
import MobileMenu from "./MobileMenu";

const MobileNavbar = (): JSX.Element => {
  const [isShown, setIsShown] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsShown(!isShown);
  };

  return (
    <nav className="mobile-nav">
      <LogoOnPage />
      <BurgerMenu handleClick={toggleMenu} />
      {isShown ? <MobileMenu /> : null}
    </nav>
  );
};

export default MobileNavbar;
