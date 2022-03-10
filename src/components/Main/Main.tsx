import React from "react";

import BookList from "../BookList/BookList";
import Sidebar from "../Sidebar/Sidebar";
import { MainContainer } from "./MainContainer.styles";

function Main() {

  return (
    <>
      <MainContainer className="main-container container">
        <Sidebar />
        <BookList />
      </MainContainer>
    </>
  );
}

export default Main;
