import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { tokenAuthThunk } from "../../redux/user/userAuth/userAuthThunk";
import { useAppSelector } from "../../utils/hooks/reduxHooks";

export type PrivateRouteProps = {
  isAuthenticated: boolean | undefined;
  authenticationPath: string;
  loading: boolean | undefined;
  outlet: JSX.Element;
};

function PrivateRoute({
  isAuthenticated,
  authenticationPath,
  loading,
  outlet,
}: PrivateRouteProps) {
  const location = useLocation();
  // const dispatch = useDispatch();
  // const { isSignIn } = useAppSelector((state) => state.userAuth);

  // useEffect(() => {
  //   console.log(!!isSignIn);
  //   const token = localStorage.getItem("token");
  //   const s = async () => {
  //     await dispatch(tokenAuthThunk(token));
  //   };
  //   s();
  //   console.log(!!isSignIn);
  // }, [isSignIn]);

  // if (!isSignIn) {
  //   return <Navigate to={{ pathname: "/auth" }} />;
  // }

  // return outlet;

  // if (!loading) {
  if (isAuthenticated) {
    return outlet;
  } else {
    return (
      <Navigate
        to={{ pathname: authenticationPath }}
        state={{ from: location }}
      />
    );
  }
  // } else {
  //   return <p>Loading</p>;
  // }
}

export default PrivateRoute;
