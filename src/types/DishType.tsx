import React from "react";
import Ingredient from "./IngredientType";

type DishType = {
  name: string;
  img: string;
  cookingTime: number;
  recipe: string;
  ingridients: Ingredient[];
};

export default DishType;
