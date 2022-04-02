import React from "react";
import { Head } from "next/document";
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
