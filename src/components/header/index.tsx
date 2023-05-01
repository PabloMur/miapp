import React from "react";
import css from "./styles.module.css";
import { Logo } from "../logo";
import { Nav } from "../nav";
import { MenuButton } from "ui/menuButton";
import { NavMobile } from "components/navMovile";

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
          <NavMobile />
        </div>
      </div>
    </>
  );
};

export { Header };
