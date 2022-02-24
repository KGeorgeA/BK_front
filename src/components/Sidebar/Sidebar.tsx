import React, { useEffect } from "react";
import { authorsDataThunk } from "../../redux/categoryFilter/categoryFilterThunk";

import FilteredCategory from "../FilteredCategory/FilteredCategory";

import { SidebarS } from "./Sidebar.styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PriceSlider from "../PriceSlider/PriceSlider";
import { useDispatch } from "react-redux";
// import { booksFilteredSearchThunk } from "../../redux/book/bookSearch/bookSearchThunk";
import { IGetBookApi } from "../../types/book/book.types";
import { useAppSelector } from "../../utils/hooks/reduxHooks";
import { useNavigate } from "react-router-dom";

// дропдаун категории Автор Жанр
// мультиселект на жанрах
// динамически подгружается список
function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [categoryFilter, setCategoryFilter] = React.useState<null | string>(
    null
  );
  const open = Boolean(anchorEl);

  const { author, genre, price } = useAppSelector(
    (state) => state.searchFiltersData
  );

  useEffect(() => {
    dispatch(authorsDataThunk());
  }, []);

  const handleClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(ev.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmitClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    const data: IGetBookApi = {
      page: 2,
      size: 12,
      query: {
        author,
        genre,
        price,
      },
    };

    navigate(`?price_from=${price?.minPrice}&price_to=${price?.maxPrice}`);

    console.log("send button", data);
    // dispatch(booksSearchThunk(data)); // ЭТО РАБОЧЕЕ
    // dispatch(booksFilteredSearchThunk(data)); // ЭТО НЕ РАБОЧЕЕ
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
      <Button fullWidth={true} onClick={handleSubmitClick}>
        Send
      </Button>
    </SidebarS>
  );
}

export default Sidebar;
