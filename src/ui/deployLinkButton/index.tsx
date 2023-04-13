import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function DeployButton({ deployLink }: any) {
  return (
    <a href={deployLink} target="_blank" rel="noopener noreferrer">
      <button>
        <FaExternalLinkAlt />
        <span>Ver despliegue</span>
      </button>
    </a>
  );
}

export default DeployButton;
