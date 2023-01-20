import React, { FC } from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";

interface IAmountRecipesFilter {
  options: { value: number; name: number }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const StyledTitle = styled.div`
  margin-bottom: 0.4rem;
  padding-left: 0.2rem;
`;

const AmountRecipesFilter: FC<IAmountRecipesFilter> = ({
  options,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor="filter">
        <StyledTitle>Recipes per page</StyledTitle>
      </label>

      <Form.Select
        onChange={(e) => onChange(e)}
        id="filter"
        size="sm"
        style={{ width: "8rem" }}
      >
        {/* <option disabled defaultValue={defaultValue}>
          Choose one
        </option> */}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </Form.Select>
    </div>
  );
};

export default AmountRecipesFilter;
