import React, { useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import currentPlayListIdState from "./atoms/currentPlayListIdState";
import "./SidebarPlayList.css";

function SidebarPlayList({ playList }) {
  const [currentPlayListId, setCurrentPlayListId] = useRecoilState(
    currentPlayListIdState
  );

  const truncateText = (title) => {
    return title.length <= 50 ? title : title.substring(0, 50) + "...";
  };

  const handleClick = (e) => {
    setCurrentPlayListId(playList.id);
  };

  const isActive = useMemo(() => {
    return playList.id == currentPlayListId;
  }, [currentPlayListId]);

  return (
    <div
      className={
        isActive ? "sidebarPlayList sidebarPlayList--active" : "sidebarPlayList"
      }
      onClick={handleClick}
    >
      <p>{truncateText(truncateText(playList?.name))}</p>
    </div>
  );
}

export default SidebarPlayList;
