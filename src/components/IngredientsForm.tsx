import React, { FC, SetStateAction } from "react";
import styled from "styled-components";
import Input from "./UI/Input";

interface iIngredient {
  name: string;
  quantity: string;
}
interface IIngredientsForm {
  setIngredients: React.Dispatch<
    SetStateAction<{ name: string; quantity: string }[]>
  >;
  ingredients: iIngredient[];
}

const Container = styled.div`
  display: grid;
  grid-template-columns: [first] 55% [second] 30% [third] 15%;
`;

const Btn = styled.button`
  margin: 0.5rem;
  background-color: #0d6efd;
  border: 1px solid rgba(27, 31, 35, 0.2);
  color: #fff;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 5px;
  &:hover {
    background-color: #0d65eb;
  }
`;
const BtnRemove = styled.button`
  margin: 2.2rem 1rem 0;
  background-color: #de1616;
  border: 1px solid rgba(27, 31, 35, 0.2);
  color: #fff;
  font-weight: 800;
  border-radius: 5px;
  &:hover {
    background-color: #b31111;
  }
`;

const IngredientsForm: FC<IIngredientsForm> = ({
  setIngredients,
  ingredients,
}) => {
  const handleIngredientOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const ingredientKey = e.target.name as string;
    const value = e.target.value;
    const list = [...ingredients];
    list[index][ingredientKey as keyof iIngredient] = value;
    setIngredients(list);
  };

  const handleAddIngredient = (e: React.MouseEvent) => {
    e.preventDefault();
    setIngredients([...ingredients, { name: "", quantity: "" }]);
  };
  const handleRemoveIngredient = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    const ingredientList = [...ingredients];
    ingredientList.splice(index, 1);
    setIngredients(ingredientList);
  };

  return (
    <div>
      {ingredients.map((singleItem, index) => (
        <Container key={index}>
          <Input
            type="text"
            name="name"
            id="recipe_name"
            onChange={(e) => handleIngredientOnChange(e, index)}
            value={singleItem.name}
            labelText="Ingredient name"
            placeholder="Ingredient name..."
          />
          <Input
            type="text"
            name="quantity"
            id="quantity"
            onChange={(e) => handleIngredientOnChange(e, index)}
            value={singleItem.quantity}
            labelText="Quantity"
            placeholder="Quantity..."
          />
          {index > 0 && (
            <BtnRemove onClick={(e) => handleRemoveIngredient(e, index)}>
              -
            </BtnRemove>
          )}
        </Container>
      ))}
      <Btn onClick={handleAddIngredient}>Add</Btn>
    </div>
  );
};

export default IngredientsForm;
