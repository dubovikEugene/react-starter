import React from "react";
import styled from "@emotion/styled";

interface IIngredientProps {
  name: string;
  quantity: string;
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-bottom: 1px dashed teal;
  justify-content: space-between;
  margin-top: 8px;
  transition: all 0.4s easy-in-out;

  &:hover {
    color: teal;
  }
`;

const Name = styled.div`
  width: 75%;
`;

const Quantity = styled.div`
  font-style: italic;
`;

const IngredientComponent = ({ name, quantity }: IIngredientProps) => {
  return (
    <Container>
      <Name>{name}</Name>
      <Quantity>{quantity}</Quantity>
    </Container>
  );
};

export default IngredientComponent;
