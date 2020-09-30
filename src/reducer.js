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
  SET_DISCOVER_WEEKLY: "SET_DISCOVER_WEEKLY"
};

const reducer = (state, action) => {
  console.log(action);

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
    case actionTypes.SET_DISCOVER_WEEKLY:
      return {
        ...state,
        discoverWeekly: action.discoverWeekly,
      };
    default:
      return state;
  }
};

export default reducer;
