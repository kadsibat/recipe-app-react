
import React from 'react'
import { FormContainer, SearchButton, SearchInput, Select } from './HeaderStyles'

const Form = () => {
  return (
    <FormContainer>
      <SearchInput/>
      <SearchButton>Search</SearchButton>
      <Select></Select>

    </FormContainer>
  )
}

export default Form