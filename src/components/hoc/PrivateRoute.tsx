import React from "react";
import {  Navigate } from "react-router-dom";
import store from "../../redux/store";

export type PrivateRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  outlet: JSX.Element;
};

function PrivateRoute({isAuthenticated, authenticationPath, outlet}: PrivateRouteProps) {
  if(store.getState().userAuth.isSignIn && Boolean(localStorage.getItem('token'))) {
    return outlet;
  } else {
    return <Navigate to={{pathname: authenticationPath}}/>
  }
}

export default PrivateRoute;
