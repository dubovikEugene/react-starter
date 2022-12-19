import React, { useState } from "react";
import ShowButton from "../Button/ShowButton";
import Ingridient from "../Ingridient/Ingridient";
import classes from "./FullRecipe.module.css";
import { flipInY } from "react-animations";
import styled, { keyframes } from "styled-components";

type Props = {
  dish: any;
  limit: number;
};
const flipInYAnimation = keyframes`${flipInY}`;
const FlipInYDiv = styled.div`
  animation: 1.25s ${flipInYAnimation};
`;

const CHARACTER_LIMIT = 100;

const FullRecipe = ({ dish, limit }: Props) => {
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => setShowAll(!showAll);
  const shortDishRecipe = dish.recipe.substring(0, limit) + "...";
  const isShortDescription = dish.recipe.length <= CHARACTER_LIMIT; // indicates visibility of btn && initial view

  const toggleView = () =>
    isShortDescription ? null : (
      <ShowButton
        className={classes.button_show_recipe}
        onClick={toggleShowAll}
      >
        Toggle view
      </ShowButton>
    );

  const shortView = () => (
    <div className={classes.container}>
      <div className={classes.dish_content}>
        <div className="dish_ingridienst">
        </div>
        <div className="dish_recipe">{shortDishRecipe}</div>
      </div>
      {toggleView()}
    </div>
  );

  const fullView = () => (
    <div className={classes.container}>
      <div className={classes.dish_content}>
        <div className={classes.dish_ingridients}>
          <h2>Ingridients</h2>
          <div>
            {dish.ingridients.map((ingridient: any) => (
              <Ingridient
                name={ingridient.name}
                quantity={ingridient.quantity}
              />
            ))}
          </div>
        </div>
        <div className={classes.dish_method}>
          <h2>Method</h2>
          <div className="dish_recipe">{dish.recipe}</div>
        </div>
      </div>
      {toggleView()}
    </div>
  );

  if (isShortDescription) return fullView();
  if (showAll) return <FlipInYDiv>{fullView()}</FlipInYDiv>;
  return shortView();
};

export default FullRecipe;