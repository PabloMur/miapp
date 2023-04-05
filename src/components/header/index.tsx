import React from "react";
import css from "./styles.module.css";
import { Logo } from "../logo";
import { Nav } from "../nav";

const Header = () => {
  return (
    <>
      <div className={css.root}>
        <div className={css.logoContainer}>
          <Logo></Logo>
          <h3 className={css.headerTitle}>Pablo Murillo</h3>
        </div>
        <div>
          <Nav></Nav>
        </div>
      </div>
    </>
  );
};

export { Header };