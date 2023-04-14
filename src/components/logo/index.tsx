import React from "react";
import css from "./styles.module.css";
import { useGoTo } from "../../hooks/uiHooks";
import { motion } from "framer-motion";

const Logo = () => {
  const goTo = useGoTo();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={css.logoContainer}
        onClick={() => {
          goTo("/");
        }}
      >
        <div className={css.root}></div>
        <h5 className={css.headerTitle}>{"Pablo Murillo"}</h5>
      </div>
    </motion.div>
  );
};

export { Logo };
