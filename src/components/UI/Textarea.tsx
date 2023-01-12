import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  name?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
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

const StyledTextarea = styled.textarea`
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

const Textarea: FC<Props> = ({
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  id,
  labelText,
}) => {
  return (
    <>
      <Label htmlFor={id}>{labelText}</Label>
      <StyledTextarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
        onBlur={(e) => onBlur && onBlur(e)}
        id={id}
      />
    </>
  );
};

export default Textarea;
