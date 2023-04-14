import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import css from "./styles.module.css";

function DeployButton({ deployLink }: any) {
  return (
    <a href={deployLink} target="_blank" rel="noopener noreferrer">
      <button className={css.deployButton}>
        <FaExternalLinkAlt />
        <span>Ver Deploy</span>
      </button>
    </a>
  );
}

export default DeployButton;
