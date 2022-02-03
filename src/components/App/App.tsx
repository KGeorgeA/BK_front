import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import store from "../../redux/store/store";

import PrivateRoute from "../hoc/PrivateRoute";
import { PrivateRouteProps } from "../hoc/PrivateRoute";
import Layout from "../Layout/Layout";
import Main from "../Main/Main";
import Auth from "../Auth/Auth";
import UserProfile from "../Users/UserProfile";
import NotFound from "../NotFound/NotFound";
import UserCart from "../Users/UserCart";
import UserPage from "../Users/UserPage";
import { useDispatch } from "react-redux";
import { tokenAccessCheckThunk } from "../../redux/thunk/userAuthThunk";

function App() {
  const dispatch = useDispatch();

  const defaultPrivateRouteProps: Omit<PrivateRouteProps, "outlet"> = {
    isAuthenticated: true,//store.getState().userAuth.loggedIn.isLoggedIn,
    authenticationPath: "/auth",
    userId: store.getState().userAuth.data.id || "123",
  };

  useEffect(() => {
    dispatch(tokenAccessCheckThunk(localStorage.getItem('token')));
  });

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
          <Route path=":id" element={<UserProfile />} />
          <Route path=":id/cart" element={<UserCart />} />
        </Route>
      </Route>
      <Route path="*" element={<Layout />}>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
