import React from "react";
import css from "./styles.module.css";
import { Logo } from "../logo";
import { Nav } from "../nav";
import { MenuButton } from "ui/menuButton";

const Header = () => {
  return (
    <>
      <div className={css.root}>
        <div className={css.logoContainer}>
          <Logo></Logo>
        </div>
        <div>
          <Nav></Nav>
          <MenuButton />
        </div>
      </div>
    </>
  );
};

export { Header };
