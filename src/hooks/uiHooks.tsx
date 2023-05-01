import { useNavigate } from "react-router-dom";
import { desplegarMenuAtom } from "../atoms/atoms";
import { useSetRecoilState } from "recoil";
export function useDesplegarMenu() {
  const menuDesplegableSetter = useSetRecoilState(desplegarMenuAtom);
  return menuDesplegableSetter;
}

export const useGoTo = () => {
  const goTo = useNavigate();
  return goTo;
};
