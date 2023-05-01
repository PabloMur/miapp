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
          <h1 className={css.title}>{"<Fullstack Developer/>"}</h1>
        </div>
      </div>
    </div>
  );
};

export { Banner };
