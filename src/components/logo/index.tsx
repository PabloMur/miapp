import React from "react";
import css from "./styles.module.css";
import { useGoTo } from "../../hooks/uiHooks";

const Logo = () => {
  const goTo = useGoTo();

  return (
    <>
      <div
        className={css.root}
        onClick={() => {
          goTo("/");
        }}
      ></div>
    </>
  );
};

export { Logo };
