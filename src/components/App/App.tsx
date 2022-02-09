import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import PrivateRoute, { PrivateRouteProps } from "../hoc/PrivateRoute";
import Layout from "../Layout/Layout";
import Main from "../Main/Main";
import Auth from "../Auth/Auth";
import NotFound from "../NotFound/NotFound";
import UserPage from "../Userpage/UserPage";
import UserProfile from "../Userpage/Profile/UserProfile";
import UserCart from "../Userpage/Cart/UserCart";

import { useDispatch } from "react-redux";
import { useAppSelector } from "../../utils/hooks/reduxHooks";
import { tokenAuthThunk } from "../../redux/user/userAuth/userAuthThunk";
import UserOrders from "../Userpage/Orders/UserOrders";
import UserWishlist from "../Userpage/Wishlist/UserWishlist";
import { getUserDataThunk } from "../../redux/user/userData/userDataThunk";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { isSignIn, isCompleted } = useAppSelector((state) => state.userAuth);
  const state = useAppSelector(state => state.userData)
  // const location = useLocation();
  // console.log("location", location);

  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(tokenAuthThunk(token));
    dispatch(getUserDataThunk(state));
  }, []);

  if (!isCompleted) {
    return null;
  }

  const defaultPrivateRouteProps: Omit<PrivateRouteProps, "outlet"> = {
    isAuthenticated: isSignIn,
    authenticationPath: "/auth",
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="auth" element={<Auth />} />
        <Route
          path="userpage"
          element={
            <PrivateRoute {...defaultPrivateRouteProps} outlet={<UserPage />} />
          }
        >
          <Route
            path="profile"
            element={
              <PrivateRoute
                {...defaultPrivateRouteProps}
                outlet={<UserProfile />}
              />
            }
          />
          <Route
            path="orders"
            element={
              <PrivateRoute
                {...defaultPrivateRouteProps}
                outlet={<UserOrders />}
              />
            }
          />
          <Route
            path="wishlist"
            element={
              <PrivateRoute
                {...defaultPrivateRouteProps}
                outlet={<UserWishlist />}
              />
            }
          />
          <Route
            path="cart"
            element={
              <PrivateRoute
                {...defaultPrivateRouteProps}
                outlet={<UserCart />}
              />
            }
          />
        </Route>
      </Route>

      <Route path="*" element={<Layout />}>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
