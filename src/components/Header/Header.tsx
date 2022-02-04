import React from "react";
import { Link, useNavigate } from "react-router-dom";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import { ButtonUnstyled } from "@mui/material";

import { HeaderS } from "./Header.styles";
import { HeaderContainer } from "./HeaderContainer.styles";
import { HeaderMain } from "./HeaderMain.styles";
import { HeaderLogo } from "./HeaderLogo.styles";

import { useAppSelector } from "../../utils/hooks/reduxHooks";
import { useDispatch } from "react-redux";
import { signout } from "../../redux/user/userSlice";

function Header() {
  const { isSignIn } = useAppSelector((state) => state.userAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(signout());
    navigate("/");
  };

  return (
    <HeaderS className="header">
      <HeaderContainer className="header-container ">
        <HeaderMain className="header__main">
          <Link to="/" className="link">
            <HeaderLogo className="header__logo">
              <p className="header__text">Bookstore</p>
            </HeaderLogo>
          </Link>
          <div className="header__menu">
            <Link to="/userpage">
              <AccountCircleIcon sx={{ color: "black" }} fontSize="large" />
            </Link>
            <Link to="/userpage/cart">
              <ShoppingCartIcon
                fontSize="large"
                sx={{ color: "black" }}
              ></ShoppingCartIcon>
            </Link>
            {isSignIn && (
              <ButtonUnstyled onClick={handleLogout}>
                <LogoutIcon
                  fontSize="large"
                  sx={{ color: "black" }}
                ></LogoutIcon>
              </ButtonUnstyled>
            )}
          </div>
        </HeaderMain>
      </HeaderContainer>
    </HeaderS>
  );
}

export default Header;
