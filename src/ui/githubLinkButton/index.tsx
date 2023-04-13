import React from "react";
import css from "./styles.module.css";

function GitHubButton({ githubLink }: any) {
  return (
    <a href={githubLink} target="_blank" rel="noopener noreferrer">
      <button className={css.root}>
        <span>Ver en GitHub</span>
      </button>
    </a>
  );
}

export { GitHubButton };
