import React from "react";
import css from "./styles.module.css";

const MenuButton = () => {
  const handleClick = () => {
    console.log("Click");
  };
  return (
    <div className={css.root} onClick={handleClick}>
      <div className={css.line}></div>
      <div className={css.line}></div>
      <div className={css.line}></div>
    </div>
  );
};

export { MenuButton };
