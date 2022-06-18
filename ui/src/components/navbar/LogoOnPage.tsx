import React from "react";
// TypeScript
import { IImageProperties } from "../../ts/interfaces";
import logoImg from "../../images/logo-on-page2.png";
// Styles
import "../../styles/css/LogoOnPage.css";

const LogoOnPage = (): JSX.Element => {
  const logoProperties: IImageProperties = {
    src: logoImg,
    alt: "MN Illustration logo",
  };

  return (
    <div className="logo-img-container">
      <img
        className="logo-img"
        src={logoProperties.src}
        alt={logoProperties.alt}
      />
    </div>
  );
};

export default LogoOnPage;
