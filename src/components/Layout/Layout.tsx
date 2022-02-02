import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Auth from "../Auth/Auth";

type Props = {
  children: React.ReactNode
}
const Layout: React.FunctionComponent<Props> = (props:Props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
