import { useState, useEffect } from 'react';

export const useValidation = (value: string, validations: any[]) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isMinLengthError, setIsMinLengthError] = useState(false);
  const [isMaxLengthError, setIsMaxLengthError] = useState(false);
  const [isInputValid, setIsInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation]
            ? setIsMinLengthError(true)
            : setIsMinLengthError(false);
          break;
        case 'maxLength':
          value.length > validations[validation]
            ? setIsMaxLengthError(true)
            : setIsMaxLengthError(false);
          break;
        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;
        case 'isEmail':
          const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          re.test(String(value).toLocaleLowerCase())
            ? setIsEmailError(false)
            : setIsEmailError(true);
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || isMinLengthError || isMaxLengthError || isEmailError) {
      setIsInputValid(false);
    } else {
      setIsInputValid(true);
    }
  }, [isEmpty, isMinLengthError, isMaxLengthError, isEmailError]);

  return {
    isEmpty,
    isMinLengthError,
    isMaxLengthError,
    isEmailError,
    isInputValid,
  };
};
