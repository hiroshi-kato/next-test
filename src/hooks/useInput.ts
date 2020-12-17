import React, { useState } from 'react';

type UseInput = (
  initialValue?: string
) => {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const useInput: UseInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setValue(e.target.value),
  };
};

export default useInput;
