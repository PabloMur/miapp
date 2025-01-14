import React from "react";
import css from "./styles.module.css";
import { ProyectCard } from "components/proyectCard";
import mod8 from "../../img/mod8.png";
import mod7 from "../../img/mod7.png";
import mod5 from "../../img/mod5.png";
import mod4 from "../../img/mod4.png";
import mod5v2 from "../../img/pptReact.png";
import weather from "../../img/weather.png";

import { motion } from "framer-motion";
import { CustomTitle } from "ui/CustomTitle";

const ProyectsContainer = () => {
    return (
        <>
            <div className={css.root}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    <CustomTitle>Proyectos</CustomTitle>
                </motion.div>
            </div>
            <div className={css.proyectsContainer}>
                <ProyectCard
                    title="Weather App"
                    image={weather}
                    githubLink="https://github.com/PabloMur/weatherapp"
                    deployLink="https://weatherapp-three-omega.vercel.app/"
                    description="App de clima en tiempo real. En este caso desarrolle una app para uso personal y tambien para seguir practicando habilidades de FrontEnd."
                />
                <ProyectCard
                    title="Pet Finder - modulo 8"
                    image={mod8}
                    githubLink="https://github.com/PabloMur/desafio8"
                    deployLink="https://mod8-238d7.web.app/"
                    description="Webapp que tiene como finalidad poder reportar mascotas perdidas, asi como tambien ver las mascotas que se encuentran cerca nuestro"
                />
                <ProyectCard
                    title="Pet Finder - modulo 7"
                    image={mod7}
                    githubLink="https://github.com/PabloMur/desafio7"
                    deployLink="https://desafio7.onrender.com/"
                    description="Webapp que tiene como finalidad poder reportar mascotas perdidas, asi como tambien ver las mascotas que se encuentran cerca nuestro"
                />
                <ProyectCard
                    title="RPS Game - modulo 5"
                    image={mod5}
                    githubLink="https://github.com/PabloMur/desafio-m5"
                    deployLink="https://pablomur.github.io/desafio-m5"
                    description="Single page application que nos permite jugar al clasico Piedra Papel o Tijeras. Este proyecto cuenta con los conceptos de estado, router y componentes. Todo hecho con JS puro."
                />
                <ProyectCard
                    title="RPS Game - modulo 5 v2"
                    image={mod5v2}
                    githubLink="https://https://github.com/PabloMur/ppt-react"
                    deployLink="https://ppt-react-lemon.vercel.app/"
                    description="Reversion del juego hecho en el modulo 5. Esta vez inplementando react como tecnologia de construccion de componentes. Ademas, utilizando tambien recoil para el manejo del estado."
                />
                <ProyectCard
                    title="Portafolio - modulo 4"
                    image={mod4}
                    githubLink="https://github.com/PabloMur/desafioM4"
                    deployLink="https://pablomur.github.io/desafioM4/"
                    description="La consigna del desafio final del Modulo 4 consistia en producir un portafolio personal con todo lo aprendido hasta el momento en la carrera. Tiene como particularidad el consumo de APIs, una para el contacto y otra para traer las cards."
                />
            </div>
        </>
    );
};

export { ProyectsContainer };
