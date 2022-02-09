import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import BookList from "../BookList/BookList";
import Sidebar from "../Sidebar/Sidebar";
import { MainContainer } from "./MainContainer.styles";

function Main() {
  const location = useLocation();
  // const navigate = useNavigate();
  console.log(location.search);

  return (
    <>
      <MainContainer className="main-container container">
        <Sidebar />
        <BookList query={location.search}/>
      </MainContainer>
    </>
  );
}

export default Main;
