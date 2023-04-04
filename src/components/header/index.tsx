import React from "react";
import css from "./styles.module.css";
import { Logo } from "../logo";

const Header = () => {
  return (
    <>
      <h1 className={css.root}>
        <Logo></Logo>Este es el Header de la app
      </h1>
    </>
  );
};

export { Header };
