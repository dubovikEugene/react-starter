import React, { useEffect, useState } from "react";
import Ingredient from "./Ingredient/Ingredient";
import Card from "react-bootstrap/Card";
import styled, { keyframes } from "styled-components";
import useFetch from "../../hooks/useFetch.hook";
import { IFullRecipe } from "../../types/IFullRecipe";
import axios from "axios";
import { State } from "../../redux/reducers";
import { actionCreators } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

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

const FullRecipe = ({ id }: { id: string }) => {
  // const { data, loading, error } = useFetch<IFullRecipe>(id);

  const recipe: IFullRecipe = useSelector((state: State) => state.recipe);
  const dispatch = useDispatch();
  const { selectedRecipe } = bindActionCreators(actionCreators, dispatch);

  const fetchRecipeList = async () => {
    console.log(`New request ${id}`);
    await axios
      .get(`https://api.workstmt.com/!yauheni/${id}`)
      .then((response) => {
        selectedRecipe(response.data);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchRecipeList();
  }, []);

  return (
    <Card style={{ width: "800px" }}>
      <Card.Body>
        <Container>
          <Content>
            <RecipePartsContainer>
              <img src={`${recipe.img}`} />
            </RecipePartsContainer>
            <RecipePartsContainer>
              <div className="justify-content-center">
                Cooking time (min): {recipe.cookingTime}
              </div>
            </RecipePartsContainer>
          </Content>
          <Content>
            <RecipePartsContainer>
              <RecipeParts>Ingredients</RecipeParts>
              <div>
                {recipe.ingridients.map((ingridient: any) => (
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
              <div>{recipe.recipe}</div>
            </RecipePartsContainer>
          </Content>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default FullRecipe;
