import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/header/Header";


const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
const API_ID = "527e8465";
const API_KEY = "aa32963a754d1bcda57f3e5648211fd8";

const Home = () => {
  const [food, setFood] = useState();
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());


  const url = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&mealType=${meal}`;

  const getData = async () => {
    if (query) {
      const result = await axios.get(url);
      setFood(result.data.hits);
    } else {
      console.log("please fill the form");
    }
  };

  return (
    <div>
      <Header
        setQuery={setQuery}
        getData={getData}
        setMeal={setMeal}
        mealTypes={mealTypes}
      />
    </div>
  );
};

export default Home;
