import React, { useEffect } from "react";
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
// 47 СТРОКА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const App: React.FC = () => {
  console.log("1");

  const dispatch = useDispatch();
  const { isSignIn, loading } = useAppSelector((state) => state.userAuth);
  const location = useLocation();
  // console.log("location", location);

  useEffect(() => {
    console.log("2");

    // console.log(isSignIn);
    const token = localStorage.getItem("token");
    dispatch(tokenAuthThunk(token));
    // console.log( isSignIn);
  }, []);

  const defaultPrivateRouteProps: Omit<PrivateRouteProps, "outlet"> = {
    isAuthenticated: true,
    authenticationPath: "/auth",

    loading: loading,
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
              // вложенный приватный роут не работает
              <PrivateRoute
                {...defaultPrivateRouteProps}
                outlet={<UserProfile />}
              />
            }
          />
          <Route
            path="orders"
            element={
              // вложенный приватный роут не работает
              <PrivateRoute
                {...defaultPrivateRouteProps}
                outlet={<UserOrders />}
              />
            }
          />
          <Route
            path="wishlist"
            element={
              // вложенный приватный роут не работает
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
