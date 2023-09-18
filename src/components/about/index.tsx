import React from "react";
import css from "./styles.module.css";
import { motion } from "framer-motion";
import { CustomTitle } from "ui/CustomTitle";

const AboutContainer = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
                <div className={css.root}>
                    <CustomTitle>Acerca de Mi</CustomTitle>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.3 }}
            >
                <div className={css.textContainer}>
                    <p className={css.text}>
                        Soy un programador apasionado por la tecnología. Me
                        encanta aprender cosas nuevas y siempre estoy buscando
                        nuevos desafíos.
                        <br />
                        Tengo un espíritu curioso y me gusta entender cómo
                        funcionan las cosas. Soy autodidacta y siempre estoy
                        buscando formas de mejorar mis habilidades.
                        <br />
                        También soy un buen trabajador en equipo. Puedo trabajar
                        de forma independiente, pero también soy capaz de
                        colaborar con otros para lograr objetivos comunes. Soy
                        resolutivo y siempre estoy buscando soluciones a los
                        problemas.
                        <br />
                        Además, tengo un lado creativo. Me gusta pensar fuera de
                        la caja y encontrar nuevas soluciones a los problemas.
                        Siempre estoy dispuesto a aprender cosas nuevas y
                        mejorar mis habilidades.
                    </p>
                </div>
            </motion.div>
        </>
    );
};

export { AboutContainer };
