import React, { useEffect, useState } from "react";

interface IInput {
  initialValue: string;
}

export const useInput = ({ initialValue }: IInput) => {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, onChange };
};
