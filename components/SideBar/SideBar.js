import React from "react";
import {
  Filter,
  SideBarContainer,
  CheckBoxContainer,
  FilterTop,
  FilterBottom,
  Sort,
  SortBottom,
  SortTop
} from "../styles/SideBar.style";
export default function SideBar() {
  return (
    <SideBarContainer>
      <Filter>
        <FilterTop>
          <h6>Filter</h6>
        </FilterTop>

        <FilterBottom>
          <CheckBoxContainer>
            <input type="checkbox" name="Sofas" id="Sofas" />
            <label htmlFor="Sofas">Sofas</label>
          </CheckBoxContainer>
          <CheckBoxContainer>
            <input type="checkbox" name="Sofas" id="Sofas" />
            <label htmlFor="Sofas">Beds</label>
          </CheckBoxContainer>
          <CheckBoxContainer>
            <input type="checkbox" name="Sofas" id="Sofas" />
            <label htmlFor="Sofas">Tables</label>
          </CheckBoxContainer>
          <CheckBoxContainer>
            <input type="checkbox" name="Sofas" id="Sofas" />
            <label htmlFor="Sofas">TV Stands</label>
          </CheckBoxContainer>
          <CheckBoxContainer>
            <input type="checkbox" name="Sofas" id="Sofas" />
            <label htmlFor="Sofas">Wardrobes</label>
          </CheckBoxContainer>
          <CheckBoxContainer>
            <input type="checkbox" name="Sofas" id="Sofas" />
            <label htmlFor="Sofas">Cabinates</label>
          </CheckBoxContainer>
          <CheckBoxContainer>
            <input type="checkbox" name="Sofas" id="Sofas" />
            <label htmlFor="Sofas">Dressers</label>
          </CheckBoxContainer>
          <CheckBoxContainer>
            <input type="checkbox" name="Sofas" id="Sofas" />
            <label htmlFor="Sofas">Other</label>
          </CheckBoxContainer>
        </FilterBottom>
      </Filter>
      <Sort>
        <SortTop>
          <h6>Sort</h6>
        </SortTop>

        <SortBottom>
          <CheckBoxContainer>
            <input type="radio" name="Sofas" id="Sofas" />
            <label htmlFor="Sofas">Discounts</label>
          </CheckBoxContainer>
          <CheckBoxContainer>
            <input type="radio" name="Sofas" id="Sofas" />
            <label htmlFor="Sofas">Best Selling</label>
          </CheckBoxContainer>
          <CheckBoxContainer>
            <input type="radio" name="Sofas" id="Sofas" />
            <label htmlFor="Sofas">Price, low to high</label>
          </CheckBoxContainer>
          <CheckBoxContainer>
            <input type="radio" name="Sofas" id="Sofas" />
            <label htmlFor="Sofas">Price high to low</label>
          </CheckBoxContainer>
    
        </SortBottom>
      </Sort>
    </SideBarContainer>
  );
}
