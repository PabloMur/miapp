import React from "react";
import css from "./styles.module.css";

const Banner = () => {
  return (
    <div className={css.root}>
      <div className={css.bannerContainer}>
        <div>
          <h1 className={css.title}>Hola, soy Pablo!</h1>
          <h3 className={css.paraph}>
            Soy un estudiante de programacion y desarrollo web.
          </h3>
          <h2 className={css.paraph}>Bienvenido a mi Portafolio.</h2>
        </div>
        <div className={css.profile}></div>
      </div>
    </div>
  );
};

export { Banner };
