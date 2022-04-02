import React from "react";
import { Wrapper } from "../styles/ItemWrapper.style";
import Item from "../Item/Item";
import SideBar from "../SideBar/SideBar";
import ItemContainer from "../ItemContainer/Container";
export default function ItemWrapper() {
  
  return (
    <ItemContainer>
      <SideBar/>
    <Wrapper >
   asdasdddd
    </Wrapper>
    </ItemContainer>
  );
}


/* {data.results
  .filter((res) => {
    if (searchItem === "") {
      return res;
    } else if (
      res.name.toLowerCase().includes(searchItem.toLowerCase())
    ) {
      return res;
    }
  })
  .map((payload, index) => {
    return <Item key={index} payload={payload} flip={flip} />;
  })} */