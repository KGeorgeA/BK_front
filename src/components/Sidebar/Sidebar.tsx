import React from "react";
import { SidebarS } from "./Sidebar.styles";

// мультиселект на жанрах
// динамически подгружается список
function Sidebar() {
  return (
    <SidebarS className="sidebar">
      <div className="sidebar__filters">
        <div className="filter">Категории (Жанры)</div>
        <div className="filter">Автор</div>
      </div>
    </SidebarS>
  );
}

export default Sidebar;
