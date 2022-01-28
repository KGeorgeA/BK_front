import React from "react";
import { Routes, Route } from "react-router-dom";
import {} from 'styled-components/cssprop'

import Main from "../Main/Main";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
}

export default App;
