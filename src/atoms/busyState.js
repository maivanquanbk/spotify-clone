import { atom } from "recoil";

const busyState = atom({
  key: "busyState",
  default: false,
});

export default busyState;