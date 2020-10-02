import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import "./Body.css";
import Header from "./Header";
import currentPlayListQuery from "./selectors/currentPlayListQuery";
import SongRow from "./SongRow";

function Body() {
  const currentPlayList = useRecoilValue(currentPlayListQuery);

  return (
    <div className="body">
      <Header />
      <div className="body__info">
        <img src={currentPlayList?.images[0]?.url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLISTS</strong>
          <h2>{currentPlayList?.name}</h2>
          <p>{currentPlayList?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>

        {currentPlayList?.tracks?.items.map((item) => (
          <SongRow key={item.track.id} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
