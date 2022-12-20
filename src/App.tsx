import React from "react";
import "./styles/App.css";
import DishItem from "./components/DishItem/DishItem";
import { Dish } from "./types/Dish";
import "bootstrap/dist/css/bootstrap.min.css";

const dishesData = require("./recipes.json");

function App() {
  return (
    <div className="App">
      {dishesData.recipes.map((dish: Dish) => (
        <DishItem
          name={dish.name}
          img={dish.img}
          cookingTime={dish.cookingTime}
          recipe={dish.recipe}
          ingridients={dish.ingridients}
          key={dish.name}
        />
      ))}
    </div>
  );
}

export default App;
