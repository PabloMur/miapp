import React from "react";
import css from "./styles.module.css";

const Footer = () => {
  return (
    <>
      <div className={css.root}>
        <p className={css.text}>
          Copyright © 2023 Pablo Murillo | Todos los derechos reservados.
        </p>
      </div>
    </>
  );
};

export { Footer };
