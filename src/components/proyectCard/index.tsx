import React from "react";
import css from "./styles.module.css";
import { GitHubButton } from "../../ui/githubLinkButton";
import DeployButton from "ui/deployLinkButton";

const ProyectCard = ({
  image,
  title,
  description,
  githubLink,
  deployLink,
}: any) => {
  return (
    <div className={css.root}>
      <img src={image} alt={title} className={css.imgContainer} />
      <div className={css.cardBody}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={css.cardLinks}>
          <GitHubButton githubLink={githubLink} />
          <DeployButton deployLink={deployLink} />
        </div>
      </div>
    </div>
  );
};

export { ProyectCard };
