import React from "react";
import {
  FormContainer,
  SearchButton,
  SearchInput,
  Select,
} from "./HeaderStyles";

const Form = ({ setQuery, query, getData, meal, setMeal, mealTypes }) => {

  const handleSubmit = (e) =>
    e.preventDefault()
    getData()

  return (
    <FormContainer onSubmit={handleSubmit}>
      <SearchInput
        placeholder="Search Food"
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchButton type="submit">Search</SearchButton>
      <Select
      onChange={(e) => setMeal(e.target.value)}
      >
        {mealTypes?.map((item, index) => (
          <option key={index} value={item}>{item}</option>
        ))}
      </Select>
    </FormContainer>
  );
};

export default Form;
