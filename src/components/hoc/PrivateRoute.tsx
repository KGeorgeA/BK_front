import React from "react";
import {  Navigate } from "react-router-dom";

export type PrivateRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  userId: string;
  outlet: JSX.Element;
};

function PrivateRoute({isAuthenticated, authenticationPath, outlet}: PrivateRouteProps) {
  if(isAuthenticated) {
    return outlet;
  } else {
    return <Navigate to={{pathname: authenticationPath}}/>
  }
}

export default PrivateRoute;
