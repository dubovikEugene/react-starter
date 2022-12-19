import React from "react";
import DishType from "../../types/DishType";
import FullRecipe from "../FullRecipe/FullRecipe";
import classes from "./DishItem.module.css";

const DishItem = (props: DishType) => {
  console.log(props);
  return (
    <div className={classes.dish_item_container}>
      <div className={classes.dish_header}>
        <h1 className={classes.dish_name}>{props.name}</h1>
        <img src={`${props.img}`} className={classes.dish_image} />
      </div>
      <FullRecipe dish={props} limit={100} />
    </div>
  );
};

export default DishItem;
