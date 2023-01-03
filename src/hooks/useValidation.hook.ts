import { IValidation } from "./../models/IValidation";
import React, { useEffect, useState } from "react";

export const useValidation = (value: string, validations: IValidation) => {
  const [isEmpty, setIsEmpty] = useState<boolean>(validations?.isEmpty || true);
  const [minLengthError, setMinLengthError] = useState<string>("");
  const [maxLengthError, setMaxLengthError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "isEmpty":
          console.log(value);
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;
        case "isEmail":
          const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          re.test(String(value).toLocaleLowerCase())
            ? setEmailError("")
            : setEmailError("incorrect email");
          break;
        case "minLength":
          value.length < validations?.minLength!
            ? setMinLengthError(
                `can't be less than ${validations?.minLength} charackters`
              )
            : setMinLengthError("");
          break;
        case "maxLength":
          value.length > validations?.maxLength!
            ? setMaxLengthError(
                `can't be more than ${validations?.maxLength} charackters`
              )
            : setMaxLengthError("");
          break;
      }
    }
  }, [value]);

  return { isEmpty, minLengthError, emailError, maxLengthError };
};
