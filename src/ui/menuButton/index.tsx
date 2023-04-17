import React from "react";
import css from "./styles.module.css";

const MenuButton = () => {
  return (
    <div className={css.root}>
      <div className={css.line}></div>
      <div className={css.line}></div>
      <div className={css.line}></div>
    </div>
  );
};

export { MenuButton };
