import React, { useEffect } from "react";
import css from "./styles.module.css";
import { useDesplegarMenu } from "../../hooks/uiHooks";
import { useRecoilValue } from "recoil";
import { desplegarMenuAtom } from "atoms/atoms";
import { LeftLine, RightLine } from "../line";

const Circle = () => {
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

  useEffect(() => {
    console.log(menuDesplegadoValue);
  }, []);

  const handleClick = () => {
    menuValueSetter(!menuDesplegadoValue);
  };
  return (
    <div onClick={handleClick}>
      {menuDesplegadoValue ? <Cross /> : <Circle />}
    </div>
  );
};

export { MenuButton };
