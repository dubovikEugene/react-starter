import React from "react";
import IngredientType from "../../../types/IngredientType";
import classes from "./Ingredient.module.css";

const Ingredient = ({ name, quantity }: IngredientType) => {
  return (
    <div className={classes.ingredient_container}>
      <div className={classes.ingredient_name}>{name}</div>
      <div className={classes.ingredient_quantity}>{quantity}</div>
    </div>
  );
};

export default Ingredient;
