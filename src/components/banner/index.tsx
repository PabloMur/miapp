import React from "react";
import css from "./styles.module.css";

const Banner = () => {
  return (
    <div className={css.root}>
      <h1 className={css.title}>Hola soy Pablo!</h1>
      <h3>
        Soy un estudiante de programacion, mas precisamente desarrollo web.
      </h3>
    </div>
  );
};

export { Banner };
