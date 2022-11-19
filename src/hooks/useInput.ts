import React, { useState } from 'react';

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  const onBlur = (
    e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>
  ) => {
    setIsDirty(true);
  };

  return { value, onChange, onBlur };
};
