import React from "react";
import css from "./styles.module.css";
import ContactForm from "components/contactForm";
import { Loader } from "components/loader";
import { CustomTitle } from "ui/CustomTitle";

const ContactContainer = () => {
    return (
        <>
            <div className={css.root}>
                <CustomTitle>Contacto</CustomTitle>
            </div>
            <div className={css.contactContainer}>
                <div className={css.links}>links</div>
                <div className={css.form}>
                    <h3 className={css.formTitle}>Escribeme</h3>
                    <Loader />
                    <ContactForm />
                </div>
            </div>
        </>
    );
};

export { ContactContainer };
