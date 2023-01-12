import { useValidation } from "./useValidation.hook";
import { IValidation } from "./../models/IValidation";
import React, { useState } from "react";

interface IInput {
  initialValue: string;
  validations: IValidation;
}

export const useInput = ({ initialValue, validations }: IInput) => {
  const [value, setValue] = useState<string>(initialValue);
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const valid = useValidation(value, validations);

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  const onBlur = (
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setIsDirty(true);
  };

  return { value, onChange, onBlur, valid, isDirty };
};
