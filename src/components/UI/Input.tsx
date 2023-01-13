import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  type: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  id?: string;
  labelText?: string;
}
const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 7px;
  margin-top: 7px;
  color: #24292e;
`;

const StyledInput = styled.input`
  width: 100%;
  background: #fff;
  border: 1px solid #d1d5da;
  box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);
  border-radius: 5px;
  color: #24292e;
  font-size: 16px;
  line-height: 20px;
  min-height: 34px;
  padding: 6px 8px;

  &:focus {
    border-color: #2188ff;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075),
      0 0 0 2.5px rgba(3, 102, 214, 0.3);
  }
`;

const Input: FC<Props> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  id,
  labelText,
}) => {
  return (
    <div style={{ padding: "0 5px" }}>
      <Label htmlFor={id}>{labelText}</Label>
      <StyledInput
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
        onBlur={(e) => onBlur && onBlur(e)}
        id={id}
      />
    </div>
  );
};

export default Input;
