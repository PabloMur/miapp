import React from "react";
import { useGoTo } from "../../hooks/uiHooks";
import css from "./styles.module.css";

function NavButton({ content, route, icon }: any) {
  let cont = content;

  const goTo = useGoTo();

  function HandleRoute() {
    goTo(route);
  }
  return (
    <>
      <div className={css.root} onClick={HandleRoute}>
        <div className={css.container}>
          <img src={icon} alt="user icon" className={css.icon} />
          {cont}
        </div>
      </div>
    </>
  );
}

export { NavButton };
