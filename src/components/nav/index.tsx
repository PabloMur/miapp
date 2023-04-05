import React from "react";
import css from "./styles.module.css";
import { NavButton } from "../../ui/navButton";

const Nav = () => {
  return (
    <>
      <div className={css.root}>
        <NavButton content="Sobre mi" route="/about"></NavButton>
        <NavButton content="Stack" route="/stack"></NavButton>
        <NavButton content="Proyectos" route="/proyects"></NavButton>
        <NavButton content="Contacto" route="/contact"></NavButton>
      </div>
    </>
  );
};

export { Nav };
