import React from "react";
import css from "./styles.module.css";
import { Logo } from "../logo";

const Header = () => {
  return (
    <>
      <div className={css.root}>
        <Logo></Logo>
        <h3 className={css.headerTitle}>Pablo Murillo</h3>
      </div>
    </>
  );
};

export { Header };
