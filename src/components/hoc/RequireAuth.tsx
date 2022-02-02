import React from 'react';
import { useLocation, Navigate } from "react-router-dom";

import store from "../../redux/store/store";

// Логин провайдер
// НЕ СДЕЛАНО
//

type ChildrenElement = {children:JSX.Element};

function RequireAuth({children}: ChildrenElement) {
  const location = useLocation();

  const auth = store.getState().userAuth.loggedIn.isLoggedIn;
  // const auth = true;
  console.log(auth);
  

  if (!auth) {
    return <Navigate to='/auth' state={{from: location.pathname}}/>
  }

  return children;
}

export default RequireAuth;
