import React from "react";
import "./styles/App.css";
import DishItem from "./components/DishItem/DishItem";
import DishType from "./types/DishType";
import "bootstrap/dist/css/bootstrap.min.css";

const dishesData = require("./recipes.json");

// const DISHES = dishesData.recipes;

function App() {
  return (
    <div className="App">
      {dishesData.recipes.map((dish: DishType) => (
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
