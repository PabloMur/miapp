import React from "react";
import css from "./styles.module.css";
import { useDesplegarMenu } from "../../hooks/uiHooks";
import { useRecoilValue } from "recoil";
import { desplegarMenuAtom } from "atoms/atoms";
import { LeftLine, RightLine } from "ui/line";

const InactiveMenuButton = () => {
  return (
    <div className={css.root}>
      <div className={css.line}></div>
      <div className={css.line}></div>
      <div className={css.line}></div>
    </div>
  );
};

const Cross = () => {
  return (
    <div className={css.crosslineContainer}>
      <LeftLine></LeftLine>
      <RightLine></RightLine>
    </div>
  );
};

const MenuButton = () => {
  const menuDesplegadoValue = useRecoilValue(desplegarMenuAtom);
  const menuValueSetter = useDesplegarMenu();
  const handleClick = () => {
    menuValueSetter(!menuDesplegadoValue);
  };
  return (
    <div onClick={handleClick}>
      {menuDesplegadoValue ? <InactiveMenuButton /> : <Cross />}
    </div>
  );
};

export { MenuButton };
