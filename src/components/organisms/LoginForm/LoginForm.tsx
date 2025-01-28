import React, { useState } from 'react';
import Input from '@/components/atoms/Input/Input';
import Button from '@/components/atoms/Button/Button';
import Info from '@/components/atoms/Info/Info';
import useFormValidation from '@/hooks/useFormValidation';

import './LoginForm.scss';

const LoginForm: React.FC = () => {
  const [mode, setMode] = useState<'login' | 'register' | ''>('');

  interface UseFormValidationReturn {
    email: string;
    emailError: boolean;
    password: string;
    passwordError: boolean;
    repeatPassword: string;
    repeatPasswordError: boolean;
    handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleRepeatPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    cleanFields: () => void;
  }

  const formValidation = useFormValidation() as UseFormValidationReturn;

  const toggleMode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    formValidation.cleanFields();
    setMode((prevMode) => (prevMode === 'register' ? 'login' : 'register'));
  };

  const showInRegister = () => {
    if (mode === 'register') return 'show';
    if (mode === 'login') return 'hide';
    return '';
  }

  const showInLogin = () => {
    if (mode === 'login') return 'show';
    if (mode === 'register') return 'hide';
    return '';
  }

  const showRegisterError = (error: boolean) => {
    if (error && mode === 'register') return 'show';
    return 'hide';
  }

  return (
    <form className='login-form'>
      <p className={`login-form__register-text ${showInRegister()}`}>
        Crea tu cuenta de manera gratuita
      </p>

      <div className='login-form__input_wrapper'>
        <Input
          type="email"
          variant="email"
          placeholder="Correo electrónico"
          value={formValidation.email}
          onChange={formValidation.handleEmailChange}
          error={mode === 'register' && formValidation.emailError}
        />

        <Input
          type="password"
          variant="password"
          placeholder="Contraseña"
          value={formValidation.password}
          onChange={formValidation.handlePasswordChange}
          error={mode === 'register' && formValidation.passwordError}
        />

        <Input
          id="repeat-password"
          type="password"
          variant="password"
          className={showInRegister()}
          placeholder="Repetir contraseña"
          value={formValidation.repeatPassword}
          onChange={formValidation.handleRepeatPasswordChange}
          error={mode === 'register' && formValidation.repeatPasswordError}
        />
      </div>

      <div className={`login-form__error_wrapper ${showInRegister()}`}>
        {/* {mode === 'login' && <Info variant="error" message="Usuario o contraseña incorrecta" className={`${mode == 'login' ? 'show' : 'hide'}`}/>} */}
      
        <Info 
          variant="error"
          className={showRegisterError(formValidation.emailError)}
          message="Formato de correo electrónico incorrecto"
        />
        
        <Info 
          variant="error"
          className={showRegisterError(formValidation.passwordError)}
          message="La contraseña debe tener al menos 8 caracteres e incluir: una letra mayúscula, un número y un símbolo especial (como @, #, $, %, etc.)."
        />

        <Info
          variant="error"
          className={showRegisterError(formValidation.repeatPasswordError)}
          message="La repetición de la contraseña no coincide"
        />
      </div>
      
      <Button variant="primary">
        <span className={showInLogin()}>Iniciar sesión</span>
        <span className={showInRegister()}>Crear una cuenta</span>
      </Button>

      <Button variant="tertiary" onClick={toggleMode}>
        <span className={showInLogin()}>Crear una cuenta</span>
        <span className={showInRegister()}>Iniciar sesión</span>
      </Button>
    </form>
  );
};

export default LoginForm;