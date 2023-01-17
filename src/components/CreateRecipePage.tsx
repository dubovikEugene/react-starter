import React, { useState } from "react";
import styled from "styled-components";
import { useInput } from "../hooks/useInput.hook";
import Button from "./UI/Button";
import Form from "./UI/Form";
import Textarea from "./UI/Textarea";
import Input from "./UI/Input";
import UploadFileButton from "./UI/UploadFileButton";
import IngredientsForm from "./IngredientsForm";
import { useAddRecipeMutation } from "../services/RecipeService";
import { useDispatch } from "react-redux";
import { setFullRecipe } from "../redux/fullRecipeSlice";
import { setOneRecipe } from "../redux/recipeListSlice";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const Container = styled.div`
  max-width: 30rem;
  width: 100%;
  height: auto;
  margin: 3rem auto;
`;

const CreateRecipePage = () => {
  const recipeDescription = useInput({
    initialValue: "",
    validations: { isEmpty: true },
  });
  const recipeName = useInput({
    initialValue: "",
    validations: { isEmpty: true },
  });
  const cookingTime = useInput({
    initialValue: "",
    validations: { isEmpty: true },
  });

  const [selectedFile, setSelectedFile] = useState<string | Blob>("");
  const [ingredients, setIngredients] = useState([{ name: "", quantity: "" }]);
  const [addRecipe, { isLoading, error }] = useAddRecipeMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createRecipeHandler = async (e: React.MouseEvent) => {
    const request = new FormData();
    request.append("action", "add_recipe");
    request.append("img", selectedFile);
    request.append("name", recipeName.value);
    request.append("cookingTime", cookingTime.value);
    request.append("recipe", recipeDescription.value);
    request.append("ingridients", JSON.stringify(ingredients));
    try {
      const response = await addRecipe(request).unwrap();
      dispatch(setFullRecipe(response));
      dispatch(setOneRecipe({ id: response.id, name: response.name }));
      navigate("/recipes");
      alert("Recipe added");
    } catch (error) {
      alert("Error loading recipe, please add image");
    }
  };

  const loadingView = () => {
    return (
      <Spinner
        animation="border"
        variant="success"
        className="mx-auto d-flex justify-content-center "
      />
    );
  };

  return (
    <Container>
      <Form titleText="Create a recipe">
        <Input
          type="text"
          name="recipe_name"
          id="recipe_name"
          onChange={recipeName.onChange}
          value={recipeName.value}
          labelText="Recipe name"
          placeholder="Enter the name of the recipe"
        />
        <Input
          type="text"
          name="cooking_time"
          id="cooking_time"
          onChange={cookingTime.onChange}
          value={cookingTime.value}
          labelText="Cooking time"
          placeholder="Enter the cooking time"
        />

        <IngredientsForm
          setIngredients={setIngredients}
          ingredients={ingredients}
        />

        <Textarea
          labelText="Recipe:"
          name="recipe"
          id="recipe"
          value={recipeDescription.value}
          onChange={recipeDescription.onChange}
          placeholder="Enter your recipe here..."
        />

        <UploadFileButton setSelectedFile={setSelectedFile} />
        {isLoading ? (
          <Button disabled onClick={() => {}}>
            {loadingView()}
          </Button>
        ) : (
          <Button onClick={createRecipeHandler}>Create</Button>
        )}
      </Form>
    </Container>
  );
};

export default CreateRecipePage;
