import styled from "@emotion/styled";
import React from "react";
import { Dish } from "../../types/Dish";
import FullRecipe from "../FullRecipe/FullRecipe";
import classes from "./DishItem.module.css";

const DishContainer = styled.div`
  display: flex;
  padding: 15px;
  border: 2px solid teal;
  margin: 15px 0;
  flex-direction: column;
  justify-content: center;
`;

const DishName = styled.h2`
  text-align: center;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  // flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const DishItem = (dish: Dish) => {
  return (
    <DishContainer>
      <Header>
        <DishName>{dish.name}</DishName>
        <img src={`${dish.img}`} className={classes.dish_image} />
      </Header>
      <FullRecipe dish={dish} limit={100} />
    </DishContainer>
  );
};

export default DishItem;
