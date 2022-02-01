import React from "react";
import { Link } from "react-router-dom";
import { NavList } from "./NavList";

import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { HeaderS } from "./Header.styles";
import { HeaderContainer } from "./HeaderContainer.styles";
import { HeaderMenu } from "./HeaderMenu.styles";
import { HeaderNav } from "./HeaderNav.styles";
import { NavItem } from "./NavItem.styles";

function Header() {
  return (
    <HeaderS className="header">
      <HeaderContainer className="header-container ">
        <HeaderMenu className="header__menu">
          <div className="header__logo">
            Logo
            <SearchIcon fontSize="large" />
          </div>
          <div className="header__menu">
            <Link to="/login">
              <AccountCircleIcon color="primary" fontSize="large" />
            </Link>
            <Link to="/">
              <ShoppingCartIcon color="primary" fontSize="large" ></ShoppingCartIcon>
            </Link>
          </div>
        </HeaderMenu>
        {/* <HeaderNav className="header__nav nav">
          <NavList className="nav__list">
            <NavItem className="nav__item">
              <Link className="nav__link" to="/">
                Акции
              </Link>
            </NavItem>
            <NavItem className="nav__item">
              <Link className="nav__link" to="/">
                Скидки!
              </Link>
            </NavItem>
            <NavItem className="nav__item">
              <Link className="nav__link" to="/">
                Подборки
              </Link>
            </NavItem>
            <NavItem className="nav__item">
              <Link className="nav__link" to="/">
                Подарочный Сертификат
              </Link>
            </NavItem>
            <NavItem className="nav__item">
              <Link className="nav__link" to="/">
                Книжный абонемент
              </Link>
            </NavItem>
            <NavItem className="nav__item">
              <Link className="nav__link" to="/">
                Корпоративные продажи
              </Link>
            </NavItem>
          </NavList>
        </HeaderNav> */}
      </HeaderContainer>
    </HeaderS>
  );
}

export default Header;
