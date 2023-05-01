import React from "react";
import { useDesplegarMenu, useGoTo } from "../../hooks/uiHooks";
import css from "./styles.module.css";
import { desplegarMenuAtom } from "atoms/atoms";
import { useRecoilValue } from "recoil";

function NavButton({ content, route, icon }: any) {
  let cont = content;
  const menuDesplegadoFlag = useRecoilValue(desplegarMenuAtom);
  const menuFlagSetter = useDesplegarMenu();
  const goTo = useGoTo();

  const handleClick = () => {
    menuFlagSetter(!menuDesplegadoFlag);
  };

  function HandleRoute() {
    goTo(route);
    handleClick();
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
