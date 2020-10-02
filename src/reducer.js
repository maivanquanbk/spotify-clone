export const initialState = {
  user: null,
  playLists: [],
  playing: false,
  item: null,
  // token: "BQDXllmzcuOpjRItw37vJ238dlDcyzytuRLnHcGMeN4F9mMeeY420Mu8LHk8fRtqGKRh7QN81wCrED4uY-Mi2G6RgcHPfROgGdlwlPZADCjEeFHfpnngwlv9ECtH-d7QSHv42b8BncPjzIi6Esru31nB7VUcxYbgqSUYc9QydIJESsmKYOW7",
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_TOKEN: "SET_TOKEN",
  SET_PLAYLISTS: "SET_PLAYLISTS",
  SET_CURRENT_PLAYLIST: "SET_CURRENT_PLAYLIST"
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case actionTypes.SET_PLAYLISTS:
      return {
        ...state,
        playLists: action.playLists,
      };
    case actionTypes.SET_CURRENT_PLAYLIST:
      return {
        ...state,
        currentPlayList: action.currentPlayList,
      };
    default:
      return state;
  }
};

export default reducer;
