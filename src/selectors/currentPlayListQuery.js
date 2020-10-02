import { selector } from "recoil";
import currentPlayListIdState from "../atoms/currentPlayListIdState";
import playListQuery from "./playListQuery";

const currentPlayListQuery = selector({
  key: "currentPlayListQuery",
  get: ({ get }) => {
    const currentId = get(currentPlayListIdState);
    return get(playListQuery(currentId));
  },
});

export default currentPlayListQuery;
