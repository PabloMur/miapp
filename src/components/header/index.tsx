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
        </div>
        <div>
          <Nav></Nav>
        </div>
      </div>
    </>
  );
};

export { Header };
