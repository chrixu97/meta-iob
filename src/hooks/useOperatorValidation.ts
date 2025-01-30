import { useState } from 'react';

interface UseOperatorValidationReturn {
  number: string;
  numberError: boolean;
  handleNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const validateNumber = (number: string): boolean => {
  const re = /^\d+(\.\d{0,2})?$/;
  return re.test(number);
};

const useFormValidation = (): UseOperatorValidationReturn => {
  const [number, setNumber] = useState<string>('');
  const [numberError, setNumberError] = useState<boolean>(false);


  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
    setNumberError(!validateNumber(e.target.value));
  };

  return {
    number,
    numberError,
    handleNumberChange,
  };
};

export default useFormValidation;