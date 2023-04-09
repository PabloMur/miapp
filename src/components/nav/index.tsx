import React from "react";
import css from "./styles.module.css";
import { NavButton } from "../../ui/navButton";

const Nav = () => {
  return (
    <>
      <div className={css.root}>
        <NavButton content="Sobre mi" route="/about" variant="root"></NavButton>
        <NavButton content="Stack" route="/stack" variant="stack"></NavButton>
        <NavButton
          content="Proyectos"
          route="/proyects"
          variant="proyects"
        ></NavButton>
        <NavButton
          content="Contacto"
          route="/contact"
          variant="contact"
        ></NavButton>
      </div>
    </>
  );
};

export { Nav };
