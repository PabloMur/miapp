import React from "react";
import css from "./styles.module.css";
import ContactForm from "components/contactForm";

const ContactContainer = () => {
  return (
    <>
      <div className={css.root}>
        <h1>Contacto</h1>
      </div>
      <div className={css.contactContainer}>
        <div className={css.links}>links</div>
        <div className={css.form}>
          <h3 className={css.formTitle}>Escribeme</h3>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export { ContactContainer };
