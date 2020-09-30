import React, { useEffect } from "react";
import Login from "./Login";
import "./App.css";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useStateValue } from "./stateProvider";
import { actionTypes } from "./reducer";

const spotify = new SpotifyWebApi();

function App() {

  const [{ token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = "";

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: actionTypes.SET_TOKEN,
        token: _token,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playLists) => {
        dispatch({
          type: actionTypes.SET_PLAYLISTS,
          playLists: playLists,
        });
      });
    }
  }, []);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
