import React from "react";
import css from "./styles.module.css";
import StackMedall from "ui/stackMedall";
import { CustomTitle } from "ui/CustomTitle";

const StackContainer = () => {
    return (
        <>
            <div className={css.container}>
                <CustomTitle>Tecnologias</CustomTitle>
            </div>
            <div className={css.stack}>
                {/* <StackMedall name="JavaScript"></StackMedall>
                <StackMedall name="RactJS"></StackMedall>
                <StackMedall name="CSS"></StackMedall>
                <StackMedall name="HTML5"></StackMedall>
                <StackMedall name="npm"></StackMedall>
                <StackMedall name="yarn"></StackMedall>
                <StackMedall name="APIs"></StackMedall>
                <StackMedall name="Git"></StackMedall>
                <StackMedall name="Github"></StackMedall>
                <StackMedall name="Linux"></StackMedall>
                <StackMedall name="NodeJs"></StackMedall>
                <StackMedall name="Express"></StackMedall>
                <StackMedall name="TypeScript"></StackMedall>
                <StackMedall name="Firebase"></StackMedall>
                <StackMedall name="PostgreSQL"></StackMedall>
                <StackMedall name="Sequelize"></StackMedall>
                <StackMedall name="NextJS"></StackMedall>
                <StackMedall name="Vercel"></StackMedall>
                <StackMedall name="Heroku"></StackMedall> */}
            </div>
        </>
    );
};

export { StackContainer };
