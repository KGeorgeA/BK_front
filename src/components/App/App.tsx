import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import PrivateRoute, { PrivateRouteProps } from "../hoc/PrivateRoute";
import Layout from "../Layout/Layout";
import Main from "../Main/Main";
import Auth from "../Auth/Auth";
import NotFound from "../NotFound/NotFound";
import UserPage from "../Users/UserPage";
import UserProfile from "../Users/UserProfile";
import UserCart from "../Users/UserCart";

import { useDispatch } from "react-redux";
import { useAppSelector } from "../../utils/hooks/reduxHooks";
import { tokenAuthThunk } from "../../redux/user/userAuthThunk";
// 47 СТРОКА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const App: React.FC = () =>  {
  const dispatch = useDispatch();
  const { isSignIn } = useAppSelector((state) => state.userAuth);

  useEffect(() => {
      dispatch(tokenAuthThunk(localStorage.getItem("token")));
    }, [isSignIn]);

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
            <PrivateRoute
              {...defaultPrivateRouteProps}
              outlet={<UserPage />}
            />
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
}

export default App;
