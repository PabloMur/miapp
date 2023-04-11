import React from "react";
import css from "./styles.module.css";

const LinkedinLogo = () => {
  return (
    <a
      href="https://www.linkedin.com/in/pablo-nicolas-murillo/"
      target="_blank"
      rel="noreferrer"
    >
      <div className={css.logoContainer}></div>
    </a>
  );
};

export { LinkedinLogo };
