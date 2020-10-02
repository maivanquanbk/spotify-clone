import React, { useEffect } from "react";
import Login from "./Login";
import "./App.css";
import { getTokenFromUrl, spotifyApi } from "./spotify";
import Player from "./Player";
import { useRecoilState } from "recoil";
import userState from "./atoms/userState";
import playListsState from "./atoms/playListsState";

function App() {

  const [user, setUser] = useRecoilState(userState);
  const [playLists, setPlayLists] = useRecoilState(playListsState);

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = "";

    if (_token) {
      spotifyApi.setAccessToken(_token);

      spotifyApi.getMe().then((user) => {
        setUser(user);
      });

      spotifyApi.getUserPlaylists().then((playLists) => {
        setPlayLists(playLists);
      });
    }
  }, []);

  return <div className="app">{user ? <Player /> : <Login />}</div>;
}

export default App;
