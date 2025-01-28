import React, { useState } from 'react';
import Input from '@/components/atoms/Input/Input';
import Button from '@/components/atoms/Button/Button';
import Info from '@/components/atoms/Info/Info';
import useFormValidation from '@/hooks/useFormValidation';

import './LoginForm.scss';

const LoginForm: React.FC = () => {
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
  }

  const formValidation: UseFormValidationReturn = useFormValidation();

  return (
    <form className='login-form'>

      <p className='login-form__register-text'>Crea tu cuenta de manera gratuita</p>

      <Input
        type="email"
        variant="email"
        placeholder="Correo electrónico"
        value={formValidation.email}
        onChange={formValidation.handleEmailChange}
        error={!!formValidation.emailError}
      />

      <Input
        type="password"
        variant="password"
        placeholder="Contraseña"
        value={formValidation.password}
        onChange={formValidation.handlePasswordChange}
        error={!!formValidation.passwordError}
      />

      <Input
        type="password"
        variant="password"
        placeholder="Repetir contraseña"
        value={formValidation.repeatPassword}
        onChange={formValidation.handleRepeatPasswordChange}
        error={!!formValidation.repeatPasswordError}
      />

      <Info variant="error" message="Usuario o contraseña incorrecta" />
      {formValidation.emailError && <Info variant="error" message="Formato de correo electrónico incorrecto" />}
      {formValidation.passwordError && <Info variant="error" message="La contraseña debe tener al menos 8 caracteres e incluir: una letra mayúscula, un número y un símbolo especial (como @, #, $, %, etc.)." />}
      {formValidation.repeatPasswordError &&<Info variant="error" message="La repetición de la contraseña no coincide" />}

      <Button variant="primary">Iniciar sesión</Button>
      <Button variant="tertiary">Crear una cuenta</Button>
    </form>
  );
};

export default LoginForm;