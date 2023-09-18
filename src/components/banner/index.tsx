import React from "react";
import css from "./styles.module.css";
import { GithubLogo } from "ui/github";
import { LinkedinLogo } from "ui/linkedin";
import { JsLogo } from "ui/jsvascript";
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
        >
            <div className={css.root}>
                <div className={css.bannerContainer}>
                    <div className={css.textContainer}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <h1 className={css.title}>
                                {"<Fullstack Developer/>"}
                            </h1>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export { Banner };
