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
        onClick={() => {
          goTo("/");
        }}
      >
        <div className={css.root}></div>
      </div>
    </motion.div>
  );
};

export { Logo };
