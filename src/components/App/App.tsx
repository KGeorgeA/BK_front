import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "../Main/Main";
// import Login from "../Auth/Login/Login";
import Registration from "../Auth/Registration/Registration";
import Auth from "../Auth/Auth";
import RequireAuth from "../hoc/RequireAuth";
import Layout from "../Layout/Layout";
import UserProfile from "../UserProfile/UserProfile";
import PrivateTest from "../PrivateTest/PrivateTest";

// Приватный роутер; Layout
// НЕ СДЕЛАНО
//

function App() {
  return (
    <Routes>
      <Route path="/layout" element={<Layout children={<Registration />} />} />
      <Route
        path="/profile"
        element={
          <RequireAuth>
            <Layout children={<UserProfile />} />
          </RequireAuth>
        }
      />
      <Route path="/" element={<Main />} />
      <Route
        path="/registration"
        element={
          <RequireAuth>
            <Registration />
          </RequireAuth>
        }
      />
      <Route path="/auth" element={<Auth />} />
      <Route
        path="/private"
        element={
          <RequireAuth>
            <PrivateTest />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default App;
