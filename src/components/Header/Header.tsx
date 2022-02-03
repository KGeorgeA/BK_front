import React from "react";
import { Link } from "react-router-dom";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { HeaderS } from "./Header.styles";
import { HeaderContainer } from "./HeaderContainer.styles";
import { HeaderMain } from "./HeaderMain.styles";
import { HeaderLogo } from "./HeaderLogo.styles";

function Header() {
  return (
    <HeaderS className="header">
      <HeaderContainer className="header-container ">
        <HeaderMain className="header__main">
          <HeaderLogo className="header__logo">
            <p className="header__text">Bookstore</p>
          </HeaderLogo>
          <div className="header__menu">
            <Link to="/auth">
              <AccountCircleIcon sx={{ color: "black" }} fontSize="large" />
            </Link>
            <Link to="/">
              <ShoppingCartIcon
                color="primary"
                fontSize="large"
                sx={{ color: "black" }}
              ></ShoppingCartIcon>
            </Link>
          </div>
        </HeaderMain>
      </HeaderContainer>
    </HeaderS>
  );
}

export default Header;
