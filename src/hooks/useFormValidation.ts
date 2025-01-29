import { useState } from 'react';

interface UseFormValidationReturn {
  email: string;
  emailError: boolean;
  password: string;
  passwordError: boolean;
  repeatPassword: string;
  repeatPasswordError: boolean;
  credentialsError: boolean;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRepeatPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCredentialsError: (value: boolean) => void;
  cleanFields: () => void;
  setErrors: (email: boolean, password: boolean, repeatPassword: boolean) => void;
}


const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const validatePassword = (password: string): boolean => {
  const re = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return re.test(password);
};

const useFormValidation = (): UseFormValidationReturn => {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [repeatPasswordError, setRepeatPasswordError] = useState<boolean>(false);
  const [credentialsError, setCredentialsError] = useState<boolean>(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setEmail(value);
    setEmailError(!validateEmail(value));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(!validatePassword(value));
  };

  const handleRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRepeatPassword(e.target.value);
    setRepeatPasswordError(value !== password);
  };

  const handleCredentialsError = (value: boolean) => {
    setCredentialsError(value);
  };

  const cleanFields = () => {
    setEmail('');
    setEmailError(false);
    setPassword('');
    setPasswordError(false);
    setRepeatPassword('');
    setRepeatPasswordError(false);
    setCredentialsError(false)
  }

  const setErrors = (email: boolean, password: boolean, repeatPassword: boolean) => {
    setEmailError(email);
    setPasswordError(password);
    setRepeatPasswordError(repeatPassword);
  }

  return {
    email,
    emailError,
    password,
    passwordError,
    repeatPassword,
    repeatPasswordError,
    credentialsError,
    handleEmailChange,
    handlePasswordChange,
    handleRepeatPasswordChange,
    handleCredentialsError,
    cleanFields,
    setErrors
  };
};

export default useFormValidation;