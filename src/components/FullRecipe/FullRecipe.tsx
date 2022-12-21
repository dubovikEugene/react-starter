import React, { useState } from "react";
import Ingredient from "./Ingredient/Ingredient";
import Card from "react-bootstrap/Card";
import styled, { keyframes } from "styled-components";
import useFetch from "../../hooks/useFetch.hook";

interface IFullRecipe {
  cookingTime: number;
  id: string;
  img: string;
  ingridients: { name: string; quantity: string }[];
  name: string;
  recipe: string;
}

interface IId {
  id: string;
}

const Container = styled.div`
  justify-content: center;
  color: black;
  flex-wrap: wrap;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  margin-top: 5px;
`;
const RecipeParts = styled.div`
  font-size: 20px;
  font-style: bold;
  margin-bottom: 15px;
`;
const RecipePartsContainer = styled.div`
  width: 50%;
`;

const FullRecipe = (id: IId) => {
  const { data, loading, error } = useFetch<IFullRecipe>(id.id);

  return (
    <Card style={{ width: "800px" }}>
      <Card.Body>
        <Container>
          <Content>
            <RecipePartsContainer>
              <img src={`${data?.img}`} />
            </RecipePartsContainer>
            <RecipePartsContainer>
              <div className="justify-content-center">
                Cooking time (min): {data?.cookingTime}
              </div>
            </RecipePartsContainer>
          </Content>
          <Content>
            <RecipePartsContainer>
              <RecipeParts>Ingredients</RecipeParts>
              <div>
                {data?.ingridients.map((ingridient: any) => (
                  <Ingredient
                    name={ingridient.name}
                    quantity={ingridient.quantity}
                    key={ingridient.name}
                  />
                ))}
              </div>
            </RecipePartsContainer>
            <RecipePartsContainer>
              <RecipeParts>Method</RecipeParts>
              <div>{data?.recipe}</div>
            </RecipePartsContainer>
          </Content>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default FullRecipe;
