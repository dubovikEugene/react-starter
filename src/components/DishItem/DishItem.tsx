import React from "react";
import FullRecipe from "../FullRecipe/FullRecipe";
import classes from './DishItem.module.css';

const DishItem = (props: any) => {
    console.log(props)
    return(
        <div className={classes.dish_item_container}>
            <div className={classes.dish_header}>
                <h1 className={classes.dish_name}>{props.dish.name}</h1>
                <img src={`${props.dish.img}`} className={classes.dish_image}/>

            </div>
            <FullRecipe dish={props.dish} limit={100}/>

            
        </div>
    )
}


export default DishItem;