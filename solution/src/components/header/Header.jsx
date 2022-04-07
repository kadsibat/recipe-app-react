import React from 'react'
import Form from "./Form"
import { HeaderContainer, MainHeader } from './HeaderStyles'

const Header = ({setQuery,query,getData,meal,setMeal,mealTypes}) => {
  return (
    <HeaderContainer>
        <MainHeader>Food App</MainHeader>
        <Form
            setQuery={setQuery}
            query={query}
            getData={getData}
            meal={meal}
            setMeal={setMeal}
            mealTypes={mealTypes}
        />
    </HeaderContainer>
  )
}

export default Header
