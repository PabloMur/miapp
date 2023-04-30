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
          <h1 className={css.title}>Fullstack Web Developer</h1>
          <video autoPlay muted loop>
            <source src="../../video/video.mp4" type="video/mp4" />
          </video>
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
