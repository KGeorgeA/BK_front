import React from "react";
import { Link } from "react-router-dom";
import { HeaderS } from "./Header.styles";
import { HeaderContainer } from "./HeaderContainer.styles";
import { HeaderMenu } from "./HeaderMenu.styles";
import { HeaderNav } from "./HeaderNav.styles";
import { NavItem } from "./NavItem.styles";
import { NavList } from "./NavList";

function Header() {
  // liшки думаю должны быть с линками из роутера
  return (
    <HeaderS className="header">
      <HeaderContainer className="header-container ">
        <HeaderMenu className="header__menu">
          <div className="header__logo">Logo</div>
          <div className="header__menu">Search Bar User Menu</div>
        </HeaderMenu>
        <HeaderNav className="header__nav nav">
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
        </HeaderNav>
      </HeaderContainer>
    </HeaderS>
  );
}

export default Header;
