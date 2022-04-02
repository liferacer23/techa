import React from "react";
import Nav from "../NavBar/Nav";
import ItemWrapper from "../ItemWrapper/ItemWrapper";
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <ItemWrapper>{children}</ItemWrapper>
    </>
  );
}
