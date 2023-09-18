import { atom } from "recoil";

export const loaderAtom = atom({
    key: "loaderAtom", // unique ID (with respect to other atoms/selectors)
    default: true,
});

export const desplegarMenuAtom = atom({
    key: "desplegarMenu", // unique ID (with respect to other atoms/selectors)
    default: false,
});

export const contactFormEmailAtom = atom({
    key: "contactFormEmail",
    default: "",
});

export const contactFormMessageAtom = atom({
    key: "contactFormMessageAtom",
    default: "",
});

export const contactFormSubjectAtom = atom({
    key: "contactFormSubjectAtom",
    default: "Contacto Desde el PORTAFOLIO",
});

export const contactFormNameAtom = atom({
    key: "contactFormNamejectAtom",
    default: "",
});
