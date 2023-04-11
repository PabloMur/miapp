import React from "react";
import css from "./styles.module.css";
import { GithubLogo } from "ui/github";
import { LinkedinLogo } from "ui/linkedin";

const Banner = () => {
  return (
    <div className={css.root}>
      <div className={css.bannerContainer}>
        <div>
          <h1 className={css.title}>Hola, soy Pablo!</h1>
          <h3 className={css.paraph}>
            Estudiante de programacion y desarrollo web.
          </h3>
          <h2 className={css.paraph}>Bienvenido a mi Portafolio.</h2>
          <div className={css.linksContainer}>
            <GithubLogo />
            <LinkedinLogo />
          </div>
        </div>
        <div className={css.profile}></div>
      </div>
    </div>
  );
};

export { Banner };
