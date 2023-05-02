import React from "react";
import css from "styles.module.css";
import { Logo } from "components/logo";
import { Nav } from "components/nav";
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
