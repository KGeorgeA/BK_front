import React from "react";

import FilteredCategory from "../FilteredCategory/FilteredCategory";

import { SidebarS } from "./Sidebar.styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PriceSlider from "../PriceSlider/PriceSlider";

// дропдаун категории Автор Жанр
// мультиселект на жанрах
// динамически подгружается список
function Sidebar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [categoryFilter, setCategoryFilter] = React.useState<null | string>(
    null
  );
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <SidebarS className="sidebar">
      <Button
        fullWidth={true}
        aria-controls={open ? "sidebar__menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Категория поиска
      </Button>
      <Menu
        id="sidebar__menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            setCategoryFilter("author");
          }}
        >
          Автор
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            setCategoryFilter("genre");
          }}
        >
          Жанр
        </MenuItem>
      </Menu>
      {categoryFilter && <FilteredCategory filter={categoryFilter} />}
      <PriceSlider />
      <Button fullWidth={true} onSubmit={() => console.log("hi")}>
        Send
      </Button>
    </SidebarS>
  );
}

export default Sidebar;
