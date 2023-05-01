import { atom } from "recoil";

export const desplegarMenuAtom = atom({
  key: "desplegarMenu", // unique ID (with respect to other atoms/selectors)
  default: false,
});
