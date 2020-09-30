import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateValue } from "./stateProvider";

function Sidebar() {
  const [{ playLists }, _] = useStateValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://yungcitizen.com/wp-content/uploads/2018/09/spotify-logo-horizontal-white.png"
        alt=""
      ></img>

      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {playLists?.items?.map((item) => (
        <SidebarOption title={item.name} />
      ))}
    </div>
  );
}

export default Sidebar;
