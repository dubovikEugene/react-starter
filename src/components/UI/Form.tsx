import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  titleText?: string;
  children?: React.ReactNode[] | React.ReactNode;
}

const StyledForm = styled.form`
  margin-bottom: 15px;
  background-color: #f9f9f9bd;
  border: 1px solid #d8dee2;
  border-radius: 5px;
  padding: 20px;
`;
const Title = styled.p`
  margin-bottom: 15px;
  font-size: 24px;
  text-align: center;
  color: #333;
`;

const Form: FC<Props> = ({ titleText, children }) => {
  return (
    <StyledForm>
      <Title>{titleText}</Title>
      {children}
    </StyledForm>
  );
};

export default Form;
