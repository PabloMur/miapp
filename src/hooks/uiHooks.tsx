import { useNavigate } from "react-router-dom";
import {
    contactFormEmailAtom,
    contactFormMessageAtom,
    contactFormNameAtom,
    contactFormSubjectAtom,
    desplegarMenuAtom,
    loaderAtom,
} from "../atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { APISendEmail } from "lib/apiCalls";
export function useDesplegarMenu() {
    const menuDesplegableSetter = useSetRecoilState(desplegarMenuAtom);
    return menuDesplegableSetter;
}

export const useGoTo = () => {
    const goTo = useNavigate();
    return goTo;
};

export const useSendEmail = () => {
    const message = useRecoilValue(contactFormMessageAtom);
    const name = useRecoilValue(contactFormNameAtom);
    const subject = useRecoilValue(contactFormSubjectAtom);
    const email = useRecoilValue(contactFormEmailAtom);
    const { active, deActive } = useLoaderActions();

    const msj = { email, message, subject, name };

    async function emailSender() {
        active();
        await APISendEmail(msj);
        deActive();
    }

    return emailSender;
};

export const useLoaderActions = () => {
    const setLoaderStatus = useSetRecoilState(loaderAtom);
    const active = () => {
        setLoaderStatus(true);
    };
    const deActive = () => {
        setLoaderStatus(false);
    };
    return { active, deActive };
};
