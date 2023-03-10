import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  disabled?: boolean;
  onClick: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  type?: "submit" | "button" | "reset" | undefined;
  width?: string;
}
const Btn = styled.button`
  margin-top: 10px;
  background-color: #0d6efd;
  border: 1px solid rgba(27, 31, 35, 0.2);
  width: 100%;
  color: #fff;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 5px;
  &:hover {
    background-color: #0d65eb;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #717070;
  }
`;

const Button: FC<Props> = ({ disabled, onClick, children, ...props }) => {
  const onClickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick(e);
  };
  return (
    <Btn
      disabled={disabled}
      type={props.type ? props.type : "submit"}
      onClick={(e) => onClickHandler(e)}
    >
      {children}
    </Btn>
  );
};

export default Button;
