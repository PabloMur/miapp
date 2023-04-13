import React from "react";
import css from "./styles.module.css";
import { ProyectCard } from "components/proyectCard";
import mod8 from "../../img/mod8.png";
import { motion } from "framer-motion";

const ProyectsContainer = () => {
  return (
    <>
      <div className={css.root}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className={css.title}>Proyectos:</h1>
        </motion.div>
      </div>
      <div className={css.proyectsContainer}>
        <ProyectCard
          title="Pet Finder"
          image={mod8}
          githubLink="https://github.com/PabloMur/desafio8"
          deployLink="https://mod8-238d7.web.app/"
          description="Webapp que tiene como finalidad poder reportar mascotas perdidas, asi como tambien ver las mascotas que se encuentran cerca nuestro"
        />
      </div>
    </>
  );
};

export { ProyectsContainer };
