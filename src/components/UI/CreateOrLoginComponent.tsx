import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  message: string;
  linkTo: string;
  linkName: string;
}

const CreateAccDiv = styled.div`
  border: 1px solid #d8dee2;
  border-radius: 5px;
  padding: 15px 20px;
  text-align: center;
  margin-bottom: 40px;
  & > .create_acc_link {
    text-decoration: none;
  }
  & > .create_acc_link:hover {
    text-decoration: underline;
  }
`;
const CreateOrLoginComponent: FC<Props> = ({ message, linkName, linkTo }) => {
  return (
    <CreateAccDiv>
      {message + " "}
      <Link to={linkTo} className="create_acc_link">
        {linkName}
      </Link>
    </CreateAccDiv>
  );
};

export default CreateOrLoginComponent;
