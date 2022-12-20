import React, { useState } from "react";
import Ingredient from "./Ingredient/Ingredient";
import { flipInY } from "react-animations";
import styled, { keyframes } from "styled-components";
import Button from "react-bootstrap/esm/Button";
import { Dish } from "../../types/Dish";

interface IFullRecipeProps {
  dish: Dish;
  limit: number;
}

const Container = styled.div`
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;
const RecipeParts = styled.h3`
  margin-bottom: 15px;
`;
const RecipePartsContainer = styled.div`
  width: 50%; ;
`;

const flipInYAnimation = keyframes`${flipInY}`;
const FlipInYDiv = styled.div`
  animation: 1.25s ${flipInYAnimation};
`;

const CHARACTER_LIMIT = 100;

const FullRecipe = ({ dish, limit }: IFullRecipeProps) => {
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => setShowAll(!showAll);
  const shortDishRecipe = dish.recipe.substring(0, limit) + "...";
  const isShortDescription = dish.recipe.length <= CHARACTER_LIMIT; // indicates visibility of btn && initial view

  const toggleView = () =>
    isShortDescription ? null : (
      <Button
        variant="outline-success"
        className="mt-2"
        onClick={toggleShowAll}
      >
        Toggle view
      </Button>
    );

  const shortView = () => (
    <Container>
      <Content>
        <div>{shortDishRecipe}</div>
      </Content>
      {toggleView()}
    </Container>
  );

  const fullView = () => (
    <Container>
      <Content>
        <RecipePartsContainer>
          <RecipeParts>Ingredients</RecipeParts>
          <div>
            {dish.ingridients.map((ingridient: any) => (
              <Ingredient
                name={ingridient.name}
                quantity={ingridient.quantity}
              />
            ))}
          </div>
        </RecipePartsContainer>
        <RecipePartsContainer>
          <RecipeParts>Method</RecipeParts>
          <div>{dish.recipe}</div>
        </RecipePartsContainer>
      </Content>
      {toggleView()}
    </Container>
  );

  if (isShortDescription) return fullView();
  if (showAll) return <FlipInYDiv>{fullView()}</FlipInYDiv>;
  return shortView();
};

export default FullRecipe;
