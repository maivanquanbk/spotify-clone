import React from "react";
import Sidebar from "./Sidebar";
import "./Player.css";
import Body from "./Body";
import Footer from "./Footer";
import BodyBusy from "./BodyBusy";

function Player() {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <React.Suspense fallback={<BodyBusy />}>
          <Body />
        </React.Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default Player;
