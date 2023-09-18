import React from "react";
import css from "./styles.module.css";
import { NavButton } from "../../ui/navButton";
import person from "../../img/user.png";
import stack from "../../img/stack-2.png";
import contact from "../../img/address-book.png";
import proyects from "../../img/layers-intersect.png";
import { useRecoilValue } from "recoil";
import { desplegarMenuAtom } from "atoms";

const NavMobile = () => {
    const menuDesplegadoFlag = useRecoilValue(desplegarMenuAtom);

    return (
        <>
            {menuDesplegadoFlag && (
                <div className={css.root}>
                    <NavButton
                        content="Sobre mi"
                        route="/about"
                        variant="root"
                        icon={person}
                    ></NavButton>
                    <NavButton
                        content="Stack"
                        route="/stack"
                        variant="stack"
                        icon={stack}
                    ></NavButton>
                    <NavButton
                        content="Proyectos"
                        route="/proyects"
                        variant="proyects"
                        icon={proyects}
                    ></NavButton>
                    <NavButton
                        content="Contacto"
                        route="/contact"
                        variant="contact"
                        icon={contact}
                    ></NavButton>
                </div>
            )}
        </>
    );
};

export { NavMobile };
