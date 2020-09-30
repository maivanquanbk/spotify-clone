import React from "react";
import "./SidebarOption.css";

function SidebarOption({ title, Icon }) {
  const truncateTitle = (title) => {
    return title.length <= 50 ? title : title.substring(0, 50) + "...";
  };
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{truncateTitle(title)}</h4> : <p>{truncateTitle(title)}</p>}
    </div>
  );
}

export default SidebarOption;
