import React from "react";
// Style
import "../../styles/css/BurgerMenu.css";
// TS
import { IBurgerMenuProps } from "../../ts/interfaces";

const BurgerMenu = ({ handleClick }: IBurgerMenuProps) => {
  return (
    <svg
      onClick={handleClick}
      className="burger-svg"
      xmlns="http://www.w3.org/2000/svg"
      height="35px"
      viewBox="0 0 24 24"
      width="35px"
      fill="#564953"
    >
      <g fill="none">
        <path d="M0 0h24v24H0V0z" />
        <path d="M0 0h24v24H0V0z" opacity=".87" />
      </g>
      <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
    </svg>
  );
};

export default BurgerMenu;
