import React from "react";
import css from "./styles.module.css";
import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { Footer } from "../footer";

const Layout = () => {
  return (
    <div className={css.root}>
      <Header />
      <div className={css.container}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export { Layout };
