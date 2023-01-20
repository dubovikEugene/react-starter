import React, { FC, useEffect } from "react";
import Ingredient from "./Ingredient/Ingredient";
import Card from "react-bootstrap/Card";
import styled, { keyframes } from "styled-components";
import { Alert, Spinner } from "react-bootstrap";
import { flipInY } from "react-animations";
import { useGetRecipeByIdMutation } from "../../services/RecipeService";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setFullRecipe } from "../../redux/fullRecipeSlice";

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

const flipInYAnimation = keyframes`${flipInY}`;
const FlipInYDiv = styled.div`
  animation: 1.25s ${flipInYAnimation};
`;

const FullRecipe: FC<{ id: string }> = ({ id }) => {
  const [getRecipeByID, { isLoading, error }] = useGetRecipeByIdMutation();
  const dispatch = useDispatch();

  const fullRecipes = useSelector((state: RootState) => {
    return state.fullRecipes.fullRecipes;
  });

  let fullRecipeDescription = fullRecipes.find((elem) => elem.id === id);

  useEffect(() => {
    if (!fullRecipeDescription) {
      getRecipeByID(id)
        .unwrap()
        .then((resp) => {
          dispatch(setFullRecipe(resp));
        });
    }
  }, []);

  const loadingView = () => {
    return (
      <div className="d-flex">
        <Spinner
          animation="border"
          variant="success"
          className="mx-auto justify-content-center mt-1"
        />
      </div>
    );
  };

  const recipeView = () => {
    return (
      <FlipInYDiv>
        <Card style={{ width: "800px" }}>
          <Card.Body>
            <Container>
              <Content>
                <RecipePartsContainer>
                  <img src={`${fullRecipeDescription?.img}`} alt="dish" />
                </RecipePartsContainer>
                <RecipePartsContainer>
                  <div className="justify-content-center">
                    Cooking time (min): {fullRecipeDescription?.cookingTime}
                  </div>
                </RecipePartsContainer>
              </Content>
              <Content>
                <RecipePartsContainer>
                  <RecipeParts>Ingredients</RecipeParts>
                  <div>
                    {fullRecipeDescription?.ingridients.map((ingridient) => (
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
                  <div>{fullRecipeDescription?.recipe}</div>
                </RecipePartsContainer>
              </Content>
            </Container>
          </Card.Body>
        </Card>
      </FlipInYDiv>
    );
  };

  const errorView = () => {
    return (
      <Alert variant="danger" className="mx-auto justify-content-center mt-1">
        <h3>Error loading a recipe</h3>
        <p></p>
      </Alert>
    );
  };

  if (isLoading) return loadingView();
  if (error) return errorView();

  return recipeView();
};

export default FullRecipe;
