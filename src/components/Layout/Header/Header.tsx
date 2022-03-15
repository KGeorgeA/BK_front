import React from "react";
import { Link, useNavigate } from "react-router-dom";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";

import {
  HeaderS,
  HeaderContainer,
  HeaderMain,
  HeaderLogo,
} from "./Header.styles";

import { useAppSelector } from "../../../utils/hooks/reduxHooks";
import { useDispatch } from "react-redux";
import { signout } from "../../../redux/user/userAuth/userAuthSlice";
import { clearData } from "../../../redux/user/userData/userDataSlice";
import { IGetBookApi } from "../../../types/book/book.types";
import { booksSearchThunk } from "../../../redux/book/bookSearch/bookSearchThunk";
import { clearFilters } from "../../../redux/user/userFilters/userFiltersSlice";

function Header() {
  const { isSignIn } = useAppSelector((state) => state.userAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    const queryTitle: IGetBookApi = {
      page: 1,
      size: 12,
      query: {
        author: null,
        genre: null,
        priceFilter: {
          minPrice: 0,
          maxPrice: 1000,
        },
      },
    };
    dispatch(
      clearFilters({
        author: null,
        genre: null,
        priceFilter: { minPrice: 0, maxPrice: 1000 },
      })
    );
    dispatch(booksSearchThunk(queryTitle));
    navigate("/", { state: { page: 1 } });
  };

  const handleLogout = () => {
    dispatch(signout());
    dispatch(clearData());
    navigate("/");
  };

  return (
    <HeaderS className="header">
      <HeaderContainer className="header-container ">
        <HeaderMain className="header__main">
          <div
            className="link"
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          >
            <HeaderLogo className="header__logo">
              <p className="header__text">Bookstore</p>
            </HeaderLogo>
          </div>
          <div className="header__menu">
            <div className="header__icons">
              {isSignIn ? (
                <Link to="/userpage/profile">
                  <AccountCircleIcon sx={{ color: "black" }} fontSize="large" />
                </Link>
              ) : (
                <Link to="/auth">
                  <AccountCircleIcon sx={{ color: "black" }} fontSize="large" />
                </Link>
              )}
            </div>
            <div className="header__icons">
              <Link to="/userpage/cart">
                <ShoppingCartIcon
                  fontSize="large"
                  sx={{ color: "black" }}
                ></ShoppingCartIcon>
              </Link>
            </div>
            {isSignIn && (
              <div className="header__icons">
                <LogoutIcon
                  fontSize="large"
                  sx={{ color: "black", cursor: "pointer" }}
                  onClick={handleLogout}
                ></LogoutIcon>
              </div>
            )}
          </div>
        </HeaderMain>
      </HeaderContainer>
    </HeaderS>
  );
}

export default Header;
