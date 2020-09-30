import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import React from "react";
import "./Body.css";
import Header from "./Header";
import SongRow from "./SongRow";
import { useStateValue } from "./stateProvider";

function Body() {
  const [{ discoverWeekly }, _] = useStateValue();

  return (
    <div className="body">
      <Header />
      <div className="body__info">
        <img
          src={discoverWeekly?.images[0]?.url}
          alt=""
        />
        <div className="body__infoText">
          <strong>PLAYLISTS</strong>
          <h2>Discover Weekly</h2>
          <p>{discoverWeekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>

        {discoverWeekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}

      </div>

    </div>
  );
}

export default Body;
