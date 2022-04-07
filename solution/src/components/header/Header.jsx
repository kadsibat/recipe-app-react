import React from "react";
import Form from "./Form";
import { HeaderContainer, MainHeader } from "./HeaderStyles";

const Header = ({ setQuery, getData, setMeal, mealTypes }) => {
  return (
    <HeaderContainer>
      <MainHeader>Food App</MainHeader>
      <Form
        setQuery={setQuery}
        getData={getData}
        setMeal={setMeal}
        mealTypes={mealTypes}
      />
    </HeaderContainer>
  );
};

export default Header;
