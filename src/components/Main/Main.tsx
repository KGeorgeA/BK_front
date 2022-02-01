import React from "react";
import BookList from "../BookList/BookList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { MainContainer } from "./MainContainer.styles";

function Main() {
  return (
    <>
      <Header />
      <MainContainer className="main-container">
        <Sidebar />
        <BookList />
      </MainContainer>
      <Footer />
    </>
  );
}

export default Main;
