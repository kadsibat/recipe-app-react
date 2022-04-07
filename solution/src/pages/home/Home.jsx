import React, { useState } from "react";
import Header from "../../components/header/Header";


const mealTypes=["Breakfast","Lunch","Dinner","Snack","Teatime"]
const API_ID = "527e8465"
const API_KEY = "aa32963a754d1bcda57f3e5648211fd8"



const Home = () => {
const [recipes, setRecipes] = useState()



  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;
