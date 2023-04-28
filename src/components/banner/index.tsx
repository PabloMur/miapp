import React from "react";
import css from "./styles.module.css";
import { GithubLogo } from "ui/github";
import { LinkedinLogo } from "ui/linkedin";
import { JsLogo } from "ui/jsvascript";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className={css.root}>
      <div className={css.bannerContainer}>
        <div className={css.textContainer}>
          <h1 className={css.title}>Hola, soy Pablo!</h1>
          <h3 className={css.paraph}>
            Estudiante de programacion y desarrollo web.
          </h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className={css.linksContainer}>
              <GithubLogo />
              <LinkedinLogo />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export { Banner };
