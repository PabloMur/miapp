import { useNavigate } from "react-router-dom";
import {
  contactFormEmailAtom,
  contactFormMessageAtom,
  contactFormNameAtom,
  contactFormSubjectAtom,
  desplegarMenuAtom,
} from "../atoms/atoms";
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

  const msj = { email, message, subject, name };

  async function emailSender() {
    const res = await APISendEmail(msj);
  }

  return emailSender;
};
