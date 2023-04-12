import React from "react";
import css from "./styles.module.css";
import { ProyectCard } from "components/proyectCard";

const ProyectsContainer = () => {
  return (
    <>
      <div className={css.root}>
        <h1 className={css.title}>Proyectos:</h1>
      </div>
      <div className={css.proyectsContainer}>
        <ProyectCard />
        <ProyectCard />
        <ProyectCard />
        <ProyectCard />
      </div>
    </>
  );
};

export { ProyectsContainer };
