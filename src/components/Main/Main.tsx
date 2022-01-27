import React from "react";
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
        <main>Main Info</main>
      </MainContainer>
      <Footer />
    </>
  );
}

export default Main;
