import React from "react";
import { useGoTo } from "../../hooks/uiHooks";
import css from "./styles.module.css";

function NavButton({ content, route }: any) {
  let cont = content;
  const goTo = useGoTo();

  function HandleRoute() {
    goTo(route);
  }

  return (
    <>
      <div className={css.root} onClick={HandleRoute}>
        {cont}
      </div>
    </>
  );
}

export { NavButton };
