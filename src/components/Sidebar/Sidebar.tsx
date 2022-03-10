import React, { useEffect } from "react";
import { categoryFilterDataThunk } from "../../redux/categoryFilter/categoryFilterThunk";

import FilteredCategory from "./FilteredCategory/FilteredCategory";

import { SidebarS } from "./Sidebar.styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PriceSlider from "./PriceSlider/PriceSlider";
import { useDispatch } from "react-redux";
import { IGetBookApi } from "../../types/book/book.types";
import { useAppSelector } from "../../utils/hooks/reduxHooks";
import { useLocation, useNavigate } from "react-router-dom";
import { booksSearchThunk } from "../../redux/book/bookSearch/bookSearchThunk";

function Sidebar() {
  const dispatch = useDispatch();
  // const location = useLocation();
  // const {filter} = location.state as IStateType
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
    dispatch(categoryFilterDataThunk());
  }, []);

  const handleClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(ev.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmitClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    const data: IGetBookApi = {
      page: 1,
      size: 12,
      query: {
        author,
        genre,
        price,
      },
    };

    navigate("/", {
      state: {
        page: 1,
        filter: categoryFilter,
        authorId: author || null,
        genre: genre === null ? genre : null,
        priceFrom: price?.minPrice,
        priceTo: price?.maxPrice,
      },
      replace: true,
    });

    dispatch(booksSearchThunk(data));
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
