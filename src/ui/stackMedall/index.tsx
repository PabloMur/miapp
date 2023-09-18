import React from "react";
import css from "./styles.module.css";
const StackMedall = ({ name }: { name: string }) => {
    return <div className={css.root}>{name}</div>;
};

export default StackMedall;
