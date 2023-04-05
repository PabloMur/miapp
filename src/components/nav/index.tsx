import React from "react";
import css from "./styles.module.css";
import { NavButton } from "../../ui/navButton";

const Nav = () => {
  return (
    <>
      <div className={css.root}>
        <NavButton content="Acerca de mi"></NavButton>
        <NavButton content="Tecnologias"></NavButton>
      </div>
    </>
  );
};

export { Nav };
