import React from "react";
import { Dish } from "../../types/Dish";
import FullRecipe from "../FullRecipe/FullRecipe";
import classes from "./DishItem.module.css";

const DishItem = (dish: Dish) => {
  return (
    <div className={classes.dish_item_container}>
      <div className={classes.dish_header}>
        <h1 className={classes.dish_name}>{dish.name}</h1>
        <img src={`${dish.img}`} className={classes.dish_image} />
      </div>
      <FullRecipe dish={dish} limit={100} />
    </div>
  );
};

export default DishItem;
