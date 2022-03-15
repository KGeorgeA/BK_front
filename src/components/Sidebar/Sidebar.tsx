import React, { useEffect } from "react";
import { categoryFilterDataThunk } from "../../redux/categoryFilter/categoryFilterThunk";

import FilteredCategory from "./FilteredCategory/FilteredCategory";

import { SidebarS } from "./Sidebar.styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PriceSlider from "./PriceSlider/PriceSlider";
import { useDispatch } from "react-redux";
import { IBookFilters } from "../../types/book/book.types";
import { useAppSelector } from "../../utils/hooks/reduxHooks";
import { useNavigate } from "react-router-dom";
import { getParsedUrl } from "../../utils/helpers/queryParser";

function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [categoryFilter, setCategoryFilter] = React.useState<null | string>(
    null
  );
  const open = Boolean(anchorEl);

  const { author, genre, priceFilter } = useAppSelector(
    (state) => state.searchFiltersData
  );

  useEffect(() => {
    dispatch(categoryFilterDataThunk());
  }, [dispatch]);

  useEffect(() => {
    const urlParams: IBookFilters = {
      author,
      genre,
      priceFilter,
    };

    navigate(getParsedUrl(urlParams), { replace: true });
  }, [author, genre, priceFilter, navigate]);

  const handleClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(ev.currentTarget);
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
        onClose={() => {
          handleClose();
          setCategoryFilter(null);
        }}
      >
        <MenuItem
          sx={{ width: "256px", justifyContent: "center" }}
          onClick={() => {
            handleClose();
            setCategoryFilter("author");
          }}
        >
          Автор
        </MenuItem>
        <MenuItem
          sx={{ width: "256px", justifyContent: "center" }}
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
    </SidebarS>
  );
}

export default Sidebar;
