import axios from 'axios'
import React, { useState } from 'react'
import Header from '../../components/header/Header'

const mealTypes=["Breakfast","Lunch","Dinner","Snack","Teatime"]
const API_ID = "527e8465"
const API_KEY = "aa32963a754d1bcda57f3e5648211fd8"

const Home = () => {
  const [recipes, setRecipes] = useState()
  const [query, setQuery] = useState()
  const [meal, setMeal] = useState()

  const url=`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&mealType=${meal}`;

  const getData = async () => {
    if(query!==""){
      const result = await axios.get(url)
      setRecipes(result.data.hits)
      console.log(result.data.hits)

    }
  }
  console.log(recipes)



  return (
    <div>
      <Header
        setQuery={setQuery}
        query={query}
        getData={getData}
        meal={meal}
        setMeal={setMeal}
        mealTypes={mealTypes}
      />
    </div>
  )
}

export default Home
