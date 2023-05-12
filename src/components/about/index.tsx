import React, { useEffect } from "react";
import css from "./styles.module.css";
import { motion } from "framer-motion";

// const getStaticProps = async () => {
//   const url = "https://jsonplaceholder.typicode.com/todos/1";
//   const data = await fetch(url);
//   const googleData = await data.json();
//   return googleData;
// };
// const test = async () => {
//   let aux;
//   aux = await getStaticProps();
//   console.log(JSON.stringify(aux) + "test");
// };
// useEffect(() => {
//   test();
// }, []);

const AboutContainer = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className={css.root}>
          <h1 className={css.title}>Acerca de Mi</h1>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
      >
        <div className={css.textContainer}>
          <p className={css.text}>
            Me presento como una persona perseverante, alegre y aventurera con
            una gran pasión por la tecnología. Me caracterizo por ser muy
            curioso y me encanta entender cómo funcionan las cosas.
            Constantemente me enriquezco de conocimientos de manera autodidacta
            y me considero muy autosuficiente e independiente, pero también
            valoro mucho el trabajo colaborativo y la ayuda mutua en equipo.
            Creo firmemente que trabajar en equipo nos lleva a resultados no
            solo mejores, sino también más rápidos. Mi filosofía se basa en el
            desafío constante y el pensamiento lógico para la resolución de
            problemas. Además, tengo un lado creativo y tridimensional que me
            permite no solo solucionar problemas a través del código, sino
            también diseñar. Siempre estoy dispuesto a aprender y enfrentar
            nuevos retos para seguir creciendo profesionalmente en el mundo de
            la programación. ("Este texto fue optimizado con chatGPT.")
          </p>
        </div>
      </motion.div>
    </>
  );
};

export { AboutContainer };
