import React from "react";
import "../styles/css/Copyright.css";

const Copyright = (): JSX.Element => {
  return (
    <footer className="copyright">
      &copy; Created by
      <a
        className="copyright__link"
        target="_blank"
        href="https://github.com/Yarden-Tal"
      >
        {" "}
        Yarden Tal{" "}
      </a>{" "}
      2022
    </footer>
  );
};

export default Copyright;
