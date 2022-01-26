import React from "react";
// Images
import priceListImg from "../images/price-list.png";
// TS
import { IImageProperties } from "../ts/interfaces";
// Styles
import "../styles/css/Prices.css";

const Prices = (): JSX.Element => {
  const logoProperties: IImageProperties = {
    src: priceListImg,
    alt: "Price list",
  };
  return (
    <>
      <div className="price-list-img-container">
        <img
          className="price-list-img"
          src={logoProperties.src}
          alt={logoProperties.alt}
        />
      </div>
    </>
  );
};

export default Prices;
