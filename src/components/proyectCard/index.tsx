import React from "react";
import css from "./styles.module.css";

const ProyectCard = () => {
  return (
    <div className={css.root}>
      <div className={css.imgContainer}></div>
      <div className={css.infoContainer}></div>
    </div>
  );
};

export { ProyectCard };
