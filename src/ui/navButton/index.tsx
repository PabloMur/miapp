import React from "react";
import { useGoTo } from "../../hooks/uiHooks";
import css from "./styles.module.css";

function NavButton({ content, route, variant }: any) {
  let cont = content;

  const goTo = useGoTo();

  function HandleRoute() {
    goTo(route);
  }

  if (variant === "root") {
    return (
      <>
        <div className={css.root} onClick={HandleRoute}>
          {cont}
        </div>
      </>
    );
  } else if (variant === "alert") {
    return (
      <>
        <div className={css.alert} onClick={HandleRoute}>
          {cont}
        </div>
      </>
    );
  } else if (variant === "stack") {
    return (
      <>
        <div className={css.stack} onClick={HandleRoute}>
          {cont}
        </div>
      </>
    );
  } else if (variant === "proyects") {
    return (
      <>
        <div className={css.proyects} onClick={HandleRoute}>
          {cont}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={css.contact} onClick={HandleRoute}>
          {cont}
        </div>
      </>
    );
  }
}

export { NavButton };
