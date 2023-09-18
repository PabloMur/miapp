import React from "react";
import css from "./styles.module.css";
import { GitHubButton } from "../../ui/githubLinkButton";
import DeployButton from "ui/deployLinkButton";
import { motion } from "framer-motion";

const ProyectCard = ({
    image,
    title,
    description,
    githubLink,
    deployLink,
}: any) => {
    return (
        <div className={css.root}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
                <img src={image} alt={title} className={css.imgContainer} />
                <div className={css.cardBody}>
                    <h3>{title}</h3>
                    <p className="m-3">{description}</p>
                    <div className={css.cardLinks}>
                        <GitHubButton githubLink={githubLink} />
                        <DeployButton deployLink={deployLink} />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export { ProyectCard };
